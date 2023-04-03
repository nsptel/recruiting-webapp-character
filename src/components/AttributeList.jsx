import React from "react";

export default function AttributeList({ list, updateList }) {
  const updateAttr = (id, updateWith) => {
    updateList(
      list.map((prevAttr) => {
        if (prevAttr.id === id) {
          const newAttr = {
            ...prevAttr,
            value: prevAttr.value + updateWith,
          };
          newAttr.modifier = Math.floor((newAttr.value - 10) / 2);
          return newAttr;
        }
        return prevAttr;
      })
    );
  };

  return (
    <>
      {list.map((attr) => {
        return (
          <div key={attr.id}>
            <span style={{ display: "block" }}>
              {attr.name}: {attr.value}, modifier: {attr.modifier}
            </span>
            <div>
              <button onClick={() => updateAttr(attr.id, -1)}>-</button>
              <button onClick={() => updateAttr(attr.id, 1)}>+</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
