"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Phone, Building2, Mail, Factory, Globe, Users, MapPin, MessageSquare } from "lucide-react";
import { cn } from "../../lib/utils";
export interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}
interface FormData {
  title: string;
  mobile: string;
  company: string;
  email: string;
  industry: string;
  website: string;
  hasErp: string;
  companySize: string;
  location: string;
  requirements: string;
}
const industries = ["Manufacturing", "Construction & Contracting", "Energy & Utilities", "Oil & Gas", "Mining & Metals", "Transportation & Logistics/3PL", "Automotive & Aerospace", "Wholesale & Distribution", "Retail & eCommerce", "Food & Beverage/FMCG", "Agriculture", "Chemicals & Plastics", "Pharmaceuticals", "Healthcare", "Technology & Software", "Telecommunications", "Media & Entertainment", "Financial Services", "Real Estate", "Hospitality & Travel", "Education", "Public Sector & Defense", "Non-Profit Organizations (NGOs)", "Other"];
const companySizes = ["1-10 employees", "11-50 employees", "51-200 employees", "201-500 employees", "501-1000 employees", "1000+ employees"];
export default function ContactFormModal({
  isOpen,
  onClose
}: ContactFormModalProps) {
  const [formData, setFormData] = React.useState<FormData>({
    title: "",
    mobile: "",
    company: "",
    email: "",
    industry: "",
    website: "",
    hasErp: "",
    companySize: "",
    location: "",
    requirements: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    onClose();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return <AnimatePresence data-magicpath-id="0" data-magicpath-path="ContactFormModal.tsx">
      {isOpen ? <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" data-magicpath-id="1" data-magicpath-path="ContactFormModal.tsx">
          {/* Backdrop */}
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm" data-magicpath-id="2" data-magicpath-path="ContactFormModal.tsx" />

          {/* Modal */}
          <motion.div initial={{
        opacity: 0,
        scale: 0.95,
        y: 20
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.95,
        y: 20
      }} transition={{
        duration: 0.2
      }} className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-cyan-500/20 bg-slate-900/95 backdrop-blur-xl shadow-2xl" data-magicpath-id="3" data-magicpath-path="ContactFormModal.tsx">
            {/* Header */}
            <div className="sticky top-0 z-10 border-b border-cyan-500/20 bg-slate-900/95 backdrop-blur-xl p-6" data-magicpath-id="4" data-magicpath-path="ContactFormModal.tsx">
              <div className="flex items-start justify-between" data-magicpath-id="5" data-magicpath-path="ContactFormModal.tsx">
                <div className="space-y-1" data-magicpath-id="6" data-magicpath-path="ContactFormModal.tsx">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" data-magicpath-id="7" data-magicpath-path="ContactFormModal.tsx">
                    Let's Start Your Journey
                  </h2>
                  <p className="text-sm text-slate-400" data-magicpath-id="8" data-magicpath-path="ContactFormModal.tsx">
                    <span data-magicpath-id="9" data-magicpath-path="ContactFormModal.tsx">Share your requirements and we'll get back to you shortly</span>
                  </p>
                </div>
                <motion.button whileHover={{
              scale: 1.1,
              rotate: 90
            }} whileTap={{
              scale: 0.9
            }} onClick={onClose} className="inline-flex items-center justify-center size-10 rounded-full border border-cyan-500/30 bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all" aria-label="Close modal" data-magicpath-id="10" data-magicpath-path="ContactFormModal.tsx">
                  <X className="size-5" data-magicpath-id="11" data-magicpath-path="ContactFormModal.tsx" />
                </motion.button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6" data-magicpath-id="12" data-magicpath-path="ContactFormModal.tsx">
              {/* Personal Information */}
              <div className="space-y-4" data-magicpath-id="13" data-magicpath-path="ContactFormModal.tsx">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2" data-magicpath-id="14" data-magicpath-path="ContactFormModal.tsx">
                  <User className="size-5 text-cyan-400" data-magicpath-id="15" data-magicpath-path="ContactFormModal.tsx" />
                  <span data-magicpath-id="16" data-magicpath-path="ContactFormModal.tsx">Personal Information</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-magicpath-id="17" data-magicpath-path="ContactFormModal.tsx">
                  <div className="space-y-2" data-magicpath-id="18" data-magicpath-path="ContactFormModal.tsx">
                    <label htmlFor="title" className="text-sm font-medium text-slate-300" data-magicpath-id="19" data-magicpath-path="ContactFormModal.tsx">
                      <span data-magicpath-id="20" data-magicpath-path="ContactFormModal.tsx">Title / Name</span>
                      <span className="text-red-400 ml-1" data-magicpath-id="21" data-magicpath-path="ContactFormModal.tsx">*</span>
                    </label>
                    <input id="title" name="title" type="text" required value={formData.title} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all" placeholder="John Doe" data-magicpath-id="22" data-magicpath-path="ContactFormModal.tsx" />
                  </div>

                  <div className="space-y-2" data-magicpath-id="23" data-magicpath-path="ContactFormModal.tsx">
                    <label htmlFor="mobile" className="text-sm font-medium text-slate-300" data-magicpath-id="24" data-magicpath-path="ContactFormModal.tsx">
                      <span data-magicpath-id="25" data-magicpath-path="ContactFormModal.tsx">Mobile Number</span>
                      <span className="text-red-400 ml-1" data-magicpath-id="26" data-magicpath-path="ContactFormModal.tsx">*</span>
                    </label>
                    <input id="mobile" name="mobile" type="tel" required value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all" placeholder="+971 50 123 4567" data-magicpath-id="27" data-magicpath-path="ContactFormModal.tsx" />
                  </div>

                  <div className="space-y-2" data-magicpath-id="28" data-magicpath-path="ContactFormModal.tsx">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300" data-magicpath-id="29" data-magicpath-path="ContactFormModal.tsx">
                      <span data-magicpath-id="30" data-magicpath-path="ContactFormModal.tsx">Email Address</span>
                      <span className="text-red-400 ml-1" data-magicpath-id="31" data-magicpath-path="ContactFormModal.tsx">*</span>
                    </label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all" placeholder="john@company.com" data-magicpath-id="32" data-magicpath-path="ContactFormModal.tsx" />
                  </div>

                  <div className="space-y-2" data-magicpath-id="33" data-magicpath-path="ContactFormModal.tsx">
                    <label htmlFor="location" className="text-sm font-medium text-slate-300" data-magicpath-id="34" data-magicpath-path="ContactFormModal.tsx">
                      <span data-magicpath-id="35" data-magicpath-path="ContactFormModal.tsx">Location</span>
                      <span className="text-red-400 ml-1" data-magicpath-id="36" data-magicpath-path="ContactFormModal.tsx">*</span>
                    </label>
                    <input id="location" name="location" type="text" required value={formData.location} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all" placeholder="Dubai, UAE" data-magicpath-id="37" data-magicpath-path="ContactFormModal.tsx" />
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="space-y-4" data-magicpath-id="38" data-magicpath-path="ContactFormModal.tsx">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2" data-magicpath-id="39" data-magicpath-path="ContactFormModal.tsx">
                  <Building2 className="size-5 text-purple-400" data-magicpath-id="40" data-magicpath-path="ContactFormModal.tsx" />
                  <span data-magicpath-id="41" data-magicpath-path="ContactFormModal.tsx">Company Information</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-magicpath-id="42" data-magicpath-path="ContactFormModal.tsx">
                  <div className="space-y-2" data-magicpath-id="43" data-magicpath-path="ContactFormModal.tsx">
                    <label htmlFor="company" className="text-sm font-medium text-slate-300" data-magicpath-id="44" data-magicpath-path="ContactFormModal.tsx">
                      <span data-magicpath-id="45" data-magicpath-path="ContactFormModal.tsx">Company Name</span>
                      <span className="text-red-400 ml-1" data-magicpath-id="46" data-magicpath-path="ContactFormModal.tsx">*</span>
                    </label>
                    <input id="company" name="company" type="text" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all" placeholder="Acme Corporation" data-magicpath-id="47" data-magicpath-path="ContactFormModal.tsx" />
                  </div>

                  <div className="space-y-2" data-magicpath-id="48" data-magicpath-path="ContactFormModal.tsx">
                    <label htmlFor="website" className="text-sm font-medium text-slate-300" data-magicpath-id="49" data-magicpath-path="ContactFormModal.tsx">
                      <span data-magicpath-id="50" data-magicpath-path="ContactFormModal.tsx">Website</span>
                    </label>
                    <input id="website" name="website" type="url" value={formData.website} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all" placeholder="https://www.company.com" data-magicpath-id="51" data-magicpath-path="ContactFormModal.tsx" />
                  </div>

                  <div className="space-y-2" data-magicpath-id="52" data-magicpath-path="ContactFormModal.tsx">
                    <label htmlFor="industry" className="text-sm font-medium text-slate-300" data-magicpath-id="53" data-magicpath-path="ContactFormModal.tsx">
                      <span data-magicpath-id="54" data-magicpath-path="ContactFormModal.tsx">Industry</span>
                      <span className="text-red-400 ml-1" data-magicpath-id="55" data-magicpath-path="ContactFormModal.tsx">*</span>
                    </label>
                    <select id="industry" name="industry" required value={formData.industry} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all appearance-none cursor-pointer" data-magicpath-id="56" data-magicpath-path="ContactFormModal.tsx">
                      <option value="" disabled data-magicpath-id="57" data-magicpath-path="ContactFormModal.tsx">
                        <span data-magicpath-id="58" data-magicpath-path="ContactFormModal.tsx">Select your industry</span>
                      </option>
                      {industries.map(ind => <option key={ind} value={ind} data-magicpath-id="59" data-magicpath-path="ContactFormModal.tsx">
                          {ind}
                        </option>)}
                    </select>
                  </div>

                  <div className="space-y-2" data-magicpath-id="60" data-magicpath-path="ContactFormModal.tsx">
                    <label htmlFor="companySize" className="text-sm font-medium text-slate-300" data-magicpath-id="61" data-magicpath-path="ContactFormModal.tsx">
                      <span data-magicpath-id="62" data-magicpath-path="ContactFormModal.tsx">Company Size</span>
                      <span className="text-red-400 ml-1" data-magicpath-id="63" data-magicpath-path="ContactFormModal.tsx">*</span>
                    </label>
                    <select id="companySize" name="companySize" required value={formData.companySize} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all appearance-none cursor-pointer" data-magicpath-id="64" data-magicpath-path="ContactFormModal.tsx">
                      <option value="" disabled data-magicpath-id="65" data-magicpath-path="ContactFormModal.tsx">
                        <span data-magicpath-id="66" data-magicpath-path="ContactFormModal.tsx">Select company size</span>
                      </option>
                      {companySizes.map(size => <option key={size} value={size} data-magicpath-id="67" data-magicpath-path="ContactFormModal.tsx">
                          {size}
                        </option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* ERP Information */}
              <div className="space-y-4" data-magicpath-id="68" data-magicpath-path="ContactFormModal.tsx">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2" data-magicpath-id="69" data-magicpath-path="ContactFormModal.tsx">
                  <Factory className="size-5 text-pink-400" data-magicpath-id="70" data-magicpath-path="ContactFormModal.tsx" />
                  <span data-magicpath-id="71" data-magicpath-path="ContactFormModal.tsx">Current ERP Status</span>
                </h3>
                <div className="space-y-2" data-magicpath-id="72" data-magicpath-path="ContactFormModal.tsx">
                  <label className="text-sm font-medium text-slate-300" data-magicpath-id="73" data-magicpath-path="ContactFormModal.tsx">
                    <span data-magicpath-id="74" data-magicpath-path="ContactFormModal.tsx">Are you using any ERP?</span>
                    <span className="text-red-400 ml-1" data-magicpath-id="75" data-magicpath-path="ContactFormModal.tsx">*</span>
                  </label>
                  <div className="flex gap-4" data-magicpath-id="76" data-magicpath-path="ContactFormModal.tsx">
                    <label className="flex items-center gap-2 cursor-pointer" data-magicpath-id="77" data-magicpath-path="ContactFormModal.tsx">
                      <input type="radio" name="hasErp" value="yes" checked={formData.hasErp === "yes"} onChange={handleChange} className="size-4 text-cyan-500 border-cyan-500/30 focus:ring-cyan-500/50" data-magicpath-id="78" data-magicpath-path="ContactFormModal.tsx" />
                      <span className="text-slate-300" data-magicpath-id="79" data-magicpath-path="ContactFormModal.tsx">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer" data-magicpath-id="80" data-magicpath-path="ContactFormModal.tsx">
                      <input type="radio" name="hasErp" value="no" checked={formData.hasErp === "no"} onChange={handleChange} className="size-4 text-cyan-500 border-cyan-500/30 focus:ring-cyan-500/50" data-magicpath-id="81" data-magicpath-path="ContactFormModal.tsx" />
                      <span className="text-slate-300" data-magicpath-id="82" data-magicpath-path="ContactFormModal.tsx">No</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-4" data-magicpath-id="83" data-magicpath-path="ContactFormModal.tsx">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2" data-magicpath-id="84" data-magicpath-path="ContactFormModal.tsx">
                  <MessageSquare className="size-5 text-orange-400" data-magicpath-id="85" data-magicpath-path="ContactFormModal.tsx" />
                  <span data-magicpath-id="86" data-magicpath-path="ContactFormModal.tsx">Your Requirements</span>
                </h3>
                <div className="space-y-2" data-magicpath-id="87" data-magicpath-path="ContactFormModal.tsx">
                  <label htmlFor="requirements" className="text-sm font-medium text-slate-300" data-magicpath-id="88" data-magicpath-path="ContactFormModal.tsx">
                    <span data-magicpath-id="89" data-magicpath-path="ContactFormModal.tsx">Describe your requirements</span>
                    <span className="text-red-400 ml-1" data-magicpath-id="90" data-magicpath-path="ContactFormModal.tsx">*</span>
                  </label>
                  <textarea id="requirements" name="requirements" required value={formData.requirements} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all resize-none" placeholder="Tell us about your business needs, challenges, and what you're looking to achieve..." data-magicpath-id="91" data-magicpath-path="ContactFormModal.tsx" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4" data-magicpath-id="92" data-magicpath-path="ContactFormModal.tsx">
                <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} type="submit" className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all" data-magicpath-id="93" data-magicpath-path="ContactFormModal.tsx">
                  <span className="flex items-center justify-center gap-2" data-magicpath-id="94" data-magicpath-path="ContactFormModal.tsx">
                    <Send className="size-5" data-magicpath-id="95" data-magicpath-path="ContactFormModal.tsx" />
                    <span data-magicpath-id="96" data-magicpath-path="ContactFormModal.tsx">Submit Inquiry</span>
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div> : null}
    </AnimatePresence>;
}