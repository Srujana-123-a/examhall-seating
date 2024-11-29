'use client'

import { useState } from 'react'

export default function StudentData() {
  const [students, setStudents] = useState<{ name: string; id: string }[]>([])
  const [newStudent, setNewStudent] = useState({ name: '', id: '' })

  const addStudent = (e: React.FormEvent) => {
    e.preventDefault()
    setStudents([...students, newStudent])
    setNewStudent({ name: '', id: '' })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Student Data</h2>
      <form onSubmit={addStudent} className="space-y-4">
        <input
          type="text"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          placeholder="Student Name"
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          value={newStudent.id}
          onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
          placeholder="Student ID"
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Student
        </button>
      </form>
      <ul className="space-y-2">
        {students.map((student, index) => (
          <li key={index} className="border p-2">
            {student.name} - ID: {student.id}
          </li>
        ))}
      </ul>
    </div>
  )
}

