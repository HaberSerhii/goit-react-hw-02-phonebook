import user from 'dates/user.json'
import downloads from 'dates/downloads.json'
import friends from 'dates/friends.json'
import transactions from 'dates/transactions.json'

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import styles from './App.module.css'


export const App = () => {
  return (
    <main className={styles.main}>
      <Profile user={user} />
      <Statistics download={downloads} />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </main>
  );
};
