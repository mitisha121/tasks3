import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import api from '../api';

function RegisterForm(params) {
    function update(ev) {
        let tgt = $(ev.target);
    
        let data = {};
        data[tgt.attr('name')] = tgt.val();
        let action = {
          type: 'UPDATE_REGISTER_FORM',
          data: data,
        };
        
        console.log(action);
        params.dispatch(action);
    }
    
    function submit(ev) {
        console.log("Should create user.");
        console.log(params.form);
        api.submit_register(params.regform);
    }

    function clear(ev){
        params.dispatch({type: 'CLEAR_REGISTER_FORM'});
       // params.dispatch(action)
        //api.clear_task(params.form);
    }


    return(<div>
    <FormGroup>
      <Label for="name">Name</Label>
      <Input type="text" name="name" value={params.regform.name} onChange={update}/>
    </FormGroup>
    <FormGroup>
      <Label for="email">Email</Label>
      <Input type="text" name="email" value={params.regform.email} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input type="password" name="password" value={params.regform.password} onChange={update} />
    </FormGroup>
    
    <Button onClick={ submit } color="primary">Create User</Button> &nbsp;
    <Button onClick={clear}> Clear </Button>
    </div>);
}

  

function state2props(state) {
    console.log("rerender", state);
    return { regform: state.regform };
}

export default connect(state2props)(RegisterForm);
