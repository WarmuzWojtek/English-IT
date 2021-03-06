import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { Modal } from 'react-responsive-modal';
import { words } from '../../Constants/words'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'
import './playground.css'
import board from '../../Assets/Images/board.jpg'



const Playground = () => {

  const [answer, setAnswer] = useState('');
  const [questions, setQuestions] = useState(words);
  const [currentQ, setCurrentQ] = useState('');
  const [comment, setComment] = useState('');
  const [currentIndex, setCurrentIndex] = useState();
  const [isEnglishFirst, setIsEnglishFirst] = useState(true);
  const [open, setOpen] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const rightAnswersRef = useRef(null);
  const wrongAnswersRef = useRef(null);
  const commentRef = useRef(null);



  useEffect(() => {

    gsap.fromTo(commentRef.current, {
      opacity: 1,
      letterSpacing: '1px',
      transform: 'scale(1)',
    }, {
      opacity: 0,
      letterSpacing: '5px',
      transform: 'scale(2.5)',
      // repeat: 0,
      duration: 1,
      yoyo: "true",
      // delay: 0,
      ease: 'power3',
    });

    if (questions.length < 1) { endGame() }

  }, [rightAnswers, wrongAnswers]);

  useEffect(() => {

    gsap.fromTo(rightAnswersRef.current, {
      transform: "translateY(-40px)"
    }, {
      transform: "translateY(0)",
      repeat: 0,
      duration: 1,
      delay: 0,
      ease: 'bounce',
    });

  }, [rightAnswers]);

  useEffect(() => {

    gsap.fromTo(wrongAnswersRef.current, {
      transform: "translateY(-40px)"
    }, {
      transform: "translateY(0)",
      repeat: 0,
      duration: 1,
      delay: 0,
      ease: 'bounce',
    });

  }, [wrongAnswers]);


  function handleAnswerChange(e) {
    setAnswer(e.target.value)
  }
  function handleStartBtn() {
    const index = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[index];
    setIsGameStarted(true);
    setCurrentIndex(index);
    setCurrentQ(isEnglishFirst ? currentQuestion.q : currentQuestion.a);
  }

  function handleGoodAnswer() {
    setComment('very good');
    setRightAnswers(rightAnswers => rightAnswers + 1);
    handleNextQuestion();

  }
  function handleWrongAnswer() {
    setComment('you`re wrong');
    setWrongAnswers(wrongAnswers => wrongAnswers + 1);
    handleNextQuestion();
  }

  function handleAnswerSubmit(e) {
    e.preventDefault();
    isEnglishFirst ?
      questions[currentIndex].a === answer ? handleGoodAnswer() : handleWrongAnswer() :
      questions[currentIndex].q === answer ? handleGoodAnswer() : handleWrongAnswer()
  }


  function endGame() {
    setAnswer('');
    alert(`Tw??j wynik to ${(rightAnswers / (rightAnswers + wrongAnswers) * 100).toFixed(0)} %`);
    window.location = '/';
  }



  function handleNextQuestion() {
    const first = questions.slice(0, currentIndex);
    const second = questions.slice(currentIndex + 1, questions.length);
    const newQuestions = first.concat(second);
    setQuestions(newQuestions);
    if (newQuestions.length > 0) {
      const index = Math.floor(Math.random() * newQuestions.length);
      const currentQuestion = newQuestions[index];
      setCurrentIndex(index);
      setCurrentQ(isEnglishFirst ? currentQuestion.q : currentQuestion.a);
      setAnswer('');
    }
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
        <div >
          <p className='modeName'>GAMEMODE :</p>
          <button className='modeBtn'>demoplay</button>
          <button disabled={true} className='modeBtn'>percents</button>
          <button disabled={true} className='modeBtn'>points</button>
        </div>
        <p className='modeName'>Rules :</p>
        <p className='modeDescription'>Here are some words to translate. Choose from which language you want to translate, and hit "start" button. Enter a translated word into "your answer" field and hit enter. At the end you will see your score.</p>
        <LanguageSwitch isEnglishFirst={isEnglishFirst} onClickFn={handleLanguageSwitch} />
        <button disabled={isGameStarted} onClick={handleLearntBtn} className='startGameBtn'>Learn</button>
        <Modal style={{ background: 'black' }} open={open} onClose={() => setOpen(false)}>
          <h2 style={{ textAlign: 'center' }}>Demoplay Module</h2>
          {words.map(word => (
            <div key={word.a} className='modalContainer'>
              <p className='modalWord' style={{ color: 'blue' }}>{word.q}</p>
              <p className='modalWord'>:</p>
              <p className='modalWord'>{word.a}</p>
            </div>
          ))}
        </Modal>
        <button onClick={handleStartBtn} className='startGameBtn'>Start</button>
      </div>
      <div className='gameBoard' style={{ backgroundImage: `url(${board})` }}>
        <div className='counterContainer'>
          <p className='answersCounter'>Good answers :</p>
          <p ref={rightAnswersRef} className='answersCounter'>{rightAnswers}</p>
          <p className='answersCounter'>Bad answers : </p>
          <p ref={wrongAnswersRef} className='answersCounter'>{wrongAnswers}</p>
        </div>
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
        <p ref={commentRef} className='task'>{comment}</p>
      </div>
    </div>
  );
}

export default Playground;