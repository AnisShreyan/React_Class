import React, { useState } from "react";
import "./App.css";
import Practice from "./Practice";
// import AiFillHeart from "."

import { FaHeart } from "react-icons/fa";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Mounting />
        {/* <Complex /> */}
        {/* <Practice /> */}
        {/* <Heading heading={this.props.heading} />
        <Button /> */}
        {/* <Car />
        <Stating /> */}
        {/* <Cal /> */}
      </>
    );
  }
}

function Heading(props) {
  return (
    <div className="App">
      <h1>This is the {props.heading}...</h1>
    </div>
  );
}

function Button() {
  const [name, setName] = React.useState("Anis");

  return (
    <div>
      <button
        onClick={() => {
          setName(name == "Anis" ? true : "Anis");
        }}
      >
        Click Here {name}
      </button>
    </div>
  );
}

// class Button extends React.Component{

//   const [num, setNum] = React.useState("Yes")

//   toggle(){

//   }

//   render(){
//     return(
//       <div>
//         <button onClick={}>{num}</button>
//       </div>
//     )
//   }
// }

class Car extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {color: "red"}
  // }

  state = {
    goOut: "Yes",
  };

  state1 = {
    goOut: "Yes",
  };

  setState1 = () => {
    this.setState((prevState) => {
      return { goOut: prevState.goOut == "Yes" ? "No" : "Yes" };
    });
    // this.state.goOut == "Yes" ? "No" : "Yes";
    // console.log(this.state);
  };

  render() {
    return (
      <>
        <h1>This is a Car!</h1>
        <button onClick={this.setState1}>{this.state.goOut}</button>
      </>
    );
  }
}

class Stating extends React.Component {
  state = {
    name: "Anis",
  };

  setName = () => {
    this.setState((prevState) => {
      return { name: prevState.name == "Anis" ? "Asru" : "Anis" };
    });
  };

  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Trying state: {this.state.name}</h2>
        <button onClick={this.setName}>Change the Name</button>
      </>
    );
  }
}

// class Cal extends React.Component {

//   state = {num: 0}
//   incNum = ()=>{this.setState(prevState=>{return{num: prevState.num +1}})}
//   decNum = ()=>{this.setState(prevState=>{return{num: prevState.num -1}})}

//   render() {
//     return (
//       <>
//         <button onClick={this.incNum}>+</button>
//         <h2>{this.state.num}</h2>
//         <button onClick={this.decNum}>-</button>
//       </>
//     );
//   }
// }

class Cal extends React.Component {
  constructor() {
    super();
    this.state = { num: 0 };
    this.incNum = this.incNum.bind(this);
    this.decNum = this.decNum.bind(this);
  }

  incNum() {
    this.setState((prevState) => {
      return { num: prevState.num + 1 };
    });
  }

  decNum() {
    this.setState((prevState) => {
      return { num: prevState.num - 1 };
    });
  }

  render() {
    return (
      <>
        <button onClick={this.incNum}>+</button>
        <h1>{this.state.num}</h1>
        <button onClick={this.decNum}>-</button>
      </>
    );
  }
}

// Complex //

// class Complex extends React.Component {
//   contact = {
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false,
//   }

//   render() {
//     return (
//       <div className="container">
//         <img
//           src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
//           alt=""
//         />
//         <FaHeart
//           className="icn"
//           onClick={() => console.log("working")}
//           style={{
//             color:
//               this.contact.isFavorite == false
//                 ? "#213547"
//                 : this.contact.isFavorite == true
//                 ? "#ff2052"
//                 : "#213547",
//           }}
//         />
//         <h2>
//           {this.contact.firstName} {this.contact.lastName}
//         </h2>
//         <p>{this.contact.phone}</p>
//         <p>{this.contact.email}</p>
//       </div>
//     );
//   }
// }

// Complex //

class Complex extends React.Component {
  state = {
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  };

  // addToFav = () => {
  //   this.setState((prevState) => {
  //     return { isFavorite: prevState.isFavorite == true };
  //   });
  // };

  addToFav = () => {
    this.setState((prevState) => {
      return {
        isFavorite: !prevState.isFavorite,
      };
    });
  };

  print = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <img
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
          alt=""
        />
        <FaHeart
          className="icn"
          style={{
            color: this.state.isFavorite == false ? "#213547" : "#ff2052",
          }}
          onClick={this.addToFav}
        />
        <BsFillBookmarkCheckFill className="icn" onClick={this.print} />
        <h2>
          {this.state.firstName} {this.state.lastName}
        </h2>
        <p>{this.state.phone}</p>
        <p>{this.state.email}</p>
      </div>
    );
  }
}

// function Complex() {
//   const [fav, setFav] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false,
//   });

//   const addToFav = () => {

//     setFav(() => {
//       if (fav.isFavorite === false) {
//         return {
//           ...fav,
//           isFavorite: true,
//         };
//       } else {
//         return {
//           ...fav,
//           isFavorite: false,
//         };
//       }
//     });
//   };

//   return (
//     <div className="container">
//       <img
//         src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
//         alt=""
//       />
//       <FaHeart
//         className="icn"
//         style={{
//           color: fav.isFavorite == false ? "#213547" : "#ff2052",
//         }}
//         onClick={addToFav}
//       />
//       <h2>
//         {fav.firstName} {fav.lastName}
//       </h2>
//       <p>{fav.phone}</p>
//       <p>{fav.email}</p>
//     </div>
//   );
// }

class Mounting extends React.Component {
  state = {
    character: {},
  };

  componentDidMount() {
    console.log("ComponentDidMount");

    fetch(`https://swapi.dev/api/people/${Math.floor(Math.random() * 82)}`)
      .then((res) => res.json())
      .then((data) => this.setState({ character: data}));
  }

  render() {
    return (
      <div>
        <h1>Hii Component</h1>
        <h2>{this.state.character.name}</h2>
      </div>
    );
  }
}
