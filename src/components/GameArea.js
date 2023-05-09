import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function GameArea() {
    const emptyItems = [
        {'key':'0'},
        {'key':'1'},
        {'key':'2'},
        {'key':'3'},
        {'key':'4'},
        {'key':'5'},
        {'key':'6'},
        {'key':'7'},
        {'key':'8'},
    ];
    const [items, setItems] = useState(emptyItems);
    const [countClick, setCountCkick] = useState(1);

    const dispatch = useDispatch();
    const defaulStateX = useSelector(state=>state.scoreX);
    console.log('defaulStateX');
    console.log(defaulStateX);
    const defaulStateO = useSelector(state=>state.scoreO);
    console.log('defaulStateO');
    console.log(defaulStateO);

    function move(key) {
        //console.log('move clicked!');
        setCountCkick(countClick+1);
        //console.log(countClick);
        let sign;
        (countClick%2) === 1 ? sign = 'X' : sign = 'O';
        const newItems = items.map((item)=>(
            item.key === key ? {...item, 'content':sign} : item
        ));
        setItems(newItems);
    }

    function winAndClear(type) {
        setCountCkick(1);
        setItems(emptyItems);
        {dispatch({type: type,scoreX:1})};
    }

    function isWin() {
        let type;
        (countClick%2) === 0 ? type='xWin' : type = 'oWin';

        if(items[0].content==='X' || items[0].content==='O'){
            if (items[0].content===items[1].content && items[1].content===items[2].content){
                winAndClear(type);
            }
            if (items[0].content===items[3].content && items[3].content===items[6].content){
                winAndClear(type);
            }
            if (items[0].content===items[4].content && items[4].content===items[8].content){
                winAndClear(type);
            }
        }      

        if(items[1].content==='X' || items[1].content==='O'){
                if (items[1].content===items[4].content && items[4].content===items[7].content){
                winAndClear(type);
            }
        }

        if(items[2].content==='X' || items[2].content==='O'){
            if (items[2].content===items[4].content && items[4].content===items[6].content){
            winAndClear(type);
            }
            if (items[2].content===items[5].content && items[5].content===items[8].content){
            winAndClear(type);
            }
        }

        if(items[3].content==='X' || items[3].content==='O'){
            if (items[3].content===items[4].content && items[4].content===items[5].content){
            winAndClear(type);
            }
        }

        if(items[6].content==='X' || items[6].content==='O'){
            if (items[6].content===items[7].content && items[7].content===items[8].content){
            winAndClear(type);
            }
        }
        
        if (items.every((item)=>'content' in item)) {
            alert('Ничья!');
            setCountCkick(1);
            setItems(emptyItems);            
        }        
    }

    
        isWin();
        return (
            <div className='gameArea'>
            {items.map((item) => (
                <div key={item.key} className='item' onClick={()=>{move(item.key)}}>{item.content}</div>
            ))}
                
            </div>
        );
}


export default GameArea;