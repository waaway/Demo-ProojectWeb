import React, { useState, useEffect } from 'react';
import '../style/Admin.css';
import Menu from '../Menu2';

const Admin = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({
    type: '',
    price_per_night: '',
    capacity: '',
    is_available: true,
    room_number: '',
  });
  const [editRoom, setEditRoom] = useState(null); // เก็บข้อมูลห้องที่กำลังแก้ไข
  const [loading, setLoading] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 10;

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/rooms');
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/rooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRoom),
      });

      if (response.ok) {
        alert('Room added successfully!');
        setNewRoom({
          type: '',
          price_per_night: '',
          capacity: '',
          is_available: true,
          room_number: '',
        });
        fetchRooms();
      } else {
        alert('Failed to add room.');
      }
    } catch (error) {
      console.error('Error adding room:', error);
    }
  };

  const handleEditRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/rooms/${editRoom.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editRoom),
      });

      if (response.ok) {
        alert('Room updated successfully!');
        setEditRoom(null); // ปิด Modal
        fetchRooms();
      } else {
        alert('Failed to update room.');
      }
    } catch (error) {
      console.error('Error updating room:', error);
    }
  };

  const handleDeleteRoom = async (id) => {
    if (!window.confirm('Are you sure you want to delete this room?')) return;

    try {
      const response = await fetch(`http://localhost:3000/api/rooms/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Room deleted successfully!');
        fetchRooms();
      } else {
        alert('Failed to delete room.');
      }
    } catch (error) {
      console.error('Error deleting room:', error);
    }
  };

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);

  const totalPages = Math.ceil(rooms.length / roomsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-rooms-container">
      <Menu />
      <h1 style={{ textAlign: 'center' }}>Admin - Manage Rooms</h1>

      {/* Form สำหรับเพิ่มห้องใหม่ */}
      <form onSubmit={handleAddRoom} className="form-add-room">
        <h2>Add New Room</h2>
        <input className='input'
          type="text"
          placeholder="Type"
          value={newRoom.type}
          onChange={(e) => setNewRoom({ ...newRoom, type: e.target.value })}
          required
        />
        <input className='input'
          type="number"
          placeholder="Price Per Night"
          value={newRoom.price_per_night}
          onChange={(e) => setNewRoom({ ...newRoom, price_per_night: e.target.value })}
          required
        />
        <input className='input'
          type="number"
          placeholder="Capacity"
          value={newRoom.capacity}
          onChange={(e) => setNewRoom({ ...newRoom, capacity: e.target.value })}
          required
        />
        <input className='input'
          type="text"
          placeholder="Room Number"
          value={newRoom.room_number}
          onChange={(e) => setNewRoom({ ...newRoom, room_number: e.target.value })}
          required
        />
        <select className='input'
          value={newRoom.is_available}
          onChange={(e) => setNewRoom({ ...newRoom, is_available: e.target.value === 'true' })}
        >
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>
        <button type="submit">Add Room</button>
      </form>

      {/* ตารางแสดงข้อมูลห้อง */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Price Per Night</th>
            <th>Capacity</th>
            <th>Is Available</th>
            <th>Room Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRooms.map((room) => (
            <tr key={room.id}>
              <td>{room.id}</td>
              <td>{room.type}</td>
              <td>{room.price_per_night}</td>
              <td>{room.capacity}</td>
              <td>{room.is_available ? 'Yes' : 'No'}</td>
              <td>{room.room_number}</td>
              <td>
                <button onClick={() => setEditRoom(room)}>Edit</button>
                <button onClick={() => handleDeleteRoom(room.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      {/* Modal สำหรับแก้ไขห้อง */}
      {editRoom && (
        <div className="modal-overlay">
          <div className="modal-content">
            <form onSubmit={handleEditRoom}>
              <h2>Edit Room</h2>
              <input
                type="text"
                placeholder="Type"
                value={editRoom.type}
                onChange={(e) => setEditRoom({ ...editRoom, type: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Price Per Night"
                value={editRoom.price_per_night}
                onChange={(e) => setEditRoom({ ...editRoom, price_per_night: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Capacity"
                value={editRoom.capacity}
                onChange={(e) => setEditRoom({ ...editRoom, capacity: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Room Number"
                value={editRoom.room_number}
                onChange={(e) => setEditRoom({ ...editRoom, room_number: e.target.value })}
                required
              />
              <select
                value={editRoom.is_available}
                onChange={(e) => setEditRoom({ ...editRoom, is_available: e.target.value === 'true' })}
              >
                <option value="true">Available</option>
                <option value="false">Not Available</option>
              </select>
              <button type="submit">Update Room</button>
              <button type="button" onClick={() => setEditRoom(null)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
