import { Outlet } from "react-router-dom"
import Header from '../../widgets/header/header';

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  )
}

export default Layout;
