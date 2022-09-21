import {useState} from 'react'
import {useGlobalContext} from '../context'

const Search = () => {

const { setSearchTerm } = useGlobalContext()
const [text, setText] = useState('')

const handleChange = (e) => {
    setText(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    if (text) {
        setSearchTerm(text)
        setText('')
    }
}

    return (
        <header className='search-container'>
            <form onSubmit={handleSubmit}>
                <input className='form-input' type='text' placeholder='type your favorite meal' value={text} onChange={handleChange}></input>
                <button className='btn' type='submit'>Search</button>
                <button className='btn btn-hipster' type='button'>Surpise me</button>
            </form>
        </header>
    )
}

export default Search