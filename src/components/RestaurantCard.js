import React from "react"
import styled from 'styled-components'


const CardRestaurant = (props) => {
    return (
       
        <div>

            <ContainerCard> 
       
            <DivImg src={props.restaurant.logoUrl} />
            
            <DivName ><b>{props.restaurant.name}</b></DivName>
            
            <DivInfo>
                <div>{props.restaurant.deliveryTime - 10} - {props.restaurant.deliveryTime} min</div>
                <div>Frete R${props.restaurant.shipping},00</div>
            </DivInfo>

            </ContainerCard>
            </div>
    )

}

export default CardRestaurant;

 const ContainerCard = styled.div`
    display:flex;
    flex-direction: column;
    width: 80vw;
    max-width: 328px;
    height: 230px;
    border: 1px solid #b8b8b8;
    border-radius: 8px;
    margin-bottom:5px;
    cursor: pointer;
    margin-top: 15px;
`

 const DivImg = styled.img`
    width: 100%;
    height: 170px;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    object-fit: auto;
`

 const DivName = styled.div`
    color:#5cb646;
    margin:12px 16px 4px 16px;
    font-size:16px;
`
 const DivInfo = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin:0px 16px 0px 16px;
    color: #b8b8b8;
`