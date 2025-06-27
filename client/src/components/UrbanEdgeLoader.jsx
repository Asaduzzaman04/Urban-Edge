import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const UrbanEdgeLoader = () => {
  const [loadingDone, setLoadingDone] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoadingDone(true)
      }, 500) // optional small delay for smooth fade-out
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <AnimatePresence>
      {!loadingDone && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-accent"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.svg
            viewBox="0 0 800 200"
            className="w-3/4 md:w-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <defs>
              <pattern
                id="wave"
                x="0"
                y="0"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <path d="M0 30 Q 30 60 60 30 T 120 30 V 120 H 0 Z" fill="black">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    from="0 0"
                    to="-60 0"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </path>
              </pattern>

              <mask id="text-mask">
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="80"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  fill="white"
                >
                  Urban Edge
                </text>
              </mask>
            </defs>

            {/* Gray outline */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="80"
              fontFamily="sans-serif"
              fontWeight="bold"
              fill="none"
              stroke="#999"
              strokeWidth="2"
            >
              Urban Edge
            </text>

            {/* Wavy fill */}
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#wave)"
              mask="url(#text-mask)"
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default UrbanEdgeLoader
