"use client"

import { motion } from "framer-motion"
import { Zap, Settings, Database, Smartphone, Camera, Lightbulb, MessagesSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function OtherProjectsSection() {
  const projects = [
    {
      icon: Settings, 
      iconColor: "text-yellow-400", 
      title: "みずのわプロジェクト",
      image: "https://placehold.co/300x200/1a1a1a/00d4ff?text=Micro+Hydro+Power",
      description: "機械工学の学びを活かし、地域資源を活用した持続可能なマイクロ水力発電システムを開発し、地域活性化と環境貢献を目指すプロジェクト。",
      role: "発起人、代表として、地域住民との連携、技術調査、計画策定、資金調達を主導。",
      tech: "CAD, 3Dプリンター (プロトタイプ製作)",
      learning: "技術開発に留まらない、社会課題解決と持続可能な地域貢献への実践。",
    },
    {
      icon: MessagesSquare, // そのまま
      iconColor: "text-green-400", // そのまま
      title: "LINE公式アカウント", // そのまま
      image: "https://placehold.co/300x200/1a1a1a/00d4ff?text=LINE+Bot+System", // そのまま
      description: "高校文化祭の運営効率化のため、生徒向けに開発・運用した自動応答型LINE公式アカウント。",
      role: "企画、開発、運用全般。",
      tech: "Google Apps Script, スプレッドシート",
      learning: "プログラミングによる身近な問題解決と、ユーザーへの直接的な価値提供。",
    },
    {
      icon: Database, // そのまま
      iconColor: "text-purple-400", // そのまま
      title: "Pythonを用いた脳波データ分析", // そのまま
      image: "https://placehold.co/300x200/1a1a1a/00d4ff?text=Brain+Wave+Analysis", // そのまま
      description: "大学の研究室で、脳波データを用いたパターン認識にPythonを活用した研究。",
      role: "研究メンバーとして、データの解析と分類器の適用を担当。",
      tech: "Python, サポートベクターマシン, KNNなどの機械学習アルゴリズム",
      learning: "複雑なデータの分析、論理的思考力、そしてAI技術の基礎。",
    },
    {
      icon: Smartphone, // そのまま
      iconColor: "text-blue-400", // そのまま
      title: "大学生活支援アプリ", // そのまま
      image: "https://placehold.co/300x200/1a1a1a/00d4ff?text=University+App", // そのまま
      description: "大学の学生団体で共同開発した、立命館大学の学生向けモバイルアプリ。",
      role: "開発メンバー。ホーム画面、マップアプリの画面遷移、教科書中古販売検索機能の実装、主要UIデザインを担当。",
      tech: "React Native Expo, JavaScript, TypeScript, Figma",
      learning: "チーム開発における役割分担、コード共有、デザインと実装の連携。",
    },
    {
      icon: Camera, // そのまま
      iconColor: "text-red-400", // そのまま
      title: "映像制作", // そのまま
      image: "https://placehold.co/300x200/1a1a1a/00d4ff?text=Video+Production", // そのまま
      description: "中学生の頃から継続している、モーショングラフィックスを含む多岐にわたる映像作品の企画・制作・編集。",
      role: "企画、編集、制作全般（高校では放送副委員長として映像配信も経験）。",
      tech: "ReactNative, AviUtl, OBS",
      learning: "クリエイティブな表現力、視覚的ストーリーテリング、情報発信能力。",
    },
    {
      icon: Lightbulb, // そのまま
      iconColor: "text-yellow-400", // そのまま
      title: "ノーコードアプリ", // そのまま
      image: "https://placehold.co/300x200/1a1a1a/00d4ff?text=No+Code+App", // そのまま
      description: "高校時に探究活動の一環でノーコードツールを用いて開発・リリースしたアプリ。",
      role: "企画、開発、リリース。",
      tech: "ノーコードツール glide",
      learning: "迅速なプロトタイピングによるアイデアの具現化と、ビジネスプロセスの理解。",
    },
  ]

  return (
    <section className="py-20 px-4 font-serif" id="other-projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">その他取り組んできたこと</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <project.icon className={`w-8 h-8 ${project.iconColor} mr-3`} />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>役割:</strong> {project.role}
                    </div>
                    <div>
                      <strong>技術:</strong> {project.tech}
                    </div>
                    <div>
                      <strong>学び:</strong> {project.learning}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 