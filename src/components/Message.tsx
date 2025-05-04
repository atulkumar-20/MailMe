import { useNavigate } from 'react-router-dom';
import { MdCropSquare } from 'react-icons/md';
import { RiStarLine } from 'react-icons/ri';
import { setSelectedEmail } from './redux/AppSlice';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

export const Message = ({
  email,
}: {
  email: {
    id: string;
    message: string;
    subject?: string;
    to?: string;
    createdAt: number;
  };
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${email.id}`);
  };
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        onClick={openMail}
        className="flex flex-col sm:flex-row items-start justify-between border-b border-gray-200 px-2 sm:px-4 py-2 sm:py-3 text-sm hover:cursor-pointer hover:shadow-md"
      >
        <div className="flex items-center gap-1 sm:gap-3 w-full">
          <div className="flex-none text-gray-300">
            <MdCropSquare className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex-none text-gray-300">
            <RiStarLine className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="font-semibold">
            <h1>{email?.to}</h1>
          </div>
          <div className="flex-1 ml-2 sm:ml-4 truncate">
            <p className="text-gray-600 truncate inline-block max-w-full">
              {email?.message}
            </p>
          </div>
          <div className="flex-none text-gray-400 text-xs sm:text-sm mt-1 sm:mt-0">
            {email.createdAt ? new Date(email.createdAt).toUTCString() : ''}
          </div>
        </div>
      </motion.div>
    </>
  );
};
