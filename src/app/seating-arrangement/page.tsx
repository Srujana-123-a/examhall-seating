'use client'

import { useState } from 'react'

type Room = { name: string; capacity: number }
type Student = { name: string; id: string }

export default function SeatingArrangement() {
  const [rooms, setRooms] = useState<Room[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [arrangement, setArrangement] = useState<{ [key: string]: Student[] }>({})

  const generateArrangement = () => {
    const newArrangement: { [key: string]: Student[] } = {}
    let studentIndex = 0

    for (const room of rooms) {
      newArrangement[room.name] = []
      for (let i = 0; i < room.capacity && studentIndex < students.length; i++) {
        newArrangement[room.name].push(students[studentIndex])
        studentIndex++
      }
    }

    setArrangement(newArrangement)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Final Seating Arrangement</h2>
      <button onClick={generateArrangement} className="bg-blue-600 text-white px-4 py-2 rounded">
        Generate Arrangement
      </button>
      <div className="space-y-4">
        {Object.entries(arrangement).map(([roomName, students]) => (
          <div key={roomName} className="border p-4">
            <h3 className="text-xl font-semibold">{roomName}</h3>
            <ul className="list-disc list-inside">
              {students.map((student, index) => (
                <li key={index}>
                  {student.name} (ID: {student.id})
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

