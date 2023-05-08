import React, { useState } from 'react';

function GameArea() {
    const emptyItems = [
        {'key':'0', 'content':''},
        {'key':'1', 'content':''},
        {'key':'2', 'content':''},
        {'key':'3', 'content':''},
        {'key':'4', 'content':''},
        {'key':'5', 'content':''},
        {'key':'6', 'content':''},
        {'key':'7', 'content':''},
        {'key':'8', 'content':''},
    ];
    const [items, setItems] = useState(emptyItems);

    function move(key) {
        //console.log('move clicked!');
        const newItems = items.map((item)=>(
            item.key == key ? {...item, 'content':'X'} : item
        ));
        setItems(newItems);
    }

        return (
            <div className='gameArea'>
            {items.map((item) => (
                <div key={item.key} className='item' onClick={()=>{move(item.key)}}>{item.content}</div>
            ))}
                
            </div>
        );
}


export default GameArea;