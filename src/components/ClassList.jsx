import { CLASS_LIST } from "../consts";

export default function ClassList({ attrList }) {
  const classList = Object.keys(CLASS_LIST).map((cls, ind) => ({
    id: ind + 1,
    name: cls,
    attrs: CLASS_LIST[cls],
    meetsMin:
      attrList.filter((attr) => CLASS_LIST[cls][attr.name] <= attr.value)
        .length === attrList.length,
  }));

  return (
    <div style={{ marginBottom: "10px" }}>
      {classList.map((item) => {
        return (
          <span
            style={{
              marginRight: "5px",
              marginLeft: "5px",
              color: item.meetsMin ? "green" : "black",
            }}
            key={item.id}
          >
            {item.name}
          </span>
        );
      })}
    </div>
  );
}
