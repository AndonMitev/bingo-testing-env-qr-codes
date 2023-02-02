import { useEffect, useState } from 'react';

export const useEnableMetamask = () => {
  const [account, setAccount] = useState(0);

  useEffect(() => {
    const enableMetamask = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        setAccount(account)
      }
    }

    enableMetamask()
  }, [])

  return { account }

}