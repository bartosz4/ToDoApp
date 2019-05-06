import React, {Component} from 'react';
import AddTask from './AddTask'
import TaskList from './TaskList';
import './App.css';

class App extends Component {

  counter = 4;
  state ={
    tasks: [
      {
        id: 0,
        text: 'zrobic aplikacje ToDo',
        date: '2019-05-06',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'zdobyc prace',
        date: '2019-05-31',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'zrobic aplikacje ToDo',
        date: '2019-06-06',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'zdobyc prace',
        date: '2019-05-31',
        important: true,
        active: true,
        finishDate: null,
      }
    ]
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));

    return true
  };

  deleteTask = (id) => {

    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index,1);

    this.setState({
      tasks: tasks
    })
  };

  changeTaskStatus = (id) => {

    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    });

    this.setState({
      tasks: tasks
    })
  };

  render () {
    return (
      <div className="App">
        <h1>Aplikacja To-Do</h1>
        <AddTask add = {this.addTask}/>
        <TaskList
          tasks = {this.state.tasks}
          delete={this.deleteTask}
          change = {this.changeTaskStatus}
        />
      </div>)
  };
}

export default App;
