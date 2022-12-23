import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendlist/FriendList';
import { TransactionHistory } from 'components/transactions/Transactions'
import user from 'components/datafiles/user.json';
import data from 'components/datafiles/data.json';
import friends from 'components/datafiles/friends.json';
import transactions from 'components/datafiles/transactions.json';

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
