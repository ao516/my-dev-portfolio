import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Interフォントの設定
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "後藤碧生 | モバイルアプリ開発者ポートフォリオ",
  description:
    "Flutter/Dartを専門とするモバイルアプリ開発者のポートフォリオサイト。社会課題解決に取り組むプレーヤー兼マネージャー。",
  keywords: "Flutter, Dart, モバイルアプリ開発, ポートフォリオ, 後藤碧生",
  authors: [{ name: "後藤碧生" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className={`${inter.className} font-inter antialiased`}>{children}</body>
    </html>
  )
}
