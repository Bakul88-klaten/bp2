'use client'

import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import JsonLd from './JsonLd'
import { faqSchema } from '@/lib/schema'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection({
  title,
  intro,
  items,
}: {
  title: string
  intro?: string
  items: FAQItem[]
}) {
  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <JsonLd data={faqSchema(items)} />
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <HelpCircle className="w-4 h-4" />
            Pertanyaan Umum
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
          {intro && (
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">{intro}</p>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-border px-4 md:px-6 shadow-sm"
        >
          <Accordion type="single" collapsible>
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-base font-semibold text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
