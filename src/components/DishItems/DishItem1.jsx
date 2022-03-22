import React, {useState} from 'react';
import ChangeQuantityModal from '../Elems/Modal/ChangeRemainModal';
import ChangeRemainModal from '../Elems/Modal/ChangeRemainModal';

function DishItem1(props) {
    const {dish, changeQuantity} = props;
    const [inputRemain, setInputRemain] = useState(dish.quantity);


    return( 
                <li className="list-group-item d-flex justify-content-between align-items-start" style={{borderRadius: "10px", marginTop: "5px", border: "0.05px solid #5B5C60"}}>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{dish.dishname}</div>
                            {dish.dishname}
                        </div>
                        <div style={{display:"flex", marginTop: '3px', marginBottom: '3px'}}>
                                <div style={{display:"inline" }}>
                                    <div>
                                        Пришло: 
                                            &nbsp;
                                                <span className="badge bg-primary rounded-pill">{inputRemain}</span>
                                    </div>
                                <div style={{display:"flex", marginTop:"10px"}}>
                                        <div>
                                        Остаток с прошлого дня:
                                            &nbsp;
                                                <span className="badge bg-primary rounded-pill" style={{marginLeft:"-1px"}}>{inputRemain}</span> 
                                        </div>
                                            &nbsp;&nbsp;
                                                <ChangeQuantityModal  
                                                        dish={dish}
                                                        changeQuantity={changeQuantity}
                                                        inputRemain={inputRemain}
                                                        setInputRemain={setInputRemain}
                                                    />
                                                    
                                    </div>
                                    </div>
                        </div>
                </li>
    )
}



export {DishItem1};