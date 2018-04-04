import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function Task(params) {
  let task = params.task;
  return <Card>
    <CardBody>
      <div>
        <p> Assigned to: { task.user_id } </p>
        <p> Title: { task.title } </p>
        <p> Description: { task.desc } </p>
        <p> Time taken: { task.time } </p>
        <p> Completed: { task.completed } </p>
      </div>
    </CardBody>
  </Card>;
}