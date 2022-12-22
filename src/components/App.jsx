import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/Transactions'
import user from './datafiles/user.json';
import data from './datafiles/data.json';
import friends from './datafiles/friends.json';
import transactions from './datafiles/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: 60
      }}
    >
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
