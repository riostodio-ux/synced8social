import styles from './Process.module.css';
import { FloatingAccents } from '../ui/FloatingAccents';

const steps = [
    {
        num: '01',
        title: 'Align',
        desc: 'We define the core outcome. No fluff. Just the strategy needed to win.'
    },
    {
        num: '02',
        title: 'Build',
        desc: 'Development of the core website engine using Next.js for speed and scale.'
    },
    {
        num: '03',
        title: 'Optimize',
        desc: 'Fine-tuning performance, SEO, and connecting your social channels.'
    },
    {
        num: '04',
        title: 'Scale',
        desc: 'Launch and growth. The system is live and ready to convert.'
    }
];

export default function Process() {
    return (
        <section className={styles.section} id="process">
            <div className="container">
                <h2 style={{ fontSize: '3rem', marginBottom: '4rem', color: 'var(--color-white)' }}>The <span className="text-orange">Protocol</span></h2>

                <div className={styles.protocolGrid}>
                    {steps.map((step, index) => (
                        <div key={step.num} className={styles.protocolStep}>
                            <div className={styles.numberContainer}>
                                <div className={styles.stepNumber}>{step.num}</div>
                                {/* Horizontal Line Connector (not for last item) */}
                                {index !== steps.length - 1 && (
                                    <div className={styles.connector} />
                                )}
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
