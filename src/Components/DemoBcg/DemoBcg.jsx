import './demoBcg.css';

const DemoBcg = ({ children }) => {
  return (
    <div className='demoBcg' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/phone1.jpg'})` }}>
      <div className='overlay'>
        <div className='playgroundContainer'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DemoBcg;