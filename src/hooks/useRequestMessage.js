import { toast } from 'react-toastify';

import { getMessageForMint } from '../services/web2';
import { signMessage } from '../utils/signMessage'

export const useMintNft = () => {


  const triggerRequest = ({ season, tokenId, account }) => {
    (async () => {
      try {
        const signature = await signMessage(account);
        const message = await getMessageForMint({ signature, season, tokenId })

        const transactionParameters = {
          from: account,
          to: '0x56958EBaef628588e08e8e6a816B36d3D7e08900',
          data: {
            tokenId: message.tokenId,
            symbolId: message.symbolId,
            seasonSymbolId: message.seasonSymbolId,
          }
        }

        const txHash = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [transactionParameters],
        });
      } catch (err) {
        toast.error(err.response.data.message, {
          position: 'top-right'
        })
      }

    })()
  }

  return { triggerRequest }
}