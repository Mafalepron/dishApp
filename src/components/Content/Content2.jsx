import React from 'react';
import MenuTab from '../Elems/MenuTab';




function Content2(props) {


    return(
        <div className='Content1'>
            <div className="row">
                <div className="col-md-5 ">

                </div>
                <div className="col-md-6" >
                    <div style={{display:'flex', justifyContent:'flex-end', marginBottom: '10px'}}>
                        <MenuTab 
                            changeQuantity={props.changeQuantity} 
                            dishes={props.dishes} 
                            content={props.content}/>
                    </div>
                </div>
            </div>
        </div>
    ) 
};

export {Content2};