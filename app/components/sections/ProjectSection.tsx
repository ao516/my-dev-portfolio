"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Smartphone, Palette, Settings, Users, Heart, Target, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCarousel from "@/app/components/shared/ProjectCarousel"
import Link from "next/link"
import Image from "next/image"

export default function ProjectSection() {
  // 探究アーカイブのスクリーンショット
  const projectScreenshots = [
    {
      image: "/appScreenshot/homeScreen.jpg",
      title: "ホーム画面",
      description:
        "松本県ヶ丘高校の生徒と職員しか使えないよう、特定のメールアドレスの人しか新規登録・ログインできないように制限してあります。ログインにはAuthenticationを使用しています。ログイン後は、おすすめの探究活動やコンテンツが表示されます。おすすめは3日に一度更新され、後輩が先輩の探究を参考にできるよう支援します。",
      tech: ["Firebase Authentication", "Firebase Firestore"],
    },
    {
      image: "/appScreenshot/resultScreen.jpg",
      title: "コンテンツ画面",
      description: "探究活動の詳細な内容（ポスターや論文など）、画像、関連資料を閲覧できます。見たい作品をクリックすると、Firebase StorageからPDFが返されるように設計されています。閲覧したPDFはキャッシュに保管され、次回以降はローカルから取得することで、Firestoreのランニングコスト削減とオフライン閲覧を可能にしています。また、気に入った探究作品にハートマークを押すことでお気に入り登録ができ、一覧として見たり検索結果で上位に表示させることができます。情報の修正の提案など、問題のあるPDFをユーザーが報告できる機能も実装しています。",
      tech: ["GoRouter", "Firebase Storage", "SharedPreferences", "SQLite"],
    },
    {
      image: "/appScreenshot/historyScreen.jpg",
      title: "履歴画面",
      description: "ユーザーが過去に閲覧した探究活動の履歴を一覧で確認でき、再度アクセスしやすくなっています。閲覧履歴はSQLiteのローカルDBを通じてデバイスに保管され、アプリ上ではそのキャッシュを参照して一覧を表示しています。",
      tech: ["SQLite", "SharedPreferences"],
    },
    {
      image: "/appScreenshot/searchScreen.jpg",
      title: "検索画面",
      description: "キーワードのみならず、カテゴリ、学科、入学年度などを絞った高度な検索が可能です。タイトルの一部分を検索したときもヒットされるよう、Algoliaを使用しており、Firestoreと同期されるように設定してあります。リリース後、ユーザーフィードバックに基づき検索サジェスト機能を追加し、ユーザー体験を追求した継続的な改善を行いました。",
      tech: ["Algolia", "Firebase Functions", "Firebase Firestore", "Google Apps Script"],
    },
  ]
  const skills = [
    { icon: Palette, label: "UI/UX設計" },
    { icon: Code2, label: "プログラミング" },
    { icon: Users, label: "チームリード" },
    { icon: Settings, label: "プロジェクト\nマネジメント" },
    { icon: Heart, label: "ユーザー\nフィードバック" },
  ]

  return (
    <section className="py-20 px-4 bg-gray-900 font-serif" id="tankyu-archive">
      <div className="max-w-7xl mx-auto">
        {/* 1. Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex flex-col items-center gap-4">
            <div className="text-2xl md:text-3xl text-gray-300 mb-2">私が主導するプロジェクト</div>
            <Image
              src="/appIcon.png"
              alt="探究アーカイブアイコン"
              width={120}
              height={120}
              className="rounded-2xl"
            />
            <div>探究アーカイブアプリ</div>
          </h2>
          <p className="text-xl text-gray-400">Flutterを使用した、高校生の探究活動を支援するアプリ</p>
        </motion.div>

        {/* 2. プロジェクト詳細 */}
        <motion.div
          className="max-w-4xl mx-auto space-y-12 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl font-bold mb-6 text-center text-cyan-400">プロジェクト概要</h3>
            <p className="text-gray-300 leading-relaxed">
              私の母校である松本県ケ丘高校では、探究活動が盛んに行われています。その探究活動の成果物（ポスターや論文など）を
              アーカイブとして閲覧・検索できるモバイルアプリケーションです。App Storeで実際にリリース・運用中で、多くの高校生に利用されています。
            </p>
          </div>
        </motion.div>

        {/* 3. スクリーンショットカルーセル */}
        <div className="bg-gray-800/50 rounded-3xl p-8 md:p-12">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProjectCarousel screenshots={projectScreenshots} />
          </motion.div>
        </div>

        {/* 4. 自身の役割 */}
        <motion.div
          className="max-w-5xl mx-auto mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">自身の役割</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
          </div>
        </motion.div>

        {/* 5. 外部リンク*/}

        <motion.div
          className="max-w-2xl mx-auto mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">詳しくはこちら</h3>
          <div className="flex flex-col gap-4 w-full">
            <Link
              href="https://apps.apple.com/jp/app/%E7%B8%A3%E9%99%B5%E6%8E%A2%E7%A9%B6%E3%82%A2%E3%83%BC%E3%82%AB%E3%82%A4%E3%83%96/id6738385612"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Button
                variant="outline"
                className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                asChild
              >
                <span>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  App Store
                </span>
              </Button>
            </Link>
            <Link
              href="https://github.com/ao516/kenryo_tankyu"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Button
                variant="outline"
                className="w-full border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white"
                asChild
              >
                <span>
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>


      </div>
    </section>
  )
}