import React, {useState} from 'react';
import ChangeQuantityModal from '../Elems/Modal/ChangeQuantityModal';
import ChangeRemainModal from '../Elems/Modal/ChangeQuantityModal';

function DishItem2(props) {
    const {dish, changeQuantity} = props;
    const [remainNextDay, setRemainNextDay] = useState(0);
    const [onBase, setOnBase] = useState(0);


    return( 
                <li className="list-group-item d-flex justify-content-between align-items-start" style={{borderRadius: "10px", marginTop: "5px", border: "0.05px solid #5B5C60"}}>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{dish.dishname}</div>
                            {dish.dishname}
                        </div>
                        <div style={{display:"flex", marginTop: '3px', marginBottom: '3px'}}>
                                <div style={{display:"inline" }}>
                                    <div style={{display:"flex"}}>
                                            На базу: 
                                                &nbsp;
                                                <div>
                                                    <span className="badge bg-primary rounded-pill">{onBase}</span></div>
                                                    &nbsp;&nbsp;
                                                    <ChangeQuantityModal  
                                                            dish={dish}
                                                            changeQuantity={changeQuantity}
                                                            inputRemain={onBase}
                                                            setInputRemain={setOnBase}
                                                                                            />
                                                </div>
                                <div style={{display:"flex", marginTop:"10px"}}>
                                        <div>
                                            На следующий день:
                                                    &nbsp;
                                                    <span className="badge bg-primary rounded-pill" style={{marginLeft:"-1px"}}>{remainNextDay}</span> 
                                        </div>
                                                    &nbsp;&nbsp;
                                                    <ChangeRemainModal  
                                                            dish={dish}
                                                            changeQuantity={changeQuantity}
                                                            inputRemain={remainNextDay}
                                                            setInputRemain={setRemainNextDay}
                                                                                                />
                                                    
                                    </div>
                                    </div>
                        </div>
                </li>
    )
}



export {DishItem2};