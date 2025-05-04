import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from './redux/AppSlice';
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export const SendMail = () => {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    message: '',
  });
  const open = useSelector(
    (store: { appSlice: { open: boolean } }) => store.appSlice.open,
  );
  const dispatch = useDispatch();
  const { user } = useSelector(
    (store: { appSlice: { user: { email: string; displayName: string; photoURL: string } | null } }) => 
      store.appSlice
  );

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    //this function is used to update the state of the form
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!user?.email) {
        console.error("No user email found");
        return;
      }
      
      const emailData = {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp(),
        fromUser: user.email,
      };
      
      await addDoc(collection(db, 'emails'), emailData);
      
      dispatch(setOpen(false));
      setFormData({ to: '', subject: '', message: '' });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <div
        className={`${
          open ? 'block' : 'hidden'
        } bg-white max-w-full sm:max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
      >
        <div className="flex px-2 sm:px-3 py-1 sm:py-2 bg-[#F2F6Fc] justify-between rounded-t-md">
          <h1 className="text-sm sm:text-base">New Message</h1>
          <div
            onClick={() => dispatch(setOpen(false))}
            className="p-1 sm:p-2 rounded-full hover:bg-gray-200 cursor-pointer"
          >
            <RxCross2 size={'10px'} className="sm:text-base" />
          </div>
        </div>
        <form onSubmit={submitHandler} className="flex flex-col p-2 sm:p-3 gap-1 sm:gap-2">
          <input
            onChange={changeHandler}
            value={formData.to}
            name="to"
            type="text"
            placeholder="To"
            className="outline-none py-1 text-sm sm:text-base"
          />
          <input
            onChange={changeHandler}
            value={formData.subject}
            name="subject"
            type="text"
            placeholder="Subject"
            className="outline-none py-1 text-sm sm:text-base"
          />
          <textarea
            onChange={changeHandler}
            value={formData.message}
            name="message"
            cols={30}
            rows={6}
            className="outline-none py-1 text-sm sm:text-base"
          ></textarea>
          <button
            type="submit"
            className="bg-[#0B57D0] text-white w-fit px-3 sm:px-4 py-1 text-sm sm:text-base font-medium"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};
