import styles from './Statistics.module.css'

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

export const Statistics = ({
    download }) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>
            <ul className={styles.statList}>
                {download.map(({ id, label, percentage }) => (
                    <li className={styles.item} key={id} style={{ background: getRandomHexColor() }}>
                        <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>))}
            </ul>
        </section>);
};