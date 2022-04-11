import React, {useState} from 'react';



function ComingTabMenuDishItem(props) {
 


        return( 
                <li className="list-group-item d-flex justify-content-between align-items-start" style={{borderRadius: "10px", marginTop: "5px", border: "0.05px solid #5B5C60"}}>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">1</div>
                            1
                        </div>
                        <div style={{display:"flex", marginTop: '3px', marginBottom: '3px'}}>
                                <div style={{display:"inline" }}>
                                    <div>
                                        Пришло: 
                                            &nbsp;
                                                <span className="badge bg-primary rounded-pill">0</span>
                                    </div>
                                <div style={{display:"flex", marginTop:"10px"}}>
                                        <div>
                                        Остаток с прошлого дня:
                                            &nbsp;
                                                <span className="badge bg-primary rounded-pill" style={{marginLeft:"-1px"}}>0</span> 
                                        </div>
                                            &nbsp;&nbsp;
                                                
                                                    
                                    </div>
                                    </div>
                        </div>
                </li>
    )
}



export { ComingTabMenuDishItem };