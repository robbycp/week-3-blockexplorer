import React from 'react'
import { useParams } from "react-router-dom";
import { getTransactionReceipt } from '../utils/alchemy'

const TrxPage = () => {
  const [trx, setTrx] = React.useState()
  const params = useParams()

  React.useEffect(() => {
    const loaderTransaction = async () => {
      const trx = await getTransactionReceipt(params.trxId)
      setTrx(trx)
    }
    if (params.trxId) {
      loaderTransaction()
    }
  }, [params.trxId])

  return (
    <div>
      <div>Transaction Page</div>
      <div>{JSON.stringify(trx, null, 4)}</div>
    </div>
  )
}

export default TrxPage