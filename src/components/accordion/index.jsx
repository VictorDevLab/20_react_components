import "./style.css";
import data from "./data";
import { useState } from "react";
//single selection
export default function Accordion() {

  const [selectedId, setSelectedId] = useState(null)

  function handleSingleSelection(currentId) {
    setSelectedId(selectedId === currentId ? null : currentId)
  }
  return <div className="wrapper">
    <button>Enable multi selection</button>
    <div className="accordion">
      {data && data.map(dataItem => (
        <div className="content" key={dataItem.id}>
          <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
            <h2 className="question">{dataItem.question}</h2>
            <span className="icon">+</span>
          </div>

          {selectedId === dataItem.id ? <p>{dataItem.answer}</p> : null}
        </div>
      ))}
    </div>
  </div>;
}
