import './mainBcg.css';
import background from '../../Assets/Images/flag.jpg'

const MainBcg = ({ children }) => {
  return (
    <div className='mainBcg' style={{ backgroundImage: `url(${background})` }}>
      <div className='mainContainer'>
        {children}
      </div>
    </div>
  );
}

export default MainBcg;