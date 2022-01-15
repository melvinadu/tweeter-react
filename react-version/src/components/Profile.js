import React from 'react';

function Profile(props){
  
  return (
    <aside>
    <div className="profile">
      <img className="profile__image" src={props.avatar} />
    </div>
    <br />
    <div className="profile__name">
      <h2><span className="profile--bold">{props.firstName}</span> {props.lastName}</h2>
    </div>
    </aside>
  );
  
}

export default Profile;