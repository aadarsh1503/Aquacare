import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100">
      <div className="text-gray-800 py-10 mt-6 lg:mt-32 px-6 md:px-20 lg:px-40">
        <h1 className="text-5xl text-center mb-6 font-bold">Privacy Policy</h1>

        <h1 className="text-2xl font-semibold mb-6">1. Introduction</h1>
        <p className="text-lg leading-relaxed mb-8">
          AquaCare (
          <a
            href="https://www.aquacare.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://www.aquacare.me/
          </a>
          ) is committed to protecting your privacy. We provide maintenance and
          refurbishment services across Bahrain. This Privacy Policy explains
          how we collect, use, and protect your data when you use our services.
        </p>

        <h1 className="text-2xl font-semibold mb-6">2. Data Collected</h1>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Support Data</h2>
          <p className="text-lg leading-relaxed">
            When you submit a support request, the information you provide is
            sent to our internal systems. We only collect the data necessary to
            assist you effectively.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Comments</h2>
          <p className="text-lg leading-relaxed">
            When you leave comments, we collect the data shown in the form, your
            IP address, and browser user agent to detect spam.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Contact Form</h2>
          <p className="text-lg leading-relaxed">
            Information sent via our contact form goes to our secure company
            email. These submissions are used for service purposes and never
            shared or sold to third parties.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Google Analytics</h2>
          <p className="text-lg leading-relaxed">
            We use Google Analytics for anonymous traffic monitoring. No
            personally identifiable data is stored. Opt out using{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              this link
            </a>
            .
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Cases for Using Personal Data
          </h2>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li>To verify/identify users during site interactions</li>
            <li>To provide technical support</li>
            <li>To send updates or service notifications</li>
            <li>To prevent fraud and enhance security</li>
            <li>To customize the website experience</li>
            <li>To ensure system performance and administration</li>
          </ul>
        </div>

        <h1 className="text-2xl font-semibold mb-6">3. Embedded Content</h1>
        <p className="text-lg leading-relaxed mb-8">
          Our site may include embedded content such as videos or social feeds.
          These may collect data just as if you visited those websites directly.
        </p>
        <ul className="list-disc ml-6 text-lg leading-relaxed mb-8">
          <li>
            <strong>Facebook:</strong>{" "}
            <a
              href="https://www.facebook.com/privacy/explanation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Facebook Privacy Policy
            </a>
          </li>
          <li>
            <strong>Twitter:</strong>{" "}
            <a
              href="https://twitter.com/en/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Twitter Privacy Policy
            </a>
          </li>
          <li>
            <strong>YouTube:</strong>{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              YouTube Privacy Policy
            </a>
          </li>
        </ul>

        <h1 className="text-2xl font-semibold mb-6">4. Cookies</h1>
        <p className="text-lg leading-relaxed mb-8">
          We use cookies to enhance your experience. You may disable them in your
          browser settings. Some common cookies we use:
        </p>
        <ul className="list-disc ml-6 text-lg leading-relaxed">
          <li>
            <strong>cfduid:</strong> For Cloudflare security configuration
          </li>
          <li>
            <strong>PHPSESSID:</strong> To manage session data
          </li>
          <li>
            <strong>wp-auth:</strong> WordPress authentication
          </li>
        </ul>

        <div className="mt-8">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              5. Who Has Access To Your Data
            </h3>
            <p className="text-lg text-gray-700 mb-2">
              If you're not a registered client, we don’t retain your data.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              If you are registered, your information may be accessed by:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li><strong>System administrators</strong></li>
              <li><strong>Support team</strong> for service delivery</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              6. Third Party Access to Your Data
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              We don’t share personal information with third parties unless
              necessary for service provision. These include:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>
                <strong>Payment gateways</strong> (if applicable) for billing
              </li>
              <li>
                <strong>Email and support platforms</strong> for communication
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              7. Data Retention
            </h3>
            <p className="text-lg text-gray-700 mb-2">
              - Support records and comments are stored indefinitely unless
              removal is requested.
            </p>
            <p className="text-lg text-gray-700">
              - You can edit or delete your account information, except for your
              username.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">8. Security Measures</h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>
                <strong>SSL/HTTPS:</strong> All communication is encrypted.
              </li>
              <li>
                <strong>Data minimization:</strong> We only collect what’s necessary.
              </li>
              <li>
                <strong>Internal training:</strong> Our team is trained on data safety.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
