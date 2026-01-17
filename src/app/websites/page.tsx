import Link from 'next/link';
import CTA from '@/components/sections/CTA';
import { StarIcon } from '@/components/ui/StarSystem';
import { BrandPattern } from '@/components/ui/BrandPattern';
import ResultsGrid from '@/components/sections/ResultsGrid';
import MagneticButton from '@/components/ui/MagneticButton';
import { FloatingAccents } from '@/components/ui/FloatingAccents';

export default function WebsitesPage() {
    return (
        <main>
            {/* HER - Websites */}
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
                        Websites that <br />
                        <span className="text-orange">Mean Business.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-grey-text)', maxWidth: '600px', marginBottom: '3rem' }}>
                        We don't build brochures. We build high-performance growth engines tailored to your industry's specific revenue drivers.
                    </p>
                    <MagneticButton href="/contact">
                        Start Your Build
                    </MagneticButton>
                </div>
            </section>

            {/* SECTORS GRID */}
            <section style={{ padding: '80px 0', background: 'transaprent', position: 'relative' }}>
                <FloatingAccents />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }}>

                        {/* Card 1: Business / SaaS */}
                        <div style={cardStyle}>
                            <div style={{ marginBottom: '1.5rem', color: 'var(--color-orange-primary)' }}>
                                <StarIcon size={32} />
                            </div>
                            <h3 style={titleStyle}>Business & SaaS</h3>
                            <p style={descStyle}>
                                Built for trust and conversion. We implement clear value propositions,
                                automated demo flows, and CRM integrations to turn visitors into qualified leads.
                            </p>
                            <ul style={listStyle}>
                                <li>• High-Converting Landing Pages</li>
                                <li>• Hubspot / Salesforce Integration</li>
                                <li>• Instant Load Times (Core Web Vitals)</li>
                            </ul>
                        </div>

                        {/* Card 2: E-commerce */}
                        <div style={cardStyle}>
                            <div style={{ marginBottom: '1.5rem', color: 'var(--color-orange-primary)' }}>
                                <StarIcon size={32} />
                            </div>
                            <h3 style={titleStyle}>E-commerce</h3>
                            <p style={descStyle}>
                                Frictionless shopping experiences. We focus on speed, mobile optimization,
                                and one-click checkout flows to maximize Average Order Value.
                            </p>
                            <ul style={listStyle}>
                                <li>• Shopify / WooCommerce Custom builds</li>
                                <li>• Cart Abandonment Recovery Systems</li>
                                <li>• Mobile-First UX Design</li>
                            </ul>
                        </div>

                        {/* Card 3: Real Estate */}
                        <div style={cardStyle}>
                            <div style={{ marginBottom: '1.5rem', color: 'var(--color-orange-primary)' }}>
                                <StarIcon size={32} />
                            </div>
                            <h3 style={titleStyle}>Real Estate</h3>
                            <p style={descStyle}>
                                Capture leads before they leave. We build property showcases that load instantly
                                and capture buyer intent through strategic forms.
                            </p>
                            <ul style={listStyle}>
                                <li>• IDX Integration Capability</li>
                                <li>• Virtual Tour Optimization</li>
                                <li>• Lead Capture Magnets</li>
                            </ul>
                        </div>

                        {/* Card 4: Personal Brand */}
                        <div style={cardStyle}>
                            <div style={{ marginBottom: '1.5rem', color: 'var(--color-orange-primary)' }}>
                                <StarIcon size={32} />
                            </div>
                            <h3 style={titleStyle}>Personal Brand</h3>
                            <p style={descStyle}>
                                Authority at scale. We build platforms that position you as the expert,
                                grow your newsletter, and sell your courses or services.
                            </p>
                            <ul style={listStyle}>
                                <li>• Newsletter Growth Integration</li>
                                <li>• Digital Product Sales Funnels</li>
                                <li>• Media Kits & Press Pages</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <ResultsGrid />

            <CTA />
        </main>
    );
}

// Inline Styles for Quick Iteration (System-Aligned)
const cardStyle: React.CSSProperties = {
    background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '3rem',
    borderRadius: '1.5rem',
    position: 'relative'
};

const titleStyle: React.CSSProperties = {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: 'var(--color-white)',
    fontFamily: 'var(--font-primary)'
};

const descStyle: React.CSSProperties = {
    color: 'var(--color-grey-text)',
    lineHeight: 1.6,
    marginBottom: '2rem',
    fontSize: '1.1rem'
};

const listStyle: React.CSSProperties = {
    listStyle: 'none',
    color: 'var(--color-white)',
    opacity: 0.8,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
};
