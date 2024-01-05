import logo from '../../assets/images/logo.svg';

function HomeHtml({ titleText }) {
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

export default HomeHtml;