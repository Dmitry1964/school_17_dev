import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Layout from "../pages/layout/layout";
import MainPageLazy from "../pages/main-page/main-page-lazy";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Layout />
          {/* <ScrollTop /> */}
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainPageLazy/>,
        },
  ]
    },
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
