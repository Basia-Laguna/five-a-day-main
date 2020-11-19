import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { withRouter } from "react-router";

import AppleIcon from "@material-ui/icons/Apple";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import FavoriteIcon from "@material-ui/icons/Favorite";
import styles from "./_bottomNav.scss";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#80cd3b",
    position: "absolute",
    bottom: "0",
  },
});

function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(
    props.history.location.pathname === "/main-page" ? 0 : 1
  );

  console.log();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Pick a portion"
        icon={<AppleIcon />}
        onClick={() => {
          props.history.push("/main-page");
        }}
      />
      <BottomNavigationAction
        label="Statistics"
        icon={<EqualizerIcon />}
        onClick={() => {
          props.history.push("/statistics");
        }}
      />
    </BottomNavigation>
  );
}

export default withRouter(SimpleBottomNavigation);
