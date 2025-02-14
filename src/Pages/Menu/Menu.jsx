import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://cafe-lumiere-server.vercel.app/menu')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch menu data.');
        }
        return response.json();
      })
      .then(data => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching menu:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container mx-auto py-8 text-center">Loading menu...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-8 text-center">Error: {error}</div>;
  }

  return (
    <div className="menu-page container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map(item => (
          <div key={item._id} className="menu-item border rounded shadow p-4">
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover mb-4"
              />
            )}
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="mt-2 text-lg font-bold">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
