"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Sparkles, Target, Users, Zap } from "lucide-react";

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

export default function About() {
  const features = [
    {
      icon: Sparkles,
      title: "Simple & Beautiful",
      description:
        "Clean, intuitive interface designed for everyone. No complexity, just pure emoji searching bliss.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance with instant search results. Find your perfect emoji in milliseconds.",
    },
    {
      icon: Target,
      title: "Smart Search",
      description:
        "Search by name, category, or tags. Get intelligent suggestions as you type.",
    },
    {
      icon: Users,
      title: "User Focused",
      description:
        "Built with user feedback in mind. Continuously improving to serve you better.",
    },
  ];

  const stats = [
    { number: "1000+", label: "Emojis" },
    { number: "10+", label: "Categories" },
    { number: "100%", label: "Free" },
    { number: "∞", label: "Uses" },
  ];

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
              About EmojiHub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make emoji discovery and usage effortless.
              With over 1000 carefully curated emojis, powerful search
              capabilities, and an intuitive interface, EmojiHub is your
              one-stop destination for all emoji needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-foreground/80 leading-relaxed">
                EmojiHub was born from a simple frustration: finding the right
                emoji shouldn't be complicated. We realized that despite having
                thousands of emojis at our fingertips, searching for that
                perfect one was often tedious and time-consuming.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                So we set out to create a platform that would make emoji
                discovery intuitive, fast, and enjoyable. The result is EmojiHub
                - a beautifully designed, lightning-fast emoji search engine
                that puts the perfect emoji just one click away.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Whether you're crafting the perfect message, designing content,
                or just looking to express yourself with style, EmojiHub is here
                to help.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-bold">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Massive emoji collection with 1000+",
                    "Organized by 10+ intuitive categories",
                    "Instant copy to clipboard functionality",
                    "Beautiful, responsive design",
                    "Completely free to use",
                    "Fast and optimized performance",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-amber-500">✨</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-amber-500/20 text-amber-500 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              By The Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-8 text-center"
                >
                  <motion.div
                    className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              We're committed to continuously improving EmojiHub. We listen to
              user feedback, stay updated with new emoji releases, and
              constantly optimize our platform to deliver the best possible
              experience. Your emoji journey is our priority.
            </p>
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
