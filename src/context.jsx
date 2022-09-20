import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios';

const AppContext = React.createContext()

const allMealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
const randomMealURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppProvider = ({children}) => {
    const [meals, setMeals] = useState([])
    
    const fetchMeals = async(url) => {
        try {
            const { data } = await axios.get(url)
            setMeals(data.meals)
        } catch (e)
        {
        console.log(e)
        }
    }
    
    useEffect(()=>{
        
        fetchMeals(allMealsURL)
    },[])
    return (
        <AppContext.Provider 
        value={{ meals }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext}