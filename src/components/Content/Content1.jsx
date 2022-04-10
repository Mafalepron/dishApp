import React from 'react';
import {AddDishesForm} from '../Elems/Forms/AddDishesForm';
import MenuTab from '../Elems/MenuTab';




function Content1(props) {


    return(
        <div className='Content1'>
            <div className="row">
                <div className="col-md-6 ">
                    <div className='ramka-7'>
                        <AddDishesForm addDishes={props.addDishes} />
                    </div>
                </div>
                <div className="col-md-6" >
                    <div style={{display:'flexbox', justifyContent:'flex-end', marginBottom: '15px'}}>
                        <MenuTab 
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

export {Content1};