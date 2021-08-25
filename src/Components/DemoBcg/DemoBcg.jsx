import './demoBcg.css';
import phoneImg from '../../Assets/Images/phone1.jpg'

const DemoBcg = ({ children }) => {
  return (
    <div className='demoBcg' style={{ backgroundImage: `url(${phoneImg})` }}>
      <div className='overlay'>
        <div className='playgroundContainer'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DemoBcg;