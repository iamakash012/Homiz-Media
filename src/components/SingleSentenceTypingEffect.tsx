"use client";

import { useState, useEffect } from 'react';

interface SingleSentenceTypingEffectProps {
  sentence: string;
  speed?: number;
}

export function SingleSentenceTypingEffect({ sentence, speed = 75 }: SingleSentenceTypingEffectProps) {
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (text.length < sentence.length) {
      const timeout = setTimeout(() => {
        setText(sentence.substring(0, text.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [text, sentence, speed]);

  return (
    <span className={isComplete ? "" : "typing-cursor"}>{text}</span>
  );
}
