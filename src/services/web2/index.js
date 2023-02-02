import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://381a2c9e89c2.eu.ngrok.io'
})

export const getConfig = async () => {
  return await (await axiosConfig.get('/season-manager/config')).data
}

export const getMessageForMint = async ({ signature, season, tokenId }) => {
  return await (await axiosConfig.post('/message-manager/request', { signature, season, tokenId })).data
}