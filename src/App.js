import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  
  const handleSearchClick = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      const filtered = data.filter(post => post.title.includes(searchText));
      setFilteredPosts(filtered);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={searchText} onChange={handleSearchChange} />
        <button onClick={handleSearchClick}>Search</button>
        <div className="card-container">
          {filteredPosts.map(post => (
            <div key={post.id} className="card">
              {post.title}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

