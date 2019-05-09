import React from 'react';

const Task = (props) => {

  const style = { color: '#06B995'};

  const {text, date, id, active, important, finishDate} = props.task;

  if(active){
    return (
      <div>
        <p>
          <strong style = {important ? style : null}>{text}</strong> do <span>{date} </span>
          <button className='button' onClick={() => props.change(id)}>Zrobione!</button>
          <button className='button' onClick={() => props.delete(id)}>Usuń</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong>{text}</strong><em> (zrobić do {date}) </em><br/>
          - wykonano <span>{finish}</span>
          <button className='button' onClick={() => props.delete(id)}>Usuń</button>
        </p>
     </div>
    )
  }
};

export default Task;