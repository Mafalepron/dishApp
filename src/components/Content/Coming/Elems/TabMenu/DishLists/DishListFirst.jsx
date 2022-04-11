import React from 'react';
import {DishItem1} from '../DishItems/DishItem1';
import {DishItem2} from '../DishItems/DishItem2'


function DishListFirst(props) {
    const { dishes, changeQuantity, content } = props;

    return(
            <ol className="list-group list-group-numbered">
                {   content === 'content1' ? 
                        dishes.map(dish => {
                            if (dish.category === 'first') {
                                return <DishItem1 dish={dish} key={dish.id} changeQuantity={changeQuantity}/>
                            }}) : 
                        dishes.map(dish => {
                            if (dish.category === 'first') {
                                return <DishItem2 dish={dish} key={dish.id} changeQuantity={changeQuantity}/>
                            }})   }  
            </ol>
    )
}



export {DishListFirst};