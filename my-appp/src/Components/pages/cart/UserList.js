import React from "react";

function UserList(props) {
  return (
    <div>
      {props.users && (
        <div key={props.users.user.id}>
          {console.log(props.users)}
          <h2>
            Email: {props.users.user.email}
            <div className="row">
              <div className="col-md-1"></div>
            </div>
            <hr />
          </h2>
        </div>
      )}
    </div>
  );
}

export default UserList;
