import { useState } from 'react';
import { FaCaretDown, FaUserFriends } from 'react-icons/fa';
import { GoTag } from 'react-icons/go';
import { IoMdMore, IoMdRefresh } from 'react-icons/io';
import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import { Messages } from './Messages';

const mailTypes = [
  {
    name: 'Primary',
    icon: <MdInbox size={'20px'} />,
  },
  {
    name: 'Social',
    icon: <GoTag size={'20px'} />,
  },
  {
    name: 'Promotions',
    icon: <FaUserFriends size={'20px'} />,
  },
];
export const Inbox = () => {
  const [mailTypeSelected, setMailTypeSelected] = useState(0);
  return (
    <>
      <div className="flex-1 bg-white rounded-xl mx-1 sm:mx-5">
        <div className="flex items-center justify-between px-2 sm:px-4">
          <div className="flex items-center gap-1 sm:gap-2 text-gray-700 py-1 sm:py-2">
            <div className="flex items-center gap-1">
              <MdCropSquare size={'16px'} className="sm:text-xl" />
              <FaCaretDown size={'16px'} className="sm:text-xl" />
            </div>
            <div className="p-1 sm:p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <IoMdRefresh size={'16px'} className="sm:text-xl" />
            </div>
            <div className="p-1 sm:p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <IoMdMore size={'16px'} className="sm:text-xl" />
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <p className="text-xs sm:text-sm text-gray-500">1-50 of 1000</p>
            <button className='hover:rounded-full hover:bg-gray-100 p-1'>
              <MdKeyboardArrowLeft size={'16px'} className="sm:text-xl" />
            </button>
            <button className='hover:rounded-full hover:bg-gray-100 p-1'>
              <MdKeyboardArrowRight size={'16px'} className="sm:text-xl" />
            </button>
          </div>
        </div>
        <div className="h-[80vh] sm:h-[90vh] overflow-y-auto">
          <div className="flex items-center gap-1 overflow-x-auto">
            {mailTypes.map((item, index) => (
              <button
                key={index}
                className={`flex items-center gap-2 sm:gap-5 p-2 sm:p-4 ${
                  mailTypeSelected === index
                    ? 'border-b-4 border-b-blue-600 text-blue-600'
                    : 'border-b-4 border-b-transparent'
                } min-w-[80px] sm:w-52 hover:bg-gray-100 text-xs sm:text-base`}
                onClick={() => {
                  setMailTypeSelected(index);
                }}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
          <Messages />
        </div>
      </div>
    </>
  );
};
