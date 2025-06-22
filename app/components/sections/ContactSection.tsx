"use client"

import { motion } from "framer-motion"
import { Mail, Github, Smartphone } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 px-4 font-serif" id="contact">
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
          className="grid md:grid-cols-2 gap-8"
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
        </motion.div>

        {/* フッター */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500">© 2025 後藤碧生 (Aoi Goto). All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
} 