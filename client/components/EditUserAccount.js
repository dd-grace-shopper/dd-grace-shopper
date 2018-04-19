import React, { Component } from 'react';

export const EditUserAccount = props => {
  const { firstname, lastname, email, handleSubmit } = props;
  // const user = { firstname, lastname, email }

  return (

    <div>
      <h1>Edit account details</h1>
      <form className="ui form" method="post" onSubmit={handleSubmit} >
        <div className="field">
          <label>First Name</label>
          <input type="text" name="firstname" defaultValue={firstname}></input>
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="text" name="lastname" defaultValue={lastname}></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" defaultValue={email}></input>
        </div>

        <button className="ui button" type="submit">Submit</button>
      </form>
    </div>
  );
};

