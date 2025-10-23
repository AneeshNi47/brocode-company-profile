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
  return <AnimatePresence>
      {isOpen ? <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

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
      }} className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-cyan-500/20 bg-slate-900/95 backdrop-blur-xl shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 z-10 border-b border-cyan-500/20 bg-slate-900/95 backdrop-blur-xl p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Let's Start Your Journey
                  </h2>
                  <p className="text-sm text-slate-400">
                    <span>Share your requirements and we'll get back to you shortly</span>
                  </p>
                </div>
                <motion.button whileHover={{
              scale: 1.1,
              rotate: 90
            }} whileTap={{
              scale: 0.9
            }} onClick={onClose} className="inline-flex items-center justify-center size-10 rounded-full border border-cyan-500/30 bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all" aria-label="Close modal">
                  <X className="size-5" />
                </motion.button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <User className="size-5 text-cyan-400" />
                  <span>Personal Information</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium text-slate-300">
                      <span>Title / Name</span>
                      <span className="text-red-400 ml-1">*</span>
                    </label>
                    <input id="title" name="title" type="text" required value={formData.title} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all" placeholder="John Doe" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mobile" className="text-sm font-medium text-slate-300">
                      <span>Mobile Number</span>
                      <span className="text-red-400 ml-1">*</span>
                    </label>
                    <input id="mobile" name="mobile" type="tel" required value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all" placeholder="+971 50 123 4567" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">
                      <span>Email Address</span>
                      <span className="text-red-400 ml-1">*</span>
                    </label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium text-slate-300">
                      <span>Location</span>
                      <span className="text-red-400 ml-1">*</span>
                    </label>
                    <input id="location" name="location" type="text" required value={formData.location} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all" placeholder="Dubai, UAE" />
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Building2 className="size-5 text-purple-400" />
                  <span>Company Information</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-300">
                      <span>Company Name</span>
                      <span className="text-red-400 ml-1">*</span>
                    </label>
                    <input id="company" name="company" type="text" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all" placeholder="Acme Corporation" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium text-slate-300">
                      <span>Website</span>
                    </label>
                    <input id="website" name="website" type="url" value={formData.website} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all" placeholder="https://www.company.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="industry" className="text-sm font-medium text-slate-300">
                      <span>Industry</span>
                      <span className="text-red-400 ml-1">*</span>
                    </label>
                    <select id="industry" name="industry" required value={formData.industry} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all appearance-none cursor-pointer">
                      <option value="" disabled>
                        <span>Select your industry</span>
                      </option>
                      {industries.map(ind => <option key={ind} value={ind}>
                          {ind}
                        </option>)}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="companySize" className="text-sm font-medium text-slate-300">
                      <span>Company Size</span>
                      <span className="text-red-400 ml-1">*</span>
                    </label>
                    <select id="companySize" name="companySize" required value={formData.companySize} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all appearance-none cursor-pointer">
                      <option value="" disabled>
                        <span>Select company size</span>
                      </option>
                      {companySizes.map(size => <option key={size} value={size}>
                          {size}
                        </option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* ERP Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Factory className="size-5 text-pink-400" />
                  <span>Current ERP Status</span>
                </h3>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    <span>Are you using any ERP?</span>
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="hasErp" value="yes" checked={formData.hasErp === "yes"} onChange={handleChange} className="size-4 text-cyan-500 border-cyan-500/30 focus:ring-cyan-500/50" />
                      <span className="text-slate-300">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="hasErp" value="no" checked={formData.hasErp === "no"} onChange={handleChange} className="size-4 text-cyan-500 border-cyan-500/30 focus:ring-cyan-500/50" />
                      <span className="text-slate-300">No</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <MessageSquare className="size-5 text-orange-400" />
                  <span>Your Requirements</span>
                </h3>
                <div className="space-y-2">
                  <label htmlFor="requirements" className="text-sm font-medium text-slate-300">
                    <span>Describe your requirements</span>
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                  <textarea id="requirements" name="requirements" required value={formData.requirements} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-xl border border-cyan-500/20 bg-slate-800/50 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all resize-none" placeholder="Tell us about your business needs, challenges, and what you're looking to achieve..." />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} type="submit" className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all">
                  <span className="flex items-center justify-center gap-2">
                    <Send className="size-5" />
                    <span>Submit Inquiry</span>
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div> : null}
    </AnimatePresence>;
}