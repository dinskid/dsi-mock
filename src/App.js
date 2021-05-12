import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pana from './images/pana.svg';
import Pana1 from './images/pana1.svg';
import Card from './components/Card';
import { Fade, Slide } from 'react-reveal';

import './App.css';

function App() {
  const cardDetails = [
    {
      img: 'product_description.svg',
      imgAlt: 'product description',
      title: 'Our Product',
      description: 'Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.',
      buttonText: 'Read More',
    },
    {
      img: 'verified.svg',
      imgAlt: 'verified',
      title: 'Our Service',
      description: 'DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.',
      buttonText: 'Read More',
    },
    {
      img: 'cogwheel.svg',
      imgAlt: 'technology',
      title: 'Our Technology',
      description: 'First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.',
      buttonText: 'Read More',
    },
  ];

  return (
    <>
      <Navbar />
      <section id="landing">
        <div className="tags">
          <div className="title-wrap">
            <Slide left>
              <h1 className="title">
                Making the most of the
              </h1>
            </Slide>
            <Slide right>
              <h1 className="title">
                ever-growing
              </h1>
            </Slide>
            <Slide left>
              <h1 className="title txt-red">
                Information Technology
              </h1>
            </Slide>
          </div>
          <Slide up>
            <div className="tag">
              Managed by a team of professional experts with extensive experience and impressive track records
            </div>
          </Slide>
          <button className="btn hvr-fade">
            Read More
          </button>
        </div>
        <Fade><img src={Pana} alt="random" width="100%" height="100%" /></Fade>
      </section>
      <section id="welcome">
        <Fade><img src={Pana1} alt="random" width="100%" height="100%" /></Fade>
        <div className="description">
          <div className="title-wrap">
            <h1>Welcome to <span className="txt-red">Dwidasa Samsara Indonesia (DSI)</span></h1>
          </div>
          <div className="about">
            Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span className="txt-red">DSI</span>’s distinct front-end based application concept.
            <br />
            <br />
            Managed by a team of professional experts with extensive experience and impressive track records, <span className="txt-red">DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.
          </div>
        </div>
      </section>
      <section id="services">
        <h1>Product and Service</h1>
        <div className="cards-wrap">
          {
            cardDetails.map(card => {
              return (
                <Card {...card} key={card.imgAlt} />
              );
            })
          }
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
