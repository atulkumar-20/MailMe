import { signInWithPopup } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/AppSlice';

export const Login = () => {
  const dispatch = useDispatch();
  
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Login successful:", result.user);
      dispatch(
        setUser({
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        }),
      );
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="p-8 bg-white flex flex-col gap-3 rounded-md shadow-md">
          <h1 className="text-center text-xl font-medium mb-0">Login</h1>
          <GoogleButton
            label="Sign in with Google"
            onClick={signInWithGoogle}
          />
        </div>
      </div>
    </>
  );
};
