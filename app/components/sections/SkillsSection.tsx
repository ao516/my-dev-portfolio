"use client"

import { motion } from "framer-motion"
import { Smartphone, Palette, Settings, Users, Heart, Target } from "lucide-react"

export default function SkillsSection() {
  const skills = [
    { icon: Palette, label: "UI/UX設計" },
    { icon: Settings, label: "プロジェクト\nマネジメント" },
    { icon: Users, label: "チームリード" },
    { icon: Heart, label: "社会課題解決\nへの意欲" },
    { icon: Target, label: "多角的な\n問題解決能力" },
  ]

  return (
    <section className="py-20 px-4 bg-gray-900 font-serif" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-400">私の専門分野</h2>
        </motion.div>

        {/* メインスキル */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-8 border-2 border-cyan-400 rounded-2xl mb-8">
            <Smartphone className="w-16 h-16 text-cyan-400 mr-6" />
            <div className="text-left">
              <h3 className="text-4xl md:text-5xl font-bold">Flutter/Dart</h3>
              <p className="text-xl text-gray-400">モバイルアプリ開発</p>
            </div>
          </div>
        </motion.div>

        {/* その他のスキル */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <skill.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <p className="text-center text-sm font-medium whitespace-pre-line">{skill.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 