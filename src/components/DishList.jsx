import React from 'react';
import {DishItem} from './DishItem';


function DishList(props) {
    const { dishes, changeQuantity } = props;
    return(
            <ol className="list-group list-group-numbered">
                { dishes.map(dish => {
                    return <DishItem dish={dish} key={dish.id} changeQuantity={changeQuantity}/>    
                }) }  
            </ol>
    )
}



export {DishList};