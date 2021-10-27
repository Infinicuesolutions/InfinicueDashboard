import React, { useEffect, useState } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import CreditCardIcon from "@material-ui/icons/CreditCard";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from "axios";

// import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

// const neturl='http://192.168.43.188:8003/';
// const neturl='http://192.168.100.42:8003/';
const neturl='https://salvussequr.com/';

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const [countDebit, debitCounts] = useState(0);
  const [countCredit, creditCounts] = useState(0);
  const [countOnline, onlinrCounts] = useState(0);
  const [countNet, netCounts] = useState(0);
  const [grp11, gr11] = useState(0);
  const [grp12, gr12] = useState(0);
  const [grp13, gr13] = useState(0);
  const [grp14, gr14] = useState(0);
  const [grp15, gr15] = useState(0);
  const [grp16, gr16] = useState(0);
  const [grp17, gr17] = useState(0);

  const [grp21, gr21] = useState(0);
  const [grp22, gr22] = useState(0);
  const [grp23, gr23] = useState(0);
  const [grp24, gr24] = useState(0);
  const [grp25, gr25] = useState(0);
  const [grp26, gr26] = useState(0);
  const [grp27, gr27] = useState(0);
  
  const [grp31, gr31] = useState(0);
  const [grp32, gr32] = useState(0);
  const [grp33, gr33] = useState(0);
  const [grp34, gr34] = useState(0);
  const [grp35, gr35] = useState(0);
  const [grp36, gr36] = useState(0);
  const [grp37, gr37] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
  

    fetch("http://localhost:3001/api")
    .then((res) => res.json())
    .then((data) => {
      // debitCounts(data.message);
      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%:::" + data.message);
    });


    fetch("http://localhost:3001/debitgraph")
    .then((res) => res.json())
    .then((data) => {
      // netCounts(data.message);
        gr11(data.message.AM12);
        gr12(data.message.AM4);
        gr13(data.message.AM9);
        gr14(data.message.PM1);
        gr15(data.message.PM6);
        gr16(data.message.PM9);
        gr17(data.message.PM9);
      // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###!!!!!!!!!!!!!!!!!!!:::" + data.message.AM12);
    });

    fetch("http://localhost:3001/creditgraph")
    .then((res) => res.json())
    .then((data) => {
      // netCounts(data.message);
        gr21(data.message.AM12);
        gr22(data.message.AM4);
        gr23(data.message.AM9);
        gr24(data.message.PM1);
        gr25(data.message.PM6);
        gr26(data.message.PM9);
        gr27(data.message.PM9);
      // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###!!!!!!!!!!!!!!!!!!!:::" + data.message.AM12);
    });

    fetch("http://localhost:3001/netgraph")
    .then((res) => res.json())
    .then((data) => {
      // netCounts(data.message);
        gr31(data.message.AM12);
        gr32(data.message.AM4);
        gr33(data.message.AM9);
        gr34(data.message.PM1);
        gr35(data.message.PM6);
        gr36(data.message.PM9);
        gr37(data.message.PM9);
      // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###!!!!!!!!!!!!!!!!!!!:::" + data.message.AM12);
    });


    setInterval(() => {

      console.log("Refresh");


      fetch("http://localhost:3001/debitcount")
    .then((res) => res.json())
    .then((data) => {
      debitCounts(data.message);
      // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###!!!!!!!!!!!!!!!!!!!:::" + data.message);
    });

      fetch("http://localhost:3001/creditcount")
      .then((res) => res.json())
      .then((data) => {
        creditCounts(data.message);
        // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###!!!!!!!!!!!!!!!!!!!:::" + data.message);
      });

    fetch("http://localhost:3001/onlinecount")
    .then((res) => res.json())
    .then((data) => {
      onlinrCounts(data.message);
      // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###!!!!!!!!!!!!!!!!!!!:::" + data.message);
    });

    fetch("http://localhost:3001/netcount")
    .then((res) => res.json())
    .then((data) => {
      netCounts(data.message);
      // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###!!!!!!!!!!!!!!!!!!!:::" + data.message);
    });

    }, 3000);
  },[]);

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card
            style={{
              backgroundColor: "#1d2d53",
              boxShadow: "1px 3px 1px #9E9E9E",
              height:150
            }}
          >
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <CreditCardIcon></CreditCardIcon>
              </CardIcon>
              <p className={classes.cardCategory}>Debit Card</p>
              <h3 className={classes.cardTitle}>{countDebit}</h3>
              {/* <h3 className={classes.cardTitle}>3</h3> */}
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more details
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card
            style={{
              backgroundColor: "#1d2d53",
              boxShadow: "1px 3px 1px #9E9E9E",
              height:150
            }}
          >
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <CreditCardIcon></CreditCardIcon>
              </CardIcon>
              <p className={classes.cardCategory}>Credit Card</p>
              <h3 className={classes.cardTitle}>{countCredit}</h3>
              {/* <h3 className={classes.cardTitle}>5</h3> */}
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more details
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card
            style={{
              backgroundColor: "#1d2d53",
              boxShadow: "1px 3px 1px #9E9E9E",
              height:150
            }}
          >
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <PhoneIphoneIcon></PhoneIphoneIcon>
              </CardIcon>
              <p className={classes.cardCategory}>Online / Netbanking</p>
              {/* <h3 className={classes.cardTitle}>2</h3> */}
              <h3 className={classes.cardTitle}>{countOnline}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more details
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card
            style={{
              backgroundColor: "#1d2d53",
              boxShadow: "1px 3px 1px #9E9E9E",
              height:150
            }}
          >
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <AccountBalanceIcon></AccountBalanceIcon>
              </CardIcon>
              <p className={classes.cardCategory}>UPI Payment</p>
              {/* <h3 className={classes.cardTitle}>1</h3> */}
              <h3 className={classes.cardTitle}>{countNet}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more details
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <Card
            chart
            style={{
              backgroundColor: "#1d2d53",
              boxShadow: "1px 3px 1px #9E9E9E",
              height:290
            }}
          >
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                // data={{
                //   labels: ["12am", "4am", "9am", "1pm", "6pm", "9pm", "12pm"],
                //   series: [[grp11, grp12, grp13, grp14, grp15, grp16, grp17]],
                // }}
                data={{
                  labels: ["12am", "9am", "6pm", "12pm"],
                  series: [[grp11, grp13, grp15, grp17]],
                }}
                type="Line"
                options={{lineSmooth: Chartist.Interpolation.cardinal({
                  tension: 0,
                }),
                low: 0,
                high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                chartPadding: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                },}}
                // listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <p className={classes.cardTitle}>Attempted Debit Card Frauds</p>
              {/* <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today.
              </p> */}
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
              <LocalOffer />
              <a href="#/admin/icons">
                  Get more details
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card
            chart
            style={{
              backgroundColor: "#1d2d53",
              boxShadow: "1px 3px 1px #9E9E9E",
              height:290
            }}
          >
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                // data={{
                //     labels: ["12am", "4am", "9am", "1pm", "6pm", "9pm", "12pm"],
                //     series: [[grp21, grp22, grp23, grp24, grp25, grp26, grp27]],
                // }}
                data={{
                  labels: ["12am",  "9am",  "6pm",  "12pm"],
                  series: [[grp21, grp23, grp25, grp27]],
              }}
                type="Bar"
                options={{
                  axisX: {
                    showGrid: false,
                  },
                  low: 0,
                  high: 100,
                  chartPadding: {
                    top: 0,
                    right: 5,
                    bottom: 0,
                    left: 0,
                  },
                }}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                // listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <p className={classes.cardTitle}>
                Attempted Credit Card Frauds
              </p>
              {/* <p className={classes.cardCategory}>Last Campaign Performance</p> */}
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
              <LocalOffer />
              <a href="#/admin/maps">
                  Get more details
                </a>              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card
            chart
            style={{
              backgroundColor: "#1d2d53",
              boxShadow: "1px 3px 1px #9E9E9E",
              height:290
            }}
          >
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
              //   data={{
              //     labels: ["12am", "4am", "9am", "1pm", "6pm", "9pm", "12pm"],
              //     series: [[grp31, grp32, grp33, grp34, grp35, grp36, grp37]],
              // }}
              data={{
                labels: ["12am", "9am", "6pm",  "12pm"],
                series: [[grp31, grp33,  grp35, grp37]],
            }}
                type="Line"
                options={{ axisX: {
                  showGrid: false,
                },
                low: 0,
                high: 100,
                chartPadding: {
                  top: 0,
                  right: 5,
                  bottom: 0,
                  left: 0,
                }}}
                // listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <p className={classes.cardTitle}>Attempted Netbanking / Online Frauds</p>
              {/* <p className={classes.cardCategory}>Last Campaign Performance</p> */}
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
              <LocalOffer />
              <a href="#/admin/notifications" onClick={(e) => e.preventDefault()}>
                  Get more details
                </a>
                </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={3}>
          <Card
            chart
            style={{
              backgroundColor: "#1d2d53",
              boxShadow: "1px 3px 1px #9E9E9E",
              height:290
            }}
          >
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={{
                  labels: ["12am",  "9am",  "6pm", "12pm"],
                  series: [[grp31, grp33, grp35, grp37]],
              }}
                type="Bar"
                options={{ axisX: {
                  showGrid: false,
                },
                low: 0,
                high: 100,
                chartPadding: {
                  top: 0,
                  right: 5,
                  bottom: 0,
                  left: 0,
                }}}
                // listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <p className={classes.cardTitle}>Attempted UPI Frauds</p>
              {/* <p className={classes.cardCategory}>Last Campaign Performance</p> */}
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
              <LocalOffer />
              <a href="#/admin/upi">
                  Get more details
                </a>
                </div>
            </CardFooter>
          </Card>
        </GridItem>


      </GridContainer>
      {/* <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            style={{
              backgroundColor: "#1d2d53",
              boxShadow: "1px 3px 1px #9E9E9E",
            }}
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card
            style={{
              backgroundColor: "#1d2d53",
              boxShadow: "1px 3px 1px #9E9E9E",
            }}
          >
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer> */}
    </div>
  );
}
