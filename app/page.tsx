"use client"

import { useEffect, useState } from "react"
import { useScroll, useTransform } from "framer-motion"

// 分割されたコンポーネントをインポート
import LoadingScreen from "@/app/components/shared/LoadingScreen"
import PhilosophySection from "@/app/components/sections/PhilosophySection"
import SkillsSection from "@/app/components/sections/SkillsSection"
import TechStackSection from "@/app/components/sections/TechStackSection"
import OtherStrengthsSection from "@/app/components/sections/OtherStrengthsSection"
import ProjectSection from "@/app/components/sections/ProjectSection"
import OtherProjectsSection from "@/app/components/sections/OtherProjectsSection"
import FutureVisionSection from "@/app/components/sections/FutureVisionSection"
import ContactSection from "@/app/components/sections/ContactSection"

export default function Portfolio() {
  // アニメーション制御用のstate
  const [isLoading, setIsLoading] = useState(true)

  // スクロール制御
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  // ローディングアニメーション完了後の処理
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3秒後にローディング完了

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-black text-white min-h-screen font-inter">
      {/* ローディング画面 */}
      <LoadingScreen isLoading={isLoading} />

      {/* セクション1: 私の理念と概要 */}
      <PhilosophySection />

      {/* セクション2: 主要スキル・専門分野のハイライト */}
      <SkillsSection />

      {/* セクション3: 技術スタック */}
      <TechStackSection />

      {/* セクション4: プログラミング以外の強み */}
      <OtherStrengthsSection />

      {/* セクション5: キープロジェクト - 探究アーカイブ */}
      <ProjectSection />

      {/* セクション6: その他の注目プロジェクト */}
      <OtherProjectsSection />

      {/* セクション7: 将来の展望 */}
      <FutureVisionSection />

      {/* セクション8: お問い合わせ */}
      <ContactSection />

      {/* 探究アーカイブ詳細セクション（隠しセクション） */}
      <section className="py-20 px-4 bg-black" id="tankyu-archive-details">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">探究アーカイブ - 詳細</h2>
            <p className="text-xl text-gray-400">プロジェクトの詳細な技術仕様と開発プロセス</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
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
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 