import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CardContainer, DishImage, CardDetailContainer, Text16, Text12, CardActionContainer, ModalBodyContainer, StyledSelect } from "./styled";
import { Button, MenuItem, Modal } from '@material-ui/core';
import GlobalStateContext from "../../global/GlobalStateContext";

function DishCard(props) {
    const history = useHistory();
    const { states, setters } = useContext(GlobalStateContext);
    const [openModal, setOpenModal] = useState(false)
    const [productQuantity, setProductQuantity] = useState(0);

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleQuantityChange = (event) => {
        setProductQuantity(event.target.value);
    };

    const cartItem = {
        id: `${props.id}`,
        name: `${props.name}`,
        description: `${props.description}`,
        photoUrl: `${props.photoUrl}`,
        category: `${props.category}`,
        price: `${props.price}`,
        productQuantity: productQuantity,
        restaurantId: `${props.restaurantId}`,
    }

    const addItemToCart = (newItem) => {
        if (newItem.productQuantity != 0) {
            let newCart = [...states.cart]
            newCart.push({ newItem })
            setters.setCart(newCart)
            alert(`${newItem.name} foi adicionado ao seu carrinho!`)
            setOpenModal(false)
        } else {
            alert("A quantidade não pode ser zero!")
        }
    }
    console.log("CARRINHO", states.cart)

    const modalBody = (
        <ModalBodyContainer>
            <p>Selecione a quantidade desejada</p>
            <div>
                <StyledSelect
                    id="demo-simple-select-disabled"
                    value={productQuantity}
                    onChange={handleQuantityChange}
                >
                    <MenuItem value="">
                        
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </StyledSelect>
            </div>
            <Button color="primary" onClick={() => addItemToCart(cartItem)}>adicionar ao carrinho</Button>
        </ModalBodyContainer>
    )

    return (
        <CardContainer>
            <DishImage src={props.photoUrl} />
            <CardDetailContainer>
                <Text16>{props.name}</Text16>
                <Text12>{props.description}</Text12>
                <Text16>R${props.price}</Text16>
            </CardDetailContainer>
            <CardActionContainer>
                <button>{productQuantity}</button>
                <div>
                    <button onClick={handleOpenModal}>
                        Adicionar
                    </button>
                    <Modal open={openModal} onClose={handleCloseModal} >
                        {modalBody}
                    </Modal>
                </div>
            </CardActionContainer>
        </CardContainer>
    );
}

export default DishCard