import "./style.css";
import data from "./data";
import { useState } from "react";
//single selection
export default function Accordion() {

  const [selectedId, setSelectedId] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  //storing ids?
  const [multiple, setMultiple] = useState([])
  //single selection
  function handleSingleSelection(currentId) {
    setSelectedId(selectedId === currentId ? null : currentId)
  }
  //multiple Selection

  function handleMultipleSelection(currentId) {
    //derived state
    let copyMultiple = [...multiple]
    const indexOfCurrentId = copyMultiple.indexOf(currentId)
    if (indexOfCurrentId === -1) copyMultiple.push(currentId)
    else copyMultiple.splice(indexOfCurrentId, 1)
    setMultiple(copyMultiple)
  }

  return <div className="wrapper">
    <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>{enableMultiSelection ? 'Enable single selection' : "Enable multi selection"}</button>
    <div className="accordion">
      {data && data.map(dataItem => (
        <div className="content" key={dataItem.id}>
          <div onClick={
            enableMultiSelection ?
              () => handleMultipleSelection(dataItem.id)
              : () => handleSingleSelection(dataItem.id)} className="title">
            <h2 className="question">{dataItem.question}</h2>

            <span className="icon">+</span>
          </div>
          {
            enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && (<p>{dataItem.answer}</p>) : selectedId === dataItem.id && (<p>{dataItem.answer}</p>)
          }
          {/* {selectedId === dataItem.id ? <p>{dataItem.answer}</p> : null} */}
        </div>
      ))}
    </div>
  </div>;
}
