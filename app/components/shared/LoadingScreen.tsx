"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  isLoading: boolean
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isLoading || !mounted) return null

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-50">
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
      <div className="text-center z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          ごとーあおい
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-cyan-400 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          モバイルアプリ開発で社会課題を解決するプレーヤー兼マネージャー
        </motion.p>
      </div>

      {/* スクロール促進アイコン */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-white text-sm"
        >
          ↓ Scroll
        </motion.div>
      </motion.div>
    </div>
  )
} 