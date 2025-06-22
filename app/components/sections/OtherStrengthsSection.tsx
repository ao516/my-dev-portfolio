"use client"

import { motion } from "framer-motion"

export default function OtherStrengthsSection() {
  const strengths = [
    {
      title: "デザイン力",
      description: "Figmaを使ったUI/UXデザイン、ロゴデザイン、ブランディング",
      icon: "🎨",
      details: [
        "アプリのUI/UXデザイン",
        "ロゴ・アイコンデザイン",
        "ブランドカラー設計",
        "ユーザビリティの向上"
      ]
    },
    {
      title: "動画編集",
      description: "Premiere Pro、After Effectsを使った動画制作・編集",
      icon: "🎬",
      details: [
        "プロモーション動画制作",
        "アニメーション作成",
        "動画編集・加工",
        "モーショングラフィックス"
      ]
    },
    {
      title: "コミュニケーション",
      description: "チーム開発での円滑なコミュニケーションとドキュメント作成",
      icon: "💬",
      details: [
        "技術文書の作成",
        "チーム内での情報共有",
        "クライアントとの折衝",
        "プレゼンテーション"
      ]
    },
    {
      title: "問題解決力",
      description: "複雑な課題を分析し、効率的な解決策を提案",
      icon: "🔍",
      details: [
        "課題の分析・整理",
        "最適解の提案",
        "効率化の実現",
        "継続的な改善"
      ]
    },
    {
      title: "学習能力",
      description: "新しい技術やツールを素早く習得し、実践に活かす",
      icon: "📚",
      details: [
        "新しい技術の習得",
        "ベストプラクティスの学習",
        "実践的な応用",
        "知識の共有"
      ]
    },
    {
      title: "プロジェクト管理",
      description: "開発プロジェクトの計画、実行、進捗管理",
      icon: "📋",
      details: [
        "プロジェクト計画立案",
        "タスク管理・進捗追跡",
        "リスク管理",
        "品質保証"
      ]
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-900" id="other-strengths">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">プログラミング以外の強み</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            技術力だけでなく、デザイン、動画編集、コミュニケーションなど多岐にわたるスキルを持っています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{strength.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">{strength.title}</h3>
              <p className="text-gray-300 mb-4">{strength.description}</p>
              <ul className="space-y-2">
                {strength.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-sm text-gray-400 flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">総合的な問題解決能力</h3>
            <p className="text-lg text-gray-900">
              技術、デザイン、コミュニケーションを組み合わせて、<br />
              クライアントの課題を包括的に解決できるのが私の強みです
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 