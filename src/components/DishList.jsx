import React from 'react';
import {DishItem} from './DishItem'

function DishList() {
    return(
            <ol class="list-group list-group-numbered">
                <DishItem />
            </ol>
    )
}



export {DishList};