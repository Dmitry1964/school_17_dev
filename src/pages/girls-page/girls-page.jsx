import ScrollToNavbarBottom from "../../shared/scroll-to-navbar-bottom/scroll-to-navbar-bottom";
import { GirlsList } from "../../widgets/girls-list/girls-list";

const GirlsPage = () => {
  return (
    <main>
      <GirlsList/>
      <ScrollToNavbarBottom/>
    </main>
  );
};

export default GirlsPage;
