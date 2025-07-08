'use client'
import { ArrowLeft, Calendar } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f] relative px-6">

      <div className="absolute z-0 top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="absolute top-6 left-6 z-50">
        <button
          className="group flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="hidden sm:inline text-sm font-medium" onClick={() => {window.history.back();}}>Back</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto w-full z-10 my-20">
        <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-700 shadow-2xl shadow-pink-900/20">

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white tracking-wide mb-4">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Last Updated: 03-07-2025 14:17:40</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-left max-w-3xl mx-auto">
              <section className="space-y-6"></section>
                <h2 className="text-xl font-semibold text-white mb-2">Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  This privacy policy sets out how HRIDESH MATTAKATHARA GOPAKUMAR uses and protects any information that you give HRIDESH MATTAKATHARA GOPAKUMAR when you use this website.
                  <br /><br />
                  HRIDESH MATTAKATHARA GOPAKUMAR is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
                  <br /><br />
                  HRIDESH MATTAKATHARA GOPAKUMAR may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.
                </p>

                <h2 className="text-xl font-semibold text-white mb-2">What We Collect</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may collect the following information:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4">
                  <li>name and job title</li>
                  <li>contact information including email address</li>
                  <li>demographic information such as postcode, preferences and interests</li>
                  <li>other information relevant to customer surveys and/or offers</li>
                </ul>

                <h2 className="text-xl font-semibold text-white mb-2">What We Do With the Information We Gather</h2>
                <p className="text-gray-300 leading-relaxed">
                  We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4">
                  <li>Internal record keeping.</li>
                  <li>We may use the information to improve our products and services.</li>
                  <li>
                    We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.
                  </li>
                  <li>
                    From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.
                  </li>
                </ul>

                <h2 className="text-xl font-semibold text-white mb-2">Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
                </p>

                <h2 className="text-xl font-semibold text-white mb-2">How We Use Cookies</h2>
                <p className="text-gray-300 leading-relaxed">
                  A cookie is a small file which asks permission to be placed on your computer&apos;s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
                  <br /><br />
                  We use traffic log cookies to identify which pages are being used. This helps us analyse data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
                  <br /><br />
                  Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
                  <br /><br />
                  You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
                </p>

                <h2 className="text-xl font-semibold text-white mb-2">Links to Other Websites</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
                </p>

                <h2 className="text-xl font-semibold text-white mb-2">Controlling Your Personal Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  You may choose to restrict the collection or use of your personal information in the following ways:
                </p>
                <ul className="list-disc list-inside text-gray-300 ml-4">
                  <li>
                    Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.
                  </li>
                  <li>
                    If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at [email protected]
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
                  <br /><br />
                  You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please write to us.
                  <br /><br />
                  If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}