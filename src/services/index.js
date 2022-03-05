import axios from 'axios'
export async function getCategories(){
    try {
        const res = await axios.get('https://api.chucknorris.io/jokes/categories')
        return res.data
    } catch (error) {
        return error.message
    }
}

export async function getJoke(category){
    try {
        const res = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        console.log(res)
        return res.data.value
    } catch (error) {
        return error.message
    }
}