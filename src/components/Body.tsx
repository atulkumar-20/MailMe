import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export const Body = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <Sidebar />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};
