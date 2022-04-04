import React from 'react';
import {AddDishesForm} from '../Elems/Forms/AddDishesForm';
import MenuTab from '../Elems/MenuTab';




function Content1(props) {


    return(
        <div className='Content1'>
            <div className="row">
                <div className="col-md-5 ">
                    <div className='ramka-7'>
                        <br />
                        <br />
                        <AddDishesForm addDishes={props.addDishes}/>
                    </div>
                </div>
                <div className="col-md-6" >
                    <div style={{display:'flex', justifyContent:'flex-end', marginBottom: '10px'}}>
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