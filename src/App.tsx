import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ResultTable from './components/ResultTable';
import { MersenneTwister19937, Random } from 'random-js';
import * as _ from 'lodash';


type AppState = {
  diceQuantity: number,
  rolledDiceCounts: Map<number,number>,
  rng: Random,
}

export default class App extends React.Component {
  state: AppState = {
    diceQuantity: 4,
    rolledDiceCounts: new Map<number,number>(),
    rng: new Random(MersenneTwister19937.autoSeed()),
  };

  constructor(props: any) {
    super(props);
    this.handleRollClick = this.handleRollClick.bind(this);
  }

  randomRollResult(rng: Random, diceQuantity: number): Map<number,number> {
    let rawRolls = rng.dice(6, diceQuantity);
    let rollResultCounts = new Map<number,number>();

    for(let roll of rawRolls) {
      rollResultCounts.set(roll, (rollResultCounts.get(roll) || 0) + 1);
    }
    return rollResultCounts;
  }

  handleDiceQuantityChange(event: any) {
    this.setState({diceQuantity: event.target.value});
  }

  handleRollClick() {
    this.setState((oldState: AppState) => ({
      rolledDiceCounts: this.randomRollResult(oldState.rng, oldState.diceQuantity)}));
  }

  render() {
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">
            MassDiceRoller Skeleton
          </h1>
        </Jumbotron>
        <Row>
          <Col>
            <input placeholder="Dice Quantity" value={this.state.diceQuantity} />
            <Button className="m-2">Roll</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <ResultTable displayMin={1} displayMax={3} diceCounts={this.state.rolledDiceCounts} />
          </Col>
          <Col>
            <ResultTable displayMin={4} displayMax={6} diceCounts={this.state.rolledDiceCounts} />
          </Col>
        </Row>
      </Container>
    );
  }
};