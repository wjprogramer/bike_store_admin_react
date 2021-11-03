import React from 'react';
import {
    Container,
    Jumbotron,
    Button,
} from '../../../components';
import { HeaderMain } from "../../components/HeaderMain";

const Jumbotrons = (props) => {
  return (
    <React.Fragment>
      <Container fluid={ false }>
        <div className="d-flex mt-3 mb-5">
            <HeaderMain 
              title="Jumbotron"
              className="mt-0"
            />
        </div>
        
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
        <hr />

        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>

      </Container>
    </React.Fragment>
  )};

export default Jumbotrons;
