import React from 'react'
import './App.css';
import Todolist from './Todolist.js';
class App extends React.Component {
  constructor(props){
    super(props);
    //this.state = {name: ''}
  }

  render(){
    return (
      <div className="App">
          <table border='1'>
            <thead>
              <tr>
                <th>Nhiệm vụ 1</th>
                <th>Nhiệm vụ 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Todolist name='Đi chợ nè'/>
                </td>
                <td>
                  <Todolist name='Đi shopping nè'/>
                </td>
              </tr>
            </tbody>
          </table>
          
      </div>
    );
  }
}

export default App;
