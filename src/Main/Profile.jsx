import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ใช้สำหรับนำทาง
import '../style/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [bookingHistory, setBookingHistory] = useState([]); // เก็บประวัติการจอง
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ใช้สำหรับ redirect

  useEffect(() => {
    const fetchProfileAndBookings = async () => {
      const token = localStorage.getItem('token'); // ดึง token จาก LocalStorage
      if (!token) {
        setError('You are not logged in!');
        return;
      }

      try {
        // ดึงข้อมูลโปรไฟล์
        const profileResponse = await fetch('http://localhost:3000/profile', {
          headers: {
            Authorization: `${token}`, // ส่ง token ไปใน header
          },
        });

        if (!profileResponse.ok) {
          throw new Error('Failed to fetch profile');
        }

        const profileData = await profileResponse.json();
        setProfile(profileData);

        // ดึงข้อมูลประวัติการจอง
        const bookingsResponse = await fetch('http://localhost:3000/bookings_history', {
          headers: {
            Authorization: `${token}`, // ส่ง token ไปใน header
          },
        });

        if (!bookingsResponse.ok) {
          throw new Error('Failed to fetch bookings');
        }

        const bookingsData = await bookingsResponse.json();
        setBookingHistory(bookingsData);
      } catch (err) {
        console.error(err);
        setError(
          <>
            Failed to load data
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        );
      }
    };

    fetchProfileAndBookings();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // ลบ token ออกจาก LocalStorage
    navigate('/'); // นำทางกลับไปยังหน้า overview
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!profile) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-details">
        <p><strong>Username:</strong> {profile.username}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
        <p><strong>Country:</strong> {profile.country}</p>
      </div>

      <h3>Booking History</h3>
      {bookingHistory.length > 0 ? (
        <table className="booking-history-table">
          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Check-In Date</th>
              <th>Check-Out Date</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {bookingHistory.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.guest_name}</td>
                <td>{booking.check_in_date}</td>
                <td>{booking.check_out_date}</td>
                <td>{Number(booking.total_price).toLocaleString('en-US')} bath</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings found.</p>
      )}

      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Profile;
