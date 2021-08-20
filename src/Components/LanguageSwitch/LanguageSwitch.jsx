
import './languageSwitch.css'


const LanguageSwitch = ({ isEnglishFirst, onClickFn }) => {

  return (
    <div onClick={onClickFn} className='switchContainer'>
      <p>{isEnglishFirst ? "EN" : "PL"}</p>
      <div className='arrow' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/arrow.png'})` }}></div>
      <p>{isEnglishFirst ? "PL" : "EL"}</p>
    </div>

  );
}

export default LanguageSwitch;