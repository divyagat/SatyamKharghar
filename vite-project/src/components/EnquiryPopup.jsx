import { useState } from "react";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white w-[95%] md:w-[420px] rounded-xl shadow-xl p-6 relative animate-fadeIn">

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center">Enquire Now</h2>
            <p className="text-center text-gray-600 text-sm">
              Register Here And Avail The Best Offers!!
            </p>

            <form className="mt-4 space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-semibold">Name*</label>
                <input className="w-full border-b border-gray-400 py-1 focus:outline-none" />
              </div>

              {/* Mobile */}
              <div>
                <label className="text-sm font-semibold">Mobile*</label>
                <div className="flex items-center gap-2 border-b border-gray-400 py-1">
                  <img src="https://flagcdn.com/w20/in.png" className="w-6" />
                  <span>+91</span>
                  <input type="number" className="w-full focus:outline-none" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold">Email (Optional)</label>
                <input className="w-full border-b border-gray-400 py-1 focus:outline-none" />
              </div>

              <button className="w-full bg-black text-white py-2 rounded-lg text-lg">
                Enquire Now
              </button>

              <p className="text-center font-semibold">Or</p>

              <a className="w-full bg-green-500 text-white py-2 rounded-lg text-lg text-center block">
                Connect On WhatsApp
              </a>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
