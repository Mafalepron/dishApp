import React from 'react';
import { ComingTabMenuDishItem } from './ComingTabMenuDishItem/ComingTabMenuDishItem';


function ComingTabMenuDishListThird(props) {
    const { dishes } = props;
    return(
            <ol className="list-group list-group-numbered">
                { dishes.map(dish => {
                    if (dish.category === 'third') {
                        return <ComingTabMenuDishItem dish={dish} key={dish.id} /> 
                    }       
                }) }  
            </ol>
    )
}



export { ComingTabMenuDishListThird };