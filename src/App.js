import logo from './logo.svg';
import './App.css';
import Categories from './Categories';
import { useEffect, useState } from 'react';
import {getJoke} from './services';

function App() {
  const [selectedCategory,setSelectedCategory] = useState('')
  const [joke,setJoke] = useState('')
  const onCategorySelected = async(category) => {
      const res = await getJoke(category)
      setJoke(res)
  }

  return (
    <div className="App">
      <h3>Chuck Norris</h3>
      <Categories selectedCategory={selectedCategory} setSelectedCategory = {setSelectedCategory} onCategorySelected = {onCategorySelected} />
      {joke &&
      <section className='joke-section'>
        <p className='joke-header'>Selected Category : {selectedCategory}</p>
        <p className='joke'>{joke}</p>
        <button onClick={()=>onCategorySelected(selectedCategory)} className='btn'>New Joke</button>
      </section>
      }
    </div>
  );
}

export default App;
