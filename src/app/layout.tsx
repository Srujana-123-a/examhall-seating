import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Exam Hall Seating Arrangement',
  description: 'JCT College of Engineering and Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">JCT College of Engineering and Technology</h1>
            <p className="text-sm">Exam Hall Seating Arrangement</p>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}

