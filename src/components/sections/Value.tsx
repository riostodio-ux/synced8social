import { StarIcon } from '../ui/StarSystem';
import styles from './Value.module.css';

export default function Value() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.textColumn}>
                        <h2>Why <span className="text-orange">Sync?</span></h2>

                        <ul className={styles.valueList}>
                            <li className={styles.valueItem}>
                                <div className={styles.iconBox}>
                                    <StarIcon size={20} />
                                </div>
                                <div className={styles.itemContent}>
                                    <h3>Viciously Fast</h3>
                                    <p>Load times under 100ms. Google loves it. Users love it. Conversion rates demand it.</p>
                                </div>
                            </li>

                            <li className={styles.valueItem}>
                                <div className={styles.iconBox}>
                                    <div style={{ fontWeight: 'bold' }}>S</div>
                                </div>
                                <div className={styles.itemContent}>
                                    <h3>Systems Thinking</h3>
                                    <p>We don't just design pages. We design growth loops where your website, social, and platforms feed each other.</p>
                                </div>
                            </li>

                            <li className={styles.valueItem}>
                                <div className={styles.iconBox}>
                                    <div style={{ fontWeight: 'bold' }}>∞</div>
                                </div>
                                <div className={styles.itemContent}>
                                    <h3>Scalable Architecture</h3>
                                    <p>Built to handle 10 visitors or 10 million. No rebuilding required when you blow up.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.visualColumn}>
                        <div className="star-pattern" style={{ opacity: 0.5, borderRadius: 'inherit' }} />

                        {/* Abstract representation of success/speed */}
                        <div className={styles.statCard} style={{ top: '20%', left: '10%' }}>
                            <div className={styles.statNumber}>99</div>
                            <div className={styles.statLabel}>Performance Score</div>
                        </div>

                        <div className={styles.statCard} style={{ bottom: '20%', right: '10%' }}>
                            <div className={styles.statNumber}>3x</div>
                            <div className={styles.statLabel}>Conversion Uplift</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
