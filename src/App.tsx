import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ResultTable from './components/ResultTable';
import { MersenneTwister19937, Random } from 'random-js';
import * as _ from 'lodash';


type AppState = {
  rng: Random,
  diceQuantity: number,
  rolledDiceCounts: Map<number,number>,
  pipsToReroll: Set<number>,
}

// FUTURE USE to ease binding a bunch of member functions
// eslint-disable-next-line
class BaseComponent extends React.Component {
  constructor(props: any, funcsToBind?: Array<()=>void>) {
    super(props);

    if(funcsToBind !== undefined) {
      for (let func of funcsToBind) {
        this[func.name as keyof this] = (this[func.name as keyof this] as unknown as Function).bind(this);
      }
    }
  }
}

export default class App extends React.Component {
  state: AppState = {
    rng: new Random(MersenneTwister19937.autoSeed()),
    diceQuantity: 600,
    rolledDiceCounts: new Map<number,number>(),
    pipsToReroll: new Set<number>(),
  };

  constructor(props: any) {
    super(props);
    this.handleRollClick = this.handleRollClick.bind(this);
    this.handleRerollClick = this.handleRerollClick.bind(this);
    this.handleDiceQuantityChange = this.handleDiceQuantityChange.bind(this);
    this.handlePipsToRerollChange = this.handlePipsToRerollChange.bind(this);
  }

  randomRollResult(rng: Random, diceQuantity: number): Map<number,number> {
    let rawRolls = rng.dice(6, diceQuantity);
    let rollResultCounts = new Map<number,number>();

    for(let roll of rawRolls) {
      rollResultCounts.set(roll, (rollResultCounts.get(roll) || 0) + 1);
    }
    return rollResultCounts;
  }

  combineRollResults(rolls1: Map<number,number>, rolls2: Map<number,number>) {
    let pips = _.union(Array.from(rolls1.keys()), Array.from(rolls2.keys()));
    let combinedRolls = new Map<number,number>();

    for(let pip of pips) {
      combinedRolls.set(pip, (rolls1.get(pip) ?? 0) + (rolls2.get(pip) ?? 0) );
    }

    return combinedRolls;
  }

  handleDiceQuantityChange(event: any) {
    this.setState({diceQuantity: event.target.value});
  }

  handleRollClick() {
    this.setState((oldState: AppState) => ({
      rolledDiceCounts: this.randomRollResult(oldState.rng, oldState.diceQuantity)}));
  }

  handlePipsToRerollChange(pip: number, newValue: boolean) {
    this.setState((oldState: AppState) => {
      newValue ? oldState.pipsToReroll.add(pip) : oldState.pipsToReroll.delete(pip);
      return { pipsToReroll: oldState.pipsToReroll };
     });
  }

  handleRerollClick() {
    let numDiceToReroll = 0;
    let newRolledDiceCounts = new Map<number,number>();

    // TODO: some central spot to have PipMin=1 and PipMax=6
    for(let pip = 1; pip <= 6; pip++) {
      let diceForThisPip = this.state.rolledDiceCounts.get(pip) ?? 0;

      if(this.state.pipsToReroll.has(pip)) {
        numDiceToReroll += diceForThisPip;
        newRolledDiceCounts.set(pip, 0);
      }
      else {
        newRolledDiceCounts.set(pip, diceForThisPip);
      }
    }

    newRolledDiceCounts = this.combineRollResults(
      newRolledDiceCounts,
       this.randomRollResult(this.state.rng, numDiceToReroll));

    this.setState({rolledDiceCounts: newRolledDiceCounts});
  }

  render() {
    return (
      <Container className="p-3">
        <h1 className="header">
          MassDiceRoller
        </h1>
        <Row>
          <Col>
            <input placeholder="Dice Quantity" value={this.state.diceQuantity} onChange={this.handleDiceQuantityChange} />
            <Button className="m-2" onClick={this.handleRollClick}>Roll</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <ResultTable isExactResult={false} displayMin={1} displayMax={3} diceCounts={this.state.rolledDiceCounts} />
          </Col>
          <Col>
            <ResultTable isExactResult={false} displayMin={4} displayMax={6} diceCounts={this.state.rolledDiceCounts} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ResultTable
              isExactResult={true}
              displayMin={1}
              displayMax={3}
              diceCounts={this.state.rolledDiceCounts}
              pipsToReroll={this.state.pipsToReroll}
              pipsToRerollChangeHandler={this.handlePipsToRerollChange}
              />
          </Col>
          <Col>
            <ResultTable
              isExactResult={true}
              displayMin={4}
              displayMax={6}
              diceCounts={this.state.rolledDiceCounts}
              pipsToReroll={this.state.pipsToReroll}
              pipsToRerollChangeHandler={this.handlePipsToRerollChange}
              />
          </Col>
        </Row>
        <Row>
          <Button className="m-2" onClick={this.handleRerollClick}>Reroll</Button>
        </Row>
      </Container>
    );
  }
};