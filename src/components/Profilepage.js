// Profile.js

import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    const users = [
      {
        id: 1,
        fullName: "John Doe",
        email: "john.doe@gmail.com",
        password: "password123",
        sex: "Male",
        age: 20,
        country: "United States"
      }
    
    ];

    const currentUser = users.find((user) => user.id === 1); // Assuming the current user is John Doe

    setUser(currentUser);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <label>Full Name:</label>
        <span>{user.fullName}</span>
      </div>
      <div>
        <label>Email:</label>
        <span>{user.email}</span>
      </div>
      <div>
        <label>Sex:</label>
        <span>{user.sex}</span>
      </div>
      <div>
        <label>Age:</label>
        <span>{user.age}</span>
      </div>
      <div>
        <label>Country:</label>
        <span>{user.country}</span>
      </div>
    </div>
  );
};

export default Profile;
