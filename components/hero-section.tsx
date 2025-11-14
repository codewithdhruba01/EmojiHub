'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

export function HeroSection({
  searchQuery,
  onSearchChange,
  suggestions,
  onSuggestionClick,
}: HeroSectionProps) {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent leading-tight">
            Discover Perfect Emojis
          </h1>
          <p className="text-lg font-mono sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Search through hundreds of emojis. Click to copy instantly. Express
            yourself with style.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-2xl mx-auto z-40"
        >
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-20">
              <Search className="h-5 w-5 text-amber-500" />
            </div>
            <Input
              type="text"
              placeholder="Search emojis by name or tag..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-6 text-lg rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border focus:border-amber-500 transition-all duration-300 focus:shadow-lg focus:shadow-amber-500/20"
            />
          </div>

          {suggestions.length > 0 && searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-3 w-full bg-card/95 backdrop-blur-md border-2 border-amber-500/30 rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="p-1 max-h-80 overflow-y-auto custom-scrollbar">
                {suggestions.map((suggestion, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.02, x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSuggestionClick(suggestion)}
                    className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-orange-500/20 rounded-xl transition-all duration-200 text-sm font-medium text-foreground/80 hover:text-foreground border-l-4 border-transparent hover:border-amber-500/50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="text-amber-500">✨</span>
                      {suggestion}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-2 justify-center text-sm text-muted-foreground"
        >
          <span>Popular:</span>
          {['heart', 'fire', 'smile', 'party', 'rocket'].map((tag, index) => (
            <motion.button
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSearchChange(tag)}
              className="px-3 py-1 bg-accent hover:bg-accent/80 rounded-full transition-colors duration-200"
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
