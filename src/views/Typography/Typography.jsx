import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Quote from "components/Typography/Quote.jsx";
import Muted from "components/Typography/Muted.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
function TypographyPage(props) {
  const { classes } = props;
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Branch 1</h4>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>Downtown Orlando</div>
          <h5>Central Avenue Branch</h5>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Address</div>
          <p>
          400 E Central Blvd, Orlando, FL 32801
          </p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Branch Services</div>
          <Muted>
            Full Service, with ATM
          </Muted>
        </div>
      </CardBody>
    </Card>
        <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Branch 2</h4>
        </CardHeader>
        <CardBody>
          <div className={classes.typo}>
            <div className={classes.note}>Southwest Orlando</div>
            <h5>Central Avenue Branch</h5>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Address</div>
            <p>
            10900 Orangewood Blvd, Orlando, FL 32821
            </p>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>Branch Services</div>
            <Muted>
              Full Service, with ATM
            </Muted>
          </div>
        </CardBody>
      </Card>
  );
}

export default withStyles(style)(TypographyPage);
