import './mainBcg.css';

const MainBcg = ({ children }) => {
  return (
    <div className='mainBcg' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/flag.jpg'})` }}>
      <div className='mainContainer'>
        {children}
      </div>
    </div>
  );
}

export default MainBcg;