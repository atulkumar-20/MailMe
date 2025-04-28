import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosSearch } from 'react-icons/io';
import icon from '../../assets/icon.svg';
import { CiCircleQuestion, CiSettings } from 'react-icons/ci';
import { PiDotsNineBold } from 'react-icons/pi';

export const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-2 sm:px-3 h-14 sm:h-16">
        {/* Menu + logo + text */}
        <div className="flex items-center">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="p-2 sm:p-3 rounded-full hover:bg-gray-100 cursor-pointer">
              <RxHamburgerMenu size={'20px'} />
            </div>
            <img
              className="w-16 sm:w-20 h-12 sm:h-15"
              src={icon}
              alt="Mail Me"
            />
            <h1 className="text-lg sm:text-2xl text-gray-500 font-medium block">
              Mail Me
            </h1>
          </div>
        </div>
        {/* Search bar */}
        <div className="hidden md:block w-[40%] lg:w-[50%] xl:w-[45%] 2xl:w-[50%] mr-0 lg:mr-40 xl:mr-60">
          <div className="flex items-center bg-[#EAF1FB] px-2 py-2 sm:py-3 rounded-full">
            <IoIosSearch size={'20px'} className="text-gray-700 min-w-[20px]" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-2 w-full"
            />
          </div>
        </div>
        {/* Mobile Search Icon */}
        <div className="md:hidden p-2 sm:p-3 rounded-full hover:bg-gray-100 cursor-pointer">
          <IoIosSearch size={'20px'} className="text-gray-700" />
        </div>
        {/* Right Icons */}
        <div className="hidden md:block">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="p-2 sm:p-3 rounded-full hover:bg-gray-100 cursor-pointer">
              <CiCircleQuestion size={'20px'} />
            </div>
            <div className="p-2 sm:p-3 rounded-full hover:bg-gray-100 cursor-pointer">
              <CiSettings size={'20px'} />
            </div>
            <div className="p-2 sm:p-3 rounded-full hover:bg-gray-100 cursor-pointer">
              <PiDotsNineBold size={'20px'} />
            </div>
            <div className="cursor-pointer">
              <svg width="32" height="32" viewBox="0 0 32 32">
                {/* Background circle */}
                <circle cx="16" cy="16" r="16" fill="#FDF2F8" />
                {/* Face */}
                <circle cx="16" cy="16" r="12" fill="#FCE7F3" />
                {/* Eyes */}
                <circle cx="13" cy="14" r="1.5" fill="#1F2937" />
                <circle cx="19" cy="14" r="1.5" fill="#1F2937" />
                {/* Rosy cheeks */}
                <circle cx="11" cy="17" r="1.5" fill="#FDA4AF" opacity="0.6" />
                <circle cx="21" cy="17" r="1.5" fill="#FDA4AF" opacity="0.6" />
                {/* Kawaii smile */}
                <path
                  d="M13 19.5C14.5 21 17.5 21 19 19.5"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
