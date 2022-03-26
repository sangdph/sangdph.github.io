import React from 'react'
import './App.css';
import Todo from './Todo.js';
class Todolist extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: this.props.name, taskName: '', tasks: []}
  }

  myTaskChangeHandler = (event) =>{
    //console.log(event.target.value);
    // this.setState({ taskname: event.target.value});
    // console.log('myTaskChangeHandler', this.state.taskName);

    this.setState({taskName: event.target.value});
    //console.log('Sang', this.state.taskName);
  };

  addTask = ()=>{
    //console.log('addTask', this.state.taskName);
    if(this.state.taskName === ''){
      return;
    }
    const name = this.state.taskName;
    const id= this.state.tasks.length;

    this.state.tasks.push({id, name, done: false});
    this.setState({taskName: ''});
  };

  deleteTask = (id) =>{
    // console.log('list', this.state.tasks);
    // console.log('deleteTask', id);
    // console.log('id :', this.state.tasks);
    const tasks = this.state.tasks.filter((tasks) => tasks.id !==id);
    console.log('delete: ', tasks);
    this.setState({tasks: tasks});
  };

  completeTask = (id) =>{
    const tasks = this.state.tasks;
    tasks.forEach(task=>{
      if(task.id===id){
        task.done=true;
      }
    });
    this.setState({tasks});

    // onsole.log('completeTask 1', this.state.tasks);
  };
  render(){
    return (
      <div className="App" >
          <br/>
          To do List Sin236: {this.props.name}
          <br/>
          <div className='aligned'>
          <img
            src={process.env.PUBLIC_URL+'./assets/24212_package_install_icon.png'}
            alt='Add Task'
            width='25'
            style={{cursor: 'pointer'}}
            title='Bấm vào đây để thêm task'
            onClick={()=>this.addTask()}
          />
          <input 
            type='text'
            value={this.state.taskName}
            onChange={this.myTaskChangeHandler}
          />
          </div>
          <ul style={{paddingLeft: '10px'}}>
            {this.state.tasks.map((value, index)=>{
                console.log('map: ', value.name);
              return <Todo 
                        key={index} 
                        id={value.id} 
                        value={value.name}
                        deleteTask={this.deleteTask}
                        completeTask={this.completeTask}
                      />
            })}
          </ul>
      </div>
    );
  }
}

export default Todolist;
