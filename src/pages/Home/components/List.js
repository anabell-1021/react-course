import Item from "./Item"

const List = ({ listData, deleteData, submittingStatus}) => {
    console.log('listData', listData)
    return (
      <div className="list">
        {
            listData.map((item) => {
                const { note, date, time, id } = item;
                 return (
                  <Item key={id} id={id} note={note} date={date} time={time} deleteData={deleteData} submittingStatus={submittingStatus}/> //前面的note=Item.js裡的;後面的是這裡const定義的note
                );
            })
        }
      </div>
  );
};
export default List
