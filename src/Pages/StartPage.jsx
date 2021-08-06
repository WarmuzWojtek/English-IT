import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import MainBcg from '../Components/MainBcg/MainBcg'
import Title from '../Components/Title/Title.jsx'
import Subtitle from '../Components/Subtitle/Subtitle.jsx'
import Button from '../Components/Button/Button'
import ButtonsKit from '../Components/ButtonsKit/ButtonsKit'

const StartPage = () => {

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const startBtnRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

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

  useEffect(() => {

    gsap.fromTo(startBtnRef.current, {
      boxShadow: "0 0 0 0 rgba(0,0,0, 1)"
    }, {
      boxShadow: "0 0 0 5px rgba(0,0,0, 0.1)",
      repeat: -1,
      duration: 2,
      delay: 2,
      ease: 'power4.out',
    });

  }, [])

  function handleStartClick() {
    setIsClicked(!isClicked);
  }
  return (
    <MainBcg>
      <Title id={titleRef} />
      <Subtitle id={subtitleRef} />
      {isClicked ? <ButtonsKit /> :
        <Button
          id={startBtnRef}
          onClick={handleStartClick}
          className='startBtn'
          content='NOW!' />}
    </MainBcg>
  )
}

export default StartPage;