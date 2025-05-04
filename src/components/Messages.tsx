import { useEffect, useState } from 'react';
import { Message } from './Message';
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from './redux/AppSlice';

interface Email {
  id: string;
  message: string;
  subject?: string;
  to?: string;
  fromUser?: string;
  createdAt: number;
}

export const Messages = () => {
  const dispatch = useDispatch();

  const { searchText, emails, user } = useSelector(
    (store: { 
      appSlice: { 
        emails: Email[]; 
        searchText: string;
        user: { email: string; displayName: string; photoURL: string } | null;
      } 
    }) => store.appSlice,
  );
  const [tempEmails, setTempEmails] = useState<Email[]>(emails);

  useEffect(() => {
    if (!user?.email) return;
    
    try {
      // Try a simpler query first without orderBy
      const q = query(
        collection(db, 'emails'),
        where('fromUser', '==', user.email)
      );
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const allEmails = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
            id: doc.id,
            createdAt: data.createdAt ? data.createdAt.toMillis() : Date.now(),
          };
        });
        
        dispatch(setEmails(allEmails));
      }, (error) => {
        console.error("Error in onSnapshot:", error);
      });
      
      return () => unsubscribe();
    } catch (error) {
      console.error("Error setting up query:", error);
    }
  }, [dispatch, user?.email]);

  useEffect(() => {
    const filteredEmail = emails?.filter((email) => {
      return (
        email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.to?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.message?.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setTempEmails(filteredEmail);
  }, [emails, searchText]);

  return (
    <>
      <div className="Messages w-full overflow-x-hidden">
        {tempEmails &&
          tempEmails.map((email) => <Message key={email.id} email={email} />)}
      </div>
    </>
  );
};
