"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  HelpCircle,
  BookOpen,
  MessageSquare,
  Zap,
  ChevronDown,
} from "lucide-react";

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

interface FAQItem {
  question: string;
  answer: string;
}

export default function Support() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How do I copy an emoji?",
      answer:
        "Simply click on any emoji card and it will be instantly copied to your clipboard. You will see a green checkmark animation confirming the copy action.",
    },
    {
      question: "Can I search emojis by category?",
      answer:
        "Yes! You can search by category name like smileys, animals, food, etc. Or browse categories on the home page to see all emojis organized by type.",
    },
    {
      question: "How many emojis are available?",
      answer:
        "EmojiHub features over 1000 carefully curated emojis organized into 10+ categories including Smileys, Hearts, Gestures, Animals, Food, Sports, Transport, Objects, Symbols, and Nature.",
    },
    {
      question: "Is EmojiHub really free?",
      answer:
        "Absolutely! EmojiHub is completely free to use with no hidden charges or premium features. We believe emoji searching should be accessible to everyone.",
    },
    {
      question: "Can I use emojis copied from EmojiHub anywhere?",
      answer:
        "Yes! Emojis copied from EmojiHub are standard Unicode emojis that work everywhere - social media, emails, messaging apps, documents, and more.",
    },
    {
      question: "Do you add new emojis regularly?",
      answer:
        "We continuously update our collection to include new emojis as they become available. Stay tuned for regular updates!",
    },
    {
      question: "How do search suggestions work?",
      answer:
        "As you type in the search bar, EmojiHub provides intelligent suggestions based on emoji names and tags. Click any suggestion to quickly search for that term.",
    },
    {
      question: "Does EmojiHub work on mobile?",
      answer:
        "Yes! EmojiHub is fully responsive and works beautifully on all devices - phones, tablets, and desktops.",
    },
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Learn how to get the most out of EmojiHub",
      link: "#",
    },
    {
      icon: MessageSquare,
      title: "Community Forum",
      description: "Connect with other emoji enthusiasts",
      link: "#",
    },
    {
      icon: Zap,
      title: "Tips & Tricks",
      description: "Discover advanced emoji searching techniques",
      link: "#",
    },
    {
      icon: HelpCircle,
      title: "Contact Support",
      description: "Get help from our support team",
      link: "/contact",
    },
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
              Support & Help
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions, explore resources, and get
              support whenever you need it.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.a
                  key={index}
                  href={resource.link}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-amber-500/20 text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-amber-500 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/50 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-left text-foreground">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-amber-500 flex-shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-accent/30 border-t border-border">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
            <HelpCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Didn't find what you need?
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Our support team is here to help! Reach out with any questions or
              feedback you might have.
            </p>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
              <a href="/contact">Contact Support</a>
            </Button>
          </motion.div>
        </div>
      </div>
      <footer className="mt-20 border-t border-border py-12 bg-background/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side Logo + Text */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
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
