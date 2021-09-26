import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
          MassDiceRoller Skeleton
        </h1>
      </Jumbotron>
      <h2>Section1</h2>
      <h2>Section2</h2>
    </Container>
  );
};

export default App;
