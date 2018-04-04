import React from 'react';
import Task from './task';


export default function Tasks(params){
    let tasks=_.map(params.tasks, (tt) => <Task key={tt.id} task={tt} />);
    return <div>
        <h1> Tasks </h1>
        { tasks }
    </div>;
}