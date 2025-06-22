"use client"

import { motion } from "framer-motion"

export default function TechStackSection() {
  const programmingLanguages = [
    { name: "Dart", level: "expert", imgPath: "dart.svg" },
    { name: "JavaScript", level: "advanced", imgPath: "javascript.svg" },
    { name: "TypeScript", level: "advanced", imgPath: "typescript.svg" },
    { name: "Python", level: "intermediate", imgPath: "python.svg" },
    { name: "C言語", level: "intermediate", imgPath: "c.png" },
  ]

  const databases = [
    { name: "Firestore", imgPath: "firestore.svg" },
    { name: "SQLite", imgPath: "sqlite.png" },
    { name: "Google スプレッドシート", imgPath: "spreadsheet.png" },
  ]

  const cloudServices = [
    { name: "Firebase", imgPath: "firebase.svg" },
    { name: "Algolia", imgPath: "algolia.png" },
    { name: "Google Apps Script", imgPath: "gas.png" },
  ]

  const developmentToolsAndOthers = [
    { name: "Git", imgPath: "git.png" },
    { name: "GitHub", imgPath: "github.png" },
    { name: "Figma", imgPath: "figma.svg" },
    { name: "DaVinci Resolve", imgPath: "davinci_resolve.png" },
    { name: "AviUtl", imgPath: "aviutl.png" },
    { name: "OBS", imgPath: "obs.svg" },
    { name: "3Dプリンター", imgPath: "3d_printer.jpg" },
    { name: "CAD", imgPath: "cad.jpeg" },
  ]


  const renderTechGrid = (
    items: { name: string; imgPath: string; level?: string }[],
    gridCols: string
  ) => (
    <div className={`grid grid-cols-2 sm:grid-cols-3 ${gridCols} gap-6`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg border text-center transition-colors duration-200 bg-gray-800 border-gray-700 hover:border-cyan-400 font-serif`}
        >
          {/* imgPathを/logos/で組み立てて表示 */}
          <img
            src={`/logos/${item.imgPath}`}
            alt={`${item.name} ロゴ`}
            className="h-8 w-auto mx-auto mb-2 object-contain"
          />
          <div className="font-bold text-sm text-white">{item.name}</div>
          {/* item.levelが存在する場合のみラベルを表示 */}
          {item.level && (
            <>
              {item.level === "expert" && <div className="text-xs text-sky-300 mt-1">得意</div>}
              {item.level === "advanced" && <div className="text-xs text-sky-400 mt-1">実務経験</div>}
              {item.level === "intermediate" && <div className="text-xs text-sky-500 mt-1">中級</div>}
            </>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <section className="py-20 px-4 bg-gray-900 font-serif" id="tech-stack">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400 font-serif">技術スタック</h2>
        </motion.div>

        <div className="space-y-12">
          {/* プログラミング言語 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-slate-100 font-serif">プログラミング言語</h3>
            {renderTechGrid(programmingLanguages, "lg:grid-cols-5")}
          </motion.div>

          {/* データベース */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-slate-100 font-serif">データベース</h3>
            {renderTechGrid(databases, "md:grid-cols-3")}
          </motion.div>

          {/* クラウドサービス */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-slate-100 font-serif">クラウドサービス</h3>
            {renderTechGrid(cloudServices, "md:grid-cols-3")}
          </motion.div>

          {/* 開発ツール */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-slate-100 font-serif">開発ツール/その他</h3>
            {renderTechGrid(developmentToolsAndOthers, "lg:grid-cols-6")}
          </motion.div>

          {/* 学習中の技術 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 pt-8 border-t border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-100 font-serif">将来の展望</h3>
            <p className="text-slate-300 max-w-2xl mx-auto font-serif">
              現在、私は機械工学の知識をソフトウェアに応用する方法を深く探求しています。デバイスの物理的な制約や特性を理解することで、より高度な技術を開発したいです。
              加えて、AI技術の活用に強い関心を持ち、特にあらゆる業務のAIによる効率化に注目しています。
              将来的には、これらの学習を通じて、単なるアプリ開発に留まらず、新たな価値と感動をユーザーに届けられるエンジニアになりたいと考えています。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}