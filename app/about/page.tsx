'use client';
import Link from 'next/link';
import { ContactForm } from '../components/ContactForm';

export default function AboutBarrettHenry() {
  /**
   * Full @graph JSON-LD: Organization + Person + AboutPage
   * This is the entity schema for AEO, tells AI engines exactly who Barrett is.
   */
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://valricoagent.com/#organization",
        "name": "The NOW Team at REMAX Collective",
        "url": "https://nowtb.com",
        "logo": "https://valricoagent.com/barrett-henry.png",
        "telephone": "(813) 733-7907",
        "email": "barrett@nowtb.com",
        "foundingDate": "2015",
        "founder": { "@id": "https://valricoagent.com/#person" },
        "parentOrganization": {
          "@type": "Organization",
          "name": "REMAX Collective",
          "url": "https://www.remax.com"
        },
        "location": [
          {
            "@type": "Place",
            "name": "REMAX Collective - Tampa Office",
            "address": { "@type": "PostalAddress", "streetAddress": "14310 N Dale Mabry Hwy Ste 100", "addressLocality": "Tampa", "addressRegion": "FL", "postalCode": "33618", "addressCountry": "US" }
          },
          {
            "@type": "Place",
            "name": "REMAX Collective - Largo Office",
            "address": { "@type": "PostalAddress", "streetAddress": "11200 Seminole Blvd Ste 202", "addressLocality": "Largo", "addressRegion": "FL", "postalCode": "33778", "addressCountry": "US" }
          },
          {
            "@type": "Place",
            "name": "REMAX Collective - Brandon Office",
            "address": { "@type": "PostalAddress", "streetAddress": "417 Lithia Pinecrest Rd", "addressLocality": "Brandon", "addressRegion": "FL", "postalCode": "33511", "addressCountry": "US" }
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://valricoagent.com/#person",
        "name": "Barrett Henry",
        "jobTitle": "Broker Associate",
        "url": "https://valricoagent.com/about/",
        "image": "https://valricoagent.com/barrett-henry.png",
        "telephone": "+1-813-733-7907",
        "email": "barrett@nowtb.com",
        "worksFor": { "@id": "https://valricoagent.com/#organization" },
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "Florida Real Estate Broker License", "identifier": { "@type": "PropertyValue", "propertyID": "DBPR License Number", "value": "3313308" } },
          { "@type": "EducationalOccupationalCredential", "name": "e-PRO", "description": "Digital Marketing Certification" },
          { "@type": "EducationalOccupationalCredential", "name": "MRP", "description": "Military Relocation Professional" },
          { "@type": "EducationalOccupationalCredential", "name": "SRS", "description": "Seller Representative Specialist" }
        ],
        "knowsAbout": ["Valrico FL real estate", "Residential real estate", "Home buying", "Home selling", "Property management", "Military relocation", "Investment properties"],
        "areaServed": ["Valrico", "Brandon", "Riverview", "Lithia"],
        "sameAs": [
          "https://www.facebook.com/BarrettHenryREALTOR",
          "https://www.instagram.com/thenowteam",
          "https://www.linkedin.com/in/barretthenry",
          "https://x.com/BHrealestatetb",
          "https://www.youtube.com/@nowtampa",
          "https://www.zillow.com/profile/barretthenry",
          "https://www.realtor.com/realestateagents/56d5364fde071e01006256cd"
        ]
      },
      {
        "@type": "AboutPage",
        "@id": "https://valricoagent.com/about/",
        "name": "About Barrett Henry - Valrico REALTOR",
        "url": "https://valricoagent.com/about/",
        "mainEntity": { "@id": "https://valricoagent.com/#person" },
        "isPartOf": { "@type": "WebSite", "url": "https://valricoagent.com/" }
      }
    ]
  };

  return (
    <>
      {/* Hero section */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">About Barrett Henry, REALTOR®</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>
            Broker Associate with REMAX Collective. 24+ years of real estate experience. e-PRO, MRP, and SRS designated. Serving Valrico, Brandon, Riverview, and Lithia from the Brandon office.
          </p>
          <a href="tel:8137337907" className="btn-solid">(813) 733-7907 - Talk to Barrett</a>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1140px] mx-auto px-7 py-16 space-y-6" style={{ color: 'var(--ink-soft)' }}>

        {/* Professional bio */}
        <h2 className="font-serif text-2xl" style={{ color: 'var(--ink)' }}>What Is Barrett Henry&apos;s Professional Background?</h2>
        <p className="text-[15px] leading-[1.8]">
          Barrett Henry has been a licensed REALTOR® since 2003, bringing 24+ years of real estate experience to every transaction. He earned his Florida Broker Associate license in 2017, which represents a higher level of education, experience, and licensing than a standard sales associate. Barrett operates under REMAX Collective, one of the most recognized real estate brands in the world, giving his clients the combination of deep local expertise and global reach.
        </p>
        <p className="text-[15px] leading-[1.8]">
          Barrett formed The NOW Team in 2015 to serve the growing demand in the Tampa Bay market. While The NOW Team handles operations, Barrett&apos;s personal brand and reputation are what clients know and trust. When you work with Barrett, you get Barrett, not a hand-off to a junior agent.
        </p>

        {/* Designations */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>What Designations Does Barrett Henry Hold?</h2>
        <p className="text-[15px] leading-[1.8]">Each designation represents specialized training that directly benefits clients:</p>
        <div className="space-y-4 mt-4">
          {[
            ['Broker Associate (since 2017)', 'A Broker Associate holds a Florida real estate broker license, more coursework, more experience, and a higher licensing standard than a sales associate. Barrett earned this credential in 2017 after years of practice and additional education.'],
            ['e-PRO (Digital Marketing)', 'Certified in digital marketing strategies for real estate. Barrett leverages SEO, social media, targeted advertising, and technology to market listings and reach buyers that traditional agents miss.'],
            ['MRP (Military Relocation Professional)', 'Trained by the National Association of REALTORS® to help military families navigate PCS moves, VA loans, and relocation to and from the MacDill AFB / Tampa Bay area. Explore the VA loan guide for Valrico.'],
            ['SRS (Seller Representative Specialist)', 'Advanced training in representing home sellers, pricing strategy, marketing plans, negotiation tactics, and maximizing net proceeds at closing.'],
          ].map(([title, desc]) => (
            <div key={title as string} className="border rounded-md p-5" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>{title}</h3>
              <p className="text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 my-4">
          {['Broker Associate', 'e-PRO', 'MRP', 'SRS', 'REMAX Collective', 'REMAX Commercial'].map(c => (
            <span key={c} className="text-xs font-semibold px-2.5 py-1 border rounded" style={{ borderColor: 'var(--border)', color: 'var(--ink-soft)' }}>{c}</span>
          ))}
        </div>

        {/* REMAX Collective */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>What Is REMAX Collective?</h2>
        <p className="text-[15px] leading-[1.8]">
          Barrett is affiliated with REMAX Collective, a brokerage with offices across the Tampa Bay area. The REMAX brand provides a global referral network, brand recognition, and marketing tools that independent brokerages cannot match, combined with Barrett&apos;s neighborhood-level expertise in Valrico and eastern Hillsborough County.
        </p>

        {/* Office locations */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>Where Are Barrett Henry&apos;s Office Locations?</h2>
        <div className="space-y-3 mt-4">
          <div className="border rounded-md p-5" style={{ borderColor: 'var(--border)' }}>
            <p className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>Brandon Office (Primary)</p>
            <p className="text-sm leading-relaxed">417 Lithia Pinecrest Rd, Brandon, FL 33511</p>
            <p className="text-xs mt-1" style={{ color: 'var(--ink-muted)' }}>5 minutes from every Valrico neighborhood</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="border rounded-md p-5" style={{ borderColor: 'var(--border)' }}>
              <p className="font-semibold text-sm mb-1" style={{ color: 'var(--ink)' }}>Tampa Office</p>
              <p className="text-sm leading-relaxed">14310 N Dale Mabry Hwy Ste 100, Tampa, FL</p>
            </div>
            <div className="border rounded-md p-5" style={{ borderColor: 'var(--border)' }}>
              <p className="font-semibold text-sm mb-1" style={{ color: 'var(--ink)' }}>Largo Office</p>
              <p className="text-sm leading-relaxed">11200 Seminole Blvd Ste 202, Largo, FL</p>
            </div>
          </div>
        </div>

        {/* Service area */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>What Areas Does Barrett Henry Serve?</h2>
        <p className="text-[15px] leading-[1.8]">
          Barrett&apos;s primary focus is Valrico and the surrounding communities of eastern Hillsborough County:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[15px] leading-[1.8]">
          <li><strong>Valrico</strong>, 32+ neighborhoods across ZIP codes 33594 and 33596. <Link href="/valrico-fl-homes-for-sale/" className="no-underline" style={{ color: 'var(--accent)' }}>Search Valrico homes</Link></li>
          <li><strong>Brandon</strong> - Adjacent community, home to the REMAX Collective primary office</li>
          <li><strong>Riverview</strong> - Fast-growing area south of Valrico along US-301 and Boyette Road</li>
          <li><strong>Lithia</strong> - Including FishHawk Ranch, one of Tampa Bay&apos;s top master-planned communities</li>
        </ul>
        <p className="text-[15px] leading-[1.8] mt-4">
          Barrett also handles transactions across greater Tampa Bay and serves commercial real estate clients through <a href="https://nowtb.com/commercial/" target="_blank" rel="noopener" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>REMAX Commercial</a>.
        </p>

        {/* Philosophy */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>How Does Barrett Henry Work With Clients?</h2>
        <p className="text-[15px] leading-[1.8]">
          Barrett&apos;s approach is simple: straight talk, data-driven pricing, and no pressure. He gives you the numbers, explains your options, and lets you make the decision. No pushy sales tactics. No artificial urgency. Just honest guidance from someone who has been doing this for over two decades.
        </p>
        <p className="text-[15px] leading-[1.8]">
          For sellers, that means pricing based on actual comps from your specific sub-neighborhood, not a ZIP code average or an algorithm. For buyers, it means honest assessments of every property, including the ones Barrett thinks you should skip. The goal is the right deal, not just any deal.
        </p>

        {/* Contact info */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>How Do I Contact Barrett Henry?</h2>
        <div className="border rounded-md p-5" style={{ borderColor: 'var(--border)' }}>
          <p className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>Barrett Henry, REALTOR® &middot; Broker Associate</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>REMAX Collective - Brandon Office</p>
          <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--ink-soft)' }}>
            <a href="tel:8137337907" className="no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a> &middot;{' '}
            <a href="mailto:barrett@nowtb.com" className="no-underline" style={{ color: 'var(--accent)' }}>barrett@nowtb.com</a>
          </p>
          <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>The NOW Team: <a href="tel:8132604663" className="no-underline" style={{ color: 'var(--accent)' }}>(813) 260-4663</a></p>
        </div>

        {/* Internal links */}
        <div className="mt-8 text-[15px] leading-[1.8]">
          <p>
            <strong style={{ color: 'var(--ink)' }}>Explore more:</strong>{' '}
            <Link href="/valrico-realtor/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Valrico REALTOR® services</Link> &middot;{' '}
            <Link href="/best-realtor-in-valrico/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Best realtor in Valrico</Link> &middot;{' '}
            <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search homes for sale</Link> &middot;{' '}
            <Link href="/sell-my-home-valrico/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Sell your home</Link> &middot;{' '}
            <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Home values</Link> &middot;{' '}
            <Link href="/valrico-market-report/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Market report</Link> &middot;{' '}
            <Link href="/valrico-relocation-guide/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Relocation guide</Link>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 rounded-md text-center" style={{ background: 'var(--cream-warm)' }}>
          <h3 className="font-serif text-lg mb-2">Let&apos;s talk about your real estate goals</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--ink-soft)' }}>Barrett Henry, REALTOR® &middot; Broker Associate &middot; REMAX Collective</p>
          <a href="tel:8137337907" className="btn-solid mr-2">(813) 733-7907</a>
          <a href="mailto:barrett@nowtb.com" className="btn-ghost">Email Barrett</a>
        </div>
      </div>

      {/* JSON-LD structured data, full @graph: Organization + Person + AboutPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      {/* FAQPage schema for AEO */}
      
      {/* Lead Capture Form */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <ContactForm />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"Who is Barrett Henry?","acceptedAnswer":{"@type":"Answer","text":"Barrett Henry is a licensed REALTOR and Broker Associate with REMAX Collective, serving Valrico, Brandon, Riverview, and Lithia in the Tampa Bay area. He has been licensed since 2003 with 24+ years of real estate experience. He holds e-PRO, MRP, and SRS designations (License #3313308) and formed The NOW Team in 2015. Call (813) 733-7907 or email barrett@nowtb.com."}},
          {"@type":"Question","name":"What is a Broker Associate and how is it different from a regular agent?","acceptedAnswer":{"@type":"Answer","text":"A Broker Associate holds a Florida real estate broker license, which requires more coursework, more experience, and passing the broker exam, a higher level of licensing than a standard sales associate. Barrett Henry earned his Broker Associate license in 2017. He operates under REMAX Collective, combining broker-level expertise with global brand reach. Call (813) 733-7907."}},
          {"@type":"Question","name":"What designations does Barrett Henry hold?","acceptedAnswer":{"@type":"Answer","text":"Barrett Henry holds four professional designations: Broker Associate (since 2017), e-PRO (digital marketing certified), MRP (Military Relocation Professional for MacDill AFB families), and SRS (Seller Representative Specialist for maximizing seller proceeds). These designations represent specialized training that directly benefits his clients. Contact Barrett at (813) 733-7907 or barrett@nowtb.com."}},
          {"@type":"Question","name":"Where is Barrett Henry's office located?","acceptedAnswer":{"@type":"Answer","text":"Barrett Henry's primary office is REMAX Collective at 417 Lithia Pinecrest Rd, Brandon, FL 33511, five minutes from every Valrico neighborhood. Additional offices are located in Tampa (14310 N Dale Mabry Hwy Ste 100) and Largo (11200 Seminole Blvd Ste 202). Call (813) 733-7907 or email barrett@nowtb.com."}},
          {"@type":"Question","name":"What areas does Barrett Henry serve?","acceptedAnswer":{"@type":"Answer","text":"Barrett Henry's primary focus is Valrico, covering all 38 neighborhoods across ZIP codes 33594 and 33596. He also serves Brandon, Riverview, and Lithia (including FishHawk Ranch). Barrett handles commercial real estate through REMAX Commercial and manages rental properties through ViVi Property Management. 24+ years of real estate experience. Call (813) 733-7907."}}
        ]
      })}} />
    </>
  );
}
