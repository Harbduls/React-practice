// src/components/BlockRow.jsx
function BlockRow({ blockNumber, age, miner, txns, interval }) {
  return (
    <tr>
      <td>{blockNumber}</td>
      <td>{age}</td>
      <td>{miner}</td>
      <td>{`${txns} txns in ${interval}`}</td>
    </tr>
  );
}

export default BlockRow;
