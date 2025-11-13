'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check } from 'lucide-react';
import type { Emoji } from '@/lib/emoji-data';

interface EmojiCardProps {
  emoji: Emoji;
  index: number;
}

export function EmojiCard({ emoji, index }: EmojiCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(emoji.emoji);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.3,
        delay: index * 0.02,
        type: 'spring',
        stiffness: 200,
        damping: 20,
      }}
      whileHover={{
        scale: 1.15,
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      className="relative group bg-card hover:bg-accent border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg overflow-hidden"
    >
      <div className="relative z-10">
        <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110">
          {emoji.emoji}
        </div>
        <div className="text-xs font-medium text-muted-foreground line-clamp-1">
          {emoji.name}
        </div>
      </div>

      {copied && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="absolute inset-0 bg-green-500/10 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="bg-green-500 text-white rounded-full p-2"
          >
            <Check className="h-6 w-6" />
          </motion.div>
        </motion.div>
      )}

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-300"
        initial={false}
      />
    </motion.button>
  );
}
