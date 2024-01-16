'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../styles.module.css'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
          <nav>
                <ul>
                    <li>
                        <Link href="/" className={`link ${pathname  === '/' ? styles.active : ''}`}>Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard" className={`link ${pathname  === '/dashboard' ? styles.active : ''}`}>Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={`link ${pathname  === '/contact' ? styles.active : ''}`}>Contact</Link>
                    </li>
                </ul>
            </nav>
          {children}
        </body>
    </html>
  )
}
