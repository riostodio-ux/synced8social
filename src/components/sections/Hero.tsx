import Link from 'next/link';
import { StarIcon } from '../ui/StarSystem';
import { BrandPattern } from '../ui/BrandPattern';
import MagneticButton from '../ui/MagneticButton';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <BrandPattern />

            {/* Abstract System Visual (Orbital/Shape) */}
            <div className={styles.systemShape}>
                <div className={styles.shapeCore} />
                <div className={styles.shapeOrbit} />
            </div>

            {/* Decorative Premium Stars - Max 2-3 per strict rules */}
            <div style={{ position: 'absolute', right: '15%', top: '25%', zIndex: 1 }}>
                <StarIcon size={64} variant="glow" />
            </div>
            <div style={{ position: 'absolute', left: '10%', bottom: '20%', zIndex: 1, opacity: 0.6 }}>
                <StarIcon size={32} variant="glass" />
            </div>

            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        Websites that <br />
                        <span className="text-orange">Sync</span> Experience <br />
                        with Growth.
                    </h1>

                    <p className={styles.subline}>
                        Synced builds fast, scalable websites and aligns platforms so everything works together to grow a business.
                    </p>

                    <div className={styles.ctaGroup}>
                        <MagneticButton href="/contact">
                            Start Project
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
