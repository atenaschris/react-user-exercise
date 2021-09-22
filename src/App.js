import "./App.css";
import { Switch, Route } from "react-router";
import DetailPage from "./pages/DetailPage";

import Layout from "./components/UI/Layout";

import Welcome from "./pages/Welcome";
import NewUser from './pages/NewUser';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Welcome/>
        </Route>
        <Route path="/detail/:userId">
          <DetailPage/>
        </Route>
        <Route path="/new-user">
          <NewUser/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
