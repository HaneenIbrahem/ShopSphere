import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Profile.module.css';  // Import CSS module
import Loader from '../../../components/user/Loader/Loader';  // Assuming you have a loader component

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://ecommerce-node4.onrender.com/user/profile', {
          headers: {
            Authorization: `Tariq__${localStorage.getItem("authToken")}`
          }
        });
        console.log(response.data.user)
        setProfile(response.data.user);
      } catch (error) {
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.title}>User Profile</h1>
      <div className={styles.profileInfo}>
        <p><strong>Name:</strong> {profile?.userName}</p>
        <p><strong>Email:</strong> {profile?.email}</p>
        <p><strong>Role:</strong> {profile?.role}</p>
        <p><strong>Status:</strong> {profile?.status}</p>
      </div>
    </div>
  );
};

export default Profile;
