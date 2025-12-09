import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        {/* Header */}
        <header className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mt-1">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Content Section */}
        <section className="space-y-4 text-gray-700 leading-relaxed">

          <p>
            In our effort and dedication to preserving your data, we have created 
            this comprehensive privacy policy in order to keep your interests and 
            information protected on our website. This privacy policy is subject to 
            changes without prior notice or consent. To stay updated about any revisions, 
            please revisit and review the terms & conditions of this privacy policy 
            from time to time.
          </p>

          {/* Disclaimer Section */}
          <h2 className="text-xl font-semibold text-gray-800 mt-6">Disclaimer</h2>

          <p>
            This is not the official website of the developer or property; it belongs 
            to an authorised channel partner for information purposes only. All rights 
            for logos and images are reserved to the developer.
          </p>

          <p>
            This disclaimer (“Disclaimer”) applies to this website and all microsites 
            and websites owned by us. By using or accessing this website you agree to 
            the Disclaimer without any limitation.
          </p>

          <p>
            This website is under the process of updates. By accessing this website, 
            the viewer confirms that the information including brochures and marketing 
            collaterals on this website is solely for informational purposes only and 
            should not be relied upon for making any booking/purchase in any project.
          </p>

          <p>
            Nothing on this website constitutes advertising, marketing, booking, selling, 
            or an offer for sale, or an invitation to purchase a unit in any project. 
            The company is not liable for any consequences of actions taken by the 
            viewer relying on such material/information on this website.
          </p>
        </section>

        {/* Footer Links */}
        <div className="mt-8 pt-4 border-t text-center space-y-2">

          <a
            href="/TermsAndCondition"
            className="text-blue-600 hover:text-blue-800 block"
          >
            Terms & Conditions
          </a>

          <a
            href="/CookiePolicy"
            className="text-blue-600 hover:text-blue-800 block"
          >
            Cookie Policy
          </a>

          <a
            href="/PrivacyPolicy"
            className="text-blue-600 hover:text-blue-800 block"
          >
            Privacy Policy
          </a>

        </div>
      </div>
    </div>
  );
}
