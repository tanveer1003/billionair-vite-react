import React from 'react';
import { useTrail, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import team1 from '../assets/img/team/radek-opt-1920.WEBP';
import team2 from '../assets/img/team/radovan-opt-1920.WEBP';
import team3 from '../assets/img/team/michael-opt-1920.WEBP';
import team4 from '../assets/img/team/jamie-opt-1920.WEBP';
import team5 from '../assets/img/team/rahul-opt-1920.WEBP';
import team6 from '../assets/img/team/tomas-opt-1920.WEBP';
import team7 from '../assets/img/team/luis-opt-1920.WEBP';
import team8 from '../assets/img/team/ihor-opt-1920.WEBP';
import team9 from '../assets/img/team/bohdan-opt-1920.WEBP';

import social1 from '../assets/img/social/linkedin+square+icon-1320168278649782468.png';

const TeamSection = () => {
    const cards = [
      // Add your card objects here with appropriate content
      {
        "name":"Radek Pléha",
        "position":"Co-Founder",
        "image":team1,
        "link":"https://www.linkedin.com/in/radekpleha/"
      },
      {
        "name":"Radovan Voda",
        "position":"Co-Founder",
        "image":team2,
        "link":"https://www.linkedin.com/in/radovan-voda/"
      },
      {
        "name":"Michael Laurens",
        "position":"Marketing Director",
        "image":team3,
        "link":"https://www.linkedin.com/in/michaellaurens/"
      },
      {
        "name":"Jamie Wheeler",
        "position":"Marketing and Operations Manager",
        "image":team4,
        "link":"https://www.linkedin.com/in/jamie-wheeler1988/"
      },
      {
        "name":"Rahul A R",
        "position":"Blockchain Lead",
        "image":team5,
        "link":"https://www.linkedin.com/in/rahular101/"
      },
      {
        "name":"Tomas Rokos",
        "position":" Technical Analytist",
        "image":team6,
        "link":"https://www.linkedin.com/in/tomas-rokos/"
      },
      {
        "name":"Luis Ricardo Sanchez",
        "position":"Senior Blockchain Developer",
        "image":team7,
        "link":"https://www.linkedin.com/in/lurisante/"
      },
      {
        "name":"Ihor Medvediv",
        "position":"Growth Strategist",
        "image":team8,
        "link":"https://www.linkedin.com/in/ihor-medvid-208211129/"
      },
      {
        "name":"Bohdan Stavskyi",
        "position":"Financial Planning & Analysis",
        "image":team9,
        "link":"https://www.linkedin.com/in/bohdan-stavskyi/"
      },
    ];

    const [ref, inView] = useInView({
      triggerOnce: true, // Only trigger once when the element comes into view
      threshold: 0.2, // Set the threshold for triggering the animation (0 to 1)
    });
  
    const trail = useTrail(cards.length, {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(1px) translateZ(0px)" : "translateY(50px) translateZ(0px)",//'translateY(1px) translateZ(0px)',
      from: { opacity: 0, transform: "translateY(50px) translateZ(0px)"//' translateY(100px) translateZ(0px)'
     },
    });
  
    return (
        <div class="container text-center">
        <div ref={ref} class="container p-5">
          <header class="align-items-center  pb-3 mb-2 fw-bold text-white p-5 ">
            <h1 class="display-5 fw-bold">A team you can trust</h1>
            <p class="lead">
              It's not just about the people behind the project, it's about the people in front.
            </p>
          </header>
          <div class="row p-5">
              {trail.map((style, index) => (
                <animated.div key={index} style={style} className="col-lg-4 col-md-6 col-xl-3 col-sm-12 col-xs-12 p-4">
                    <a target="_blank" href={cards[index].link}>
                    <div class=" card" >
                <img src={cards[index].image} className="card-img-top img-fluid p-4" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title">{cards[index].name}</h5>
                  <p className="">{cards[index].position}</p>
                  <img src={social1} height={22} alt="LinkedIn Icon" />
                </div>
                </div>
              </a>
                  
                </animated.div>
              ))}
            </div>
          </div>

        </div>
    );
  };
  
export default TeamSection;