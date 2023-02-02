import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://gateway.opn.network/bingo-game'
})

export const getConfig = async () => {
  return await (await axiosConfig.get('/season-manager/config')).data
}

export const getMessageForMint = async ({ signature, season, tokenId }) => {
  return await (await axiosConfig.post('/message-manager/request', { signature, season, tokenId })).data
}