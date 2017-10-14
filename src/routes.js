import React from "react";
import { Route, Switch } from "react-router-dom";
import {Dashboard,Login,Register,Event as EventView,Profile,NewEvent} from "./views"
import {Restricted} from "./utils";
import {SidebarLayout,DashboardLayout} from "./components";
export default () => {
  return (
    <Switch>
      <DashboardLayout exact path="/" component={Restricted(Dashboard)} />
      <SidebarLayout  path="/login" component={Login} />
      <SidebarLayout path="/register" component={Register} />
      <DashboardLayout  path="/event/:id" component={Restricted(EventView)} />
      <DashboardLayout  path="/profile" component={Restricted(Profile)} />
      <DashboardLayout exact path="/new" component={Restricted(NewEvent)} />
    </Switch>
  );
};
