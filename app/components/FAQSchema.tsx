/**
 * FAQSchema — Renders visible FAQ section + JSON-LD FAQPage schema.
 * Designed for AEO (Answer Engine Optimization) — helps AI engines
 * extract structured Q&A pairs from the page.
 * Server component (no 'use client' directive).
 */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  /** Array of question/answer pairs */
  items: FAQItem[];
  /** Optional section heading */
  heading?: string;
}

export default function FAQSchema({ items, heading = "Frequently Asked Questions" }: FAQSchemaProps) {
  // Build the JSON-LD FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section className="px-6 py-12">
      <div className="max-w-[900px] mx-auto">
        {/* Section heading */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center text-[#0B2545]">
          {heading}
        </h2>

        {/* Visible FAQ accordion-style list */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-5"
            >
              {/* Question as H3 for SEO hierarchy */}
              <h3 className="font-semibold text-base md:text-lg text-[#0B2545] mb-2">
                {item.question}
              </h3>
              {/* Answer text */}
              <p className="text-sm md:text-[15px] leading-relaxed text-gray-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* JSON-LD FAQPage schema — invisible to users, consumed by search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
