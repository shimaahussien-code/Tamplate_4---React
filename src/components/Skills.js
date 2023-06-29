
import Carousel from 'react-multi-carousel';
import { TypeAnimation } from 'react-type-animation';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skillbox">
                    <h2>
                    <TypeAnimation
                      sequence={['Skills', 1000,'', 1000,'Skills', 1000]}
                      speed={{type: 'keyStrokeDelayInMs', value: 500}}
                      repeat={Infinity}
                    />
                        </h2>
                        <p>You Can See My Skills Here </p>
                       
                        
                        
                        <Carousel responsive={responsive} infinite={true} className=" skills-slider">
                                               
                        
                            <div className="skill-item">
                            <CircularProgressbar value={60} text={`${60}%`} strokeWidth={8} background
        backgroundPadding={6} styles={buildStyles({
          backgroundColor: "#C2DEDC",
          textColor: "#577D86",
          pathColor: "#9336B4",
          trailColor: "transparent",
          textSize: "20px",
          // rotation:0.8,
        })}/>
        
                                <h3>BackEnd Development</h3>
                            </div>
                            <div className="skill-item">
                            <CircularProgressbar value={80} text={`${80}%`} strokeWidth={8} background
        backgroundPadding={6} styles={buildStyles({
          backgroundColor: "#C2DEDC",
          textColor: "#9336B4",
          pathColor: "#577D86",
          trailColor: "transparent",
          textSize: "20px",
          // rotation:0.8,
        })}/>
                                <h3>Data Science</h3>
                            </div>
                            <div className="skill-item">
                            <CircularProgressbar value={95} text={`${95}%`} strokeWidth={8} background
        backgroundPadding={6} styles={buildStyles({
          backgroundColor: "#C2DEDC",
          textColor: "#577D86",
          pathColor: "#9336B4",
          trailColor: "transparent",
          textSize: "20px",
          // rotation:0.8,
        })}/>
                                <h3>FrontEnd Development</h3>
                            </div>
                            <div className="skill-item">
                            <CircularProgressbar value={85} text={`${85}%`} strokeWidth={8} background
        backgroundPadding={6} styles={buildStyles({
          backgroundColor: "#C2DEDC",
          textColor: "#9336B4",
          pathColor: "#577D86",
          trailColor: "transparent",
          textSize: "20px",
          // rotation:0.8,
        })}/>
                                <h3>Cyber Security</h3>
                            </div>
                        </Carousel>
                        
                    </div>
                </div>
            </div>
        </div>
      

    </section>
  )
}