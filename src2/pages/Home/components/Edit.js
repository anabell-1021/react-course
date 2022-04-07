import React, { useState } from 'react';

const Edit = ({ add }) => {

    const [note, setNote] = useState("")
    function noteChange(e){
        setNote(e.target.value)
    }

    const [date, setDate] = useState("")
    function dateChange(e){
        setDate(e.target.value)
    }

    const [time, setTime] = useState("")
    function timeChange(e){
        setTime(e.target.value)
    }

    console.log(note, date, time)

    function addItem() {
        add(function(prevData){
            return [...prevData, {
                note,
                date,
                time
            }]
        })
    }
    
    // 寫的操作都i是要跟狀態有關，狀態變動才能去拿到結果 每個input去綁定一個useState，急可空至他

    return <div>
        <h1>備忘錄</h1>
        <p>記事：</p>
        <input type="text" value={note} onChange={noteChange}/>
        <p>日期：</p>
        <input type="date" value={date} onChange={dateChange}/>
        <p>時間：</p>
        <input type="time" value={time} onChange={timeChange}/>
        <button onClick={addItem} className="add">新增</button> 
        {/* onClick事件發生，透過useState去渲染{addItem}畫面 */}
    </div>
}
export default Edit