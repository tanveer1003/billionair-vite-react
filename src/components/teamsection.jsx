import React from 'react';
import { useTrail, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import team1 from '../assets/img/team/radek-opt-1920.webp';
import team2 from '../assets/img/team/radovan-opt-1920.webp';
import team3 from '../assets/img/team/michael-opt-1920.webp';
import team4 from '../assets/img/team/jamie-opt-1920.webp';
import team5 from '../assets/img/team/rahul-opt-1920.webp';
import team6 from '../assets/img/team/tomas-opt-1920.webp';
import team7 from '../assets/img/team/luis-opt-1920.webp';
import team8 from '../assets/img/team/ihor-opt-1920.webp';
import team9 from '../assets/img/team/bohdan-opt-1920.webp';

import social1 from '../assets/img/social/linkedin+square+icon-1320168278649782468.png';

const TeamSection = () => {
  const cards = [
    // Add your card objects here with appropriate content
    {
      "name": "Radek Pléha",
      "position": "Co-Founder",
      "image": team1,
      "link": "https://www.linkedin.com/in/radekpleha/"
    },
    {
      "name": "Radovan Voda",
      "position": "Co-Founder",
      "image": team2,
      "link": "https://www.linkedin.com/in/radovan-voda/"
    },
    {
      "name": "Michael Laurens",
      "position": "Marketing Director",
      "image": team3,
      "link": "https://www.linkedin.com/in/michaellaurens/"
    },
    {
      "name": "Jamie Wheeler",
      "position": "Marketing and Operations Manager",
      "image": team4,
      "link": "https://www.linkedin.com/in/jamie-wheeler1988/"
    },
    {
      "name": "Rahul A R",
      "position": "Blockchain Lead",
      "image": team5,
      "link": "https://www.linkedin.com/in/rahular101/"
    },
    {
      "name": "Tomas Rokos",
      "position": " Technical Analytist",
      "image": team6,
      "link": "https://www.linkedin.com/in/tomas-rokos/"
    },
    {
      "name": "Luis Ricardo Sanchez",
      "position": "Senior Blockchain Developer",
      "image": team7,
      "link": "https://www.linkedin.com/in/lurisante/"
    },
    {
      "name": "Ihor Medvediv",
      "position": "Growth Strategist",
      "image": team8,
      "link": "https://www.linkedin.com/in/ihor-medvid-208211129/"
    },
    {
      "name": "Bohdan Stavskyi",
      "position": "Financial Planning & Analysis",
      "image": team9,
      "link": "https://www.linkedin.com/in/bohdan-stavskyi/"
    },
  ];

  const cards2 = [
    {
      "name": "Arthur Iinuma",
      "description": "Founder of Iinuma.io and President &amp; Co-Founder at ISBX",
      "image": "https://billionair.com/images/team/nextImageExportOptimizer/arthur-opt-3840.WEBP",
      "link": "https://www.linkedin.com/in/arthur-iinuma-4115ba17/"
    },
    {
      "name": "Blaine Graboyes",
      "description": "Casino video games category pioneer",
      "image": "https://billionair.com/images/team/nextImageExportOptimizer/blaine-opt-3840.WEBP",
      "link": "https://www.linkedin.com/in/blaineglobal/"
    },
    {
      "name": "Steve Berman",
      "description": "Regulated gaming industry veteran",
      "image": "https://billionair.com/images/team/nextImageExportOptimizer/steve-opt-3840.WEBP",
      "link": "https://www.linkedin.com/in/stevenmberman/"
    },
    {
      "name": "Ricardo Barcolari",
      "description": "CEO at ChainLab",
      "image": "https://billionair.com/images/team/nextImageExportOptimizer/riccardo-opt-3840.WEBP",
      "link": "https://www.linkedin.com/in/rbarcolari"
    },
    {
      "name": "Giacomo Voltolina",
      "description": "Co-Founder &amp; CPO at Chainlab",
      "image": "https://billionair.com/images/team/nextImageExportOptimizer/giacomo-opt-3840.WEBP",
      "link": "https://www.linkedin.com/in/giacomo-voltolina-384b21125"
    },
  ];



  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
    threshold: 0.2, // Set the threshold for triggering the animation (0 to 1)
  });

  const trail = useTrail(cards.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(1px) translateZ(0px)" : "translateY(50px) translateZ(0px)",//'translateY(1px) translateZ(0px)',
    from: {
      opacity: 0, transform: "translateY(50px) translateZ(0px)"//' translateY(100px) translateZ(0px)'
    },
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
    threshold: 0.2, // Set the threshold for triggering the animation (0 to 1)
  });

  const trail2 = useTrail(cards2.length, {
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? "translateY(1px) translateZ(0px)" : "translateY(50px) translateZ(0px)",//'translateY(1px) translateZ(0px)',
    from: {
      opacity: 0, transform: "translateY(50px) translateZ(0px)"//' translateY(100px) translateZ(0px)'
    },
  });

  return (
    <section class="overflow-hidden">
      <div class="gs container">
        <div class="gs-container mb-3 flex flex-col items-center text-dark">
          <h3 class="v-h800 mb-12px text-center font-bold md:v-h900-md md:mb-2 lg:v-h850-lg lg:mb-3 xl:v-h850-xl xl:mb-3">
            A team you can trust
          </h3>
          <p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-4 max-w-[296px] text-center opacity-90 sm:mb-4 md:mb-6 md:max-w-[283px] lg:mb-8 lg:max-w-[388px] xl:mb-10 xl:max-w-[458px]">
            It's not just about the people behind the project, it's about the people in front.
          </p>
          <div ref={ref} class="image-card-container mb-8 w-screen md:mb-12 md:w-full lg:mb-15">
            <div class="flex flex-col gap-y-3">
              <ul class="m-0 -mb-2 px-5 flex w-full flex-nowrap gap-12px overflow-x-auto pl-[20px] pb-2 sm:mb-0 sm:grid sm:grid-cols-12 sm:gap-3 sm:overflow-x-visible sm:pb-0 sm:pl-0 lg:gap-3 xl:gap-[23px]">
                {trail.map((style, index) => (
                  <animated.li key={index} style={style} class="col-span-3 flex w-19 flex-shrink-0 ">
                    <div class="w-full">
                      <a href={cards[index].link} rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                        <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                          boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                          background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                        }}>
                          <img alt={cards[index].name} title={cards[index].name} sizes="100vw"
                            src={cards[index].image} decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                              position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                            }} />
                          <noscript></noscript>
                        </span>
                        </div>
                        <h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">
                          {cards[index].name}
                        </h4>
                        <p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">
                          {cards[index].position}
                        </p>
                        <div aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                          <img src={social1} class="img-fluid" />
                        </div>
                      </a>
                    </div>
                  </animated.li>
                ))}
              </ul>
            </div>
          </div>
          <h3 class="v-h800 mb-4 text-center sm:mb-5 md:v-h900-md md:mb-2 lg:v-h850-lg lg:mb-8 xl:v-h850-xl xl:mb-10">Our advisors</h3>
          <div ref={ref2} class="image-card-container w-screen sm:mb-6 md:mb-12 md:w-full">
            <div class="flex flex-col gap-y-3 py-4">
              <ul class="-mb-2 flex w-full flex-nowrap gap-12px overflow-x-auto pl-[20px] pb-2 sm:mb-0 sm:grid sm:grid-cols-12 sm:gap-3 sm:overflow-x-visible sm:pb-0 sm:pl-0 lg:gap-3 xl:gap-[23px]">
                {trail2.map((style, index) => (
                  <animated.li key={index} style={style} class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto">
                    <div class="w-full">
                      <a href={cards2[index].link} rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                        <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]">
                          <span style={{
                          boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                          background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                        }}>
                          <img alt="Arthur Iinuma" title={cards2[index].name} sizes="100vw"
                            src={cards2[index].image} decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                              position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                            }} />
                          <noscript></noscript>
                        </span>
                        </div>
                        <h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">
                          {cards2[index].name}
                        </h4>
                        <p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">
                          {cards2[index].position}
                        </p>
                        <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                          <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                        </svg>
                      </a>
                    </div>
                  </animated.li>
                ))}

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
