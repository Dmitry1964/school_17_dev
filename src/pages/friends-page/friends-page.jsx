// import ScrollBottom from '../../shared/scroll-bottom/scroll-bottom';
import { FriendsList } from '../../widgets/friends-list/friends-list';
import './friends-page.css';
import ScrollToNavbarBottom  from '../../shared/scroll-to-navbar-bottom/scroll-to-navbar-bottom';

const FriendsPage = () => {
  return (
    <section className="friends">
      <FriendsList/>
      <ScrollToNavbarBottom />
    </section>
  )
}

export default FriendsPage;
