"use client"

import { motion } from "framer-motion"
import { Monitor, Rocket, Code, Users, Heart, Lightbulb, Star } from "lucide-react"
import Image from "next/image"

export default function PhilosophySection() {
  return (
    <section className="py-20 px-4 font-serif" id="philosophy">
      <div className="max-w-6xl mx-auto">
        {/* メインコンテンツ: 顔写真 + 自己紹介 + 信念 */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* 左側: 顔写真 */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">
              <Image
                src="/profile-photo.jpg"
                alt="Aoi Goto"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* 右側: 自己紹介 + 信念 */}
          <div className="text-center md:text-left max-w-2xl">
            {/* 自己紹介 */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">後藤碧生</h1>
              <p className="text-lg md:text-xl text-gray-300">立命館大学 理工学部 機械工学科</p>
            </div>

            {/* 信念 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">私の信念</h2>
              <div className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                まだ見ぬ価値と感動を
              </div>
              <p className="text-lg text-gray-400">これが私がエンジニアであり続ける理由です</p>
            </div>
          </div>
        </motion.div>

        {/* プレーヤー & マネージャー */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-4">
            <p className="text-lg text-gray-400">私の最大の強み</p>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            プレーヤー <span className="text-cyan-400">&</span> マネージャー
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center p-6 border border-gray-800 rounded-lg">
              <Code className="w-12 h-12 text-cyan-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">プレーヤー</h4>
              <p className="text-gray-400 text-center">常に手を動かし、最新技術をキャッチアップ<br />エンジニアとして技術力を高めています</p>
            </div>
            <div className="flex flex-col items-center p-6 border border-gray-800 rounded-lg">
              <Users className="w-12 h-12 text-cyan-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">マネージャー</h4>
              <p className="text-gray-400 text-center">生徒会長経験で培ったリーダーシップを活かし、<br />現在も2つの団体の代表を務めています</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 