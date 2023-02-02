export const SeasonTitle = ({ season, startDate, endDate }) => {
  return (<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <h3 style={{ marginTop: 0, color: 'white' }}>{season}</h3>
    <p style={{ color: 'white' }}>Start on: {startDate}</p>
    <p style={{ color: 'white' }}>End on: {endDate}</p>
  </div>)
}