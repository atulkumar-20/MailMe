import { IoMdStar } from 'react-icons/io';
import { LuPencil } from 'react-icons/lu';
import {
  MdOutlineDrafts,
  MdOutlineKeyboardArrowDown,
  MdOutlineWatchLater,
} from 'react-icons/md';
import { TbSend2 } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { setOpen } from './redux/AppSlice';

const sidebarItems = [
  {
    icon: <LuPencil size={'24px'} />,
    name: 'Inbox',
  },
  {
    icon: <IoMdStar size={'24px'} />,
    name: 'Starred',
  },
  {
    icon: <MdOutlineWatchLater size={'24px'} />,
    name: 'Snoozed',
  },
  {
    icon: <TbSend2 size={'24px'} />,
    name: 'Sent',
  },
  {
    icon: <MdOutlineDrafts size={'24px'} />,
    name: 'Drafts',
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={'24px'} />,
    name: 'More',
  },
];

export const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full sm:w-[20%] md:w-[15%] hidden sm:block">
        {/* Compose */}
        <div className="p-2 sm:p-3">
          <button
            onClick={() => dispatch(setOpen(true))}
            className="flex items-center gap-1 sm:gap-2 p-2 sm:p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF] w-full justify-center sm:justify-start"
          >
            <LuPencil size={'20px'} className="sm:text-2xl" />
            <span className="hidden sm:inline">Compose</span>
          </button>
        </div>
        {/* Folders */}
        <div className="text-gray-500">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 sm:gap-4 pl-2 sm:pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-1"
            >
              <span className="sm:text-2xl">{item.icon}</span>
              <span className="hidden sm:inline">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
