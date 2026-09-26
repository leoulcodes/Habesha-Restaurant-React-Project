

import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Coffee,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: "◈",
    title: "Authentic Ethiopian",
    text: "Enjoy a complimentary teff-based Ethiopian breakfast with every reservation."
  },
  {
    icon: "◉",
    title: "Communal Gursha Points",
    text: "Earn generous points toward hand-poured coffee, private dining rooms, and hospitality upgrades."
  },
  {
    icon: "◫",
    title: "Fasting Calendar Alerts",
    text: "Never miss special fasting menus, events, and seasonal dishes."
  },
  {
    icon: "◎",
    title: "Express Addis Delivery",
    text: "Save Bole, Kazanchis, Old Airport, or Bole Medhanialem addresses for faster checkout."
  },
  {
    icon: "▣",
    title: "Priority Mesob Table Reservations",
    text: "Get early access to reservations and intimate table experiences."
  },
];

function Field({ label, hint, icon: Icon, type = "text", placeholder, value, onChange, right }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <div className="relative">
        {Icon && (
          <Icon
            size={12}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
          />
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input ${Icon ? "pl-8" : ""} ${right ? "pr-9" : ""}`}
        />
        {right}
      </div>
      {hint && <p className="mt-1 text-[8px] text-stone-400">{hint}</p>}
    </label>
  );
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    preference: "100% Pure Tej (Future)",
  });

  const update = (key) => (event) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  return (
    <section className="mx-auto max-w-[1180px] px-4 py-3 sm:px-6 lg:px-8">
      <div className="mb-3 text-[9px] text-stone-500">
        <span>Account</span>
        <span className="mx-2">/</span>
        <span className="font-semibold text-mesob-700">Join the Mesob Family</span>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1.55fr]">
        {/* Left marketing panel */}
        <aside className="rounded-md bg-[#f1dfd5] p-4 sm:p-5">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#e8bd72] px-2.5 py-1 text-[8px] font-bold text-[#6d3a13]">
            ◉ MEMBER PERKS
          </div>

          <h1 className="font-serif text-[25px] font-bold leading-[1.02] text-mesob-700 sm:text-[29px]">
            Become an Honored
            <br />
            Table Guest
          </h1>

          <p className="mt-3 text-[9px] leading-4 text-stone-600">
            Immerse yourself in authentic Ethiopian hospitality,
            <br className="hidden sm:block" />
            where every shared meal is a moment of community, connection, and craft.
          </p>

          <div className="mt-4 space-y-2.5">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-2.5">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white text-[10px] text-mesob-600">
                  {benefit.icon}
                </div>
                <div>
                  <h2 className="text-[9px] font-bold text-stone-700">{benefit.title}</h2>
                  <p className="mt-0.5 text-[8px] leading-3.5 text-stone-500">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 overflow-hidden rounded bg-[#fff5f0]">
            <div className="flex h-20 items-center justify-center bg-gradient-to-br from-[#8f351d] via-[#d38a47] to-[#f1c889] text-4xl">
              🍲
            </div>
            <div className="p-2.5">
              <p className="text-[8px] font-bold uppercase tracking-wide text-mesob-600">
                TRADITION IN EVERY BITE
              </p>
              <p className="mt-1 text-[8px] leading-3.5 text-stone-600">
                A celebration of the same recipes our community has loved for generations.
              </p>
            </div>
          </div>
        </aside>

        {/* Register form */}
        <div className="rounded-md bg-white p-5 shadow-card sm:p-6">
          <div>
            <h2 className="font-serif text-[21px] font-bold text-stone-800">
              Create Your Mesob House Account
            </h2>
            <p className="mt-1 text-[8px] text-stone-500">
              Join our culinary heritage circle &amp; less than a minute.
            </p>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <button className="flex items-center justify-center gap-2 rounded-md bg-[#fff0e9] px-3 py-2 text-[8px] font-semibold text-stone-700 hover:bg-mesob-100">
              <span className="font-bold text-mesob-700">▣</span>
              Telebirr Quick Sign
            </button>
            <button className="flex items-center justify-center gap-2 rounded-md bg-[#fff0e9] px-3 py-2 text-[8px] font-semibold text-stone-700 hover:bg-mesob-100">
              <span className="rounded-full bg-white px-1 text-[8px]">G</span>
              Continue with Google
            </button>
          </div>

          <div className="my-3 flex items-center gap-3 text-[7px] text-stone-400">
            <span className="h-px flex-1 bg-stone-200" />
            OR register with your details
            <span className="h-px flex-1 bg-stone-200" />
          </div>

          <form className="space-y-2.5" onSubmit={(e) => e.preventDefault()}>
            <Field
              label="Full Name ( )"
              icon={UserRound}
              placeholder="e.g. Abebe Bikila or Genet Tadesse"
              value={form.fullName}
              onChange={update("fullName")}
            />

            <Field
              label="Ethiopian Mobile Number ( )"
              icon={Phone}
              placeholder="+251 234 567 890"
              hint="We'll send a quick verification code to your Ethiopian number."
              value={form.phone}
              onChange={update("phone")}
            />

            <Field
              label="Email Address"
              icon={Mail}
              type="email"
              placeholder="guest@example.com"
              value={form.email}
              onChange={update("email")}
            />

            <div className="grid gap-3 sm:grid-cols-2">
              <Field
                label="Password"
                icon={LockKeyhole}
                type={showPassword ? "text" : "password"}
                placeholder="Minimum 8 characters"
                value={form.password}
                onChange={update("password")}
                right={
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={12} /> : <Eye size={12} />}
                  </button>
                }
              />

              <Field
                label="Confirm Password"
                icon={LockKeyhole}
                type={showConfirm ? "text" : "password"}
                placeholder="Repeat password"
                value={form.confirmPassword}
                onChange={update("confirmPassword")}
                right={
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400"
                    aria-label="Toggle confirmation visibility"
                  >
                    {showConfirm ? <EyeOff size={12} /> : <Eye size={12} />}
                  </button>
                }
              />
            </div>

            <div>
              <label className="field-label">Primary Dining Preference (Optional)</label>
              <p className="mb-2 text-[8px] text-stone-400">
                Helps us tailor your dining experience and fasting recommendations.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "All Heritage Delicacies",
                  "Fasting & Vegan (Tsom)",
                  "Halal Certified Meat",
                  "100% Pure Tej (Future)",
                ].map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => setForm((current) => ({ ...current, preference: option }))}
                    className={`rounded-full border px-2.5 py-1 text-[8px] transition ${
                      form.preference === option
                        ? "border-mesob-600 bg-mesob-600 text-white"
                        : "border-mesob-200 bg-white text-stone-600 hover:border-mesob-400"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-start gap-2 pt-1 text-[8px] text-stone-500">
              <input type="checkbox" className="mt-0.5 accent-[#a72e18]" />
              <span>
                I agree to the Mesob House Hospitality Terms and Privacy Guidelines.
              </span>
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-mesob-600 px-4 py-2.5 text-[9px] font-bold text-white shadow-sm transition hover:bg-mesob-700"
            >
              Create Account &amp; Receive Welcome Gursha
              <ChevronRight size={12} />
            </button>
          </form>

          <p className="mt-3 text-center text-[8px] text-stone-400">
            Already part of our dining family?{" "}
            <a href="#" className="font-bold text-mesob-600 hover:underline">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}