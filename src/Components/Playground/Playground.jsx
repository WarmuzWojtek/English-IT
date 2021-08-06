import { useState } from 'react';
import './playground.css'

const Playground = () => {

  const [answer, setAnswer] = useState('');

  function handleAnswerChange(e) {
    setAnswer(e.target.value)
  }

  return (
    <div className='board' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/board.jpg'})` }}>
      <h4 className='taskDescription'>enter a translated word</h4>
      <p className='task'></p>
      <input
        className='answer'
        type='text'
        placeholder='your answer'
        onChange={handleAnswerChange}
        value={answer}
      />

    </div>
  );
}

export default Playground;