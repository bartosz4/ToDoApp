import React from 'react';
import Task from './Task';

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  active.sort((a,b) => {
    if(a.date > b.date){
      return 1
    }
    if(a.date < b.date){
      return -1
    }
    return 0
  });

  done.sort((a,b) => b.finishDate - a.finishDate);

  const activeTasks = active.map(task =>
    <Task key = {task.id}
          task = {task}
          delete = {props.delete}
          change = {props.change}/>);

  const doneTasks = done.map(task =>
    <Task key = {task.id}
          task = {task}
          delete = {props.delete}
          change = {props.change}/>);

  return (
    <div className='task-list'>
     <div className="active">
        <h1>Lista zadań do zrobienia</h1>
       {activeTasks.length > 0 ? activeTasks : <p>"Wszystko zrobione!"</p>}
      </div>
      <div className="done">
        <h3>Zadania zakończone <em>({done.length})</em> </h3>
        {doneTasks}
      </div>
    </div>
  );
};

export default TaskList;