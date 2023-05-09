import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function ScoreTable() {



    const currentStateX = useSelector(state=>state.scoreX);
    const currentStateO = useSelector(state=>state.scoreO);

    const defaultResult = [
        {x:0,o:0}
    ];
    const [result, setResult] = useState(defaultResult);

    function newScore() {
        if (result.length > 10) {
            alert('Начинается новая игра!');
        }
        if (currentStateX !== result[result.length-1].x || currentStateO !== result[result.length-1].o) {
            const arr = result.concat([{x:currentStateX,o:currentStateO}]);
            setResult(arr);  
        }
    };

    setTimeout(() => {
        newScore();
        console.log('Result is:');
        console.log(result);
    }, 500);


        return (
            <div>
                <table className='scoreTable'>
                    <thead>
                        <tr>
                        <th>Player X</th>
                        <th>Player 0</th>
                        </tr>  
                    </thead>
                    {result.map((res)=>(
                        <tbody>
                            <tr>
                                <td>{res.x}</td><td>{res.o}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        );
}


export default ScoreTable;