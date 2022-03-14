import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const [restaurantDetail, setRestaurantDetail] = useState([])
    const [dishes, setDishes] = useState([])
    const [cart, setCart] = useState([])

    const states = { cart, restaurantDetail }
    const setters = { setCart, setRestaurantDetail }

    const data = { states, setters }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState