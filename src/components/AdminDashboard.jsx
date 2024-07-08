import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [formResults, setFormResults] = useState([]);

  useEffect(() => {
    // Fetch form results from backend API
    const fetchFormResults = async () => {
      try {
        // Replace with actual API call to fetch form results
        const response = await fetch('/api/form-results');
        const data = await response.json();
        setFormResults(data); // Assuming data is an array of form results
      } catch (error) {
        console.error('Error fetching form results:', error);
      }
    };

    fetchFormResults();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {formResults.map((result) => (
          <li key={result.id}>
            <p>{result.field1}</p>
            <p>{result.field2}</p>
            {/* Display other fields as needed */}
          </li>
        ))}
      </ul>
      <Link to="/admin/upload-activity">Upload Activity</Link>
      <Link to="/admin/upload-gallery">Upload Gallery</Link>
    </div>
  );
};

export default AdminDashboard;
