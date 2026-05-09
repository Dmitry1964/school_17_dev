import ScrollBottom from '../../shared/scroll-bottom/scroll-bottom';
import { FriendsList } from '../../widgets/friends-list/friends-list';
import './friends-page.css';

const FriendsPage = () => {
  return (
    <section className="friends">
      <FriendsList/>
      <ScrollBottom/>
    </section>
  )
}

export default FriendsPage;
