import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis veniam quae eaque qui ullam accusamus dolorum iste optio vero!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint possimus accusantium eaque laborum soluta excepturi, in nisi et vitae nostrum, dolores modi eveniet aliquid similique voluptatibus aspernatur qui necessitatibus maxime! Quisquam quod ipsam provident quo ullam distinctio tenetur! Eius, doloremque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium nemo ratione blanditiis temporibus odio eligendi, laudantium, earum, assumenda quidem tempora veniam? Sunt, magni facere!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi laborum ex.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint possimus accusantium eaque laborum soluta excepturi, in nisi et vitae nostrum, dolores modi eveniet aliquid similique voluptatibus aspernatur qui necessitatibus maxime! Quisquam quod ipsam provident quo ullam distinctio tenetur! Eius, doloremque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium nemo ratione blanditiis temporibus odio eligendi, laudantium, earum, assumenda quidem tempora veniam? Sunt, magni facere!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint possimus accusantium eaque laborum soluta excepturi, in nisi et vitae nostrum, dolores modi eveniet aliquid similique voluptatibus aspernatur qui necessitatibus maxime! Quisquam quod ipsam provident quo ullam distinctio tenetur! Eius, doloremque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium nemo ratione blanditiis temporibus odio eligendi, laudantium, earum, assumenda quidem tempora veniam? Sunt, magni facere!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi laborum ex.
            </p>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default About