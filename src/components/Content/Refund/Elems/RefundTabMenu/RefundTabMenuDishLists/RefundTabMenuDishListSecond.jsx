import React from 'react';
import { RefundTabMenuDishItem } from './RefundTabMenuDishItem/RefundTabMenuDishItem';


function RefundTabMenuDishListSecond(props) {
    const { dishes } = props;
    return(
            <ol className="list-group list-group-numbered">
                { dishes.map(dish => {
                    if (dish.category === 'second') {
                        return <RefundTabMenuDishItem dish={dish} key={dish.id} /> 
                    }   
                }) }  
            </ol>
    )
}



export { RefundTabMenuDishListSecond };