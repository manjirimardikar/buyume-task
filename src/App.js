
import './App.css';
import React,{useState} from 'react';

function App() {

  const [searchText,setSearchText] = useState('');
  const[filteredPosts, setFilteredPosts] = useState([]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = async() => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      const filtered = data.filter(post => post.title.includes(searchText));
      setFilteredPosts(filtered);
    } catch (error){
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className="App">
      <header>
       <input type="text" value={searchText} onChange={handleSearchChange}/>
       <button onClick={handleSearchClick}>Search Here</button>
       <ul>
         {filteredPosts.map(post => (
           <li key={post.id}>{post.title}</li>
         ))}
         </ul>
       </header>
    </div>
  );
}

export default App;
