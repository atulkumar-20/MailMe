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
      <div className="flex-1 bg-white rounded-xl mx-5">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2 text-gray-700 py-2">
            <div className="flex items-center gap-1">
              <MdCropSquare size={'20px'} />
              <FaCaretDown size={'20px'} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <IoMdRefresh size={'20px'} />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <IoMdMore size={'20px'} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500">1-50 of 1000</p>
            <button className='hover:rounded-full hover-bg-gray-100'>
              <MdKeyboardArrowLeft size={'20px'} />
            </button>
            <button className='hover:rounded-full hover-bg-gray-100'>
              <MdKeyboardArrowRight size={'20px'} />
            </button>
          </div>
        </div>
        <div className="h-[90vh] overflow-y-auto">
          <div className="flex items-center gap-1">
            {mailTypes.map((item, index) => (
              <button
                key={index}
                className={`flex items-center gap-5 p-4 ${
                  mailTypeSelected === index
                    ? 'border-b-4 border-b-blue-600 text-blue-600'
                    : 'border-b-4 border-b-transparent'
                } w-52 hover:bg-gray-100`}
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
