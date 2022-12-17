import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import Loading from '../components/loading'
import Table from '../components/table'
import { getBlockWithTransactions, getBlockNumber } from '../utils/alchemy';

const Home = () => {
  const [blockNumber, setBlockNumber] = useState();
  const [blockDetails, setBlockDetails] = useState();
  const history = useHistory()

  const selectedBlockDetails = ['hash', 'miner', 'nonce', 'parentHash', 'timestamp']
  useEffect(() => {
    async function load() {
      const fetchedBlockNumber = await getBlockNumber()
      const fetchedTrx = await getBlockWithTransactions(fetchedBlockNumber)
      setBlockNumber(fetchedBlockNumber);
      setBlockDetails(fetchedTrx)
    }

    load();
  }, []);

  return (
    <div className="App">
      <div>
        <div>Block Number: {blockNumber}</div>
        {blockDetails ? (
          <>
            {selectedBlockDetails.map((key) => (
              <div key={key}>
                <div>{key}</div>
                <div>{blockDetails[key]}</div>
              </div>
            ))}
          </>
        ) : (
          <Loading />
        )}
      </div>
      <div>
        <div>Transactions</div>
        <div>
          {blockDetails ? (
            <Table
              headers={[
                {key: 'hash', title: 'Hash'},
                {key: 'from', title: 'From'},
                {key: 'to', title: 'To'},
                {key: 'blockNumber', title: 'Block'},
                {key: 'value', title: 'Value', isBigNumber: true},
              ]}
              rowKey="hash"
              rows={blockDetails.transactions}
              onClickRow={(row) => {
                history.push(`/trx/${row.hash}`)
              }}
            />
          ) : (
            <Loading  />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home