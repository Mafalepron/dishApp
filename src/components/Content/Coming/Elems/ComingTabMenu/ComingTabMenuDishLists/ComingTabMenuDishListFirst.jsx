import React from 'react';
import { ComingTabMenuDishItem } from './ComingTabMenuDishItem/ComingTabMenuDishItem';



function ComingTabMenuDishListFirst(props) {
    const { dishes, content } = props;

    return(
            <ol className="list-group list-group-numbered">
                {/* { 
                        dishes.map(dish => {
                            if (dish.category === 'first') {
                                return <ComingTabMenuDishItem dish={dish} key={dish.id} />
                            }})} */}
            </ol>
    )
}



export { ComingTabMenuDishListFirst };