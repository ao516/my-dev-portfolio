"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectScreenshot {
  image: string
  title: string
  description: string
  tech: string[]
}

interface ProjectCarouselProps {
  screenshots: ProjectScreenshot[]
}

export default function ProjectCarousel({ screenshots }: ProjectCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-8 items-stretch max-w-4xl mx-auto">
        {/* 左側: カルーセル */}
        <div className="relative max-w-xs mx-auto">
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
        </div>

        {/* 右側: 説明 */}
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col text-center"
        >
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">{screenshots[currentSlide].title}</h3>
            <p className="text-gray-300 mb-5 min-h-[100px] whitespace-pre-line text-left">{screenshots[currentSlide].description}</p>
            <h4 className="font-bold mb-3 text-cyan-400">使用技術</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {screenshots[currentSlide].tech.map((t, i) => (
                <span key={i} className="bg-gray-700 text-cyan-300 text-sm font-medium px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          
          {/* ナビゲーションボタン */}
          <div className="mt-8 flex items-center gap-4 justify-center">
            <button 
              onClick={prevSlide}
              className="bg-gray-800 p-3 rounded-full text-cyan-400 hover:bg-gray-700 transition-all duration-300 shadow-md"
              aria-label="前のスライドへ"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="bg-gray-800 p-3 rounded-full text-cyan-400 hover:bg-gray-700 transition-all duration-300 shadow-md"
              aria-label="次のスライドへ"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}