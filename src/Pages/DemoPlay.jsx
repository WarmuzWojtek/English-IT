import DemoBcg from '../Components/DemoBcg/DemoBcg'
import Playground from '../Components/Playground/Playground'
import Logo from '../Components/Logo/Logo';


import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

const startState = { autoAlpha: 0, y: -50 };

const DemoPlay = (props) => {
  return (

    <Transition
      unmountOnExit
      in={props.show}
      timeout={1000}
      onEnter={node => TweenMax.set(node, startState)}
      addEndListener={(node, done) => {
        TweenMax.to(node, 0.5, {
          autoAlpha: props.show ? 1 : 0,
          y: props.show ? 0 : 50,
          onComplete: done
        });
      }}
    >



      <DemoBcg>
        <Playground />
      </DemoBcg>
    </Transition>
  );
}

export default DemoPlay;