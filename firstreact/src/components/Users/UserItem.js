import React, { Component } from 'react'

 class UserItem extends Component {

    constructor()
    {
        super();
        this.state={
            id:'id',
            login:'mojombo',
            avatarURL: "https://avatars.githubusercontent.com/u/1?v=4",
            htmlURL: "https://github.com/mojombo"
        }

    }


  render() {
    return (
      <div>

            <h2>User Item</h2>

      </div>
    )
  }
}

export default UserItem