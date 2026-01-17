import Link from 'next/link';
import CTA from '@/components/sections/CTA';
import { StarIcon } from '@/components/ui/StarSystem';
import { BrandPattern } from '@/components/ui/BrandPattern';
import MagneticButton from '@/components/ui/MagneticButton';
import { FloatingAccents } from '@/components/ui/FloatingAccents';

export default function UpworkPage() {
    return (
        <main>
            {/* HERO - Upwork */}
            <section style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '100px'
            }}>
                <BrandPattern />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ fontSize: '5rem', marginBottom: '2rem', lineHeight: 1.1 }}>
                        Stop Chasing. <br />
                        Start <span className="text-orange">Attracting.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-grey-text)', maxWidth: '600px', marginBottom: '3rem' }}>
                        We optimize your Upwork profile into a high-ticket sales funnel. Rank higher, look premium, and convert viewers into clients automatically.
                    </p>
                    <Link href="/contact" style={{
                        background: 'linear-gradient(135deg, var(--color-orange-primary), var(--color-orange-secondary))',
                        color: 'white',
                        padding: '1rem 2.5rem',
                        borderRadius: '100px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}>
                        Optimize My Profile
                    </Link>
                </div>
            </section>

            {/* THE SYSTEM */}
            <section style={{ padding: '80px 0', background: 'var(--color-charcoal-light)', position: 'relative' }}>
                <FloatingAccents />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '4rem' }}>The Profile <span className="text-orange">System</span></h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>

                        {/* Step 1 */}
                        <div style={cardStyle}>
                            <h3 style={numberStyle}>01</h3>
                            <h4 style={titleStyle}>Search Authority</h4>
                            <p style={descStyle}>
                                You can't get hired if they can't find you. We optimize your keywords, tags,
                                and structure to rank you at the top of client searches.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div style={cardStyle}>
                            <h3 style={numberStyle}>02</h3>
                            <h4 style={titleStyle}>Trust Signals</h4>
                            <p style={descStyle}>
                                High-ticket clients look for reasons to say no. We remove them.
                                Portfolio presentation, specialized copy, and case studies that prove expertise instantly.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div style={cardStyle}>
                            <h3 style={numberStyle}>03</h3>
                            <h4 style={titleStyle}>Conversion & Close</h4>
                            <p style={descStyle}>
                                A view is useless without an invite. We write compelling profile copy
                                and proposal templates that get you the interview.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* STATS */}
            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(232, 69, 5, 0.1), rgba(0,0,0,0))',
                        border: '1px solid rgba(232, 69, 5, 0.2)',
                        borderRadius: '2rem',
                        padding: '4rem',
                        textAlign: 'center'
                    }}>
                        <StarIcon size={48} variant="glow" style={{ margin: '0 auto 2rem auto' }} />
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>"From $20/hr to <span className="text-orange">$150/hr</span>"</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-grey-text)', fontSize: '1.2rem' }}>
                            Our system doesn't just get you more jobs. It gets you the <strong>right</strong> jobs.
                            By positioning you as a premium authority, you stop competing on price and start winning on value.
                        </p>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}

const cardStyle: React.CSSProperties = {
    background: 'var(--color-charcoal)',
    padding: '2.5rem',
    borderRadius: '1.5rem',
    border: '1px solid rgba(255,255,255,0.05)'
};

const numberStyle: React.CSSProperties = {
    fontSize: '4rem',
    color: 'var(--color-orange-primary)',
    fontWeight: 900,
    opacity: 0.2,
    lineHeight: 1,
    marginBottom: '1rem'
};

const titleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    color: 'white',
    marginBottom: '1rem'
};

const descStyle: React.CSSProperties = {
    color: 'var(--color-grey-text)',
    lineHeight: 1.6
};
