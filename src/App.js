import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import LoginPage from "./pages/LoginPage/LoginPage";

class App extends Component {
  state = {
    user: null,
    currentTab: 1,
  };

  setUserInState = (incomingUserData) => {
    console.log(this.state.currentTab);
    this.setState({ user: incomingUserData });
  };

  updateCurrentTabTo = (tab) => {
    this.setState({ currentTab: tab });
  };

  async componentDidMount() {
    let token = localStorage.getItem("token");
    try {
      let userLogin = await fetch("/api/users/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!userLogin.ok) throw new Error("Couldn't fetch user");
      let response = await userLogin.json();

      console.log(response);
      if (token && response.verified) {
        let userDoc = JSON.parse(atob(token.split(".")[1])).user;
        this.setState({ user: userDoc });
      } else {
        localStorage.removeItem("token");
        this.setState({ user: null });
      }
    } catch (err) {
      console.log(err);
    }
  }

render() {
  return (
      <div className="App">
        {this.state.user ? (
            <HomePage user={this.state.user} setUserInState={this.setUserInState}/>
      ) : (
        <Routes>
          <Route path="/" element={<AuthPage user={this.state.user} setUserInState={this.setUserInState} />} />
          <Route path='/login'element={<LoginPage />} />
        </Routes>)}
      </div>
  );
}
}

export default App;

// import React, { Component } from "react";
// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
// import AuthPage from "./pages/AuthPage/AuthPage";
// import Feed from "./components/Feed/Feed";
// import Inspo from "./components/Inspo/Inspo";
// import Nav from "./components/Nav/Nav.jsx";
// import PageTitle from "./components/PageTitle/PageTitle";
// import SubNav from "./components/SubNav/SubNav";
// import CreatePost from "./components/CreatePost/CreatePost";
// import YourBoards from "./components/YourBoards/YourBoards";
// import Socket from "./components/Socket/Socket";

// class App extends Component {
//   state = {
//     user: null,
//     currentTab: 1,
//   };

//   setUserInState = (incomingUserData) => {
//     console.log(this.state.currentTab);
//     this.setState({ user: incomingUserData });
//   };

//   updateCurrentTabTo = (tab) => {
//     this.setState({ currentTab: tab });
//   };

//   async componentDidMount() {
//     let token = localStorage.getItem("token");
//     try {
//       let userLogin = await fetch("/api/users/verify", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!userLogin.ok) throw new Error("Couldn't fetch user");
//       let response = await userLogin.json();

//       console.log(response);

//       if (token && response.verified) {
//         let userDoc = JSON.parse(atob(token.split(".")[1])).user;
//         this.setState({ user: userDoc });
//       } else {
//         localStorage.removeItem("token");
//         this.setState({ user: null });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   render() {
//     const travelComp = this.state.currentTab;
//     let button;
//     if (travelComp == 1) {
//       button = <Feed />;
//     } else if (this.state.currentTab == 2) {
//       button = <Inspo />;
//     } else if (this.state.currentTab == 3) {
//       button = <YourBoards />;
//     } else if (this.state.currentTab == 4) {
//       button = <CreatePost />;
//     } else {
//       button = <Socket />;
//     }

//     return (
//       <>
//         <div className="App">
//           <Routes>
//             {this.state.user ? (
//               <Route
//                 path="/home"
//                 element={
//                   <HomePage
//                     user={this.state.user}
//                     setUserInState={this.setUserInState}
//                   />
//                 }
//               />
//             ) : (
//               <Route
//                 path="/login"
//                 element={<AuthPage setUserInState={this.setUserInState} />}
//               />
//             )}
//             ;
//           </Routes>
//         </div>
//         <div className="component">
//           App
//           <nav className="component">
//             <Nav />
//             <PageTitle />
//           </nav>
//           <SubNav updateCurrentTabTo={this.updateCurrentTabTo} />
//           {button}
//         </div>
//       </>
//     );
//   }
// }

// export default App;
