import React from "react";
import {Route, Link} from 'react-router-dom';
import "./styles.css";

const users = [
  {name: 'Jack', id: 0}, {name: 'Mike', id: 1}, {name: 'Kim', id: 2}
]



const Profile = ({match}) => { 
  const user = users.find(({id}) => id == match.params.id )
  return(
    <h1>{user.name}</h1>
  )
}

const Profiles = () => {
  return(
    <div>
  {users.map(({id, name}) => <Link to={`/${id}`} key={id}
    style={{marginRight: '1rem'}}
  >{name}</Link>)
}
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <Route path='/' component={Profiles}/>
      <Route path='/:id' component={Profile}/>
    </div>
  );
}
