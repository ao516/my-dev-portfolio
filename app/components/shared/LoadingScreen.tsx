"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  isLoading: boolean
  onProceed: () => void
}

export default function LoadingScreen({ isLoading, onProceed }: LoadingScreenProps) {
  const [mounted, setMounted] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [displayDescription, setDisplayDescription] = useState("")
  const [showNameCursor, setShowNameCursor] = useState(true)
  const [showDescCursor, setShowDescCursor] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  
  const fullText = "Aoi Goto"
  const fullDescription = "人の「心」を豊かにするテクノロジーをつくる"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isLoading || !mounted) return

    // 名前の一文字ずつ表示
    let nameIndex = 0
    const nameInterval = setInterval(() => {
      if (nameIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, nameIndex))
        nameIndex++
      } else {
        clearInterval(nameInterval)
        
        // 名前のカーソルをフェードアウト
        setTimeout(() => {
          setShowNameCursor(false)
        }, 1000) // 1秒間カーソルを表示してからフェードアウト
        
        // 説明文の一文字ずつ表示（名前表示完了後）
        setTimeout(() => {
          setShowDescCursor(true) // 説明文のカーソルを表示開始
          let descIndex = 0
          const descInterval = setInterval(() => {
            if (descIndex <= fullDescription.length) {
              setDisplayDescription(fullDescription.slice(0, descIndex))
              descIndex++
            } else {
              clearInterval(descInterval)
              
              // 説明文のカーソルをフェードアウト
              setTimeout(() => {
                setShowDescCursor(false)
                
                // アニメーション完了後、少し待ってからフェードアウト開始
                setTimeout(() => {
                  setIsFadingOut(true)
                  
                  // フェードアウト完了後にポートフォリオサイトに進む
                  setTimeout(() => {
                    onProceed()
                  }, 1500) // 1.5秒間のフェードアウト
                }, 2000) // 2秒間待機
              }, 1000) // 1秒間カーソルを表示してからフェードアウト
            }
          }, 100) // 100ms間隔で一文字ずつ
        }, 0) 
      }
    }, 100) // 200ms間隔で一文字ずつ

    return () => {
      clearInterval(nameInterval)
    }
  }, [isLoading, mounted, onProceed])

  if (!isLoading || !mounted) return null

  return (
    <div className="fixed inset-0 bg-black overflow-hidden z-50 font-serif">
      {/* 背景アニメーション - コードの流れ */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400 font-mono text-sm"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 50,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            {["Flutter()", "Dart{}", "Widget", "State", "Build()", "async", "await"][Math.floor(Math.random() * 7)]}
          </motion.div>
        ))}
      </div>

      {/* メインテキストのアニメーション */}
      <motion.div 
        className="text-center z-10 flex items-center justify-center h-full"
        animate={isFadingOut ? { 
          y: -100,
          opacity: 0 
        } : { 
          y: 0,
          opacity: 1 
        }}
        transition={{ 
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        <div>
          {/* 英語名 */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {displayText}
            {showNameCursor && (
              <motion.span
                className="animate-pulse"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                |
              </motion.span>
            )}
          </motion.h1>

          {/* 日本語説明 */}
          <motion.p
            className="text-xl md:text-xl text-cyan-400 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {displayDescription}
            {showDescCursor && (
              <motion.span
                className="animate-pulse"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                |
              </motion.span>
            )}
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
} 