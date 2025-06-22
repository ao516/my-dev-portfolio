"use client"

import PhilosophySection from "@/app/components/sections/PhilosophySection"
import TechStackSection from "@/app/components/sections/TechStackSection"
import OtherStrengthsSection from "@/app/components/sections/OtherStrengthsSection"
import ProjectSection from "@/app/components/sections/ProjectSection"
import OtherProjectsSection from "@/app/components/sections/OtherProjectsSection"
import FutureVisionSection from "@/app/components/sections/FutureVisionSection"
import ContactSection from "@/app/components/sections/ContactSection"

export default function PortfolioContent() {
  return (
    <div className="bg-black text-white min-h-screen font-serif">
      {/* セクション1: 私の理念と概要 */}
      <PhilosophySection />

      {/* セクション2: キープロジェクト - 探究アーカイブ */}
      <ProjectSection />

      {/* セクション3: 技術スタック */}
      <TechStackSection />

      {/* セクション4: プログラミング以外の強み */}
      <OtherStrengthsSection />

      {/* セクション5: その他の注目プロジェクト */}
      <OtherProjectsSection />

      {/* セクション6: 将来の展望 */}
      <FutureVisionSection />

      {/* セクション7: お問い合わせ */}
      <ContactSection />
    </div>
  )
} 