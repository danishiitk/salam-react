import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">User Profile</h1>
        <div className="space-y-2 mb-6">
          <p className="text-lg"><span className="font-semibold">Name:</span> John Doe</p>
          <p className="text-lg"><span className="font-semibold">Email:</span> john.doe@example.com</p>
        </div>
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        <ul className="space-y-2">
          <li className="bg-gray-50 p-3 rounded-md shadow-sm">Order #12345: Pizza - <span className="text-green-600 font-semibold">Delivered</span></li>
          <li className="bg-gray-50 p-3 rounded-md shadow-sm">Order #12346: Burger - <span className="text-green-600 font-semibold">Delivered</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;