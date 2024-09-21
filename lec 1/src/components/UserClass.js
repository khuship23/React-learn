import React from "react";
class UserClass extends React.Component{
    constructor(props) {
        super(props); 
    }
    render() {
        // const {name, location} = this.props
        return (
           
         <div className="myuser">
               <h2>Name: {this.props.name}</h2>
           <h3>Location: Pune</h3>
           <h4>Contant: @khushiness</h4>
         </div>
       );
    }
}
export default UserClass;