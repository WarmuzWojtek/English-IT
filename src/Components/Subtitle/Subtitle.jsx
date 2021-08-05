import './subtitle.css'

const Subtitle = ({ id }) => {
  return (
    <h3 ref={id} className='subtitle'>master your vocabulary</h3>
  );
}

export default Subtitle;