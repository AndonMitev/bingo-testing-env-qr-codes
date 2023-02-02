

import { chain } from 'lodash';
import dayjs from 'dayjs';
import './App.css';
import { QrCode } from './components/QrCode';
import { SeasonTitle } from './components/SeasonTitle';
import { useGetConfig } from './hooks/useGetConfig';
import LinksJSON from './jsons/links.json'


console.log(LinksJSON)
function App() {
  const { config } = useGetConfig()
  console.log('config', config)

  const qrData = chain(LinksJSON)
    .groupBy('season')
    .map((value, key) => ({ season: key, tokenIds: value }))
    .value()



  return !config ? <h2>Loading</h2> : (
    <>
      <div className="App" style={{ display: 'flex', justifyContent: 'space-evenly' }}>


        {qrData.map(({ season, tokenIds }, idx) => {
          return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SeasonTitle key={season} season={`Season: ${config[idx].season}`} startDate={dayjs(config[idx].startTime * 1000).format(
              'D-MMM-YYYY HH:mm:ss'
            )} endDate={dayjs(config[idx].endTime * 1000).format(
              'D-MMM-YYYY HH:mm:ss'
            )} />
            {tokenIds.map(tokenId => <QrCode key={tokenId.url} value={tokenId.url} />)}
          </div>
        })}


      </div>
    </>
  );
}

export default App;
