import React from 'react';

const VerticalCard = ({ data = [], loading = false }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data.length) {
    return <div>No items to display.</div>;
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item, idx) => (
        <div key={item._id || idx} className="bg-white shadow rounded p-4">
          <h3 className="font-bold text-lg mb-2">{item.name || 'Product Name'}</h3>
          {item.image && (
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-2 rounded" />
          )}
          <p className="text-gray-700">{item.description || 'No description available.'}</p>
          {item.price && (
            <p className="mt-2 font-semibold">Price: {item.price}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalCard; 