import { useRef, useEffect } from 'react'

import Reveal from 'reveal.js';

import revealSettings from '../settings.jsx'
import { addFooter } from '../plugins/quarto-support.js'

import RevealMath from 'reveal.js/plugin/math/plugin.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import '../Presentation.scss'

export default function Deck({ children }) {
  const deckDivRef = useRef();
  const deckRef = useRef();

  useEffect(() => {
      // Prevents double initialization in strict mode
      if (deckRef.current) return;

      deckRef.current = new Reveal(deckDivRef.current, revealSettings);

      deckRef.current.initialize({
        katex: {
            version: 'latest',
            delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: true },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: false },
            ],
            ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
        },
        plugins: [RevealMath.KaTeX]
      }).then(() => {
          addFooter(deckRef.current);

      });

      return () => {
          try {
              if (deckRef.current) {
                  deckRef.current.destroy();
                  deckRef.current = null;
              }
          } catch (e) {
              console.warn("Reveal.js destroy call failed.");
          }
      };
  }, []);

  return (
      <div className="reveal" ref={deckDivRef}>
        <div className="slides">
            {children}
        </div>
      </div>
  );
}