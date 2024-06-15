import React from "react";
import ReactDOM from "react-dom";
     
// react createElements => object => htmlElement(render)

// const heading = React.createElement("h1", {id: "heading"}, "Namaste react");

const jsxheading = <h1 className="head "> Namaste React by JSX</h1>;

// react functional component
//function that return a jsx code
const no = 100;
const HeadingComponent = () => {
      return <h1>Namaste React by Functional Component</h1>;
}
const HeadingComponent1 = () => (
      <div>
           <h2>{no}</h2> 
            <HeadingComponent />
            <HeadingComponent></HeadingComponent>
            {HeadingComponents()}
       <h1 className="head">Namaste React Functional Component</h1>
       </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);// replaced 
root.render(<HeadingComponent1 />);