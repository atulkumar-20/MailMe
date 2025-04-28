import { IoMdStar } from 'react-icons/io';
import { LuPencil } from 'react-icons/lu';
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from 'react-icons/md';
import { TbSend2 } from 'react-icons/tb';

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
  return (
    <>
      <div className="w-[15%">
        {/* Compose */}
        <div className="p-3">
          <button className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]">
            <LuPencil size={'24px'} />
            Compose
          </button>
        </div>
        {/* Folders */}
        <div className="text-gray-500">
          {sidebarItems.map((item, index) => (
            <div className="flex items-center gap-4 pl-6 py-1 rounded-r-full hver:cursor-pointer hover:bg-gray-200 my-y">
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
