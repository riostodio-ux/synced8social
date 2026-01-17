import Link from 'next/link';
import CTA from '@/components/sections/CTA';
import { StarIcon } from '@/components/ui/StarSystem';
import { BrandPattern } from '@/components/ui/BrandPattern';
import MagneticButton from '@/components/ui/MagneticButton';
import { FloatingAccents } from '@/components/ui/FloatingAccents';

export default function SocialPage() {
    return (
        <main>
            {/* HERO - Social */}
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
                        Growth on <br />
                        <span className="text-orange">Autopilot.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-grey-text)', maxWidth: '600px', marginBottom: '3rem' }}>
                        We handle the noise so you can handle the business. From content growth to customer support chats, we manage your brand's digital voice 24/7.
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
                        Delegate Your Social
                    </Link>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem', alignItems: 'center' }}>

                        {/* Feature 1 */}
                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Inbound <span className="text-orange">Growth</span></h2>
                            <p style={{ color: 'var(--color-grey-text)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                                We don't just post; we grow. Our systems engage with your target audience,
                                nurture leads in the DMs, and drive traffic directly to your website funnel.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={listItemStyle}><StarIcon size={16} /> Strategy-First Content</li>
                                <li style={listItemStyle}><StarIcon size={16} /> Community Engagement</li>
                                <li style={listItemStyle}><StarIcon size={16} /> Lead Nurturing</li>
                            </ul>
                        </div>
                        <div style={visualBoxStyle}>
                            <StarIcon size={64} variant="glow" />
                            <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>+300% Engagement</p>
                        </div>

                        {/* Feature 2 */}
                        <div style={{ order: 1 }}> {/* Visual Left */}
                            <div style={visualBoxStyle}>
                                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--color-orange-primary)' }}>24/7</div>
                                <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Response Time</p>
                            </div>
                        </div>
                        <div style={{ order: 2 }}>
                            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Customer <span className="text-orange">Support</span></h2>
                            <p style={{ color: 'var(--color-grey-text)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                                Never miss a query. We manage your chats, emails, and support tickets.
                                Real humans, following your brand guidelines, ensuring every customer feels heard instantly.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={listItemStyle}><StarIcon size={16} /> Live Chat Management</li>
                                <li style={listItemStyle}><StarIcon size={16} /> Ticket Resolution</li>
                                <li style={listItemStyle}><StarIcon size={16} /> Brand Voice Alignment</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}

const listItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: 'white',
    marginBottom: '1rem',
    fontSize: '1.1rem'
};

const visualBoxStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
    borderRadius: '2rem',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255,255,255,0.05)'
};
