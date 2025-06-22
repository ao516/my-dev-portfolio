"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProjectCarousel from "@/app/components/shared/ProjectCarousel"

export default function TankyuArchivePage() {
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
    <div className="bg-black text-white min-h-screen font-serif">
      {/* ヘッダー */}
      <header className="py-6 px-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            ポートフォリオに戻る
          </Link>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main>
        {/* プロジェクト概要セクション */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-cyan-400">探究アーカイブ</span>
              </h1>
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
                  <h2 className="text-2xl font-bold mb-4">プロジェクト概要</h2>
                  <p className="text-gray-400 leading-relaxed">
                    高校生の探究活動の成果をアーカイブとして閲覧・検索できるモバイルアプリケーション。 App
                    Storeで実際にリリース・運用中で、多くの高校生に利用されています。
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">私の役割</h2>
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
                  <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <a href="https://apps.apple.com/jp/app/%E7%B8%A3%E9%99%B5%E6%8E%A2%E7%A9%B6%E3%82%A2%E3%83%BC%E3%82%AB%E3%82%A4%E3%83%96/id6738385612" target="_blank" rel="noopener noreferrer">
                      App Store
                    </a>
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    <a href="https://github.com/ao516/kenryo_tankyu" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 詳細セクション */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">技術的な挑戦</h2>
              <p className="text-xl text-gray-400">プロジェクトの詳細な技術仕様と開発プロセス</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">技術的な挑戦</h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    このプロジェクトでは、高校生の探究活動成果を効率的に検索・閲覧できるシステムの構築が最大の課題でした。
                    大量のデータを扱いながらも、ユーザーフレンドリーなインターフェースを実現する必要がありました。
                  </p>
                  <p>
                    Algoliaを活用した高速検索機能の実装、Firestoreでのデータ構造設計、
                    そしてRiverpodを使った状態管理の最適化など、モバイルアプリ開発の様々な技術を統合しました。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">プロジェクト管理</h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    発起人として、プロジェクトの企画から実装、リリースまでの全工程を管理しました。
                    チームメンバーとの協働、スケジュール管理、品質保証など、
                    技術的な側面だけでなくマネジメントスキルも大きく向上しました。
                  </p>
                  <p>
                    App Storeでの実際のリリース経験を通じて、
                    ユーザーフィードバックの収集と継続的な改善プロセスの重要性を学びました。
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 