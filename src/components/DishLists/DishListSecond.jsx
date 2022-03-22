import React from 'react';
import { DishItem1 } from '../DishItems/DishItem1';


function DishListSecond(props) {
    const { dishes, changeQuantity } = props;
    return(
            <ol className="list-group list-group-numbered">
                { dishes.map(dish => {
                    if (dish.category === 'second') {
                        return <DishItem1 dish={dish} key={dish.id} changeQuantity={changeQuantity}/> 
                    }   
                }) }  
            </ol>
    )
}



export {DishListSecond};