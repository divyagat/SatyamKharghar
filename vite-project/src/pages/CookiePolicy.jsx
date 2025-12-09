import React from "react";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        {/* Header */}
        <header className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Cookie Policy</h1>
          <p className="text-sm text-gray-500 mt-1">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Content */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            A cookie is a piece of software code that an internet website sends to your browser 
            when you access information at that site. A cookie is stored as a simple text file 
            on your computer or mobile device by a website’s server, and only that server can 
            retrieve or read the contents of that cookie.
          </p>

          <p>
            Cookies let you navigate between pages efficiently as they store your preferences, 
            and generally improve your experience. riverviewcityindia.com uses the following 
            types of cookies to enhance your experience and interactivity:
          </p>

          <ol className="list-decimal ml-6 space-y-2">
            <li>
              <strong>Analytics cookies:</strong> For anonymously remembering your computer or 
              mobile device when you visit our website to keep track of browsing patterns.
            </li>
            <li>
              <strong>Service cookies:</strong> Help our website work efficiently by remembering 
              your registration and login details, settings preferences, and keeping track of 
              the pages you view.
            </li>
            <li>
              <strong>Non-persistent cookies (per-session cookies):</strong> Serve technical 
              purposes of providing seamless navigation. These cookies do not collect personal 
              information, and they are deleted as soon as you leave our website. They are stored 
              in memory only during an active browser session and disappear once the browser is closed.
            </li>
          </ol>

          <p>
            You may note additionally that when you visit 
            <a
              href="https://riverviewcityindia.com"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://riverviewcityindia.com
            </a>, 
            you may be required to accept cookies. If you choose to refuse cookies, it is possible 
            that the website may not function properly.
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
