"use client"

import { motion } from "framer-motion"
import { Zap, Settings, Database, Smartphone, Camera, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function OtherProjectsSection() {
  const projects = [
    {
      icon: Zap,
      iconColor: "text-yellow-400",
      title: "みずのわプロジェクト",
      image: "https://placehold.co/300x200/1a1a1a/00d4ff?text=Micro+Hydro+Power",
      description: "地域資源を活用した持続可能なマイクロ水力発電開発プロジェクト",
      role: "発起人、代表",
      tech: "CAD, 3Dプリンター",
      learning: "社会課題解決と地域貢献への実践",
    },
    {
      icon: Settings,
      iconColor: "text-green-400",
      title: "LINE公式アカウント",
      image: "https://placehold.co/300x200/1a1a1a/00d4ff?text=LINE+Bot+System",
      description: "高校文化祭運営効率化のための自動応答型システム",
      role: "企画、開発、運用",
      tech: "Google Apps Script, スプレッドシート",
      learning: "身近な問題解決と自動化",
    },
    {
      icon: Database,
      iconColor: "text-purple-400",
      title: "脳波データ研究",
      image: "https://placehold.co/300x200/1a1a1a/00d4ff?text=Brain+Wave+Analysis",
      description: "大学研究での脳波データ分析にPythonを活用",
      role: "研究メンバー",
      tech: "Python, SVM, KNN",
      learning: "データ分析とパターン認識の基礎",
    },
    {
      icon: Smartphone,
      iconColor: "text-blue-400",
      title: "大学生活支援アプリ",
      image: "https://placehold.co/300x200/1a1a1a/00d4ff?text=University+App",
      description: "立命館大学学生向けモバイルアプリの共同開発",
      role: "開発メンバー",
      tech: "React Native Expo, TypeScript, Figma",
      learning: "チーム開発とデザイン連携",
    },
    {
      icon: Camera,
      iconColor: "text-red-400",
      title: "映像制作",
      image: "https://placehold.co/300x200/1a1a1a/00d4ff?text=Video+Production",
      description: "中学生の頃から数多くの映像作品を制作",
      role: "企画、編集、制作",
      tech: "Premiere Pro, After Effects, OBS",
      learning: "クリエイティブな表現力",
    },
    {
      icon: Lightbulb,
      iconColor: "text-yellow-400",
      title: "ノーコードアプリ",
      image: "https://placehold.co/300x200/1a1a1a/00d4ff?text=No+Code+App",
      description: "様々な業務効率化のためのノーコードツール開発",
      role: "企画、開発",
      tech: "Bubble, Zapier, Airtable",
      learning: "ビジネスプロセスの理解と効率化",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">その他の注目プロジェクト</h2>
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
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full rounded-lg mb-4"
                  />
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