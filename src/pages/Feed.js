import React, {useState,useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import RestaurantCard from '../components/RestaurantCard'
import Footer from '../components/Footer'

const Feed = () => {

  const [restaurants,setRestaurants] = useState([])

  const pegarRestaurantes = ()=> {
    const options ={
    headers:{
      auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFkTDljS1lIOUN5Szk4WDRYbXVBIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmUuY29tIiwiY3BmIjoiMzQxLjExMS4xMTEtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjQ1NzUwMzczfQ.jJMWjlvoFkvIV7-KC3tbBh3fICSzz7cW8Hwf5vzf_Rg"
    }
  }
  axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants',options)
          .then((res) => {
            console.log(res.data.restaurants)
          setRestaurants(res.data.restaurants)
          }).catch((err) => {
            console.log(err.response)
          })
      }

      useEffect( ()=>{pegarRestaurantes()},[] )

      
  return (
    <DivEstilizada>
      
    <h1>Future Eats</h1>
    <Footer/>
     {restaurants.map((restaurant)=>{
      return(
      //   <div>
      // <p> {restaurant.name} </p> 
      
      //   </div>

        <RestaurantCard
        
        restaurant = {restaurant}
        
        /> 
      )
     
    })} 
                     
        
        
    
    </DivEstilizada>
    
  
  );
}

export default Feed;



const DivEstilizada = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width: 100vw;
justify-content: space-between;
`

