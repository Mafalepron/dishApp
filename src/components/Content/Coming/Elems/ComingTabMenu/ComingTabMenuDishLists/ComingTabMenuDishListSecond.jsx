import React from 'react';
import { ComingTabMenuDishItem } from './ComingTabMenuDishItem/ComingTabMenuDishItem';


function ComingTabMenuDishListSecond(props) {
    const { dishes } = props;
    return(
            <ol className="list-group list-group-numbered">
                { dishes.map(dish => {
                    if (dish.category === 'second') {
                        return <ComingTabMenuDishItem dish={dish} key={dish.id} /> 
                    }   
                }) }  
            </ol>
    )
}



export { ComingTabMenuDishListSecond };