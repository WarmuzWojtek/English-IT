import './mainBcg.css';

const MainBcg = ({ children }) => {
  return (
    <div className='mainBcg' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/flag.jpg'})` }}>{children}</div>
  );
}

export default MainBcg;