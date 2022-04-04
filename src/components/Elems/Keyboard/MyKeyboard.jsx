import React from 'react';
import s from './MyKeyboard.module.css';


const MyKeyboard = () => {
    const keyboard = [49,50,51,52,53,54,55,56,57,48,1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 8, 32];
    // let alphabet = 'йцукенгшщзхъфывапролджэячсмитьбю';
    // let massiv = [];
    // for (let i = 0; i < alphabet.length; i++) {
    //     massiv.push(alphabet.charCodeAt(i))
    // }
    // console.log(massiv)
    const handleClick = (event) => {
        var foo = document.querySelector(`${s.keyboard}`);

        for (var i = 0; i < foo.length; i++) {
        foo[i].classList.remove("active");
        }

        e.currentTarget.classList.add("active");
        };
    }

    return (
            <div className={s.keyboard}>
                {
                    keyboard.map(elem => {
                            if (elem === 49) {
                                return <div className={s.kkey} data-code={elem} style={{marginLeft: '25px'}} >{String.fromCharCode(elem)}</div>
                            }
                            if (elem === 48 || elem === 1098 || elem === 1101) {
                                return( <div >
                                            <div className={s.kkey} data-code={elem} >{String.fromCharCode(elem)}</div>  
                                            <div className={s.clearfix}/> 
                                        </div>
                                ) 
                            } 
                            else if (elem === 32) {
                                return(
                                        <div>
                                            <div className={s.clearfix}/> 
                                            <div className={s.kkeyspace} data-code={elem}>{String.fromCharCode(elem)}</div>  
                                        </div>
                                )
                            } 
                        return <div className={s.kkey} data-code={elem}>{String.fromCharCode(elem)}</div>
                    })
                        
                }
            </div>
    )

}

export {MyKeyboard}