import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount, Center } from '../styledComponents';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return (
        <Center>
        <ProductAmountContainer>
            <Button variant="text" onClick={decrement}><Remove /></Button>
            <ProductAmount>{count}</ProductAmount>
            <Button variant="text" onClick={increment}><Add /></Button>
            
            {
                stock && count
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Agregar al carrito</Button>
                : <Button variant="contained" disabled>Agregar al carrito</Button>
            }
            
        </ProductAmountContainer>
        </Center>
    );
}

export default ItemCount;
