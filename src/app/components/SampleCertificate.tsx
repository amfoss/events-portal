export default function SampleCertificate() {
  return (
    <section className="w-full py-12 md:py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="mb-8 md:mb-12 w-fit mx-auto lg:mx-0">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase text-center lg:text-left">
            Earn a Certificate of Completion
          </h2>
          <div className="flex w-[98%] mt-2 h-1 bg-gradient-to-r from-[#f07c8fff] to-[#8b5cf6] mx-auto lg:mx-0"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-10">
          <div className="flex-1 w-full text-center lg:text-left">
            <p className="text-lg text-white-300 leading-relaxed font-medium">
              Successfully complete the workshop and receive a certificate
              recognizing your participation and the skills you've gained. It's
              a great way to showcase your learning journey and strengthen your
              portfolio.
            </p>
          </div>

          <div className="flex-1 w-full flex flex-col items-center lg:items-end">
            <div className="relative group w-full max-w-xl p-3 rounded-xl border border-white/10 shadow-2xl bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-[1.01]">
              <div className="overflow-hidden rounded-lg bg-[#111827]">
                <img
                  src="/Sample_Workshop_Certificate.jpeg"
                  alt="Workshop Certificate Preview"
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-center text-lightgray-500 tracking-wide lg:text-right w-full max-w-xl px-1">
              * Image for illustration only. Certificate template subject to
              change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
