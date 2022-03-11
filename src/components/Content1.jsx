import React, {useState} from 'react';
import {InputWithoutCheck} from './Items/InputWithoutCheck';
import MenuTab from './Items/MenuTab';
import {DishList} from './DishList';



function Content1() {
    const [dishes, setDishes] = useState([]);


    const addDishes = (dishname, quantity) => {
        setDishes(dishes.concat([
            {
                dishname,
                quantity,
                id: Date.now
            }
                    ]))
        console.log(dishes);
    }

    return(
        <div className='Content1'>
            <div class="row">
                <div class="col-md-4">
                    <br />
                    <br />
                    <InputWithoutCheck addDishes={addDishes}/>
                </div>
                <div class="col-md-8">
                    <div style={{display:'flex', justifyContent:'flex-end', marginBottom: '10px'}}>
                        <MenuTab />
                    </div>
                    <DishList dishes={dishes}/>
                    {/* <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Блюдо 1</div>
                                    Греча
                                </div>
                                <div style={{float: 'left'}}>
                                    Остаток на начало дня: 
                                    &nbsp;
                                    <span class="badge bg-primary rounded-pill">14</span>
                                    <br />
                                    <div style={{display:"flex", justifyContent: "flex-end", marginTop: '5px'}}>
                                        <ChangeModal /> 
                                    </div>
                                </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Блюдо 2</div>
                                    Макароны
                                </div>
                                <div style={{float: 'left'}}>
                                    Остаток на начало дня: 
                                    &nbsp;
                                    <span class="badge bg-primary rounded-pill">14</span>
                                    <br />
                                    <div style={{display:"flex", justifyContent: "flex-end", marginTop: '5px'}}> 
                                        <ChangeModal /> 
                                    </div>
                                </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Блюдо 3</div>
                                    Рис
                            </div>
                            <div style={{float: 'left'}}>
                                Остаток на начало дня:
                                &nbsp;
                                <span 
                                    class="badge bg-primary rounded-pill"
                                >
                                    14
                                </span>
                                <br />
                                <div style={{display:"flex", justifyContent: "flex-end", marginTop: '5px'}}> 
                                    <ChangeModal /> 
                                </div>
                            </div>
                            
                        </li>
                    </ol> */}
                </div>
            </div>
        </div>
    ) 
};

export {Content1};