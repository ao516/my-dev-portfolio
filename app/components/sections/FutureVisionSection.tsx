"use client"

import { motion } from "framer-motion"

export default function FutureVisionSection() {
  const goals = [
    {
      period: "短期目標（1-2年）",
      items: [
        {
          title: "技術力の向上",
          description: "Flutter/Dartのエキスパートとして、より高度なアプリ開発技術を習得",
          icon: "🚀"
        },
        {
          title: "ポートフォリオの充実",
          description: "より多くの実績を作り、技術力を証明するプロジェクトを完成",
          icon: "📱"
        },
        {
          title: "コミュニティ活動",
          description: "技術ブログの執筆、勉強会への参加・登壇を通じて知識を共有",
          icon: "🌐"
        }
      ]
    },
    {
      period: "中期目標（3-5年）",
      items: [
        {
          title: "リーダーシップ",
          description: "チーム開発でのリーダー経験を積み、プロジェクトマネジメント能力を向上",
          icon: "👥"
        },
        {
          title: "技術顧問",
          description: "スタートアップや企業の技術顧問として、戦略的な技術アドバイスを提供",
          icon: "💡"
        },
        {
          title: "プロダクト開発",
          description: "独自のプロダクトを企画・開発し、ユーザーに価値を提供",
          icon: "🎯"
        }
      ]
    },
    {
      period: "長期目標（5年以上）",
      items: [
        {
          title: "起業・独立",
          description: "自分の会社を立ち上げ、革新的なソリューションを提供する企業を経営",
          icon: "🏢"
        },
        {
          title: "技術教育",
          description: "次世代のエンジニアを育成する教育事業やメンタリングを展開",
          icon: "🎓"
        },
        {
          title: "社会貢献",
          description: "技術を通じて社会課題の解決に貢献し、より良い世界の実現に携わる",
          icon: "🌍"
        }
      ]
    }
  ]

  const values = [
    {
      title: "継続的な学習",
      description: "常に新しい技術やトレンドを学び、自己成長を続ける",
      icon: "📚"
    },
    {
      title: "ユーザー第一",
      description: "ユーザーのニーズを最優先に考え、価値のあるプロダクトを作る",
      icon: "❤️"
    },
    {
      title: "品質へのこだわり",
      description: "高い品質基準を維持し、信頼されるプロダクトを提供する",
      icon: "✨"
    },
    {
      title: "チームワーク",
      description: "協力してより良い成果を生み出すチームワークを重視する",
      icon: "🤝"
    }
  ]

  return (
    <section className="py-20 px-4 font-serif" id="future-vision">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">将来の展望</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            技術を通じて社会に貢献し、継続的に成長していくことを目指しています
          </p>
        </motion.div>

        {/* 目標 */}
        <div className="space-y-12 mb-20">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">{goal.period}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {goal.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-colors"
                  >
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h4 className="text-lg font-bold mb-3 text-cyan-400">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 価値観 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">大切にしている価値観</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-lg p-6 border border-cyan-400/30 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold mb-3 text-cyan-400">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* メッセージ */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">一緒に未来を創りませんか？</h3>
            <p className="text-lg text-gray-900 mb-6">
              技術を通じて、あなたのビジョンを現実に変えるお手伝いをします。<br />
              新しいプロジェクトやチャレンジングな課題について、お気軽にご相談ください。
            </p>
            <a
              href="#contact"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 