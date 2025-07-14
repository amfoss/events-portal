"use client";
import { ArrowLeft, Calendar } from "lucide-react";
import { motion } from "framer-motion";
export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f] relative px-6">
      <div className="absolute z-0 top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="absolute top-6 left-6 z-50">
        <button className="group flex items-center gap-2 text-white hover:text-pink-400 transition-colors">
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          <span
            className="hidden sm:inline text-sm font-medium"
            onClick={() => {
              window.history.back();
            }}
          >
            Back
          </span>
        </button>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto w-full z-10 my-20"
      >
        <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-gray-700 shadow-2xl shadow-pink-900/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white tracking-wide mb-4">
              Terms and Conditions
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                Last updated on: 03-07-2025 14:17:40
              </span>
            </div>
          </div>

          <div className="text-center">
            <div className="text-left max-w-3xl mx-auto">
              <ul className="list-disc pl-6 text-gray-300 leading-relaxed space-y-4">
                <li>
                  These Terms and Conditions, along with privacy policy or other
                  terms (&quot;Terms&quot;) constitute a binding agreement by
                  and between HRIDESH MATTAKATHARA GOPAKUMAR (&quot;Website
                  Owner&quot; or &quot;we&quot; or &quot;us&quot; or
                  &quot;our&quot;) and you (&quot;you&quot; or &quot;your&quot;)
                  and relate to your use of our website, goods (as applicable)
                  or services (as applicable) (collectively,
                  &quot;Services&quot;).
                </li>
                <li>
                  By using our website and availing the Services, you agree that
                  you have read and accepted these Terms (including the Privacy
                  Policy). We reserve the right to modify these Terms at any
                  time and without assigning any reason. It is your
                  responsibility to periodically review these Terms to stay
                  informed of updates.
                </li>
                <li>
                  The use of this website or availing of our Services is subject
                  to the following terms of use:
                </li>
                <li>
                  To access and use the Services, you agree to provide true,
                  accurate and complete information to us during and after
                  registration, and you shall be responsible for all acts done
                  through the use of your registered account.
                </li>
                <li>
                  Neither we nor any third parties provide any warranty or
                  guarantee as to the accuracy, timeliness, performance,
                  completeness or suitability of the information and materials
                  offered on this website or through the Services, for any
                  specific purpose. You acknowledge that such information and
                  materials may contain inaccuracies or errors and we expressly
                  exclude liability for any such inaccuracies or errors to the
                  fullest extent permitted by law.
                </li>
                <li>
                  Your use of our Services and the website is solely at your own
                  risk and discretion. You are required to independently assess
                  and ensure that the Services meet your requirements.
                </li>
                <li>
                  The contents of the Website and the Services are proprietary
                  to Us and you will not have any authority to claim any
                  intellectual property rights, title, or interest in its
                  contents.
                </li>
                <li>
                  You acknowledge that unauthorized use of the Website or the
                  Services may lead to action against you as per these Terms or
                  applicable laws.
                </li>
                <li>
                  You agree to pay us the charges associated with availing the
                  Services.
                </li>
                <li>
                  You agree not to use the website and/or Services for any
                  purpose that is unlawful, illegal or forbidden by these Terms,
                  or Indian or local laws that might apply to you.
                </li>
                <li>
                  You agree and acknowledge that website and the Services may
                  contain links to other third party websites. On accessing
                  these links, you will be governed by the terms of use, privacy
                  policy and such other policies of such third party websites.
                </li>
                <li>
                  You understand that upon initiating a transaction for availing
                  the Services you are entering into a legally binding and
                  enforceable contract with us for the Services.
                </li>
                <li>
                  You shall be entitled to claim a refund of the payment made by
                  you in case we are not able to provide the Service. The
                  timelines for such return and refund will be according to the
                  specific Service you have availed or within the time period
                  provided in our policies (as applicable). In case you do not
                  raise a refund claim within the stipulated time, then this
                  would make you ineligible for a refund.
                </li>
                <li>
                  Notwithstanding anything contained in these Terms, the parties
                  shall not be liable for any failure to perform an obligation
                  under these Terms if performance is prevented or delayed by a
                  force majeure event.
                </li>
                <li>
                  These Terms and any dispute or claim relating to it, or its
                  enforceability, shall be governed by and construed in
                  accordance with the laws of India.
                </li>
                <li>
                  All disputes arising out of or in connection with these Terms
                  shall be subject to the exclusive jurisdiction of the courts
                  in Kochi, KERALA.
                </li>
                <li>
                  All concerns or communications relating to these Terms must be
                  communicated to us using the contact information provided on
                  this website.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
