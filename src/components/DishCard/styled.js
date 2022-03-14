import styled from 'styled-components'

import { Select } from '@material-ui/core';

export const CardContainer = styled.div`
    width: 328px;
    height: 112px;
    margin: 7px 0 0;
    border-radius: 8px;
    border: solid 1px grey;
    display: flex;
`
export const DishImage = styled.img`
    width: 96px;
    height: 112px;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
`
export const CardDetailContainer = styled.div`
    width: 216px;
    height: 112px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 16px;
`
export const Text16 = styled.p`
    font-size: 16px;
    margin: 0;
`
export const Text12 = styled.p`
    font-size: 12px;
    margin: 0;
`

export const CardActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`

export const ModalBodyContainer = styled.div`
    background: white;
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`


export const StyledSelect = styled(Select)`
    width: 280px;
    variant: outlined
`