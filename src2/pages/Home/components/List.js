import Item from "./Item"

const List = ({ listData, deleteData}) => {
    console.log('listData', listData)
    return <div className="list">
        {
            listData.map((item) => {
                const { note, date, time } = item
                 return <Item note={note} date={date} time={time} deleteData={deleteData}/> //前面的note=Item.js裡的;後面的是這裡const定義的note

            })
        }
    </div>
}
export default List