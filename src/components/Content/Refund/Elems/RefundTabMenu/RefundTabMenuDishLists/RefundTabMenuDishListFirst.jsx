import React from 'react';
import { RefundTabMenuDishItem } from './RefundTabMenuDishItem/RefundTabMenuDishItem';



function RefundTabMenuDishListFirst(props) {
    const { dishes, content } = props;

    return(
            <ol className="list-group list-group-numbered">
                { 
                        dishes.map(dish => {
                            if (dish.category === 'first') {
                                return <RefundTabMenuDishItem dish={dish} key={dish.id} />
                            }})}
            </ol>
    )
}



export { RefundTabMenuDishListFirst };