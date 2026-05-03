import { MenList } from "../../widgets/men-list/men-list";
import "./men-page.css";
import ScrollBottom from "../../shared/scroll=bottom/scroll-bottom";


const MenPage = () => {
  return (
    <section className="men-page">
        <MenList />
        <ScrollBottom/>
    </section>
  )
}

export default MenPage;
