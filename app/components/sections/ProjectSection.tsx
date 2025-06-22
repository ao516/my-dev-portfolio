"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCarousel from "@/app/components/shared/ProjectCarousel"

export default function ProjectSection() {
  // 探究アーカイブのスクリーンショット（プレースホルダー）
  const projectScreenshots = [
    {
      image: "https://placehold.co/300x600/1a1a1a/00d4ff?text=Home+Screen",
      tech: ["Flutter", "Dart", "Riverpod"],
    },
    {
      image: "https://placehold.co/300x600/1a1a1a/00d4ff?text=Search+Screen",
      tech: ["Algolia", "Firestore", "Flutter"],
    },
    {
      image: "https://placehold.co/300x600/1a1a1a/00d4ff?text=Detail+Screen",
      tech: ["GoRouter", "Freezed", "Firebase"],
    },
    {
      image: "https://placehold.co/300x600/1a1a1a/00d4ff?text=Profile+Screen",
      tech: ["Firebase Auth", "Storage", "Flutter"],
    },
  ]

  const roles = ["発起人", "代表", "メイン開発者", "マネージャー"]

  return (
    <section className="py-20 px-4" id="tankyu-archive">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Project: <span className="text-cyan-400">探究アーカイブ</span>
          </h2>
          <p className="text-xl text-gray-400">高校生の探究活動成果をアーカイブするモバイルアプリ</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* スクリーンショットカルーセル */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProjectCarousel screenshots={projectScreenshots} />
          </motion.div>

          {/* プロジェクト詳細 */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">プロジェクト概要</h3>
              <p className="text-gray-400 leading-relaxed">
                高校生の探究活動の成果をアーカイブとして閲覧・検索できるモバイルアプリケーション。 App
                Storeで実際にリリース・運用中で、多くの高校生に利用されています。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">私の役割</h3>
              <div className="grid grid-cols-2 gap-4">
                {roles.map((role, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
                onClick={() =>
                  document.getElementById("tankyu-archive-details")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                詳しくはこちら
              </Button>
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                <ExternalLink className="w-4 h-4 mr-2" />
                App Store
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 