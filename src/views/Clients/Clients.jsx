import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import Client from "views/Clients/Client.jsx";
import ClientsList from "views/Clients/ClientsList.jsx";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
//core components
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Clients extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <hr />
        {ClientsList.map(({ name, id }) => (
          <li key={id}>
            <Link to={`/clients/${name}`}>{name}</Link>
            <Route
              path={`/clients/${name}`}
              render={props => <Client id={id} {...props} />}
            />
          </li>
        ))}
      </div>
    );
  }
}

Clients.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Clients);
