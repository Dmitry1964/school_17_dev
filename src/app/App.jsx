import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from '../pages/layout/layout';
import MainPageLazy from '../pages/main-page/main-page-lazy';
import GirlsPageLazy from '../pages/girls-page/girls-page-lazy';
import MenPageLazy from '../pages/men-page/men-page-lazy';
import FriendsPageLazy from '../pages/friends-page/friends-page-lazy';
import AfterSchoolPageLazy from '../pages/after-scool-page/after-school-page-lazy';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Layout />
          {/* <ScrollTop /> */}
        </>
      ),
      children: [
        {
          path: '/',
          element: <MainPageLazy />,
        },
        {
          path: 'girls',
          element: <GirlsPageLazy />,
        },
        {
          path: 'men',
          element: <MenPageLazy />,
        },
        {
          path: 'friends',
          element: <FriendsPageLazy />,
        },
        {
          path: 'after-school',
          element: <AfterSchoolPageLazy />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
