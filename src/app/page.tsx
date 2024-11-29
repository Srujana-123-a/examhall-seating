import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Exam Hall Seating Arrangement System</h2>
      <nav className="space-x-4">
        <Link href="/exam-rooms" className="text-blue-600 hover:underline">Exam Rooms</Link>
        <Link href="/student-data" className="text-blue-600 hover:underline">Student Data</Link>
        <Link href="/seating-arrangement" className="text-blue-600 hover:underline">Final Seating Arrangement</Link>
      </nav>
    </div>
  )
}

