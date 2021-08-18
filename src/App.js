import React from "react";
import './App.css';

//Import Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from './components/Chat';
import Login from "./components/Login";

//RRD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//custom hook
import { useStateValue } from "./components/StateProvider";



function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <Login />
          ) : (
            <>
              <Header />
              <div className="app__body">
                <Sidebar />
                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h1>Welcome</h1>
                  </Route>
                </Switch>
              </div>
            </>
          )
        }

      </Router>
    </div>
  );
}

export default App;
