import { lazy } from 'react';

const FriendsPageLazy = lazy(()=> import('./friends-page'));

export default FriendsPageLazy;
