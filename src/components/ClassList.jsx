import { useState } from "react";
import { CLASS_LIST } from "../consts";

export default function ClassList({ attrList }) {
  const classList = Object.keys(CLASS_LIST).map((cls, ind) => ({
    id: ind,
    name: cls,
    attrs: CLASS_LIST[cls],
    meetsMin:
      attrList.filter((attr) => CLASS_LIST[cls][attr.name] <= attr.value)
        .length === attrList.length,
  }));
  const [requirements, setRequirements] = useState();

  const displayRequirements = (key) => {
    const attrs = classList[key].attrs;
    setRequirements(
      Object.entries(attrs).map(([key, val], ind) => ({ id: ind, key, val }))
    );
  };

  return (
    <div>
      {classList.map((item) => {
        return (
          <span
            style={{
              marginRight: "5px",
              marginLeft: "5px",
              color: item.meetsMin ? "green" : "black",
              cursor: "pointer",
            }}
            key={item.id}
            onClick={() => displayRequirements(item.id)}
          >
            {item.name}
          </span>
        );
      })}
      {requirements &&
        requirements.map((req) => {
          return (
            <span style={{ display: "block" }} key={req.id}>
              {req.key}: {req.val}
            </span>
          );
        })}
    </div>
  );
}
