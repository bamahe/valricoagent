/**
 * QuickAnswer — AEO component for direct question+answer blocks.
 * Navy background, white text. Designed to be picked up by AI answer engines.
 * Server component (no 'use client' directive).
 */

interface QuickAnswerProps {
  /** The question, displayed as a bold heading */
  question: string;
  /** Direct 40-60 word answer */
  answer: string;
}

export default function QuickAnswer({ question, answer }: QuickAnswerProps) {
  return (
    <section className="bg-[#0B2545] text-white px-6 py-10 rounded-lg my-8">
      <div className="max-w-[800px] mx-auto">
        {/* Bold question heading — targets featured snippet / AI answer */}
        <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 leading-snug">
          {question}
        </h2>
        {/* Direct answer paragraph — keep 40-60 words for AI extraction */}
        <p className="text-[15px] md:text-base leading-relaxed opacity-90">
          {answer}
        </p>
      </div>
    </section>
  );
}
