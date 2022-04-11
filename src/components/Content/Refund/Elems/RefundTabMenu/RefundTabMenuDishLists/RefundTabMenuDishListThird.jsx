import React from 'react';
import { RefundTabMenuDishItem } from './RefundTabMenuDishItem/RefundTabMenuDishItem';


function RefundTabMenuDishListThird(props) {
    const { dishes } = props;
    return(
            <ol className="list-group list-group-numbered">
                { dishes.map(dish => {
                    if (dish.category === 'third') {
                        return <RefundTabMenuDishItem dish={dish} key={dish.id} /> 
                    }       
                }) }  
            </ol>
    )
}



export { RefundTabMenuDishListThird };