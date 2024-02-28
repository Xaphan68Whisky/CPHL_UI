import { useState, useEffect } from "react";
import { useMaterialUIController } from "context";
import { TextField } from '@mui/material';
import MasterCard from "examples/Cards/MasterCard";
import MultiProgress from 'react-multi-progress'

// @mui material components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Autocomplete from "@mui/material/Autocomplete";
import MDDatePicker from "components/MDDatePicker";
import MDInput from "components/MDInput";
import CD4Histogram from './Charts/Histogram/index.js';
import MDBadgeDot from "components/MDBadgeDot";
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import PageLayout from "examples/LayoutContainers/PageLayout/mainviewlayout";
import Footer from 'constants/Footer';
import DefaultStatisticsCard from "examples/Cards/StatisticsCards/DefaultStatisticsCard";
//import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import DefaultLineChart from "constants/charts/DefaultLineChart";
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import MixedChart from "examples/Charts/MixedChart";
import SalesTable from "examples/Tables/SalesTable";
import DataTable from "examples/Tables/DataTable";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GaugeChart from 'react-gauge-chart';



import DefaultCell from "layouts/ecommerce/orders/order-list/components/DefaultCell";


//import salesTableData from "layouts/dashboards/sales/data/salesTableData";

import {Facilities,TotalPatients,TotalSpecimen,TotalTest,GenderTotal,Systemload,CatLoad,
  Tsummary,SpecSummary,MySpecimens,MyPatientSummary,NumberOfTestDone,Malariaresults,TBresults,HIVresults} from "utils/APIUtils"


  //
function Home() {
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
  const [sysL,setSysL]=useState([]);
  const [cate,setCate]=useState([]);
  const [tsummary,setTsummary] = useState([]);
  const [specSummary,setSpecSummary] = useState([]);
  const [specsWe,setSpecsWe] = useState([]);
  const [startdate,setStartdate] = useState(new Date().toLocaleDateString());
  const [enddate,setEnddate] = useState(new Date().toLocaleDateString());
  const [patienttypeSumary, setPatienttypeSumary] = useState([]);
  const [numberOfTestDone, setnumberOfTestDone] = useState([]);
  const [malariasm, setMalariasm] = useState([]);
  const [tbres, setTbres] = useState([]);
  const [hiv, setHiv] = useState([]);
  const [postiveCases, setPostiveCases] = useState(0);

  

  // DefaultStatisticsCard state for the dropdown value
  const [salesDropdownValue, setSalesDropdownValue] = useState("6 May - 7 May");
  

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
  const loadCategories = () =>{ CatLoad().then(response => {setCate(response)}); };
  const loadTsummary = () =>{Tsummary().then(response => {setTsummary(response)})};
  const loadSpecSummary = () => {SpecSummary().then(response => {setSpecSummary(response)})};
  const loadMySpecimens = () =>{ MySpecimens().then(response =>{setSpecsWe(response)})};
  const loadSys = () =>{Systemload().then(response => {setSysL(response)})};
  const loadPatienttype = () =>{MyPatientSummary().then(response =>{setPatienttypeSumary(response)})};
  const loadNumberOfTestDone = () =>{NumberOfTestDone().then(response =>{setnumberOfTestDone(response)})};
  const loaloadMariatest = () =>{Malariaresults().then(response =>{setMalariasm(response)})};
  const loaloadTB = () =>{TBresults().then(response =>{setTbres(response)})};
  const loaloadHIV = () =>{HIVresults().then(response =>{setHiv(response)})};
  



  const loadgenderD = ()=>{GenderTotal().then(response =>{setGendertotal(response);
    gendertotal.forEach((item,index)=>{
      if(item.sex =="FEMALE"){
        female.push(item.total);
        
      }else if (item.sex =="MALE") {
        male.push(item.total);
       
      }
      
    });
    });};



    const salesTableData = [
      {
        country: ["united state"],
        Avg: 2500,
        Target: "29.9%",
      },
      {
        country: [ "germany"],
        sales: "3.900",
        bounce: "40.22%",
      },
      {
        country: [ "great britain"],
        sales: "1.400",
        bounce: "23.44%",
      },
      { country: [ "brasil"], sales: 562, bounce: "32.14%" },
      { country: [ "australia"], sales: 400, bounce: "56.83%" },
    ];

    let mPostiveC = 0;
    let mNegativeC = 0;
    let mTotalC = 0;
    let mPostiveCpr = 0;
    let mNegativeCpr = 0;
    let mTotalCpr = 0;
    let mRatep = (mPostiveC/mTotalC);
    let mRaten = (mNegativeC/mTotalC);

    let tbPostiveC = 0;
    let tbNegativeC = 0;
    let tbTotalC = 0;
    let tbPostiveCpr = 0;
    let tbNegativeCpr = 0;
    let tbTotalCpr = 0;
    let tbRate = (tbPostiveC/tbTotalC);
    let tbRaten = (tbNegativeC/tbTotalC);

    let hivPostiveC = 0;
    let hivNegativeC = 0;
    let hivTotalC = 0;
    let hivPostiveCpr = 0;
    let hivNegativeCpr = 0;
    let hivTotalCpr = 0;
    let hivRate = (hivPostiveC/hivTotalC);
    let hivRaten = (hivNegativeC/hivTotalC);

    
      const malaria = malariasm.map(data => {
        mPostiveC = data.postiveCases
        mNegativeC = data.negativeCases
        mTotalC = data.totalCases
        mPostiveCpr = data.prevpostiveCases;
        mNegativeCpr = data.prevnegativeCases;
        mTotalCpr = data.prevtotalCases;

      });

      const tb = tbres.map(data => {
        tbPostiveC = data.postiveCases
        tbNegativeC = data.negativeCases
        tbTotalC = data.totalCases
        tbPostiveCpr = data.prevpostiveCases;
        tbNegativeCpr = data.prevnegativeCases;
        tbTotalCpr = data.prevtotalCases;

      });

      const hivr = hiv.map(data => {
        hivPostiveC = data.postiveCases
        hivNegativeC = data.negativeCases
        hivTotalC = data.totalCases
        hivPostiveCpr = data.prevpostiveCases;
        hivNegativeCpr = data.prevnegativeCases;
        hivTotalCpr = data.prevtotalCases;

      });
  

    

    const me=23;
    const you=59;
    
    const channelChartData = {
      labels: patienttypeSumary.map((data) => data.visit_type),
      datasets: {
        labels: patienttypeSumary.map((data) => data.visit_type),
        backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
    data: patienttypeSumary.map((data) => data.totals),
      },
    };

    function getMonthName(monthNumber) {
      const date = new Date();
      date.setMonth(monthNumber - 1);
    
      return date.toLocaleString('en-US', { month: 'short' });
    }



     // Sample CD4 count data
  const cd4Counts = [450, 600, 300, 700, 550, 400, 350, 800, 500, 650, 750, 550, 600, 700, 400];


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



   //  loadPatients();
{/* <DashboardNavbar /> */}

const users = [
  { firstName: "John", id: 1 },
  { firstName: "Emily", id: 2 },
  { firstName: "Michael", id: 3 },
  { firstName: "Sarah", id: 4 },
  { firstName: "David", id: 5 },
  { firstName: "Jessica", id: 6 },
  { firstName: "Daniel", id: 7 },
  { firstName: "Olivia", id: 8 },
  { firstName: "Matthew", id: 9 },
  { firstName: "Sophia", id: 10 }
]


const [filter, setFilter] = useState('');
const [searchItem, setSearchItem] = useState('')
const [filteredUsers, setFilteredUsers] = useState(users)


// const handleChangeFilter = event => {
//   setFilter(event.target.value);
// }

// const handleInputChange = (e) => { 
//   const searchTerm = e.target.value;

//   setSearchItem(searchTerm)

//   const filteredItems = users.filter((user) =>
//   user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

    
//     setFilteredUsers(filteredItems);
// }





const options = gendertotal.map((option) => {
  const me = option.sex;
    return {
      firstName:  me,
      ...option,
    };
  
});
const [value, setValue] = useState(options[0]);



const defaultLineChartData = {
  labels:specsWe.map((data) => data.specimen_Type),
  datasets:[
    {
      data:specsWe.map((data) => data.result),
    }
  ],
};

const NumberOfTestsDone = {
  labels:numberOfTestDone.map((data) => data.name),
  datasets:[
    {
      color: "success",
      data:numberOfTestDone.map((data) => data.totals),
    }
  ],
};
//Sum total figures of category
const total = numberOfTestDone.reduce((prev,next) => prev + next.totals,0);

  const mixedChartData = {
    labels:specSummary.map((data) => data.specimen_Type),
    datasets: [
      {
        chartType: "thin-bar",
        label: "accepted specimen",
        color: "success",
        data:specSummary.map((data) => data.specimen_accepted),
      }
    ],
  };

//Horiontal Bar graph showing Test Categories
const horizontalBarChartData3 = {
   labels:cate.map((data) => data.name),
  datasets: [
    {
      color: "warning",
      data:cate.map((data) => data.totals),
    },
  ],
};


//Table settings for the Category by Gender
const GenderCatData = {columns: [
  { Header: "Category", accessor: "category", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "Female", accessor: "female", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "Male", accessor: "male", Cell: ({ value }) => <DefaultCell value={value}/>},
],

  rows:cate.map((data, index) => {

    return{
      category: data.specimen_Type,
      female: data.facility,
      male: data.specimen_accepted,
    }
  })
}

//Table setting for Test By Status Summary
const specStatus = {columns: [
  { Header: "Specimen Type", accessor: "specimen_Type", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "Facility", accessor: "facility", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "Accepted", accessor: "specimen_accepted", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "Rejected", accessor: "specimen_rejected", Cell: ({ value }) =>  <DefaultCell  value={value }/>},
  { Header: "Not Collected", accessor: "specimen_not_collected", Cell: ({ value }) => <DefaultCell value={value}/>},
],

  rows:specSummary.map((data, index) => {

    return{
      specimen_Type: data.specimen_Type,
      facility: data.facility,
      specimen_accepted: data.specimen_accepted,
      specimen_rejected:data.specimen_rejected,
      specimen_not_collected: data.specimen_not_collected,
   
      
    }
  })
}


//Table setting for Percentage Category
const catComposition = {columns: [
  { Header: "Test Category", accessor: "name", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "percentage", accessor: "totals", Cell: ({ value }) => <DefaultCell value={value}/>},
],

  rows:cate.map((data, index) => {

    return{
      name: data.name,
      totals: data.totals,
   
      
    }
  })
}

const value23 = "00.4"

//Tebale setting for Test By Status Summary
const me5 = {columns: [
  { Header: "Test", accessor: "standard_name", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "Facility", accessor: "facility", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "Approved", accessor: "approved", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "Not Received", accessor: "not_Received", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "Pending", accessor: "pending", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "Started", accessor: "started", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "Completed", accessor: "completed", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "Verified", accessor: "verified", Cell: ({ value }) => <DefaultCell value={value}/>},
  { Header: "Specimenrejected", accessor: "specimen_rejected", Cell: ({ value }) => <DefaultCell value={value}/>},],

  rows:tsummary.map((data, index) => {

    return{
      standard_name:data.standard_name,
      facility:data.facility,
      approved:data.approved,
      not_Received:data.not_Received,
      pending:data.pending,
      started:data.started,
      completed:data.completed,
      verified:data.verified,
      specimen_rejected:data.	specimen_rejected_at_analysis
    }
  })
}
//filter function
function filterMyData(event){
  if(enddate && startdate !=null){

  }
console.log("me")
}
useEffect(() => {
  loadNumberOfTestDone()}, []);

useEffect(() => {
  //loadPatienttype()*
  loadMySpecimens()
 // loadTsummary();
  loadCategories()
   // loadSys();
  //loadgenderD();
  //loadSpecSummary();
  loaloadMariatest();
  loaloadTB();
  loaloadHIV();
 }, []);

  useEffect(() => {
   //loadfacilities();*
  //loadPatients();*
  //loadSpecimens();*
   //loadTesttotals();*
  
 
  }, []);

  return (
    <PageLayout>
        


        
           <Grid item xs={2} sm={2}  ml={3}>
             <MDBox color="inherit"  >
                 <h2>LDR</h2>
              </MDBox>
           </Grid>
      
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


        <MDBox>
        <MDBox mt={3}   >
        <Grid container spacing={2} alignItems="right">
          {/* <Grid item mt={1} xs={12} sm={1} sx={{ mt: 0 }}>
           <Autocomplete
                id="Facility"
               
                value={value}
                onChange={(event, newValue) => {setValue(newValue);}}
                defaultValue="All"
                getOptionLabel={(option) => option.firstName}
                options={options}
                      //groupBy={(option) => option.firstLetter} sx={{ width: 30 }} 
                
                renderInput={(params) => <MDInput {...params} variant="standard"  label="Facility" />}
               />  
               
          </Grid> */}
          {/* <Grid item xs={12} sm={1}>
            <MDDatePicker  
             id="StartDate"
             onChange={(event, newValue) => {setStartdate(newValue)}}
         
            input={{ placeholder: "Start Date" }}  size="medium"/>
          </Grid> */}
          {/* <Grid item xs={12} sm={1}>
            <MDDatePicker  
            id="EndDate"
            selected={enddate}
            //dateFormat="yyyy/MM/dd kk:mm:ss"
            onChange={(date) => setEnddate(date) } 
            input={{ placeholder: "End Date" }}  size="medium"/>
            
          </Grid> */}
          {/* <Grid item xs={12} sm={1}>
          <MDButton variant="text" color="info" onClick ={filterMyData()}>filter</MDButton>
          </Grid> */}
        </Grid>
      </MDBox>
      </MDBox>




        <MDBox mb={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={6}>

       
      <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MDTypography variant="h6">Patient Visit type</MDTypography>
      </MDBox>
      <MDBox mt={3}>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <DefaultDoughnutChart chart={channelChartData} height="15.2rem" />
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
     
     <Grid item xs={0} sm={0} lg={2} mx={0.1}>
      {/* Grid for Malaria Rates */}
      <Card sx={{ width: 300 }} >
         <MDBox pt={8} px={3}>
              <MDTypography variant="h6" fontWeight="medium">
               Malaria +ve Rates
                </MDTypography>
                </MDBox>
                
              <GaugeChart title="GAUGE" id="gauge-chart1" 
               nrOfLevels={30} 
               percent={mRatep} 
               textColor={'#EA4228'}
              />

                
              <MDBox pt={8} px={3}>
              <MDTypography variant="h6" fontWeight="medium">
               Malaria +ve Rates
                </MDTypography>
                </MDBox>
              <GaugeChart title="GAUGE" id="gauge-chart1" 
               nrOfLevels={30} 
               percent={mRaten} 
               textColor={'#EA4228'}
              />
      </Card>
      </Grid>

      <Grid item xs={12} sm={6} lg={2} mx={-1}>
      {/* Grid for HIV Rates */}
      <Card sx={{ width: 300 }}>
         <MDBox pt={8} px={3}>
              <MDTypography variant="h6" fontWeight="medium">
               HIV +ve Rates
                </MDTypography>
                </MDBox>
              <GaugeChart title="GAUGE" id="gauge-chart1" 
               nrOfLevels={30} 
               percent={0.86} 
               textColor={'#EA4228'}
              />
                
              <MDBox pt={8} px={3}>
              <MDTypography variant="h6" fontWeight="medium">
               HIV +ve Rates
                </MDTypography>
                </MDBox>
              <GaugeChart title="GAUGE" id="gauge-chart1" 
               nrOfLevels={30} 
               percent={0.86} 
               textColor={'#EA4228'}
              />
      </Card>
      </Grid>

      <Grid item xs={12} sm={6} lg={2}>
      {/* Grid for TB Rates */}
      <Card sx={{ width: 300 }}>
         <MDBox pt={8} px={3}>
              <MDTypography variant="h6" fontWeight="medium">
               TB +ve Rates
                </MDTypography>
                </MDBox>
              <GaugeChart title="GAUGE" id="gauge-chart1" 
               nrOfLevels={30} 
               percent={0.86} 
               textColor={'#EA4228'}
              />

                
              <MDBox pt={8} px={3}>
              <MDTypography variant="h6" fontWeight="medium">
               TB +ve Rates
                </MDTypography>
                </MDBox>
              <GaugeChart title="GAUGE" id="gauge-chart1" 
               nrOfLevels={30} 
               percent={0.86} 
               textColor={'#EA4228'}
              />
      </Card>
      </Grid>
{/* 
      <Grid container spacing={2} mt ={1.5}> */}
  <Grid item xs={12} sm={6} lg={2}>
    
      
        <DefaultStatisticsCard
                title=" Total +ve Malaria Cases"
                count={mPostiveC}
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
        />

<MDBox my={3.2}>

<DefaultStatisticsCard
                title=" Total -ve Malaria Cases"
                count={mNegativeC}
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
        />
      </MDBox>
      

      

<MDBox my={3.2}>
<DefaultStatisticsCard
                title=" Total +ve TB Cases"
                count={tbPostiveC}
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
        />
      </MDBox>

        
  <MDBox my={3.2}>
  <DefaultStatisticsCard
                title=" Total -ve TB Cases"
                count= {tbNegativeC}
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
        />
      </MDBox>

      

<MDBox my={3.2}>
      </MDBox>

        <DefaultStatisticsCard
                title=" Total +ve HIV Cases"
                count={hivPostiveC}
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
        />

<MDBox my={3.2}>
      </MDBox>
      <DefaultStatisticsCard
                title=" Total -ve HIV Cases"
                count={hivNegativeC}
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
                
        />
        
      </Grid>
      <Grid item xs={12} sm={6} lg={8}>
      <MDBox >
      <DefaultLineChart 
                height = "72vh"
                title="Prevelance "
                description={
                  <MDBox display="flex" justifyContent="space-between" >
                    <MDBox display="flex" ml={-1}>
                      <MDBadgeDot color="info" size="sm" badgeContent="Facebook Ads" />
                      <MDBadgeDot color="dark" size="sm" badgeContent="Google Ads" />
                    </MDBox>
                    <MDBox mt={-4} mr={-1} position="absolute" right="1.5rem">
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
                    </MDBox>
                  </MDBox>
                }
                chart={defaultLineChartData}
              />
      </MDBox>
     
  

      </Grid>

      <Grid item xs={12} sm={6} lg={2}>
      
        <DefaultStatisticsCard
                title=" Total +ve Malaria Cases"
                count="2220"
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
        />

<MDBox my={3.2}>
<DefaultStatisticsCard
                title=" Total -ve Malaria Cases"
                count="2220"
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
        />
      </MDBox>

      
        <MDBox my={3.2}>
        <DefaultStatisticsCard
                title=" Total +ve TB Cases"
                count="2220"
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
        />
      </MDBox>

        

<MDBox my={3.2}>
<DefaultStatisticsCard
                title=" Total -ve TB Cases"
                count="2220"
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
        />
      </MDBox>

      

<MDBox my={3.2}>
<DefaultStatisticsCard
                title=" Total +ve HIV Cases"
                count="2220"
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
        />
      </MDBox>
        

<MDBox my={3.2}>
<DefaultStatisticsCard
                title=" Total -ve HIV Cases"
                count="2220"
                percentage={{
                  color: "success",
                  value: "+55%",
                  label: "since last month",
                }}
        />
      </MDBox>
      
      </Grid>
  
              
            
            

            <Grid item xs={12} sm={6} lg={6}>
              <VerticalBarChart
                color="success"
                title="Sample Classifications"
                description=" "
                chart={defaultLineChartData}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
            
              <HorizontalBarChart  title="Test By Lab Dept" chart={horizontalBarChartData3} />
              
            
            </Grid>
          </Grid>


        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={2}>
             <Grid item xs={12} lg={12}>
             {/* <Card sx={{ height: "100%" }}>
              <HorizontalBarChart height= "93.2%" title="Test Categories" chart={horizontalBarChartData3} />
              </Card> */}
              {/* <MixedChart
                title="Sample Status(Change the data source this data is already showing)"
                height="19.75rem"
                chart={mixedChartData}
              /> */}
              <Card sx={{ height: "100%" }}>
                <VerticalBarChart height = "88.4%"
                title="Test Types"
                description="Verified Tests Only"
                chart={NumberOfTestsDone}
              />
              </Card>
            </Grid> 
{/* 
              <Grid item xs={12} lg={4}>
              <DataTable table={GenderCatData} />
            </Grid>    */}
          </Grid>
        </MDBox>


        <Grid container spacing={2} mt ={5}>

        <Grid item xs={12} sm={6} lg={4}>

          <Card>
            {/* <DefaultDoughnutChart chart={channelChartData} height="30.2rem" /> */}
            </Card>
            
        </Grid>


             <Grid item xs={12} lg={4}>
              <Card sx={{ height: "100%" }}>
              {/* <DataTable
                  table={catComposition}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  isSorted={false}
                  noEndBorder
                /> */}
              </Card>
            </Grid> 
          </Grid>

        <MDBox my={3}>

        
      </MDBox>
        

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3} px={3}>
                <MDTypography variant="h4" fontWeight="medium">
               Sample Status
                </MDTypography>
              </MDBox>
              <MDBox py={1}>
              <DataTable table={specStatus} entriesPerPage={false} canSearch />
                {/* <DataTable
                  table={dataTableData}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  isSorted={false}
                  noEndBorder
                /> */}
              </MDBox>
            </Card> 
          </Grid>
        </Grid>

        <MDBox my={3}>
        
        {/* <Card>
        <MDBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2} pt={3} px={3}>
        <MDTypography variant="h4" fontWeight="medium" >
                Tests Status
                </MDTypography>
        </MDBox>
          <DataTable table={me5} entriesPerPage={false} canSearch />
        </Card> */}
      </MDBox>
      </MDBox>
      <Footer />
    </PageLayout>
  );
}

export default Home;
