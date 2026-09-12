import React, { useState } from 'react';
import { MapPin, Navigation, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';
import { InquiryFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please provide a valid contact number.';
    } else if (formData.phoneNumber.replace(/[^0-9]/g, '').length < 7) {
      newErrors.phoneNumber = 'Please enter a valid phone number with digits.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include a brief message or question.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend submission handling with clean readiness for backend integration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#080808] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-red-500 mb-3">
            <span className="w-4 h-0.5 bg-red-600" />
            <span className="font-athletic text-xs sm:text-sm font-bold tracking-widest uppercase">
              COMMUNICATION & INQUIRIES
            </span>
          </div>

          <h2 className="font-athletic text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none mb-4">
            LET'S GET STARTED.
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg">
            Have questions about membership or training? Get in touch with Body Factory Gym.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Verified Actions vs Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Business Details & Verified Contact Methods */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#121212] border border-zinc-800 rounded p-6 sm:p-8">
              <h3 className="font-athletic text-xs font-bold tracking-widest text-red-500 uppercase mb-4">
                VISIT THE GYM
              </h3>

              <div className="space-y-1 mb-8">
                <p className="font-athletic text-3xl font-black text-white tracking-wider uppercase">
                  BODY FACTORY GYM
                </p>
                <p className="font-athletic text-xl font-bold text-zinc-300 uppercase">
                  LATIFABAD UNIT 7
                </p>
                <p className="font-athletic text-base font-semibold text-zinc-400 uppercase">
                  HYDERABAD, SINDH, PAKISTAN
                </p>
              </div>

              {/* Verified Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-zinc-800/80">
                {/* CONTACT VIA GOOGLE MAPS */}
                <a
                  href={BUSINESS_INFO.mapsShortLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-via-google-maps-btn"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-athletic text-base font-bold tracking-widest uppercase rounded-sm transition-all duration-200 shadow-lg shadow-red-950/30 active:scale-[0.98]"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>CONTACT VIA GOOGLE MAPS</span>
                </a>

                {/* GET DIRECTIONS */}
                <a
                  href={BUSINESS_INFO.directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-get-directions-btn"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1C1C1C] hover:bg-[#252525] text-zinc-200 hover:text-white border border-zinc-700 font-athletic text-base font-bold tracking-widest uppercase rounded-sm transition-all duration-200 active:scale-[0.98]"
                >
                  <Navigation className="w-5 h-5 text-red-500" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>

            {/* Honest verification note */}
            <div className="p-4 bg-[#101010] rounded border border-zinc-800/60 text-xs text-zinc-400 leading-relaxed flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
              <span>
                To ensure only verified details are used, inquiries can be directed directly to Body Factory Gym's official Google Maps listing or submitted via the inquiry form.
              </span>
            </div>
          </div>

          {/* Right Column: Premium Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] border border-zinc-800 rounded p-6 sm:p-10 shadow-2xl relative">
              <div className="mb-6">
                <h3 className="font-athletic text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                  SEND AN INQUIRY
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  Leave your information and message below to inquire about membership and training details.
                </p>
              </div>

              {submitted ? (
                <div
                  id="inquiry-success-message"
                  className="p-8 rounded bg-[#161616] border border-emerald-700/50 text-center animate-in fade-in zoom-in-95 duration-200"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h4 className="font-athletic text-2xl font-bold text-white uppercase tracking-wider mb-2">
                    INQUIRY SUBMITTED
                  </h4>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
                    Thank you for reaching out to Body Factory Gym. Your inquiry has been registered. You can also visit or message through Google Maps directly.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={BUSINESS_INFO.mapsShortLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-athletic text-sm font-bold uppercase tracking-wider rounded-sm transition-colors"
                    >
                      OPEN IN GOOGLE MAPS
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ fullName: '', phoneNumber: '', message: '' });
                      }}
                      className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-athletic text-sm font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block font-athletic text-xs sm:text-sm font-bold tracking-wider text-zinc-300 uppercase mb-2"
                    >
                      FULL NAME <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Ali Ahmed"
                      className={`w-full px-4 py-3.5 bg-[#090909] text-white rounded border ${
                        errors.fullName
                          ? 'border-red-600 focus:ring-1 focus:ring-red-600'
                          : 'border-zinc-800 focus:border-red-600'
                      } outline-none transition-colors text-sm font-medium placeholder:text-zinc-600`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block font-athletic text-xs sm:text-sm font-bold tracking-wider text-zinc-300 uppercase mb-2"
                    >
                      PHONE NUMBER <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, phoneNumber: e.target.value });
                        if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                      }}
                      placeholder="e.g. 0300 1234567"
                      className={`w-full px-4 py-3.5 bg-[#090909] text-white rounded border ${
                        errors.phoneNumber
                          ? 'border-red-600 focus:ring-1 focus:ring-red-600'
                          : 'border-zinc-800 focus:border-red-600'
                      } outline-none transition-colors text-sm font-medium placeholder:text-zinc-600`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-athletic text-xs sm:text-sm font-bold tracking-wider text-zinc-300 uppercase mb-2"
                    >
                      MESSAGE <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Inquiring about membership options and gym timings..."
                      className={`w-full px-4 py-3.5 bg-[#090909] text-white rounded border ${
                        errors.message
                          ? 'border-red-600 focus:ring-1 focus:ring-red-600'
                          : 'border-zinc-800 focus:border-red-600'
                      } outline-none transition-colors text-sm font-medium placeholder:text-zinc-600 resize-y`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-inquiry-btn"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 text-white font-athletic text-lg font-bold tracking-widest uppercase rounded-sm transition-all duration-200 shadow-xl shadow-red-950/40 hover:shadow-red-900/60 active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? 'PROCESSING...' : 'SEND INQUIRY'}</span>
                  </button>

                  <p className="text-[11px] text-zinc-400 text-center">
                    Frontend inquiry interface prepared for production database / messaging integration.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
