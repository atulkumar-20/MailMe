import { useState, useEffect } from 'react';
import { signInWithPopup } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/AppSlice';

export const Login = () => {
  const dispatch = useDispatch();
  const [showVideo, setShowVideo] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  // const videoRef = useRef<HTMLVideoElement>(null);

  // Check if video file exists when component mounts
  useEffect(() => {
    const checkVideoExists = async () => {
      try {
        const response = await fetch('/MailMe-4 May 2025.webm');
        if (!response.ok) {
          console.error('Video file not found:', response.status);
          setVideoError(`Video file not found (${response.status})`);
        } else {
          console.log('Video file exists!');
        }
      } catch (error) {
        console.error('Error checking video:', error);
        setVideoError('Error loading video');
      }
    };

    if (showVideo) {
      checkVideoExists();
    }
  }, [showVideo]);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(
        setUser({
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        }),
      );
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:shadow-xl">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Welcome to MailMe
          </h1>

          {!showVideo ? (
            <div className="space-y-6">
              <p className="text-center text-gray-600">
                Sign in to access your emails or watch a demo video
              </p>

              <div className="flex justify-center">
                <GoogleButton
                  onClick={signInWithGoogle}
                  className="transition-transform duration-200 hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-center">
                <div className="border-t border-gray-200 flex-grow"></div>
                <span className="px-4 text-sm text-gray-500">or</span>
                <div className="border-t border-gray-200 flex-grow"></div>
              </div>

              <button
                onClick={() => setShowVideo(true)}
                className="w-full py-3 px-4 bg-blue-50 text-blue-600 rounded-lg font-medium transition-colors duration-200 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Watch demo video
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative pt-[56.25%] w-full overflow-hidden rounded-lg shadow-md">
                {videoError ? (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 text-gray-600 p-4 text-center">
                    <p>{videoError}</p>
                    <p className="mt-2 text-sm">
                      Using a placeholder video instead
                    </p>
                  </div>
                ) : (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="/public/MailMe - 4 May 2025.webm"
                    title="MailMe Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              <button
                onClick={() => setShowVideo(false)}
                className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Back to login
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} MailMe. All rights reserved.
        </p>
      </div>
    </div>
  );
};
