"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { EmojiGrid } from "@/components/emoji-grid";
import { emojiData, categories } from "@/lib/emoji-data";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmojis = useMemo(() => {
    if (!searchQuery.trim()) {
      return emojiData;
    }

    const query = searchQuery.toLowerCase();
    return emojiData.filter(
      (emoji) =>
        emoji.name.toLowerCase().includes(query) ||
        emoji.category.toLowerCase().includes(query) ||
        emoji.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const suggestions = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) {
      return [];
    }

    const query = searchQuery.toLowerCase();
    const uniqueSuggestions = new Set<string>();

    emojiData.forEach((emoji) => {
      if (emoji.name.toLowerCase().includes(query)) {
        uniqueSuggestions.add(emoji.name);
      }
      emoji.tags.forEach((tag) => {
        if (tag.toLowerCase().includes(query)) {
          uniqueSuggestions.add(tag);
        }
      });
    });

    return Array.from(uniqueSuggestions).slice(0, 8);
  }, [searchQuery]);

  const emojisByCategory = useMemo(() => {
    if (searchQuery.trim()) {
      return null;
    }

    return categories.map((category) => ({
      category,
      emojis: emojiData.filter((emoji) => emoji.category === category),
    }));
  }, [searchQuery]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      <Navbar />

      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionClick}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {searchQuery.trim() ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Search Results
              </h2>
              <p className="text-muted-foreground">
                Found {filteredEmojis.length} emoji
                {filteredEmojis.length !== 1 ? "s" : ""}
              </p>
            </div>
            <EmojiGrid emojis={filteredEmojis} />
          </motion.div>
        ) : (
          <div className="space-y-16">
            {emojisByCategory?.map((categoryGroup, index) => (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EmojiGrid
                  emojis={categoryGroup.emojis}
                  category={categoryGroup.category}
                />
              </motion.div>
            ))}
          </div>
        )}
      </main>

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
              href="#"
            >
              Products
            </a>
            <a
              className="text-muted-foreground hover:text-foreground transition"
              href="#"
            >
              About
            </a>
            <a
              className="text-muted-foreground hover:text-foreground transition"
              href="#"
            >
              Support
            </a>
            <a
              className="text-muted-foreground hover:text-foreground transition"
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
