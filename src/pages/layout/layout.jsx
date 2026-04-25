import { Outlet } from "react-router-dom"
import {Header} from '../../widgets/header/header';
import { Navbar } from "../../widgets/navbar/navbar";

const Layout = () => {
  return (
    <>
      <Header/>
      <Navbar />
      <Outlet/>
      {/* <Footer/> */}
    </>
  )
}

export default Layout;
