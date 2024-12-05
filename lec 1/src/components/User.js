import { useEffect } from "react";

const User = ({ name }) => {
  // useEffect(() => {
  //   const timer =setInterval(() => {
  //     console.log("hello")
  //   }, 10000);

  //   //unmounting = > when we leave that page and component is removed
  //   return () => {
  //     clearInterval(timer);
  //   }
  // })
  return (
    <div className="myuser">
      <h2>Name: {name}</h2>
      <h3>Location: Pune</h3>
      <h4>Contant: @khushiness</h4>
    </div>
  );
};
export default User;
