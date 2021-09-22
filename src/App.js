import "./App.css";
import { Switch, Route } from "react-router";

import React, { Suspense } from "react";

import Layout from "./components/UI/Layout";

import Welcome from "./pages/Welcome";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const DetailPage = React.lazy(() => 
  import("./pages/DetailPage")
);

const NewUser = React.lazy(() => 
  import("./pages/NewUser")
);

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <LoadingSpinner />
        </div>
      }
    >
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/detail/:userId">
            <DetailPage />
          </Route>
          <Route path="/new-user">
            <NewUser />
          </Route>
        </Switch>
      </Layout>
    </Suspense>
  );
}

export default App;
