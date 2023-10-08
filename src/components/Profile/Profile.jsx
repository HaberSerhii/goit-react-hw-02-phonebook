import styles from "./Profile.module.css";

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
    return (
 <section className={styles.wrapper}>
    <div className={styles.userInfo}>
        <img className={styles.userAvatar}
            src={avatar}
            alt={username}
            
        />
        <h4 className={styles.userName}>{username}</h4>
        <p className={styles.userTag}>@{tag}</p>
        <p className={styles.userLocation}>{location}</p>
    </div>

    <ul className={styles.listStats}>
        <li className={styles.itemStats}>
            <span className={styles.itemName}>Followers</span><h4 className={styles.itemCounter}>{ followers}</h4>
        </li>
        <li className={styles.itemStats}>
            <span className={styles.itemName}>Views</span>
            <h4 className={styles.itemCounter}>{ views}</h4>
        </li>
        <li className={styles.itemStats}>
                    <span className={styles.itemName}>Likes</span>
                    <h4 className={styles.itemCounter}>{likes}</h4>
        </li>
    </ul>
</section>  
    )
}