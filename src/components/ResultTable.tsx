import React from 'react';

import { Table } from 'react-bootstrap';

interface Props {
    displayMin: number;
    displayMax: number;
    diceCounts: Map<number,number>
}

const ResultTable: React.FC<Props> = (props: Props) => {
  let rows: any[] = [];
  let runningSum = 0;

  for (let i = 1; i <= props.displayMax; i++) {
      runningSum += (props.diceCounts.get(i) || 0);
      if(i >= props.displayMin) {
        rows.push(<tr key={i}><td>{i}+</td><td>{runningSum}</td></tr>)
      }
  }
  
  return ( 
      <Table striped>
          <thead>
              <tr>
                  <th>Stat</th>
                  <th>Qty</th>
              </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>

      </Table>
  );
}

export default ResultTable;