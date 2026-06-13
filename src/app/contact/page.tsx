"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1CAB5E] to-[#0f6e3c] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-green-100">We&apos;re here to help! Reach out to us anytime.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              {
                icon: "📞",
                title: "Phone",
                details: ["16910 (10:00 AM – 10:00 PM)", "+880 1800-000000"],
              },
              {
                icon: "✉️",
                title: "Email",
                details: ["support@edubd.com", "business@edubd.com"],
              },
              {
                icon: "📍",
                title: "Office",
                details: ["House 28, Road 11", "Dhanmondi, Dhaka 1209", "Bangladesh"],
              },
            ].map(({ icon, title, details }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                {details.map((d) => (
                  <p key={d} className="text-gray-600 text-sm">{d}</p>
                ))}
              </div>
            ))}

            {/* Social links */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { name: "Facebook", icon: "f", color: "bg-blue-600" },
                  { name: "YouTube", icon: "▶", color: "bg-red-600" },
                  { name: "Instagram", icon: "📷", color: "bg-pink-500" },
                ].map(({ name, icon, color }) => (
                  <a
                    key={name}
                    href="#"
                    aria-label={name}
                    className={`w-10 h-10 ${color} text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="px-6 py-3 bg-[#1CAB5E] text-white rounded-full font-semibold hover:bg-[#17954f] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                        <input
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Full name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#1CAB5E] focus:ring-1 focus:ring-[#1CAB5E]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#1CAB5E] focus:ring-1 focus:ring-[#1CAB5E]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#1CAB5E] focus:ring-1 focus:ring-[#1CAB5E] bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="course">Course Inquiry</option>
                        <option value="payment">Payment Issue</option>
                        <option value="technical">Technical Support</option>
                        <option value="instructor">Become an Instructor</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#1CAB5E] focus:ring-1 focus:ring-[#1CAB5E] resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-[#1CAB5E] text-white rounded-xl font-semibold hover:bg-[#17954f] transition-colors disabled:opacity-70"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
