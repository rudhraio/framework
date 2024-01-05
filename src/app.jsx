import { useRef, useEffect } from 'react';
import logo from './assets/images/logo.svg';

function App() {

  const titleText = useRef(null);
  const text = "React App...";
  const speed = 250;

  let charIndex = 0;

  useEffect(() => {
    titleText.current.textContent = "";
    typingAnimation();
  }, []);


  function typingAnimation() {
    if (charIndex < text.length) {
      titleText.current.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typingAnimation, speed);
    } else {
      setTimeout(() => {
        document.getElementById("cursor").hidden = "true"
      }, 2500);

    }
  };

  return (<>
    <section>
      <div className='header-section'>
        <div>
          <h1 className='heading' >
            <span id="title" ref={titleText}></span><span id="cursor" >|</span>
          </h1>
        </div>
        <img src={logo} alt="logo" className='logo-img' />
      </div>
    </section>
  </>)
}

export default App;