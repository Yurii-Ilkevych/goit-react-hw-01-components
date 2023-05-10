import User from "path/to/user.json"
import { Profile } from "./profile/Profile";
import { Stats } from "./profile/Stats";
import { Statistics } from "./statistics/Statistics";
import Data from "path/to/data.json"
import { FriendListItem } from "./friend- list-Item/FriendListItem";
import Friends from "path/to/friends.json"
import { TransactionHistory } from "./transaction-history/TransactionHistory";
import Transactions from "path/to/transactions.json"
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <div 
     style={{
      marginTop: "100px",
      marginBottom: "50px" }}
     >
  <Profile urlAvatar={User.avatar}
  userName={User.username}
  tag={User.tag}
  location={User.location}
  />
   <Stats
followers={User.stats.followers}
views={User.stats.views}
likes={User.stats.likes}
   />
  </div>
  <Statistics title="Upload stats" stats={Data} />
<FriendListItem
friends={Friends}
/>
<TransactionHistory items={Transactions}/>
    </div>
    
  );
};
