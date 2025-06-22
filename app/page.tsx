"use client"

import { useEffect, useState } from "react"
import { useScroll, useTransform } from "framer-motion"

// 分割されたコンポーネントをインポート
import LoadingScreen from "@/app/components/shared/LoadingScreen"
import PortfolioContent from "@/app/components/shared/PortfolioContent"

export default function Portfolio() {
  // アニメーション制御用のstate
  const [isLoading, setIsLoading] = useState(true)

  // スクロール制御
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="bg-black text-white min-h-screen font-serif">
      {/* ローディング画面 */}
      <LoadingScreen isLoading={isLoading} onProceed={() => setIsLoading(false)} />

      {/* メインのポートフォリオコンテンツ */}
      {!isLoading && <PortfolioContent />}
    </div>
  )
} 