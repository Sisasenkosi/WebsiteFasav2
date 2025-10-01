import React from 'react';

const PrivacyPolicy = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 text-gray-700">
          <p>
            We value your privacy. This policy explains what information we
            collect, how we use it, and the choices you have regarding your
            data.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, phone number, and any details you submit through our forms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            How We Use Information
          </h2>
          <p>
            We use your information to provide and improve our services, respond
            to inquiries, and communicate updates or promotional content with
            your consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share information with
            trusted service providers who assist us in operating our website and
            services, under confidentiality obligations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">Your Choices</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to or deletion of your personal data.</li>
            <li>Opt out of marketing communications at any time.</li>
            <li>Disable cookies through your browser settings.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
          <p>
            If you have questions about this policy, contact us at{' '}
            <a
              href="mailto:fasasmartechnology@gmail.com"
              className="text-orange-600 hover:underline"
            >
              fasasmartechnology@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
