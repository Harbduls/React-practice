// src/components/LatestBlocks.jsx
import BlockRow from "./BlockRow";
import "./LatestBlocks.css";


const latestBlocks = [
  { blockNumber: 24355177, age: "12 secs ago", miner: "Titan Builder", txns: 19, interval: "12 secs" },
  { blockNumber: 24355176, age: "24 secs ago", miner: "Flashbots", txns: 21, interval: "12 secs" },
  { blockNumber: 24355175, age: "36 secs ago", miner: "BeaverBuild", txns: 17, interval: "12 secs" },
  { blockNumber: 24355174, age: "48 secs ago", miner: "Eden Network", txns: 22, interval: "12 secs" },
  { blockNumber: 24355173, age: "1 min ago", miner: "Titan Builder", txns: 15, interval: "12 secs" },
  { blockNumber: 24355172, age: "1 min ago", miner: "Flashbots", txns: 20, interval: "12 secs" },
  { blockNumber: 24355171, age: "1 min ago", miner: "Blocknative", txns: 18, interval: "12 secs" }
];

function LatestBlocks() {
  return (
    <table>
      <thead>
        <tr>
          <th>Block</th>
          <th>Age</th>
          <th>Miner</th>
          <th>Txns</th>
        </tr>
      </thead>
      <tbody>
        {latestBlocks.map(block => (
          <BlockRow
            key={block.blockNumber}
            blockNumber={block.blockNumber}
            age={block.age}
            miner={block.miner}
            txns={block.txns}
            interval={block.interval}
          />
        ))}
      </tbody>
    </table>
  );
}

export default LatestBlocks;
