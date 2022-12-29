import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products/Products";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            {currentPage === 0 && <Products />}
            {currentPage === 1 && <p>Hem 1</p>}
            {currentPage === 2 && <p>Hem 2</p>}
          </Item>
        </Grid>
      </Grid>
      <Navbar
        selectedNavItem={0}
        navItems={[]}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default App;
