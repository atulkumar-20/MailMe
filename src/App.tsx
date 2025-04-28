import { Navbar } from './components/shared/Navbar';
import { Body } from './components/Body';
import { Inbox } from './components/Inbox';
import { Mail } from './components/Mail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Inbox />,
      },
      {
        path: '/mail/:id',
        element: <Mail />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </>
  );
};
export default App;
