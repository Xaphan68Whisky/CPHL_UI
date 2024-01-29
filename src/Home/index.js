import { useState, useEffect } from "react";
import { useMaterialUIController } from "context";
import { TextField } from '@mui/material';
import MDInput from "components/MDInput";
// @mui material components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Autocomplete from "@mui/material/Autocomplete";
import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";
import FormField from "layouts/pages/account/components/FormField";
import MDDatePicker from "components/MDDatePicker";
//import { PieChart } from '@mui/x-charts/PieChart';

// react-chartjs-2 components
//import { Pie } from "react-chartjs-2";

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
import { Pie } from "react-chartjs-2";
import PieChart from "examples/Charts/PieChart";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";

// Sales dashboard components
import ChannelsChart from "layouts/dashboards/sales/components/ChannelsChart";
import Sidenav from "examples/Sidenav";

// Data
//import defaultLineChartData from "layouts/dashboards/sales/data/defaultLineChartData";
import horizontalBarChartData from "layouts/dashboards/sales/data/horizontalBarChartData";
import salesTableData from "layouts/dashboards/sales/data/salesTableData";
import dataTableData from "layouts/dashboards/sales/data/dataTableData";
// Data
import dataTableData1 from "layouts/ecommerce/orders/order-list/data/dataTableData";


import IdCell from "layouts/ecommerce/orders/order-list/components/IdCell";
import DefaultCell from "layouts/ecommerce/orders/order-list/components/DefaultCell";
import StatusCell from "layouts/ecommerce/orders/order-list/components/StatusCell";
import CustomerCell from "layouts/ecommerce/orders/order-list/components/CustomerCell";



import {Facilities,TotalPatients,TotalSpecimen,TotalTest,GenderTotal,Systemload,CatLoad,
  Tsummary,SpecSummary} from "utils/APIUtils"

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
  const loadCategories = () =>{ CatLoad().then(response => {setCate(response)}); };
  const loadTsummary = () =>{Tsummary().then(response => {setTsummary(response)})};
  const loadSpecSummary = () => {SpecSummary().then(response => {setSpecSummary(response)})};
  const loadMySpecimens = () =>{ loadMySpecimens().then(response =>{setSpecsWe(response)})};

  //alert(JSON.stringify(cate))
  

  const loadgenderD = ()=>{GenderTotal().then(response =>{setGendertotal(response);
    gendertotal.forEach((item,index)=>{
      if(item.sex =="FEMALE"){
        female.push(item.total);
        
      }else if (item.sex =="MALE") {
        male.push(item.total);
       
      }
      
    });
    // console.log(male)
    // console.log(female)
    });};


    //get all Systems

    const loadSys = () =>{Systemload().then(response => {setSysL(response)})};
    console.log(sysL);

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

    function getMonthName(monthNumber) {
      const date = new Date();
      date.setMonth(monthNumber - 1);
    
      return date.toLocaleString('en-US', { month: 'short' });
    }

    // const channelChartData = {
    //   labels: GenderCatData.map((data) => ),
    //   datasets: {
    //     label:GenderCatData.map((data) => data.category),
    //     backgroundColors: ["primary","secondary","info","success","warning","error","light", "dark"],
    //    data: GenderCatData.map((data) => {data.mine}),
    //   },
    // };

  // const defaultLineChartData = {
  //   labels: gendertotal.map((data) =>  getMonthName(data.month)),
  //   datasets: [
  //     {
  //       label: "Female",
  //       color: "info",
  //       data: female,
  //     },
  //     {
  //       label: "Male",
  //       color: "dark",
  //       data: male,
  //     },
  //   ],
  // };





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

  useEffect(() => {
    loadTsummary();
     loadCategories()
     // loadSys();
      loadgenderD();
     
    loadSpecSummary()
   }, []);

    useEffect(() => {
     loadfacilities();
    loadPatients();
    loadSpecimens();
     loadTesttotals();
    
   
    }, []);

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
  labels:cate.map((data) => data.category),
  datasets:[
    {
      label:"female",
      data:cate.map((data) => data.mine),
    }
  ],
};

//Horiontal Bar graph showing Test Categories
const horizontalBarChartData3 = {
   labels:cate.map((data) => data.category),
  datasets: [
    {
      color: "warning",
      data:cate.map((data) => data.mine),
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

  return (
    <PageLayout>

        
        <Card >
        
        <MDBox mb={5}>

        <Grid container spacing={7}>
        <Grid item xs={0} sm={0}  ml={3}>
        <MDBox color="inherit"  >
          <h2>LDR</h2>
        </MDBox>
        </Grid>
        {/* <Grid item xs={3} sm={3} pt={5} px={5} ml={10}></Grid> */}
              <Grid item xs={12} sm={3}>
                <Autocomplete
                
                     id="Facility"
                       value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                         }}
                    options={options}
                    sx={{ width: 300 }}
                           //groupBy={(option) => option.firstLetter} sx={{ width: 30 }} 
                       getOptionLabel={(option) => option.firstName}
                       
                     renderInput={(params) => <TextField {...params} label="Facility"  />}
                    />
               </Grid> 
                  
                   <Grid item xs={0} sm={0}  >
                   <MDDatePicker    input={{ placeholder: "Start Date" }}  />
                   </Grid>


                   <Grid  item xs={0} sm={0}>
                   <MDDatePicker  input={{ placeholder: "Start Date" }}  size="medium"/>
                   </Grid>

                   <Grid  item xs={12} sm={3}>
                   <MDDatePicker  input={{ placeholder: "Start Date" }}  size="medium"/>
                   </Grid>
                  
                                  
                 
                 

                  </Grid> 

                  
        </MDBox>
        
          </Card>

          

              
        
        
        
         
      
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
        <MDBox mb={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>

            <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MDTypography variant="h6">Test Categories</MDTypography>
      </MDBox>
      <MDBox mt={3}>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <PieChart chart={channelChartData} height="15.2rem" />
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
              <VerticalBarChart
                title="Bar chart"
                description="Sales related to age average"
                chart={defaultLineChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={2}>
             <Grid item xs={12} lg={12}>
              <HorizontalBarChart title="Test Categories" chart={horizontalBarChartData3} />
            </Grid> 
            {/* <Grid item xs={12} lg={6}>
              <DataTable table={GenderCatData} />
            </Grid>  */}
          </Grid>
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
        
        <Card>
        <MDBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2} pt={3} px={3}>
        <MDTypography variant="h4" fontWeight="medium" >
                Test(s) Status
                </MDTypography>
          <MDBox display="flex">
            
            <MDBox ml={1}>
              <MDButton variant="outlined" color="dark">
                <Icon>description</Icon>
                &nbsp;export csv
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
          <DataTable table={me5} entriesPerPage={false} canSearch />
        </Card>
      </MDBox>
      </MDBox>
      <Footer />
    </PageLayout>
  );
}

export default Home;
