import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        
        {/* Page Header */}
        <header className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Terms & Conditions</h1>
          <p className="text-sm text-gray-500 mt-1">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Page Content */}
        <section className="space-y-4 text-gray-700 leading-relaxed">

          <p>
            By using our website, you acknowledge abiding by the rules set out by
            us and agree to the collection and use of all such data that you may
            provide to, or through our website.
          </p>

          <p>
            In some instances, while you visit our website, you may not be
            required to give any personal information. But in certain cases, we
            must have your personal information to allow you access to some of
            the links or pages. These may request your name, e-mail ID, contact
            number, etc. The data provided by you is used to present relevant
            products, confirm acceptance of communication, or send updates. You
            may also request removal from our mailing list. We do not share your
            personal information with any third party.
          </p>

          <p>
            To ensure security during transfer of your personal information
            between client and server, encrypted protocols are used. We maintain
            limited access by employees and ensure confidentiality. Cookies may
            be used for safety, session flow, and personalization. Disabling
            cookies may limit certain website features.
          </p>

          <p>
            For any concerns regarding privacy statements or your interaction
            with our website, feel free to contact us.
          </p>

          {/* Disclaimer Section */}
          <h2 className="text-xl font-semibold text-gray-800 mt-6">Disclaimer</h2>

          <p>
            This is not the official website of the developer or property; it
            belongs to an authorised channel partner for informational purposes
            only. All rights for logos and images are reserved to the developer.
            By accessing this website, you agree to this Disclaimer without
            limitation.
          </p>

          <p>
            This website is under continuous updates. All information including
            brochures and marketing materials available here are for
            informational purposes only and should not be relied upon for making
            booking or purchase decisions. Nothing on this website constitutes
            an offer, marketing, booking, selling, or an invitation to purchase
            a property.
          </p>

          <p>
            The company is not responsible for any consequences of actions taken
            based on the material or information on this website.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-8 pt-4 border-t flex justify-between items-center">
          <small className="text-xs text-gray-500">
            If you have questions, feel free to contact us.
          </small>

          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
          >
            Back to Top
          </button>
        </footer>
      </div>
    </div>
  );
}
