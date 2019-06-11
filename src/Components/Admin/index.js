import React from 'react';
import { Segment  } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import AdminMain from './Content/index';

const Admin = ({match}) => {

    return (
      
        <Segment>
                <AdminMain match={match}/>
        </Segment>
  

    )
}

export default Admin;