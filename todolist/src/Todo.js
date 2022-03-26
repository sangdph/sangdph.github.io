import React from 'react'
import './Todo.css';

class Todo extends React.Component {
  constructor(props){
    super(props);
    console.log('contructor :', this.props.value);
    this.state = {id: props.id, value: props.value, done: this.props.done};
  }

  completeTask = () =>{
    //   console.log('Todo completeTask', this.props.id);
      this.setState({done:true});
      this.props.completeTask(this.props.id);
  }
  render(){
    let checkdone= '';
    if(!this.state.done){
        checkdone = <img
                        src={process.env.PUBLIC_URL+'./assets/1398911_correct_mark_success_tick_valid_icon.png'}
                        alt='Hoàn thành'
                        width='25'
                        style={{cursor: 'pointer'}}
                        title='Bấm vào đây để hoành thành task'
                        onClick={()=>this.completeTask(this.props.id)}
                    />;
    }
    return (
      <div className='Todo aligned'>
            {checkdone}
            &nbsp;
            <img className={this.state.done ? 'noCheckdone1': ''}
                src={process.env.PUBLIC_URL+'./assets/282471_cross_remove_delete_icon.png'}
                alt='xóa'
                width='20'
                style={{cursor: 'pointer'}}
                title='Bấm vào đây để xóa task'
                onClick={()=>this.props.deleteTask(this.props.id)}
            />
            &nbsp;
            {console.log('render props: ', this.props.value)}
            {console.log('render :', this.state.value)}
            <div className={this.state.done ? 'done': ''}>
                {this.props.value}
            </div>
      </div>
    );
  }
}

export default Todo;
