'use client'

import { useState } from 'react'

export default function ExamRooms() {
  const [rooms, setRooms] = useState<{ name: string; capacity: number }[]>([])
  const [newRoom, setNewRoom] = useState({ name: '', capacity: 0 })

  const addRoom = (e: React.FormEvent) => {
    e.preventDefault()
    setRooms([...rooms, newRoom])
    setNewRoom({ name: '', capacity: 0 })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Exam Rooms</h2>
      <form onSubmit={addRoom} className="space-y-4">
        <input
          type="text"
          value={newRoom.name}
          onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
          placeholder="Room Name"
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          value={newRoom.capacity}
          onChange={(e) => setNewRoom({ ...newRoom, capacity: parseInt(e.target.value) })}
          placeholder="Capacity"
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Room
        </button>
      </form>
      <ul className="space-y-2">
        {rooms.map((room, index) => (
          <li key={index} className="border p-2">
            {room.name} - Capacity: {room.capacity}
          </li>
        ))}
      </ul>
    </div>
  )
}

