import React, {useState} from 'react';
import ChangeQuantityModal from './Elems/ChangeQuantityModal'

function DishItem(props) {
    const {dish, changeQuantity} = props;
    const [inputRemain, setInputRemain] = useState(dish.quantity);


    return( 
            <div>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Блюдо №{dish.number}</div>
                            {dish.dishname}
                        </div>
                        <div style={{float: 'left'}}>
                            Остаток на начало дня: 
                            &nbsp;
                            <span className="badge bg-primary rounded-pill">{inputRemain}</span>
                            <br />
                            <div style={{display:"flex", justifyContent: "flex-end", marginTop: '5px'}}>
                                <ChangeQuantityModal  
                                    dish={dish}
                                    changeQuantity={changeQuantity}
                                    inputRemain={inputRemain}
                                    setInputRemain={setInputRemain}
                                /> 
                            </div>
                        </div>
                </li>
            </div>
    )
}



export {DishItem};