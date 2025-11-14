"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@emojihub.com",
      link: "mailto:hello@emojihub.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "San Francisco, CA, USA",
      link: "#",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      toast.success("Message sent successfully! We will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(true);
      setIsLoading(false);

      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Reach out
              to us and we'll respond as quickly as we can.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-amber-500/20 text-amber-500 mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground hover:text-amber-500 transition-colors">
                    {info.content}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card border border-border rounded-3xl p-8 sm:p-12">
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="mb-6 bg-green-500/10 border border-green-500/30 rounded-2xl p-6 flex items-center gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-semibold text-green-700 dark:text-green-400">
                      Message Sent!
                    </p>
                    <p className="text-sm text-green-600/80 dark:text-green-500/80">
                      Thanks for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm"
              >
                <p>
                  We typically respond to all inquiries within 24 hours during
                  business days.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <footer className="mt-20 border-t border-border py-12 bg-background/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side Logo + Text */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2 cursor-pointer">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-12 object-contain"
              />
              <h2 className="text-2xl font-bold font-sans text-foreground leading-none">
                EmojiHub
              </h2>
            </div>

            <p className="text-muted-foreground text-sm">
              © 2025 EmojiHub. All rights reserved.
            </p>
          </div>

          {/* Right Side Links */}
          <div className="flex gap-8 text-sm">
            <a
              className="text-muted-foreground hover:text-foreground transition"
              href="/"
            >
              Products
            </a>
            <a
              className="text-muted-foreground hover:text-foreground transition"
              href="/about"
            >
              About
            </a>
            <a
              className="text-muted-foreground hover:text-foreground transition"
              href="/support"
            >
              Support
            </a>
            <a
              className="text-muted-foreground hover:text-foreground transition"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
