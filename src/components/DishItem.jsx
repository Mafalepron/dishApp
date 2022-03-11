import React, {useState} from 'react';
import ChangeModal from './Items/ChangeModal'

function DishItem({dish}) {
    const [remains, setRemains] = useState('0')

    const onRemain = (inputRemain) => {
        setRemains(inputRemain)
    }

    return( 
            <div>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Блюдо 1</div>
                            {dish.dishname}
                        </div>
                        <div style={{float: 'left'}}>
                            Остаток на начало дня: 
                            &nbsp;
                            <span class="badge bg-primary rounded-pill">{remains}</span>
                            <br />
                            <div style={{display:"flex", justifyContent: "flex-end", marginTop: '5px'}}>
                                <ChangeModal 
                                    onRemain={onRemain} 
                                    remains={remains}
                                /> 
                            </div>
                        </div>
                </li>
                {/* <li class="list-group-item d-flex justify-content-between align-items-start">
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
                </li> */}
            </div>
    )
}



export {DishItem};