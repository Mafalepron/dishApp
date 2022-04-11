import React from 'react';
import { AddDishesForm } from './Elems/AddDishesForm/AddDishesForm';
import ComingTabMenu from './Elems/ComingTabMenu/ComingTabMenu'




function Coming(props) {


    return(
        <div className='Coming'>
            <div className="row">
                <div className="col-md-6 ">
                    <div className='ramka-7'>
                        <AddDishesForm addDishes={props.addDishes}/>
                    </div>
                </div>
                <div className="col-md-6" >
                    <div style={{display:'flexbox', justifyContent:'flex-end', marginBottom: '15px'}}>
                        <ComingTabMenu
                            changeQuantity={props.changeQuantity} 
                            dishes={props.dishes}
                            content={props.content}
                        />
                    </div>
                </div>
            </div>
        </div>
    ) 
};



export { Coming }