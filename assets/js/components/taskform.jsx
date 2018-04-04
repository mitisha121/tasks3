import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';

import api from '../api';

function TaskForm(params) {
    function update(ev) {
        let tgt = $(ev.target);
    
        let data = {};
        data[tgt.attr('name')] = tgt.val();
        let action = {
          type: 'UPDATE_FORM',
          data: data,
        };
        console.log(action);
        params.dispatch(action);
    }
    
    function submit(ev) {
        console.log("Should create post.");
        console.log(params.form);
        api.submit_post(params.form);
    }



  let users = _.map(params.users, (uu) => <option key={uu.id} value={uu.id}>{uu.name}</option>);
  return <div style={{padding: "4ex"}}>
    <h2>New Task</h2>
    <FormGroup>
      <Label for="user_id">User</Label>
      <Input type="select" name="user_id" value={params.form.user_id} onChange={update}>
        { users }
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input type="text" name="title" value={params.form.title} onChange={update}/>
    </FormGroup>
    <FormGroup>
      <Label for="desc">Description</Label>
      <Input type="textarea" name="desc" value={params.form.desc} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="time">Time</Label>
      <Input type="number" name="time" value={params.time} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="completed">Completed</Label>
      <Input type="checkbox" name="completed" value={params.form.completed} onChange={update}/>
    </FormGroup>
    <Button onClick={ submit }>Create Task</Button>
  </div>;
}

function state2props(state) {
    //console.log("rerender", state);
    return { form: state.form };
}

export default connect(state2props)(TaskForm);