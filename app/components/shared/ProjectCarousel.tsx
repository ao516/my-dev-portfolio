"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectScreenshot {
  image: string
  tech: string[]
}

interface ProjectCarouselProps {
  screenshots: ProjectScreenshot[]
}

export default function ProjectCarousel({ screenshots }: ProjectCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // スライドショーの自動切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length)
    }, 4000) // 4秒ごとに切り替え

    return () => clearInterval(interval)
  }, [screenshots.length])

  return (
    <div className="relative max-w-md mx-auto">
      {/* スマートフォンモックアップ */}
      <div className="relative bg-gray-800 rounded-3xl p-4 shadow-2xl">
        <div className="bg-black rounded-2xl overflow-hidden">
          <Image
            src={screenshots[currentSlide].image || "/placeholder.svg"}
            alt={`プロジェクト スクリーンショット ${currentSlide + 1}`}
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
          {screenshots[currentSlide].tech.map((tech, index) => (
            <div key={index} className="flex items-center mb-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
              <span className="text-sm">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ナビゲーション */}
      <div className="flex justify-center mt-6 space-x-2">
        {screenshots.map((_, index) => (
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
  )
} 