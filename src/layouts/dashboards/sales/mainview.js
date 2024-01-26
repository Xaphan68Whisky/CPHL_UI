import { useState, useEffect } from "react";
import { useMaterialUIController } from "context";
// @mui material components
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDBadgeDot from "components/MDBadgeDot";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import PageLayout from "examples/LayoutContainers/PageLayout/mainviewlayout";
import DashboardNavbar from "constants/DashboardNavbar";
import Footer from 'constants/Footer';
import DefaultStatisticsCard from "examples/Cards/StatisticsCards/DefaultStatisticsCard";
//import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import DefaultLineChart from "constants/charts/DefaultLineChart";
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import SalesTable from "examples/Tables/SalesTable";
import DataTable from "examples/Tables/DataTable";

import PieChart from "examples/Charts/PieChart";

// Sales dashboard components
import ChannelsChart from "layouts/dashboards/sales/components/ChannelsChart";
import Sidenav from "examples/Sidenav";

// Data
//import defaultLineChartData from "layouts/dashboards/sales/data/defaultLineChartData";
import horizontalBarChartData from "layouts/dashboards/sales/data/horizontalBarChartData";
import salesTableData from "layouts/dashboards/sales/data/salesTableData";
import dataTableData from "layouts/dashboards/sales/data/dataTableData";


import {Facilities,TotalPatients,TotalSpecimen,TotalTest,GenderTotal} from "utils/APIUtils"

function Sales() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [nf,setNf] = useState();
  const [samples,setSamples] = useState();
  const [patientstotal,setPatientstotal] = useState();
  const [specimentotal,setSpecimentotal] = useState();
  const [testtotal,setTesttotal] = useState();
  const [gendertotal,setGendertotal] = useState([]);
  const [male,setMale] = useState([]);
  const [female,setFemale] = useState([]);

  // DefaultStatisticsCard state for the dropdown value
  const [salesDropdownValue, setSalesDropdownValue] = useState("6 May - 7 May");
  const [customersDropdownValue, setCustomersDropdownValue] = useState("6 May - 7 May");
  const [revenueDropdownValue, setRevenueDropdownValue] = useState("6 May - 7 May");

  // DefaultStatisticsCard state for the dropdown action
  const [salesDropdown, setSalesDropdown] = useState(null);
  const [customersDropdown, setCustomersDropdown] = useState(null);
  const [revenueDropdown, setRevenueDropdown] = useState(null);

  // DefaultStatisticsCard handler for the dropdown action
  const openSalesDropdown = ({ currentTarget }) => setSalesDropdown(currentTarget);
  const closeSalesDropdown = ({ currentTarget }) => {
    setSalesDropdown(null);
    setSalesDropdownValue(currentTarget.innerText || salesDropdownValue);
  };
  const openCustomersDropdown = ({ currentTarget }) => setCustomersDropdown(currentTarget);
  const closeCustomersDropdown = ({ currentTarget }) => {
    setCustomersDropdown(null);
    setCustomersDropdownValue(currentTarget.innerText || salesDropdownValue);
  };
  const openRevenueDropdown = ({ currentTarget }) => setRevenueDropdown(currentTarget);
  const closeRevenueDropdown = ({ currentTarget }) => {
    setRevenueDropdown(null);
    setRevenueDropdownValue(currentTarget.innerText || salesDropdownValue);
  };


  const loadfacilities = ()=>{Facilities().then(response => {setNf(response)});};
  const loadPatients = ()=>{TotalPatients().then(response => {setPatientstotal(response)});};
  const loadSpecimens = ()=>{TotalSpecimen().then(response => {setSpecimentotal(response)});};
  const loadTesttotals = ()=>{TotalTest().then(response => {setTesttotal(response)});};

  const loadgenderD = ()=>{GenderTotal().then(response =>{
    response.forEach((item,index)=>{
      if(item.sex =="FEMALE"){
        female.push(item.total);
      }else if (item.sex =="MALE") {
        male.push(item.total);
      }
      
    });
    //console.log(male)
   // console.log(female)
    });};

    // response.forEach((item,index)=>{
    //   if(item.sex){
    //     console.log(item.sex)
    //   }
    //   male.push(item.sex)
    // });
    
    // if(gendertotal !==undefined){
    //   //console.log(gendertotal)
    //   gendertotal.map(function(data,index){
        
    //   })
    // }

    const me=23;
    const you=59;

    const channelChartData = {
      labels: ["Facebook", "Direct", "Organic", "Referral"],
      datasets: {
        label: "Projects",
        backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
    data: [me,you],
      },
    };

//const tryme = [0,10, 30, 40, 120, 150, 220, 280, 250, 280,];
  const defaultLineChartData = {
    labels: ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"],
    datasets: [
      {
        label: "Female",
        color: "info",
        data: female,
      },
      {
        label: "Male",
        color: "dark",
        data: male,
      },
    ],
  };


   




  // Dropdown menu template for the DefaultStatisticsCard
  const renderMenu = (state, close) => (
    <Menu
      anchorEl={state}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={Boolean(state)}
      onClose={close}
      keepMounted
      disableAutoFocusItem
    >
      <MenuItem onClick={close}>Last 7 days</MenuItem>
      <MenuItem onClick={close}>Last week</MenuItem>
      <MenuItem onClick={close}>Last 30 days</MenuItem>
    </Menu>
  );

  // useEffect(() => {
    
 
  //      GenderTotal.then(response => {
        
  //   alert("Yes")
  //   console.log("wE ARE TOGETHER")
  //   //     for ( dataObj of response.data ) {
  //   //     //  console.log( dataObj )

  //   //     console.log("wE ARE TOGETHER")
  //   //     }

  //      });
     
   
  // }, []);

  useEffect(() => {
    loadgenderD();
   
   }, []);

   useEffect(() => {

    
    loadfacilities();
    loadPatients();
    loadSpecimens();
    loadTesttotals();
    
   
   }, []);

   //  loadPatients();

  return (
    <PageLayout>
         <DashboardNavbar />
         
         
      <MDBox py={3}>

        <MDBox mb={3}>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
              <DefaultStatisticsCard
                title="Facilities"
                count={nf}
                percentage={{
                  color: "success",
                  value: "YTD",
                }}
                // dropdown={{
                //   action: openSalesDropdown,
                //   menu: renderMenu(salesDropdown, closeSalesDropdown),
                //   value: salesDropdownValue,
                // }}
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <DefaultStatisticsCard
                title="Samples Collected"
                count={specimentotal}
                 percentage={{
                  color: "success",
                  value: "YTD",
                //   color: "success",
                //   value: "+55%",
                //   label: "since last month",
                 }}
                // dropdown={{
                //   action: openSalesDropdown,
                //   menu: renderMenu(salesDropdown, closeSalesDropdown),
                //   value: salesDropdownValue,
                // }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <DefaultStatisticsCard
                title="Patients"
                count={patientstotal}
                 percentage={{
                   color: "success",
                   value: "YTD",
                //   value: "+12%",
                //   label: "since last month",
                 }}
                // dropdown={{
                //   action: openCustomersDropdown,
                //   menu: renderMenu(customersDropdown, closeCustomersDropdown),
                //   value: customersDropdownValue,
                // }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <DefaultStatisticsCard
                title="Tests Done"
                count={testtotal}
                percentage={{
                  color: "success",
                  value: "YTD",
                  //label: "since last month",
                }}
                // dropdown={{
                //   action: openRevenueDropdown,
                //   menu: renderMenu(revenueDropdown, closeRevenueDropdown),
                //   value: revenueDropdownValue,
                // }}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>

            <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MDTypography variant="h6">Test Categories</MDTypography>
        <Tooltip title="channels" placement="bottom" arrow>
          <MDButton variant="outlined" color="secondary" size="small" circular iconOnly>
            <Icon>priority_high</Icon>
          </MDButton>
        </Tooltip>
      </MDBox>
      <MDBox mt={3}>
        <Grid container alignItems="center">
          <Grid item xs={7}>
            <PieChart chart={channelChartData} height="12.5rem" />
          </Grid>
          <Grid item xs={5}>
            <MDBox pr={1}>
              <MDBox mb={1}>
                
              </MDBox>
              <MDBox mb={1}>
                
              </MDBox>
              <MDBox mb={1}>
                
              </MDBox>
              <MDBox mb={1}>
                
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox
        pt={4}
        pb={2}
        px={2}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        mt="auto"
      >
        
      </MDBox>
    </Card>




            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
              <DefaultLineChart
                title="Test patterns according to gender"
                description={
                  <MDBox display="flex" justifyContent="space-between">
                    <MDBox display="flex" ml={-1}>
                      {/* <MDBadgeDot color="info" size="sm" badgeContent="Facebook Ads" />
                      <MDBadgeDot color="dark" size="sm" badgeContent="Google Ads" /> */}
                    </MDBox>
                    {/* <MDBox mt={-4} mr={-1} position="absolute" right="1.5rem">
                      <Tooltip title="See which ads perform better" placement="left" arrow>
                        <MDButton
                          variant="outlined"
                          color="secondary"
                          size="small"
                          circular
                          iconOnly
                        >
                          <Icon>priority_high</Icon>
                        </MDButton>
                      </Tooltip>
                    </MDBox> */}
                  </MDBox>
                }
                chart={defaultLineChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <HorizontalBarChart title="Test Done By" chart={horizontalBarChartData} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <SalesTable title="Test By Status" rows={salesTableData} />
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3} px={3}>
                <MDTypography variant="h6" fontWeight="medium">
                  Top Tests Done
                </MDTypography>
              </MDBox>
              <MDBox py={1}>
                <DataTable
                  table={dataTableData}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  isSorted={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </PageLayout>
  );
}

export default Sales;
