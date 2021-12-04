import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../common/styles/theme";
import GlobalStyles from "../common/styles/GlobalStyles";
import Navbar from "../layout/Navbar/Navbar";
import ExpenseList from "../layout/ExpenseList/ExpenseList";
import Welcome from "../layout/Welcome/Welcome";
import Notification from "../features/notifications/Notification";
import Dashboard from "../layout/Dashboard/Dashboard";

const App = () => {  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <ExpenseList />
      <Dashboard />
      <Welcome />
      <Notification />
    </ThemeProvider>
  );
};

export default App;
