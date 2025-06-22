"use client"

import { motion } from "framer-motion"

export default function TechStackSection() {
  const programmingLanguages = [
    { name: "Dart", level: "expert", icon: "🎯" },
    { name: "JavaScript", level: "advanced", icon: "🟨" },
    { name: "TypeScript", level: "advanced", icon: "🔷" },
    { name: "Python", level: "intermediate", icon: "🐍" },
    { name: "C言語", level: "intermediate", icon: "⚙️" },
    { name: "SQL", level: "intermediate", icon: "🗃️" },
  ]

  const frameworks = [
    { name: "Flutter", level: "expert", icon: "💙" },
    { name: "React Native", level: "advanced", icon: "⚛️" },
    { name: "Riverpod", level: "advanced", icon: "🌊" },
    { name: "GoRouter", level: "advanced", icon: "🛣️" },
  ]

  const databases = [
    { name: "Firestore", icon: "🔥" },
    { name: "SQLite", icon: "📱" },
    { name: "MySQL", icon: "🐬" },
    { name: "スプレッドシート", icon: "📊" },
  ]

  const cloudServices = [
    { name: "Firebase", icon: "🔥" },
    { name: "Algolia", icon: "🔍" },
    { name: "Google Apps Script", icon: "📝" },
  ]

  const developmentTools = [
    { name: "Git", icon: "🌿" },
    { name: "GitHub", icon: "🐙" },
    { name: "Figma", level: "expert", icon: "🎨" },
    { name: "VS Code", icon: "💻" },
    { name: "Premiere Pro", icon: "🎬" },
    { name: "After Effects", icon: "✨" },
  ]

  const renderTechGrid = (items: any[], gridCols: string) => (
    <div className={`grid grid-cols-2 md:grid-cols-3 ${gridCols} gap-6`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg border text-center ${
            item.level === "expert"
              ? "border-cyan-400 bg-cyan-400/10"
              : item.level === "advanced"
                ? "border-blue-400 bg-blue-400/10"
                : "border-gray-600 bg-gray-800"
          }`}
        >
          <div className="text-2xl mb-2">{item.icon}</div>
          <div className="font-bold text-sm">{item.name}</div>
          {item.level === "expert" && <div className="text-xs text-cyan-400 mt-1">得意</div>}
        </div>
      ))}
    </div>
  )

  return (
    <section className="py-20 px-4" id="tech-stack">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">技術スタック</h2>
        </motion.div>

        <div className="space-y-12">
          {/* プログラミング言語 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">プログラミング言語</h3>
            {renderTechGrid(programmingLanguages, "lg:grid-cols-6")}
          </motion.div>

          {/* フレームワーク/ライブラリ */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">フレームワーク/ライブラリ</h3>
            {renderTechGrid(frameworks, "lg:grid-cols-4")}
          </motion.div>

          {/* データベース */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">データベース</h3>
            {renderTechGrid(databases, "md:grid-cols-4")}
          </motion.div>

          {/* クラウドサービス */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">クラウドサービス</h3>
            {renderTechGrid(cloudServices, "md:grid-cols-3")}
          </motion.div>

          {/* 開発ツール */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">開発ツール/その他</h3>
            {renderTechGrid(developmentTools, "lg:grid-cols-6")}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 