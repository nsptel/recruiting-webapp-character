import React, { useState } from "react";
import { ATTRIBUTE_LIST } from "../consts";

export default function AttributeList() {
  const attrs = ATTRIBUTE_LIST.map((attr, ind) => ({
    id: ind + 1,
    name: attr,
    value: 10,
  }));
  const [attrList, setAttrList] = useState(attrs);

  const updateAttr = (id, updateWith) => {
    setAttrList((prevAttrList) => {
      return prevAttrList.map((prevAttr) => {
        if (prevAttr.id === id) {
          return {
            ...prevAttr,
            value: prevAttr.value + updateWith,
          };
        }
        return prevAttr;
      });
    });
  };

  return (
    <>
      {attrList.map((attr) => {
        return (
          <>
            <span style={{ display: "block" }} key={attr.id}>
              {attr.name}: {attr.value}
            </span>
            <div>
              <button onClick={() => updateAttr(attr.id, -1)}>-</button>
              <button onClick={() => updateAttr(attr.id, 1)}>+</button>
            </div>
          </>
        );
      })}
    </>
  );
}
