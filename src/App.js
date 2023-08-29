import "./App.css";
import HeaderBar from "./components/Header";
import { Grid, Typography, Box, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

import BarChartComp from "./components/BarChart";
import News from "./components/News";


export const options = {
  region: "IN", // Africa
  colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
  backgroundColor: "#81d4fa",
  datalessRegionColor: "#f8bbd0",
  defaultColor: "#f5f5f5",
};

function App() {
  return (
    <>
      <HeaderBar />
      <Box mt={2} marginX={1}>
        <Grid container spacing={1}>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "18px",
                  fontFamily: "Roboto",
                }}
              >
                Status
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                Schools
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                Students
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                States
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                Cities
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={1} mt="-2px">
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                Planned
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                12500
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                30.50L
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                13
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                130
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={1} mt="-2px">
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                Covered
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                972
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                2.86L
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                12
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:'1.5px solid',
                borderColor:deepOrange[500],
                height: "36px",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ color: "#000", fontSize: "18px", fontFamily: "Roboto" }}
              >
                35
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="chart" marginTop={2} marginX={1}>
        <Grid container spacing={2}>
        <Grid item xs={6} sx={{display:'flex', justifyContent:'center', bgcolor:'#fff', position:'relative'}} >
          <Typography sx={{position:"absolute", right:'90px', top:'90px'}} variant="h6">Geographical Distribution</Typography>
            <Box component='img' src='/Map01.jpg' height={500}/>
          </Grid>
          <Grid item xs={6} >
          <Typography variant="h6" mb={1}>Top 10 by Target</Typography>
            <div style={{height:'400px', backgroundImage:'url(/tiranga_bg.png)',backgroundSize:'cover'}}>
            <BarChartComp />
            
            </div>
            <Box mt={5} display='flex' justifyContent='center'>
            <Button variant="outlined" size="small" >
              View More
            </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box marginX={1} my={4}>
        <News/>
      </Box>
    </>
  );
}

export default App;
