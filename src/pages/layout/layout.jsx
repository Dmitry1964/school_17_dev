import { Outlet } from "react-router-dom"
import {Header} from '../../widgets/header/header';
import { Navbar } from "../../widgets/navbar/navbar";
import ScrollBottom from "../../shared/scroll=bottom/scroll-bottom";
import {Footer} from '../footer/footer';

const Layout = () => {
  return (
    <>
      <Header/>
      <Navbar />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout;
