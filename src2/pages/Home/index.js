// import { useState } from "react-dom/client" ＃18版不適用
import React, { useState } from 'react';

import Edit from './components/Edit'
import List from './components/List'
import Item from './components/Item'
import './index.css'


const Home = () => {

    const [data, setData] = useState([])

    return <div className="app">
        <Edit add = {setData} />
        <List listData = {data}  deleteData = {setData}/>
    </div>

}
export default Home