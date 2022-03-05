import React, { useEffect, useState } from 'react'
import {getCategories} from '../services'
import './index.css'

function Categories({selectedCategory,setSelectedCategory,onCategorySelected}) {
    const [categories,setCategories] = useState([])

    const handleSelect = (cat) => {
        setSelectedCategory(cat)
        onCategorySelected(cat)
    }

    useEffect(async()=>{
        const res = await getCategories()
        setCategories(res)
    },[])
  return (
    <div className='categories-grid'>
        {categories.map(cat=>(
            <p onClick={()=>handleSelect(cat)} className={`category ${selectedCategory === cat ? 'selected' : '' }`} key={cat}>{cat}</p>
        ))}
    </div>
  )
}

export default Categories