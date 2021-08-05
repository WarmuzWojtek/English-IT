import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Button from '../Button/Button'
import './buttonsKit.css'


const ButtonsKit = () => {

  const loginBtnRef = useRef(null);
  const registerBtnRef = useRef(null);
  const pRef = useRef(null)
  const demoBtnRef = useRef(null);

  useEffect(() => {
    gsap.to(loginBtnRef.current, {
      duration: 1,
      opacity: 1,
    });
    gsap.to(registerBtnRef.current, {
      duration: 1,
      opacity: 1,
    })
    let tl = gsap.timeline({ delay: 0.5 });
    tl.to(pRef.current, {
      duration: 1,
      opacity: 1,
    })
      .to(demoBtnRef.current, {
        duration: 1,
        opacity: 1,
      })
  }, [])

  function handleLoginCLick() { };
  function handleRegisterCLick() { };
  function handleDemoCLick() { }

  return (
    <div className='buttonsKit'>
      <Button
        onClick={handleLoginCLick}
        className='loginBtn'
        content='Login'
        id={loginBtnRef} />
      <Button
        onClick={handleRegisterCLick}
        className='registerBtn'
        content='Register'
        id={registerBtnRef} />
      <p ref={pRef} className='paragraph'>or</p>
      <Button
        onClick={handleDemoCLick}
        className='demoBtn'
        content='Play Demo'
        id={demoBtnRef} />
    </div>
  );
}

export default ButtonsKit;