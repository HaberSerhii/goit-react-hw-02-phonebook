import styles from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
        <section className={styles.wrapper}>
            <ul className={styles.friendList}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                <li className={`${styles.item} ${isOnline ? styles.online : ''}`} key={id}>
                        <span className={`${styles.status} ${isOnline ? styles.online : ''}`}></span>
                        <img className={`${styles.avatar} ${isOnline ? styles.online : ''}`} src={avatar} alt={name} width="48" />
                        <p className={styles.name}>{name}</p>
                </li>))}
            </ul>
        </section>
    );
};
