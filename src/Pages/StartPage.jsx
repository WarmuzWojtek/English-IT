import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import MainBcg from '../Components/MainBcg/MainBcg'
import Title from '../Components/Title/Title.jsx'
import Subtitle from '../Components/Subtitle/Subtitle.jsx'
import Button from '../Components/Button/Button'

const StartPage = () => {

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const startBtnRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      delay: 0.5,
    })
    tl.from(titleRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: 'none',

    })
      .from(subtitleRef.current, {
        duration: 1,
        autoAlpha: 0,
        ease: 'none',

      })
      .from(startBtnRef.current, {
        duration: 1,
        autoAlpha: 0,
        ease: 'none',

      })

  }, [titleRef])


  function handleStartClick() { };

  return (
    <MainBcg>
      <Title id={titleRef} />
      <Subtitle id={subtitleRef} />
      <Button id={startBtnRef} onClick={handleStartClick} className='startBtn' content='NOW!' />
    </MainBcg>
  )
}

export default StartPage;