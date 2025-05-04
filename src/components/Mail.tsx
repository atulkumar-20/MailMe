import { deleteDoc, doc } from 'firebase/firestore';
import { BiArchiveIn } from 'react-icons/bi';
import { IoMdArrowBack, IoMdMore } from 'react-icons/io';
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
} from 'react-icons/md';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase';

interface Email {
  id: string;
  message: string;
  subject?: string;
  to?: string;
  createdAt: number; // Changed from Timestamp to number
}

export const Mail = () => {
  const navigate = useNavigate();
  const { selectedEmail } = useSelector(
    (store: { appSlice: { selectedEmail: Email } }) => store.appSlice,
  );
  const params = useParams();
  const deleteEmailById = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'emails', id));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl mx-1 sm:mx-5 p-2 sm:p-5"
      >
        <div className="flex items-center gap-1 sm:gap-2 text-gray-700 py-1 sm:py-2">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
            <div
              onClick={() => navigate('/')}
              className="p-1 sm:p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <IoMdArrowBack size={'16px'} className="sm:text-xl" />
            </div>
            <div className="p-1 sm:p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <BiArchiveIn size={'16px'} className="sm:text-xl" />
            </div>
            <div
              onClick={() => params.id && deleteEmailById(params.id)}
              className="p-1 sm:p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <MdDeleteOutline size={'16px'} className="sm:text-xl" />
            </div>
            <div className="p-1 sm:p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineMarkEmailUnread size={'16px'} className="sm:text-xl" />
            </div>
            <div className="p-1 sm:p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineWatchLater size={'16px'} className="sm:text-xl" />
            </div>
            <div className="p-1 sm:p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineAddTask size={'16px'} className="sm:text-xl" />
            </div>
            <div className="p-1 sm:p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <MdOutlineDriveFileMove size={'16px'} className="sm:text-xl" />
            </div>
            <div className="p-1 sm:p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <IoMdMore size={'16px'} className="sm:text-xl" />
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <button className="hover:rounded-full hover-bg-gray-100">
              <MdKeyboardArrowLeft size={'16px'} className="sm:text-xl" />
            </button>
            <button className="hover:rounded-full hover-bg-gray-100">
              <MdKeyboardArrowRight size={'16px'} className="sm:text-xl" />
            </button>
          </div>
        </div>
        <div className="p-2 sm:p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white gap-1">
            <div className="flex items-center gap-1 sm:gap-2">
              <h1 className="text-base sm:text-xl font-medium">{selectedEmail?.subject}</h1>
              <span className="text-xs sm:text-sm bg-gray-200 rounded-md px-1 sm:px-2">Inbox</span>
            </div>
            <div className="flex-none text-gray-400 my-1 sm:my-5 text-xs sm:text-sm">
              <p>
                {selectedEmail?.createdAt
                  ? new Date(selectedEmail.createdAt).toUTCString()
                  : ''}
              </p>
            </div>
          </div>
          <div className="text-gray-500 text-xs sm:text-sm">
            <h1>{selectedEmail?.to}</h1>
            <span>to me</span>
          </div>
          <div className="my-4 sm:my-10 text-sm sm:text-base">
            <p>{selectedEmail?.message}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};
