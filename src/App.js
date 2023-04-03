import { useState } from "react";
import AttributeList from "./components/AttributeList";
import ClassList from "./components/ClassList";
import SkillsList from "./components/SkillsList";
import { ATTRIBUTE_LIST } from "./consts";
import "./App.css";

function App() {
  const attrs = ATTRIBUTE_LIST.map((attr, ind) => ({
    id: ind + 1,
    name: attr,
    value: 10,
    modifier: 0,
  }));
  const [attrList, setAttrList] = useState(attrs);

  const updateAttrList = (newAttrList) => {
    setAttrList(newAttrList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <ClassList attrList={attrList} />
      <br />
      <h4>Attributes</h4>
      <AttributeList list={attrList} updateList={updateAttrList} />
      <br />
      <h4>Skills</h4>
      <SkillsList attrList={attrList} />
    </div>
  );
}

export default App;
