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

      {/* セクション3: その他の注目プロジェクト */}
      <OtherProjectsSection />

      {/* セクション4: 技術スタック */}
      <TechStackSection />

      {/* セクション5: お問い合わせ */}
      <ContactSection />
    </div>
  )
} 