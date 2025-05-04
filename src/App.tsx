import { Navbar } from './components/shared/Navbar';
import { Body } from './components/Body';
import { Inbox } from './components/Inbox';
import { Mail } from './components/Mail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SendMail } from './components/SendMail';
import { Login } from './components/Login';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './components/redux/AppSlice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Inbox />,
      },
      {
        path: '/mail/:id',
        element: <Mail />,
      },
    ],
  },
]);
const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(
    (store: {
      appSlice: {
        user: { email: string; displayName: string; photoURL: string } | null;
      };
    }) => store.appSlice,
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in
        dispatch(
          setUser({
            email: authUser.email,
            displayName: authUser.displayName,
            photoURL: authUser.photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="max-w-screen overflow-x-hidden">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <RouterProvider router={router} />
          <div className="fixed w-full sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] bottom-0 right-0 sm:right-4 z-10">
            <SendMail />
          </div>
        </>
      )}
    </div>
  );
};
export default App;
