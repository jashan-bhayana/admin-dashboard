// src/App.js
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Button, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Table from './components/Table';
import Chart from './components/Chart';
import Calendar from './components/Calendar';
import Kanban from './components/Kanban';

const data = [
  { col1: 'Entry1', col2: 'Result1' },
  { col1: 'Entry2', col2: 'Result3' },
  { col1: 'Entry2', col2: 'Result3' },
];

const columns = [
  { Header: 'Column 1', accessor: 'col1' },
  { Header: 'Column 2', accessor: 'col2' },
];

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.4)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const chartOptions = {
  maintainAspectRatio: false,
};

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Button onClick={toggleTheme} variant="contained" color="primary" style={{ margin: '20px 0' }}>
          Toggle Theme
        </Button>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Data Table
                </Typography>
                <Table columns={columns} data={data} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Chart
                </Typography>
                <div style={{ height: '400px' }}>
                  <Chart data={chartData} options={chartOptions} />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Calendar
                </Typography>
                <Calendar />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Kanban Board
                </Typography>
                <Kanban />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
