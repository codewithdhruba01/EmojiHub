'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { EmojiCard } from './emoji-card';
import type { Emoji } from '@/lib/emoji-data';

interface EmojiGridProps {
  emojis: Emoji[];
  category?: string;
}

export function EmojiGrid({ emojis, category }: EmojiGridProps) {
  if (emojis.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-semibold mb-2">No emojis found</h3>
        <p className="text-muted-foreground">
          Try searching with different keywords
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      {category && (
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold mb-6 text-foreground"
        >
          {category}
        </motion.h2>
      )}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {emojis.map((emoji, index) => (
            <EmojiCard key={`${emoji.emoji}-${index}`} emoji={emoji} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
