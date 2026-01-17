import { StarIcon } from '../ui/StarSystem';
import styles from './SystemVisual.module.css';

export default function SystemVisual() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2> The <span className="text-orange">Synced</span> System</h2>
                    <p>Your website is the core. Everything else orbits it.</p>
                </div>

                <div className={styles.diagramContainer}>
                    {/* Center Node: The Website */}
                    <div className={styles.centerNode}>
                        <div className={styles.iconWrapper}>
                            <div className={styles.pulse} />
                            <StarIcon size={32} />
                        </div>
                        <span className={styles.nodeLabel}>Core Website</span>
                    </div>

                    {/* Orbit Nodes */}
                    <div className={`${styles.orbitNode} ${styles.orbitNode1}`}>
                        <div className={styles.nodeDot} />
                        <span className={styles.orbitLabel}>Social</span>
                    </div>

                    <div className={`${styles.orbitNode} ${styles.orbitNode2}`}>
                        <div className={styles.nodeDot} />
                        <span className={styles.orbitLabel}>Upwork</span>
                    </div>

                    <div className={`${styles.orbitNode} ${styles.orbitNode3}`}>
                        <div className={styles.nodeDot} />
                        <span className={styles.orbitLabel}>Email</span>
                    </div>

                    {/* Connecting Lines (SVG) */}
                    <svg className={styles.lines} viewBox="0 0 600 400">
                        {/* Lines from center to nodes */}
                        <line x1="300" y1="200" x2="150" y2="100" className={styles.connector} />
                        <line x1="300" y1="200" x2="450" y2="100" className={styles.connector} />
                        <line x1="300" y1="200" x2="300" y2="350" className={styles.connector} />

                        {/* Orbit Ring */}
                        <ellipse cx="300" cy="200" rx="200" ry="150" className={styles.orbitRing} />
                    </svg>
                </div>
            </div>
        </section>
    );
}
