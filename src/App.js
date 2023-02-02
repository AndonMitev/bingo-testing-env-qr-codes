

import { chain } from 'lodash';
import './App.css';
import { QrCode } from './components/QrCode';
import { SeasonTitle } from './components/SeasonTitle';
import { useGetConfig } from './hooks/useGetConfig';
import LinksJSON from './jsons/links.json'


console.log(LinksJSON)
function App() {
  const { config } = useGetConfig()


  const qrData = chain(LinksJSON)
    .groupBy('season')
    .map((value, key) => ({ season: key, tokenIds: value }))
    .value()



  return !config ? <h2>Loading</h2> : (
    <>
      <div className="App" style={{ display: 'flex', justifyContent: 'center', justifyContent: 'space-evenly' }}>


        {qrData.map(({ season, tokenIds }) => {
          return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SeasonTitle key={season} season={`Season: ${season}`} startDate={config[season].startDate} endDate={config[season].endDate} />
            {tokenIds.map(tokenId => <QrCode key={tokenId.url} value={tokenId.url} />)}
          </div>
        })}


      </div>
    </>
  );
}

export default App;
