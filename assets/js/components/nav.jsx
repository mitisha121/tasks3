import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Form, FormGroup, NavItem, Input, Button } from 'reactstrap';
import api from '../api';


/*
function Form(props){
    return <div>
    <ul className="navbar-nav mr-auto">
            <NavItem> 
                <NavLink to="/login" exact={false} activeClassName="actiive" className="nav-link"> Login </NavLink> 
            </NavItem>
            <NavItem> 
                <NavLink to="/register" exact={false} activeClassName="actiive" className="nav-link" > Register </NavLink> 
            </NavItem>
        </ul>
        </div>;
}
*/
let LoginForm = connect(({login}) => {return {login};})((props) => {
    function update(ev) {
        console.log("in update")
      let tgt = $(ev.target);
      let data = {};
      data[tgt.attr('name')] = tgt.val();
      console.log(tgt.val())
      props.dispatch({
        type: 'UPDATE_LOGIN_FORM',
        data: data,
      });
      console.log(props)
    }
  
    function create_token(ev) {
      api.submit_login(props.login);
      console.log(props.login);
    }
  
    return <div className="navbar-text">
      <Form inline>
        <FormGroup>
          <Input type="text" name="name" placeholder="name"
                 value={props.login.name} onChange={update} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" placeholder="password"
                 value={props.login.password} onChange={update} />
        </FormGroup>
        <Button onClick={create_token}>Log In</Button>
        <NavItem> 
                <NavLink to="/register" exact={false} activeClassName="actiive" className="nav-link"> Register </NavLink> 
            </NavItem>
      </Form>
    </div>;
  });
  

let Session = connect(({token}) => { return {token};})((props) => {
    return <div className="navbar-text">
    User id = { props.token.user_id }
  </div>;
});

function Nav(props) {
    let session_info;
    if(props.token){
        session_info = <Session token={props.token} />;
    }
    else{
        session_info = <LoginForm />;
    }

    return<nav className="navbar navbar-dark bg-dark navbar-expand">
        <span className="navbar-brand">
            Task Tracker
        </span>
        <ul className="navbar-nav mr-auto">
            <NavItem> 
                <NavLink to="/" exact={false} activeClassName="actiive" className="nav-link"> Tasks </NavLink> 
            </NavItem>
            <NavItem> 
                <NavLink to="/users" exact={false} activeClassName="actiive" className="nav-link" > All Users </NavLink> 
            </NavItem>
        </ul>
        { session_info }
    </nav>;
}

function state2props(state) {
    return {
      token: state.token,
    };
  }
  
  export default connect(state2props)(Nav);