"use client"

import { motion } from "framer-motion"
import { Monitor, Rocket, Code, Users, Heart, Lightbulb, Star } from "lucide-react"
import Image from "next/image"

export default function PhilosophySection() {
  return (
    <section className="py-20 px-4 font-serif" id="philosophy">
      <div className="max-w-6xl mx-auto">
        {/* メインコンテンツ: 顔写真 + テキスト */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* 左側: 顔写真 */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">
              <Image
                src="/profile-photo.jpg" // 顔写真のパスを指定してください
                alt="Aoi Goto"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* 右側: テキストコンテンツ */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-cyan-400">私の原動力</h2>
            <div className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              人を喜ばせ、人の役に立つ
            </div>
            <p className="text-xl text-gray-400">これが私のプログラミングの原点です。</p>
          </div>
        </motion.div>

        {/* 探求の歴史 */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
            <Monitor className="w-16 h-16 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">幼い頃からの探求</h3>
            <p className="text-gray-400">テクノロジーへの純粋な好奇心</p>
          </div>
          <div className="flex flex-col items-center">
            <Rocket className="w-16 h-16 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">無限の可能性への魅了</h3>
            <p className="text-gray-400">プログラミングで実現できる未来</p>
          </div>
        </motion.div>

        {/* プレーヤー & マネージャー */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            プレーヤー <span className="text-cyan-400">&</span> マネージャー
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center p-6 border border-gray-800 rounded-lg">
              <Code className="w-12 h-12 text-cyan-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">技術を追求する情熱</h4>
              <p className="text-gray-400 text-center">常に手を動かし、最新技術をキャッチアップ</p>
            </div>
            <div className="flex flex-col items-center p-6 border border-gray-800 rounded-lg">
              <Users className="w-12 h-12 text-cyan-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">チームを導く力</h4>
              <p className="text-gray-400 text-center">生徒会長経験で培ったリーダーシップ</p>
            </div>
          </div>
        </motion.div>

        {/* 最終メッセージ */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center mb-6">
            <Heart className="w-8 h-8 text-red-400 mr-4" />
            <Lightbulb className="w-8 h-8 text-yellow-400 mr-4" />
            <Star className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            ユーザーの心に寄り添う温かさ、
            <br />
            感動を創造するテクノロジー
          </h3>
        </motion.div>
      </div>
    </section>
  )
} 