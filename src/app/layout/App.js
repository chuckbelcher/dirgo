import React from 'react';
import { Container } from 'semantic-ui-react';
import CustomerDashboard from '../../features/customers/customerDashboard/CustomerDashboard';
import NavBar from '../../features/nav/NavBar';

function App() {
  return (
    <>
        <NavBar />
        <Container className="main">
          <CustomerDashboard />
        </Container>
    </>
  );
}

export default App;
