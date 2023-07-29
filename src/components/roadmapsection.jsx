import React from 'react';
import { useTrail, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


import social1 from '../assets/img/social/linkedin+square+icon-1320168278649782468.png';

const RoadmapSection = () => {
    const cards = [
        // Add your card objects here with appropriate content
        {
            "title": "Q3 - 2022",
            "description": `<li>
            BillionAir official website launch
          </li>
          <li>
            Whitepaper and project documentation release
          </li>`,

        },
        {
            "title": "Q4 - 2022",
            "description": "<li>Start of $AIRB private sale</li><li>Establishing partnerships</li><li> Smart contract audit</li>",
        },
        {
            "title": "Q1 - 2023",
            "description": `<li>
            Deployment of the raffle smart contracts
          </li>
          <li>
            Pilot platform launch
          </li>
          <li>
            Beta testing
          </li>
          <li>
            Airdrop
          </li>`,
        },
        {
            "title": "Q2 - 2023",
            "description": `<li>
              Ambassador Influencers Marketing Campaign
            </li>
            <li>
              $AIRB public pre-sale
            </li>
            <li>
              Token generation event for $AIRB
            </li>`,
        },
        {
            "title": "Q3 - 2023",
            "description": `<li>
            DEX &amp; CEX listing
          </li>
          <li>
            Official BillionAIR platform launch
          </li>
          <li>
            Staking platform launch
          </li>
          <li>
            Phase 1 and 2 raffles launch
          </li>`,

        },
        {
            "title": "Q4 - 2023",
            "description": `<li>
            Phase 3 raffles launch
          </li>
          <li>
            Expanding partnerships for raffles and branded games
          </li>
          <li>
            Becoming a raffle provider for other projects
          </li>
          <li>
            Cross-chain gaming and raffles
          </li>
          <li>
            New BillionAir games each month
          </li>
          <li>
            Mobile app development
          </li>
          <li>
            Improving UX/UI
          </li>`,
        },
        {
            "title": "Q1 - 2024",
            "description": `<li>
            Adding new payment options for users
          </li>
          <li>
            Expanding to new geographic regions
          </li>
          <li>
            Enhanced security features implementation
          </li>
          <li>
            DAO governance forming
          </li>`,

        },
        {
            "title": "Q2 - 2024",
            "description": `<li>
            Building of Metaverse environment
          </li>
          <li>
            Integrate Metaverse and VR games
          </li>
          <li>
            Migrate to a fully DAO ecosystem
          </li>`,
        }
    ];


    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.2, // Set the threshold for triggering the animation (0 to 1)
    });

    const trail = useTrail(cards.length, {
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(30px) translateZ(0px)" : "translateY(100px) translateZ(0px)",//'translateY(1px) translateZ(0px)',
        from: {
            opacity: 0, transform: "translateY(100px) translateZ(0px)"//' translateY(100px) translateZ(0px)'
        },
    });



    return (
        <section class="pt-12 sm:pt-16 md:pt-13 lg:pt-20 xl:pt-18 mb-[160px] sm:mb-[120px] md:mb-18 lg:mb-15 xl:mb-25" id="roadmap">
            <div class="gs container">
                <div class="gs-container flex flex-col gap-y-5 sm:flex-row sm:gap-x-10 md:gap-x-20 lg:gap-x-25 xl:gap-x-[244px]">
                    <div class="h-fit max-w-[280px] sm:sticky sm:top-10 sm:left-0 sm:max-w-[287px] lg:max-w-[393px] xl:max-w-[464px]"><h2 class="styles_typography__xvvW1 styles_h900__a8TGo mb-2 lg:mb-3">Roadmap</h2>
                        <div class="styles_typography__xvvW1 styles_p450__b6Mbm flex flex-col gap-2 text-white/70 "><p>Detailed action plan making us excited for the future of earntertainment.</p>
                        </div>
                    </div>
                    <div ref={ref} class="w-full styles_scheduleList__Qr5UT">
                        <div>
                            <ul class="flex flex-col gap-2 sm:gap-4 lg:gap-5">
                                {trail.map((style, index) => (
                                    <animated.li key={index} style={style} class="my-2">
                                        <div class="Background_container__RCLV5">
                                            <div class="Background_content___GAg0">
                                                <article class="styles_scheduleItem__8fEed">
                                                    <h3 class="styles_typography__xvvW1 styles_h650__isr6D mb-12px md:mb-2 lg:mb-3">
                                                        <span class="styles_typography__xvvW1 styles_gradient-primary___XZ8G">{cards[index].title}</span>
                                                    </h3>
                                                    <ul class="styles_typography__xvvW1 styles_p450__b6Mbm flex flex-col gap-1 text-white/70">
                                                        <div dangerouslySetInnerHTML={{ __html: cards[index].description }} />

                                                    </ul></article>
                                            </div>
                                            <div class="Background_background__Obe1R " style={{ "border-radius": "32px" }}>
                                                <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                                                </div>
                                                <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                                                </div>
                                            </div>
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

export default RoadmapSection;
