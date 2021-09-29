import React from 'react';

import Container from 'react-bootstrap/Container';
import 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <h1 className="header">
        MassDiceRoller Skeleton
      </h1>
      <div className="container">
        <div className="row">
        </div>
      </div>
    </Container>
  );
};

export default App;