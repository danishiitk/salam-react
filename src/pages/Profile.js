import React from 'react';

import LiveLocationTracker from "../components/LiveLocationTracker";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">User Profile</h1>
          <div className="space-y-4 mb-8">
            <p className="text-lg"><span className="font-semibold">Name:</span> John Doe</p>
            <p className="text-lg"><span className="font-semibold">Email:</span> john.doe@example.com</p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Order History</h2>
          <ul className="space-y-3">
            <li className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center">
              <span>Order #12345: Pizza</span>
              <span className="text-green-600 font-semibold">Delivered</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center">
              <span>Order #12346: Burger</span>
              <span className="text-green-600 font-semibold">Delivered</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center">
              <span>Order #12347: Sushi</span>
              <span className="text-yellow-600 font-semibold">Pending</span>
            </li>
          </ul>
        </div>
        <div className="w-full h-96 lg:h-auto rounded-lg overflow-hidden shadow-md">
          <LiveLocationTracker />
        </div>
      </div>
    </div>
  );
};

export default Profile;