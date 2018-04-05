import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import Nav from './nav';
import Tasks from './tasks';
import TaskForm from './taskform';
import Users from './users';
import Task from './task';
import RegisterForm from './registerform';


export default function tasks3_init(store) {
    ReactDOM.render(
      <Provider store={store}>
        <Tasks3 />
      </Provider>,
      document.getElementById('root'),
    );
  }

let Tasks3 = connect((state) => state)((props) => {

    if(props.token){
    return <Router>
        <div>
        <Nav />

        <div className="row">
            <Route path="/" exact={true} render={() =>
            <div className="col">
                <TaskForm users={props.users} />
                <Tasks tasks={props.tasks} /> 
            </div>
            }/>
            <Route path="/users" exact={true} render={() =>
            <div className="col">
                <Users users={props.users} />
            </div>
            }/>
            <Route path="/register" exact={true} render={() =>
            <div className="col">
                <RegisterForm users={props.users} />
            </div>
            }/>
            <Route path="/users/:user_id" exact={true} render={({match}) =>
                <Task tasks={_.filter(props.tasks, (tt) =>{
                    
                        return match.params.user_id == tt.user.id;
                    
                })
                } />
            } />
        </div>
        </div>
      </Router>;
    }
    else{
        return <Router>
        <div>
        <Nav />

        <div className="row">
            <Route path="/" exact={true} render={() =>
            <div className="col">
                <p> Login to use App. </p>
            </div>
            }/>
            <Route path="/users" exact={true} render={() =>
            <div className="col">
                <p> Login to use App. </p>
            </div>
            }/>
            <Route path="/register" exact={true} render={() =>
            <div className="col">
                <RegisterForm users={props.users} />
            </div>
            }/>
            <Route path="/users/:user_id" exact={true} render={({match}) =>
                <Task tasks={_.filter(props.tasks, (tt) =>{
                    
                        return match.params.user_id == tt.user.id;
                    
                })
                } />
            } />
        </div>
        </div>
      </Router>;
    }
});