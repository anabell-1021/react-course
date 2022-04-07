// import { useState } from "react-dom/client" ＃18版不適用
import React, { useState, useEffect, useRef } from 'react';
import {API_GET_DATA} from '../../global/constants'

import Edit from './components/Edit'
import List from './components/List'
import './index.css'

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  setData(data)
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    header: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ data })
  })
}

const Home = () => {
    const [data, setData] = useState([])
    const submittingStatus = useRef(false); // “false”不管渲染幾次都不會更動（標準值來判斷）

    useEffect(() => {  //外面的function是每次執行時會做是每次執行時會做的事情
      if(!submittingStatus.current){
        return
      }
      /*
      //綁定的事件  
        //window.alert("新增成功")
      return () => {  //裡面的function是美式渲染結束，要開始下個渲染前會執行美式渲染結束，要開始下個渲染前會執行
        //取消綁定
      }
      */

     /*
     console.log('here');  //把data依賴拿掉，就只會執行一次，除非重整
     */
      /*
      fetch(API_GET_DATA)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      
      })
      */
      fetchData(data)
      .then(data => submittingStatus.current = false)

      }, [data])

      useEffect(() => {  
        fetchData(setData)
        }, [])

    return <div className="app">
        <Edit add = {setData} submittingStatus={submittingStatus}/>
        <List listData = {data}  deleteData = {setData} submittingStatus={submittingStatus}/>
    </div>

}
export default Home
