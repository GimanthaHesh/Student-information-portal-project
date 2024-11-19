import { useState } from 'react';
import './App.css';
import StudentTable from './components/studentTable';
import {students} from './data/StudentsDb'

function App() {
  const [fontSize, setFontSize] = useState(14);
  return (
    <div className="App">
     <h1>Student Information Portal</h1>
      <hr/>

      <div align="left">
        Font Size:
        <button onClick={()=>{setFontSize(14)}}>S</button>
        <button onClick={()=>{setFontSize(18)}}>M</button>
        <button onClick={()=>{setFontSize(22)}}>L</button>
      </div>
      <hr/>

      <table width="100%" style={{ fontSize: `${fontSize}px`}}>
        <tbody>
          <tr>
            <td>
            <StudentTable students={students}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
