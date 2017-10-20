import React from "react";
import {Switch } from "react-router-dom";
import {Dashboard,Login,Register,Event as EventView,Profile,NewEvent} from "./views"
import {Restricted} from "./utils";
import {SidebarLayout,ErrorPage} from "./components";
import {Layout} from "./components"
export default () => {
  return (
    <Switch>
      <Layout  exact path="/" component={Restricted(Dashboard)} />
      <SidebarLayout  path="/login" component={Login} />
      <SidebarLayout path="/register" component={Register} />
      <Layout   path="/event/:id" component={Restricted(EventView)} />
      <Layout   path="/profile" component={Restricted(Profile)} />
      <Layout  exact path="/new" component={Restricted(NewEvent)} />
      <SidebarLayout  component={ErrorPage} />
    </Switch>
  );
};
