"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Code,
  Smartphone,
  Users,
  Heart,
  Lightbulb,
  Rocket,
  Settings,
  Monitor,
  Github,
  Mail,
  ExternalLink,
  Database,
  Palette,
  Globe,
  Camera,
  Zap,
  Target,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  // アニメーション制御用のstate
  const [isLoading, setIsLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)

  // スクロール制御
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

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

  // ローディングアニメーション完了後の処理
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3秒後にローディング完了

    return () => clearTimeout(timer)
  }, [])

  // スライドショーの自動切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectScreenshots.length)
    }, 4000) // 4秒ごとに切り替え

    return () => clearInterval(interval)
  }, [projectScreenshots.length])

  // ローディング画面
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
        {/* 背景アニメーション - コードの流れ */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400 font-mono text-sm"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -50,
                opacity: 0,
              }}
              animate={{
                y: window.innerHeight + 50,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            >
              {["Flutter()", "Dart{}", "Widget", "State", "Build()", "async", "await"][Math.floor(Math.random() * 7)]}
            </motion.div>
          ))}
        </div>

        {/* メインテキストのアニメーション */}
        <div className="text-center z-10">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            ごとーあおい
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-cyan-400 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            モバイルアプリ開発で社会課題を解決するプレーヤー兼マネージャー
          </motion.p>
        </div>

        {/* スクロール促進アイコン */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-white text-sm"
          >
            ↓ Scroll
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen font-inter">
      {/* セクション1: 私の理念と概要 */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-cyan-400">私の原動力</h2>
            <div className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              人を喜ばせ、人の役に立つ
            </div>
            <p className="text-xl text-gray-400 mb-16">これが私のプログラミングの原点です。</p>
          </motion.div>

          {/* 探求の歴史 */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <Monitor className="w-16 h-16 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">幼い頃からの探求</h3>
              <p className="text-gray-400">テクノロジーへの純粋な好奇心</p>
            </div>
            <div className="flex flex-col items-center">
              <Rocket className="w-16 h-16 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">無限の可能性への魅了</h3>
              <p className="text-gray-400">プログラミングで実現できる未来</p>
            </div>
          </motion.div>

          {/* プレーヤー & マネージャー */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              プレーヤー <span className="text-cyan-400">&</span> マネージャー
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center p-6 border border-gray-800 rounded-lg">
                <Code className="w-12 h-12 text-cyan-400 mb-4" />
                <h4 className="text-xl font-bold mb-2">技術を追求する情熱</h4>
                <p className="text-gray-400 text-center">常に手を動かし、最新技術をキャッチアップ</p>
              </div>
              <div className="flex flex-col items-center p-6 border border-gray-800 rounded-lg">
                <Users className="w-12 h-12 text-cyan-400 mb-4" />
                <h4 className="text-xl font-bold mb-2">チームを導く力</h4>
                <p className="text-gray-400 text-center">生徒会長経験で培ったリーダーシップ</p>
              </div>
            </div>
          </motion.div>

          {/* 最終メッセージ */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center mb-6">
              <Heart className="w-8 h-8 text-red-400 mr-4" />
              <Lightbulb className="w-8 h-8 text-yellow-400 mr-4" />
              <Star className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ユーザーの心に寄り添う温かさ、
              <br />
              感動を創造するテクノロジー
            </h3>
          </motion.div>
        </div>
      </section>

      {/* セクション2: 主要スキル・専門分野のハイライト */}
      <section className="py-20 px-4 bg-gray-900">
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
            {[
              { icon: Palette, label: "UI/UX設計" },
              { icon: Users, label: "チームリード" },
              { icon: Settings, label: "プロジェクト\nマネジメント" },
              { icon: Heart, label: "社会課題解決\nへの意欲" },
              { icon: Target, label: "多角的な\n問題解決能力" },
            ].map((skill, index) => (
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

      {/* セクション3: キープロジェクト - 探究アーカイブ */}
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
              <div className="relative max-w-md mx-auto">
                {/* スマートフォンモックアップ */}
                <div className="relative bg-gray-800 rounded-3xl p-4 shadow-2xl">
                  <div className="bg-black rounded-2xl overflow-hidden">
                    <Image
                      src={projectScreenshots[currentSlide].image || "/placeholder.svg"}
                      alt={`探究アーカイブ スクリーンショット ${currentSlide + 1}`}
                      width={300}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* 技術スタック表示 */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <div className="bg-gray-900 border border-cyan-400 rounded-lg p-4 min-w-[150px]">
                    <h4 className="text-sm font-bold text-cyan-400 mb-2">使用技術</h4>
                    {projectScreenshots[currentSlide].tech.map((tech, index) => (
                      <div key={index} className="flex items-center mb-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                        <span className="text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ナビゲーション */}
                <div className="flex justify-center mt-6 space-x-2">
                  {projectScreenshots.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? "bg-cyan-400" : "bg-gray-600"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
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
                  {["発起人", "代表", "メイン開発者", "マネージャー"].map((role, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tankyu-archive">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    詳しくはこちら
                  </Button>
                </Link>
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

      {/* セクション4: その他の注目プロジェクト */}
      <section className="py-20 px-4 bg-gray-900" id="other-projects">
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
            {/* みずのわプロジェクト */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                    <h3 className="text-xl font-bold">みずのわプロジェクト</h3>
                  </div>
                  <Image
                    src="https://placehold.co/300x200/1a1a1a/00d4ff?text=Micro+Hydro+Power"
                    alt="みずのわプロジェクト"
                    width={300}
                    height={200}
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-gray-400 mb-4 text-sm">
                    地域資源を活用した持続可能なマイクロ水力発電開発プロジェクト
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>役割:</strong> 発起人、代表
                    </div>
                    <div>
                      <strong>技術:</strong> CAD, 3Dプリンター
                    </div>
                    <div>
                      <strong>学び:</strong> 社会課題解決と地域貢献への実践
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* LINE公式アカウント */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Settings className="w-8 h-8 text-green-400 mr-3" />
                    <h3 className="text-xl font-bold">LINE公式アカウント</h3>
                  </div>
                  <Image
                    src="https://placehold.co/300x200/1a1a1a/00d4ff?text=LINE+Bot+System"
                    alt="LINE公式アカウント"
                    width={300}
                    height={200}
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-gray-400 mb-4 text-sm">高校文化祭運営効率化のための自動応答型システム</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>役割:</strong> 企画、開発、運用
                    </div>
                    <div>
                      <strong>技術:</strong> Google Apps Script, スプレッドシート
                    </div>
                    <div>
                      <strong>学び:</strong> 身近な問題解決と自動化
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 脳波データ研究 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Database className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold">脳波データ研究</h3>
                  </div>
                  <Image
                    src="https://placehold.co/300x200/1a1a1a/00d4ff?text=Brain+Wave+Analysis"
                    alt="脳波データ研究"
                    width={300}
                    height={200}
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-gray-400 mb-4 text-sm">大学研究での脳波データ分析にPythonを活用</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>役割:</strong> 研究メンバー
                    </div>
                    <div>
                      <strong>技術:</strong> Python, SVM, KNN
                    </div>
                    <div>
                      <strong>学び:</strong> データ分析とパターン認識の基礎
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 大学生活支援アプリ */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Smartphone className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold">大学生活支援アプリ</h3>
                  </div>
                  <Image
                    src="https://placehold.co/300x200/1a1a1a/00d4ff?text=University+App"
                    alt="大学生活支援アプリ"
                    width={300}
                    height={200}
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-gray-400 mb-4 text-sm">立命館大学学生向けモバイルアプリの共同開発</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>役割:</strong> 開発メンバー
                    </div>
                    <div>
                      <strong>技術:</strong> React Native Expo, TypeScript, Figma
                    </div>
                    <div>
                      <strong>学び:</strong> チーム開発とデザイン連携
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 映像制作 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Camera className="w-8 h-8 text-red-400 mr-3" />
                    <h3 className="text-xl font-bold">映像制作</h3>
                  </div>
                  <Image
                    src="https://placehold.co/300x200/1a1a1a/00d4ff?text=Video+Production"
                    alt="映像制作"
                    width={300}
                    height={200}
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-gray-400 mb-4 text-sm">中学生の頃から数多くの映像作品を制作</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>役割:</strong> 企画、編集、制作
                    </div>
                    <div>
                      <strong>技術:</strong> Premiere Pro, After Effects, OBS
                    </div>
                    <div>
                      <strong>学び:</strong> クリエイティブな表現力
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ノーコードアプリ */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-8 h-8 text-yellow-400 mr-3" />
                    <h3 className="text-xl font-bold">ノーコードアプリ</h3>
                  </div>
                  <Image
                    src="https://placehold.co/300x200/1a1a1a/00d4ff?text=No-Code+App"
                    alt="ノーコードアプリ"
                    width={300}
                    height={200}
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-gray-400 mb-4 text-sm">2021年に学校内でリリースしたノーコードアプリ</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>役割:</strong> 企画、開発、リリース
                    </div>
                    <div>
                      <strong>技術:</strong> ノーコードツール
                    </div>
                    <div>
                      <strong>学び:</strong> 迅速なプロトタイピング
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* セクション5: 技術スタック */}
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { name: "Dart", level: "expert", icon: "🎯" },
                  { name: "JavaScript", level: "advanced", icon: "🟨" },
                  { name: "TypeScript", level: "advanced", icon: "🔷" },
                  { name: "Python", level: "intermediate", icon: "🐍" },
                  { name: "C言語", level: "intermediate", icon: "⚙️" },
                  { name: "SQL", level: "intermediate", icon: "🗃️" },
                ].map((lang, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border text-center ${
                      lang.level === "expert"
                        ? "border-cyan-400 bg-cyan-400/10"
                        : lang.level === "advanced"
                          ? "border-blue-400 bg-blue-400/10"
                          : "border-gray-600 bg-gray-800"
                    }`}
                  >
                    <div className="text-2xl mb-2">{lang.icon}</div>
                    <div className="font-bold">{lang.name}</div>
                    {lang.level === "expert" && <div className="text-xs text-cyan-400 mt-1">得意</div>}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* フレームワーク/ライブラリ */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">フレームワーク/ライブラリ</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: "Flutter", level: "expert", icon: "💙" },
                  { name: "React Native", level: "advanced", icon: "⚛️" },
                  { name: "Riverpod", level: "advanced", icon: "🌊" },
                  { name: "GoRouter", level: "advanced", icon: "🛣️" },
                ].map((framework, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border text-center ${
                      framework.level === "expert" ? "border-cyan-400 bg-cyan-400/10" : "border-blue-400 bg-blue-400/10"
                    }`}
                  >
                    <div className="text-2xl mb-2">{framework.icon}</div>
                    <div className="font-bold">{framework.name}</div>
                    {framework.level === "expert" && <div className="text-xs text-cyan-400 mt-1">得意</div>}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* データベース */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">データベース</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Firestore", icon: "🔥" },
                  { name: "SQLite", icon: "📱" },
                  { name: "MySQL", icon: "🐬" },
                  { name: "スプレッドシート", icon: "📊" },
                ].map((db, index) => (
                  <div key={index} className="p-4 rounded-lg border border-gray-600 bg-gray-800 text-center">
                    <div className="text-2xl mb-2">{db.icon}</div>
                    <div className="font-bold">{db.name}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* クラウドサービス */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">クラウドサービス</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { name: "Firebase", icon: "🔥" },
                  { name: "Algolia", icon: "🔍" },
                  { name: "Google Apps Script", icon: "📝" },
                ].map((cloud, index) => (
                  <div key={index} className="p-4 rounded-lg border border-gray-600 bg-gray-800 text-center">
                    <div className="text-2xl mb-2">{cloud.icon}</div>
                    <div className="font-bold">{cloud.name}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 開発ツール */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">開発ツール/その他</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: "Git", icon: "🌿" },
                  { name: "GitHub", icon: "🐙" },
                  { name: "Figma", level: "expert", icon: "🎨" },
                  { name: "VS Code", icon: "💻" },
                  { name: "Premiere Pro", icon: "🎬" },
                  { name: "After Effects", icon: "✨" },
                ].map((tool, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border text-center ${
                      tool.level === "expert" ? "border-cyan-400 bg-cyan-400/10" : "border-gray-600 bg-gray-800"
                    }`}
                  >
                    <div className="text-2xl mb-2">{tool.icon}</div>
                    <div className="font-bold text-sm">{tool.name}</div>
                    {tool.level === "expert" && <div className="text-xs text-cyan-400 mt-1">得意</div>}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* セクション6: プログラミング以外の強み */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">プログラミング以外の強み</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">国際寮での生活</h3>
              <p className="text-gray-400 leading-relaxed">
                留学生との共同生活を通じた語学力（英語）と、異文化理解に基づくコミュニケーション能力の向上。
                多角的な視点を身につけ、グローバルな環境での協働経験を積んでいます。
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">多様な好奇心とジェネラリスト志向</h3>
              <p className="text-gray-400 leading-relaxed">
                機械工学、脳波研究、映像制作、国際交流といった幅広い分野への探求心。
                単なるエンジニアに留まらない「VUCA時代を解決できるジェネラリスト」としての強みを持っています。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* セクション7: 将来の展望 */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-400">将来の展望</h2>
          </motion.div>

          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                VUCA時代を解決できるジェネラリスト
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                複雑で変化の激しい現代において、技術的な専門性だけでなく、
                多角的な視点と柔軟な思考力を持つプロフェッショナルを目指しています。
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">テクノロジーとアートの融合</h3>
              <p className="text-gray-400 leading-relaxed">
                人々の心を揺さぶるような感動的な作品を生み出すクリエイターとして、
                技術の力で新しい体験価値を創造していきたいと考えています。
              </p>
            </div>

            <div className="max-w-4xl mx-auto p-8 border border-cyan-400 rounded-lg bg-cyan-400/5">
              <h3 className="text-2xl font-bold mb-4">企業での貢献への想い</h3>
              <p className="text-gray-400 leading-relaxed">
                ソニーやTISのような革新的な企業で、私の多角的なスキルと「人を喜ばせたい」という情熱を最大限に活かし、
                未来のスタンダードとなるような感動体験を創造したいと考えています。
                技術者としての専門性と、マネージャーとしてのリーダーシップを両立させ、
                チーム全体のパフォーマンス向上に貢献していきます。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* セクション8: お問い合わせ */}
      <section className="py-20 px-4 bg-gray-900" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400">お問い合わせ</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* メール */}
            <div className="flex flex-col items-center p-6 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors">
              <Mail className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:goto.aoi.516@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                goto.aoi.516@gmail.com
              </a>
            </div>

            {/* GitHub */}
            <div className="flex flex-col items-center p-6 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors">
              <Github className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <a
                href="https://github.com/ao516"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                @ao516
              </a>
            </div>

            {/* App Store */}
            <div className="flex flex-col items-center p-6 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors">
              <Smartphone className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">App Store</h3>
              <p className="text-gray-400 mb-2">探究アーカイブ</p>
              <div className="w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-500">QR Code</span>
              </div>
            </div>
          </motion.div>

          {/* フッター */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-800 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500">© 2024 後藤碧生 (Aoi Goto). All rights reserved.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
