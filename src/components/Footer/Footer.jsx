

import {  MapPin, Phone } from "lucide-react";

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="mb-3 text-[10px] font-bold uppercase tracking-wide text-stone-800">
        {title}
      </h3>
      <div className="text-[9px] leading-5 text-stone-600">{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t-2 border-dotted border-mesob-300 bg-[#fff2eb]">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-7 sm:grid-cols-2 lg:grid-cols-4">
        <FooterColumn title="Mesob House">
          <p>
            Sharing traditions from the Ethiopian highlands — one Gursha at a time.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 rounded bg-white px-2 py-1.5 text-[8px]">
            <span className="text-mesob-600">◈</span>
            Traditional Coffee Ceremony daily at 4:00 PM
          </div>
        </FooterColumn>

        <FooterColumn title="Hospitality Hours">
          <p>Tuesday – Sunday: 11:30 AM – 11:00 PM</p>
          <p>Monday: Reserved for Private</p>
          <p className="mt-1 font-semibold text-mesob-700">
            Afera Buna &amp; Fresh Roasting All Evening
          </p>
        </FooterColumn>

        <FooterColumn title="Guest Account & Traditions">
          <p>Sign in to Mesob Rewards</p>
          <p>Create Member Profile</p>
          <p>Save Favorite &amp; Rewards</p>
          <p>House Tej (Pure Honey Wine)</p>
        </FooterColumn>

        <FooterColumn title="Addis Location">
          <p>Bole Medhanialem, Addis Ababa &amp; express delivery across town.</p>
          <p className="mt-1 font-bold text-mesob-700">+251 911 234 567</p>
          <div className="mt-2 flex gap-3 text-stone-600">
            <MapPin size={12} />
            <Phone size={12} />
            {/* <Facebook size={12} />
            <Instagram size={12} /> */}
          </div>
        </FooterColumn>
      </div>

      <div className="mx-auto flex max-w-[1180px] flex-col gap-2 border-t border-mesob-200 px-5 py-4 text-[8px] text-stone-400 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2025 Mesob House. Authentic Ethiopian Dining &amp; Restaurant Heritage.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-mesob-600">Oursha Hospitality</a>
          <a href="#" className="hover:text-mesob-600">Privacy Policy</a>
          <a href="#" className="hover:text-mesob-600">Terms of Sale</a>
        </div>
      </div>
    </footer>
  );
}