import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Devign Verse',
  description: 'Terms and Conditions for Devign Verse - Read our terms of service and usage policies.',
}

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-midnight_text mb-8">Terms and Conditions</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            Welcome to Devign Verse. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">2. Services</h2>
          <p className="text-gray-700 mb-4">
            Devign Verse provides software development, web development, mobile app development, UI/UX design, and related digital services. Our services include but are not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Custom software development</li>
            <li>Web application development</li>
            <li>Mobile application development</li>
            <li>UI/UX design and prototyping</li>
            <li>Consulting and technical support</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">3. User Responsibilities</h2>
          <p className="text-gray-700 mb-4">
            When using our services, you agree to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Provide accurate and complete information</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not violate any applicable laws or regulations</li>
            <li>Respect intellectual property rights</li>
            <li>Maintain the confidentiality of any access credentials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">4. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            All content, features, and functionality of our services are owned by Devign Verse and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>
          <p className="text-gray-700 mb-4">
            For custom development projects, ownership of deliverables will be transferred to the client upon full payment, unless otherwise specified in the project agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">5. Project Terms</h2>
          <h3 className="text-xl font-medium text-midnight_text mb-2">Quotations and Proposals</h3>
          <p className="text-gray-700 mb-4">
            All quotations are valid for 30 days unless otherwise stated. Project scope, timelines, and pricing may be subject to change based on detailed requirements analysis.
          </p>

          <h3 className="text-xl font-medium text-midnight_text mb-2">Payment Terms</h3>
          <p className="text-gray-700 mb-4">
            Payment terms will be specified in individual project agreements. Generally, we require:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>50% advance payment to commence work</li>
            <li>Milestone-based payments for ongoing projects</li>
            <li>Full payment before final delivery</li>
          </ul>

          <h3 className="text-xl font-medium text-midnight_text mb-2">Project Timeline</h3>
          <p className="text-gray-700 mb-4">
            Project timelines are estimates and may vary based on project complexity, client feedback, and unforeseen circumstances. Delays caused by the client may result in additional charges.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">6. Confidentiality</h2>
          <p className="text-gray-700 mb-4">
            Both parties agree to maintain the confidentiality of proprietary information, trade secrets, and sensitive data shared during the course of our business relationship. This obligation survives the termination of our agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            Devign Verse shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">8. Warranty and Support</h2>
          <p className="text-gray-700 mb-4">
            We provide a standard warranty period of 30 days for bugs and defects in delivered code. Support services are provided as specified in individual service agreements. Extended support and maintenance are available at additional cost.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">9. Termination</h2>
          <p className="text-gray-700 mb-4">
            Either party may terminate services with written notice. Upon termination, all outstanding payments become due immediately. We reserve the right to terminate services for non-payment or breach of these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">10. Dispute Resolution</h2>
          <p className="text-gray-700 mb-4">
            Any disputes arising from these Terms shall be resolved through negotiation. If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts of Pakistan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">11. Force Majeure</h2>
          <p className="text-gray-700 mb-4">
            We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, war, or government restrictions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">12. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms are governed by the laws of Pakistan, including the Electronic Transactions Ordinance 2002 and the Prevention of Electronic Crimes Act 2016.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">13. Amendments</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of the modified terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">14. Severability</h2>
          <p className="text-gray-700 mb-4">
            If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">15. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            For questions about these Terms and Conditions, please contact us:
          </p>
          <div className="text-gray-700">
            <p>Email: legal@devignverse.com</p>
            <p>Phone: +92 XXX XXXXXXX</p>
            <p>Address: [Your Business Address], Pakistan</p>
          </div>
        </section>
      </div>
    </div>
  )
}
