import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export const Body = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        {/* Things inside the children will render with the help of Outlet */}
        <Outlet /> 
      </div>
    </>
  );
};
