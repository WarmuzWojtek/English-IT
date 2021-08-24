import { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import { words } from '../../Constants/words'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'
import './playground.css'


const Playground = () => {

  const [answer, setAnswer] = useState('');
  const [questions, setQuestions] = useState();
  const [currentQ, setCurrentQ] = useState('');
  const [comment, setComment] = useState('');
  const [currentIndex, setCurrentIndex] = useState();
  const [isEnglishFirst, setIsEnglishFirst] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setQuestions(words);
  }, [])

  function handleAnswerChange(e) {
    setAnswer(e.target.value)
  }
  function handleStartBtn() {
    const index = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[index];
    setCurrentIndex(index);
    setCurrentQ(isEnglishFirst ? currentQuestion.q : currentQuestion.a);
  }

  function handleGoodAnswer() {
    setComment('very good');
    handleSkipBtn();
  }
  function handleWrongAnswer() {
    setComment('you`re wrong');
  }

  function handleAnswerSubmit(e) {
    e.preventDefault();
    isEnglishFirst ?
      questions[currentIndex].a === answer ? handleGoodAnswer() : handleWrongAnswer() :
      questions[currentIndex].q === answer ? handleGoodAnswer() : handleWrongAnswer()
  }



  function handleTryAgainBtn() {
    setAnswer('');
    setComment('');
  }

  function handleSkipBtn() {
    const first = questions.slice(0, currentIndex);
    const second = questions.slice(currentIndex + 1, questions.length);
    const newQuestions = first.concat(second);
    setQuestions(newQuestions);
    const index = Math.floor(Math.random() * newQuestions.length);
    const currentQuestion = questions[index];
    setCurrentIndex(index);
    setCurrentQ(isEnglishFirst ? currentQuestion.q : currentQuestion.a);
    setComment('');
    setAnswer('');
  }

  function handleLanguageSwitch() {
    setIsEnglishFirst(!isEnglishFirst);
  }

  function handleLearntBtn() {
    setOpen(true)
  }

  return (
    <div className='gameContainer'>
      <div className='gameMenu'>
        <div classname='gameMode'>
          <p className='modeName'>GAMEMODE :</p>
          <button className='modeBtn'>demoplay</button>
          <button disabled='true' className='modeBtn'>percents</button>
          <button disabled='true' className='modeBtn'>points</button>
        </div>
        <p className='modeName'>Rules :</p>
        <p className='modeDescription'>Here are some words to translate. Choose from which language you want to translate, and hit "start" button. Enter a translated word into "your answer" field and hit enter or "confirm" button. At the end you will see your score.</p>
        <LanguageSwitch isEnglishFirst={isEnglishFirst} onClickFn={handleLanguageSwitch} />
        <button onClick={handleLearntBtn} className='startGameBtn'>Learn</button>
        <Modal style={{ background: 'black' }} open={open} onClose={() => setOpen(false)}>
          <h2 style={{ textAlign: 'center' }}>Demoplay Module</h2>
          {words.map(word => (
            <div className='modalContainer'>
              <p className='modalWord' style={{ color: 'blue' }}>{word.q}</p>
              <p className='modalWord'>:</p>
              <p className='modalWord'>{word.a}</p>
            </div>
          ))}

        </Modal>
        <button onClick={handleStartBtn} className='startGameBtn'>Start</button>
      </div>
      <div className='gameBoard' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/board.jpg'})` }}>
        <h4 className='taskDescription'>enter a translated word</h4>
        <p className='task'>{currentQ}</p>
        <form onSubmit={handleAnswerSubmit}>
          <input
            className='answer'
            type='text'
            placeholder='your answer'
            onChange={handleAnswerChange}
            value={answer}
          />
        </form>
        <div className='commentsContainer'>
          <p className='task'>{comment}</p>
          <button className='gameBtn' onClick={handleTryAgainBtn}>confirm</button>
          <button className='gameBtn' onClick={handleSkipBtn}>skip</button>
        </div>
      </div>
    </div>
  );
}

export default Playground;