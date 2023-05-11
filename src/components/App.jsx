import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendListItem } from './friend- list-Item/FriendListItem';
import { TransactionHistory } from './transaction-history/TransactionHistory';
import User from 'path/to/user.json';
import Data from 'path/to/data.json';
import Friends from 'path/to/friends.json';
import Transactions from 'path/to/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        urlAvatar={User.avatar}
        userName={User.username}
        tag={User.tag}
        location={User.location}
        followers={User.stats.followers}
        views={User.stats.views}
        likes={User.stats.likes}
      />
      <Statistics title="Upload stats" stats={Data} />
      <Statistics stats={Data} />
      <FriendListItem friends={Friends} />
      <TransactionHistory items={Transactions} />
    </>
  );
};
