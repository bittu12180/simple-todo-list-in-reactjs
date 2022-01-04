import React from "react";

function TodoLists(props) {
    const deleteItemFromList = key => {
      const newList=  props.itemList.filter(itemObj => {
    
            return itemObj.key !== key;

        });
        console.log(props.itemList,newList);
        props.updateItemList(newList);
    
    };
    return (

        <div>
            {props.itemList.map(itemObj => {
                return (
                    <div key={itemObj.key}>
                        <p>{itemObj.item}</p>
                        <button onClick={ () => deleteItemFromList(itemObj.key)}>-</button>

                    </div>
                );
            })}
        </div>

    );

}
export default TodoLists;