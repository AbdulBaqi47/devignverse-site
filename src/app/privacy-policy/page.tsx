import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Devign Verse',
  description: 'Privacy Policy for Devign Verse - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-midnight_text mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Devign Verse ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our services, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-medium text-midnight_text mb-2">Personal Information</h3>
          <p className="text-gray-700 mb-4">
            We may collect personal information that you provide directly to us, such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Name, email address, phone number</li>
            <li>Business information and project details</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="text-xl font-medium text-midnight_text mb-2">Automatically Collected Information</h3>
          <p className="text-gray-700 mb-4">
            We automatically collect certain information when you visit our website, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our site</li>
            <li>Device information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>To provide and maintain our services</li>
            <li>To communicate with you about our services</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and prevent fraud</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">4. Information Sharing and Disclosure</h2>
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>With service providers who assist us in operating our business</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a business transfer or merger</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">5. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">6. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction or objection to processing</li>
            <li>Data portability</li>
          </ul>
          <p className="text-gray-700 mb-4">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">7. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">8. International Data Transfers</h2>
          <p className="text-gray-700 mb-4">
            Your information may be transferred to and processed in countries other than Pakistan. We ensure appropriate safeguards are in place for such transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">9. Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">10. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">11. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="text-gray-700">
            <p>Email: privacy@devignverse.com</p>
            <p>Phone: +92 XXX XXXXXXX</p>
            <p>Address: [Your Business Address], Pakistan</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-midnight_text mb-4">12. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            This Privacy Policy is governed by the laws of Pakistan, including the Prevention of Electronic Crimes Act 2016 and other applicable data protection regulations.
          </p>
        </section>
      </div>
    </div>
  )
}
