import logo from './logo.svg';
import './App.css';
import 'react-bootstrap'
import {Container,Row ,Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import UserListComponent from "./Components/UserListComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import CreateUserComponent from "./Components/CreateUserComponent";

function App() {
  return (
    <div className="App">
         <Router>
             <Container fluid>
                 <HeaderComponent/>
                 <Container>
                     <Switch>
                         <Route path="/users" component={UserListComponent}></Route>
                         <Route path="/add-user"component={CreateUserComponent}></Route>
                     </Switch>
                 </Container>
                 <FooterComponent/>
             </Container>
         </Router>
    </div>
  );
}

export default App;
