const message = 'Claim your OPN Network Bingo NFT';

export const signMessage = async (account) => {
  return await window.ethereum.request({ method: 'personal_sign', params: [message, account] });
}
