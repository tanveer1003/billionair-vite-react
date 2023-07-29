//import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/custom.scss';
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';

import React, { Component, useState, useRef } from 'react';
import { Header } from '../components/header';


import logo from './../assets/img/primary-80ada38261b1c4f4.svg';

import img1 from './../assets/img/bitmart.svg';
import img2 from './../assets/img/consulting-partners.svg';
import img3 from './../assets/img/chainlink.svg';
import img4 from './../assets/img/luna-capital.png';
import img5 from './../assets/img/binance.svg';
import img6 from './../assets/img/accubits.svg';
import img7 from './../assets/img/wave-up.svg';
import img8 from './../assets/img/chainlab.svg';
import img9 from './../assets/img/bros.svg';
import img10 from './../assets/img/m3.svg';
import img11 from './../assets/img/kairon.svg';
import img12 from './../assets/img/solid-proof.png';
import img13 from './../assets/img/certik1.svg';
import img14 from './../assets/img/bnb-chain.png';

import social1 from './../assets/img/social/linkedin+square+icon-1320168278649782468.png';
import social2 from './../assets/img/social/tree.png';
import social3 from './../assets/img/social/twitter.png';
import social4 from './../assets/img/social/telegram.png';
import social5 from './../assets/img/social/telegramnotification.png';
import social6 from './../assets/img/social/discored.png';
import social7 from './../assets/img/social/instagram.png';
import social8 from './../assets/img/social/facebook.png';
import social9 from './../assets/img/social/m.png';


import social10 from './../assets/img/social/twitterwhite.png';
import social11 from './../assets/img/social/telegramwhite.png';
import social12 from './../assets/img/social/telegramnotificationwhite.png';
import social13 from './../assets/img/social/discordwhite.png';
import social14 from './../assets/img/social/instagramwhite.png';

import imageside from './../assets/img/banners/ipad-pro-1.png';

import ImageSlider from '../components/imageslider';
import TeamSection from '../components/teamsection';
import RoadmapSection from '../components/roadmapsection';

import EthIcon from '../components/ethicon';
import WsmIcon from '../components/wsmicon';
import usdtIcon from '../assets/img/usdt.svg';
import cardIcon from '../assets/img/card.svg';

//<img src="https://billionair.com/images/ido/bg-figure.svg" class="bg-image"  />
function Index() {

  const images = [
    "https://billionair.com/images/partners/bitmart.svg",
    "https://billionair.com/images/partners/consulting-partners.svg",
    "https://billionair.com/images/partners/chainlink.svg",
    "https://billionair.com/images/partners/luna-capital.png",
    "https://billionair.com/images/partners/binance.svg",
    "https://billionair.com/images/partners/accubits.svg",
    "https://billionair.com/images/partners/wave-up.svg",
    "https://billionair.com/images/partners/chainlab.svg",
    "https://billionair.com/images/partners/bros.svg",
    "https://billionair.com/images/partners/m3.svg",
    "https://billionair.com/images/partners/kairon.svg",
    "https://billionair.com/images/partners/solid-proof.png",
    "https://billionair.com/images/partners/certik1.svg",
    "https://billionair.com/images/partners/bnb-chain.png",
    "https://billionair.com/images/partners/bitmart.svg",
    "https://billionair.com/images/partners/consulting-partners.svg",
    "https://billionair.com/images/partners/chainlink.svg",
    "https://billionair.com/images/partners/luna-capital.png",
    "https://billionair.com/images/partners/binance.svg",
    "https://billionair.com/images/partners/accubits.svg",
    "https://billionair.com/images/partners/wave-up.svg",
    "https://billionair.com/images/partners/chainlab.svg",
    "https://billionair.com/images/partners/bros.svg",
    "https://billionair.com/images/partners/m3.svg",
    "https://billionair.com/images/partners/kairon.svg",
    "https://billionair.com/images/partners/solid-proof.png",
    "https://billionair.com/images/partners/certik1.svg",
    "https://billionair.com/images/partners/bnb-chain.png"
  ];

  const images2 = [
    "https://billionair.com/images/as-seen/news_btc.svg",
    "https://billionair.com/images/as-seen/crypto_deily.svg",
    "https://billionair.com/images/as-seen/crypto_news.svg",
    "https://billionair.com/images/as-seen/binance.svg",
    "https://billionair.com/images/as-seen/bitcoin_insider.svg",
    "https://billionair.com/images/as-seen/cointelegraph.svg",
    "https://billionair.com/images/as-seen/investing.svg",
    "https://billionair.com/images/as-seen/buisness_news.svg",
    "https://billionair.com/images/as-seen/benzinga.svg",
    "https://billionair.com/images/as-seen/yahoo.svg",
    "https://billionair.com/images/as-seen/morningstar.svg",
    "https://billionair.com/images/as-seen/techbullion.svg",
    "https://billionair.com/images/as-seen/bloomberg.svg",
    "https://billionair.com/images/as-seen/marketwatch.svg",
    "https://billionair.com/images/as-seen/DigitalJournal.svg",
    "https://billionair.com/images/as-seen/news_btc.svg",
    "https://billionair.com/images/as-seen/crypto_deily.svg",
    "https://billionair.com/images/as-seen/crypto_news.svg",
    "https://billionair.com/images/as-seen/binance.svg",
    "https://billionair.com/images/as-seen/bitcoin_insider.svg",
    "https://billionair.com/images/as-seen/cointelegraph.svg",
    "https://billionair.com/images/as-seen/investing.svg",
    "https://billionair.com/images/as-seen/buisness_news.svg",
    "https://billionair.com/images/as-seen/benzinga.svg",
    "https://billionair.com/images/as-seen/yahoo.svg",
    "https://billionair.com/images/as-seen/morningstar.svg",
    "https://billionair.com/images/as-seen/techbullion.svg",
    "https://billionair.com/images/as-seen/bloomberg.svg",
    "https://billionair.com/images/as-seen/marketwatch.svg",
    "https://billionair.com/images/as-seen/DigitalJournal.svg"
  ];

  const images3 = [
    "https://billionair.com/images/partners/bitmart.svg",
    "https://billionair.com/images/partners/consulting-partners.svg",
    "https://billionair.com/images/partners/chainlink.svg",
    "https://billionair.com/images/partners/luna-capital.png",
    "https://billionair.com/images/partners/binance.svg",
    "https://billionair.com/images/partners/accubits.svg",
    "https://billionair.com/images/partners/wave-up.svg",
    "https://billionair.com/images/partners/chainlab.svg",
    "https://billionair.com/images/partners/bros.svg",
    "https://billionair.com/images/partners/m3.svg",
    "https://billionair.com/images/partners/kairon.svg",
    "https://billionair.com/images/partners/solid-proof.png",
    "https://billionair.com/images/partners/certik1.svg",
    "https://billionair.com/images/partners/bnb-chain.png",
    "https://billionair.com/images/partners/bitmart.svg",
    "https://billionair.com/images/partners/consulting-partners.svg",
    "https://billionair.com/images/partners/chainlink.svg",
    "https://billionair.com/images/partners/luna-capital.png",
    "https://billionair.com/images/partners/binance.svg",
    "https://billionair.com/images/partners/accubits.svg",
    "https://billionair.com/images/partners/wave-up.svg",
    "https://billionair.com/images/partners/chainlab.svg",
    "https://billionair.com/images/partners/bros.svg",
    "https://billionair.com/images/partners/m3.svg",
    "https://billionair.com/images/partners/kairon.svg",
    "https://billionair.com/images/partners/solid-proof.png",
    "https://billionair.com/images/partners/certik1.svg",
    "https://billionair.com/images/partners/bnb-chain.png"
  ];
  const slidesToShow = 5; // Number of images to show at once
  const autoplaySpeed = 3000; // Auto-scrolling speed in milliseconds




  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const handleLinkClick = (id) => {
    if (id === 1) {
      setIsActive1(true);
      setIsActive2(false);
    } else if (id === 2) {
      setIsActive1(false);
      setIsActive2(true);
    }
  };

  const ImageCard = () => {
    // Sample image URLs
    const images = [
      "https://billionair.com/images/partners/bitmart.svg",
      "https://billionair.com/images/partners/consulting-partners.svg",
      "https://billionair.com/images/partners/chainlink.svg"
      // Add more image URLs as needed
    ];

    return (
      <div className="image-card-container">
        <div className="image-card-scroll">
          {images.map((imageUrl, index) => (
            <div key={index} className="image-card">
              <img src={imageUrl} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (

    <div id="__next">
      <div data-rk="">
        <div class="grid min-h-viewport grid-rows-[auto_1fr] text-white">
          <header class="top-0 left-0 z-header w-full fixed animate-from-top bg-[rgba(80,_80,_80,_0.4)] py-2 backdrop-blur-[32px] will-change-[top]">
            <div class="w-full">
              <div class="styles_container__l6_kT">
                <div class="flex flex-wrap items-center justify-between gap-[8px]">
                  <a class="outline-none transition-opacity hover:opacity-70 focus:opacity-70" href="/">
                    <img alt="InnoPlatforms logo" class="shrink-0 h-4 w-[166px]" src="https://billionair.com/_next/static/media/primary-80ada38261b1c4f4..svg" width="96" height="18" />
                  </a>
                  <div class="styles_heading__QAbdh hidden gap-[4px] text-[16px] sm:text-[20px] md:text-[24px] xl:flex">
                    <span class="styles_typography__xvvW1 text-gradient-primary-start">$AIRB</span>
                    <span class="styles_typography__xvvW1"> Pre-Sale LIVE — Phase 1 Raised: </span>
                    <span class="styles_typography__xvvW1 styles_textLinear__DDUZv">$121,371</span>

                  </div>
                  <div class="flex">
                    <nav class="ml-auto hidden md:mr-6 md:flex lg:mr-5">
                      <ul class="flex flex-wrap items-center gap-[28px] lg:gap-[36px]">
                        <li>
                          <a class="styles_typography__xvvW1 styles_p300__643Oz cursor-pointer !font-semibold !uppercase text-white outline-none transition-opacity hover:opacity-60 focus:opacity-60">Home
                          </a>
                        </li>
                        <li>
                          <a rel="noopener noreferrer" target="_blank" href="https://docsend.com/view/s/66eqhubrbqgnuwqj" class="styles_typography__xvvW1 styles_p300__643Oz cursor-pointer !font-semibold !uppercase text-white outline-none transition-opacity hover:opacity-60 focus:opacity-60">WHITEPAPER
                          </a>
                        </li>
                        <li>
                          <a class="styles_typography__xvvW1 styles_p300__643Oz cursor-pointer !font-semibold !uppercase text-white outline-none transition-opacity hover:opacity-60 focus:opacity-60">WIN $500K
                          </a>
                        </li>
                        <li>
                          <a class="styles_typography__xvvW1 styles_p300__643Oz cursor-pointer !font-semibold !uppercase text-white outline-none transition-opacity hover:opacity-60 focus:opacity-60">REFER TO EARN
                          </a>
                        </li>
                        <li>
                          <a class="styles_typography__xvvW1 styles_p300__643Oz cursor-pointer !font-semibold !uppercase text-white outline-none transition-opacity hover:opacity-60 focus:opacity-60">HOW TO BUY
                          </a>
                        </li>
                        <li>
                          <a href="#" class="styles_typography__xvvW1 styles_p300__643Oz !font-semibold !uppercase text-white outline-none transition-opacity hover:opacity-60 focus:opacity-60">CONTACT US
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div class="ml-auto flex items-center md:ml-0">
                      <button aria-expanded="false" aria-label="Toggle navigation" class="mr-2 md:hidden" type="button">
                        <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                          <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#menu"></use>
                        </svg>
                      </button>
                      <div >
                        <button class="styles_button__AXNxo styles_variant-airdrop__37rFj styles_size-100__a1Onu" type="button">Buy $AIRB Now</button>

                      </div>
                    </div>
                  </div>

                  <div class="styles_heading__QAbdh flex w-[100%] justify-end gap-[4px] text-[16px] sm:text-[20px] md:text-[24px] xl:hidden">
                    <span class="styles_typography__xvvW1 text-gradient-primary-start">$AIRB</span>
                    <span class="styles_typography__xvvW1"> Pre-Sale LIVE — Phase 1 Raised: </span>
                    <span class="styles_typography__xvvW1 styles_textLinear__DDUZv">$121,371</span>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main class="relative z-10 overflow-x-hidden bg-dark">
            <div class="Background_container__RCLV5">
              <div class="Background_content___GAg0">
                <section class="relative flex flex-col overflow-hidden  pt-5 pl-1 ">
                  <div class="text-white pt-5">
                  <section class="gs container " id="invest">
                    <div class="gs-container   pt-5 ">
                        <h1 class="styles_typography__xvvW1 styles_h900__a8TGo mb-4 flex flex-col sm:max-w-full lg:mb-4 styles_header__9aT7J">
                          <span class="styles_title__EMJ4a">The Ultimate Web3</span>
                          <span class="styles_title__EMJ4a">Raffle &amp; Earn Hub</span>
                        </h1>
                        <span class="styles_typography__xvvW1 styles_p600__pI7gO v-p600 mb-2 block max-w-[710px] md:v-p600-md lg:v-p600-lg lg:mb-3 xl:v-p600-xl">
                          Join the official $AIRB token Pre-Sale and start earning now. Engage, experience, enjoy and win with an honest, fun and rewarding entertainment platform.
                        </span>
                        <div class="mb-[40px]">
                          <div class="styles_input__XBeBz">
                            <button class="styles_button__AXNxo styles_variant-grey__BpSwJ styles_size-200__vitZh h-[64px]" type="button">Whitepaper</button>
                            <button class="styles_button__AXNxo styles_variant-airdrop__37rFj styles_size-200__vitZh styles_buttonBuy__UV_0w" type="button">Buy $AIRB Now</button>
                          </div>
                        </div>
                        <ul class="styles_boxIcon__3LDIB">
                          <li class="styles_icon__HPaNr">
                            <a rel="noopener noreferrer" target="_blank" href="https://linktr.ee/billionair_app">
                              <img src={social2} class="img-fluid" />
                            </a>
                          </li>
                          <li class="styles_icon__HPaNr">
                            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/billionair_app">
                              <img src={social3} class="img-fluid" />
                            </a>
                          </li>
                          <li class="styles_icon__HPaNr">
                            <a rel="noopener noreferrer" target="_blank" href="https://t.me/billionair_app">
                              <img src={social4} class="img-fluid" />
                            </a>
                          </li>
                          <li class="styles_icon__HPaNr">
                            <a rel="noopener noreferrer" target="_blank" href="https://t.me/billionair_announcements">
                              <img src={social5} class="img-fluid" />
                            </a>
                          </li>
                          <li class="styles_icon__HPaNr">
                            <a rel="noopener noreferrer" target="_blank" href="https://discord.gg/QGHv26UajU">
                              <img src={social6} class="img-fluid" />
                            </a>
                          </li>
                          <li class="styles_icon__HPaNr">
                            <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/billionair_app">
                              <img src={social7} class="img-fluid" />
                            </a>
                          </li>
                          <li class="styles_icon__HPaNr">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100090222482120">
                              <img src={social8} class="img-fluid" />
                            </a>
                          </li>
                          <li class="styles_icon__HPaNr">
                            <a rel="noopener noreferrer" target="_blank" href="https://medium.com/billionair-app">
                              <img src={social9} class="img-fluid" />
                            </a>
                          </li>
                        </ul>
                      </div>
                  </section>
                  </div>
                  <div class="px-3 xs:pt-[50px] sm:pt-[50px]  pt-[0px] sm:mt-[50px] sm:pt-[50px] lg:mx-[164px]">
                    <div class="styles_statistical__kKzGp">

                        <div class="xl:px-2 lg:px-2 md:px-2 Background_content___GAg0">
                          <p class="styles_title__1dr5k">Pre-Sale Progress</p>
                          <div class="mt-4 flex  items-center justify-center gap-[5px]  lg:gap-[42px] sm:gap-[10px] xs:gap-[10px]">
                              <div class="bg-black p-2 px-4 sm:px-1 xs:px-1 rounded-4">
                                05d
                              </div>
                              <div class="bg-black p-2 px-4 rounded-4">
                                17h
                              </div>

                              <div class="bg-black p-2 px-4 rounded-4">
                                19m
                              </div>
                              <div class="bg-black p-2 px-4 rounded-4">
                                46s
                              </div>
                          </div>
                          <br />
                          <h6 class="styles_acc__30_tK pt-1 text-center">BUY IN BEFORE PRICE INCREASES!</h6>
                          <div class="styles_bar__ThXVV">
                            <div class="styles_innerBar__frK4F" style={{ "width": "10.1143%", "background": "green" }}>
                            </div>
                          </div>
                          <h6 class=" pt-1 styles_liItem__vVjEY text-center">USDT Raised: $16,827,537.89 / $18,004,966.16</h6>
                          <div>
                            <h6 class=" pt-1 styles_liItem__vVjEY text-center" >
                              1 WSM = $0.322
                            </h6>
                          </div>
                          <div class="mt-4 flex w-full cursor-pointer flex-col items-center justify-center gap-[20px] xl:flex-row  lg:flex-row md:flex-row lg:gap-[42px]">
                            <button class="styles_button__AXNxo styles_variant-grey__BpSwJ styles_size-200__vitZh px-lg-5 w-[100%] bg-black" type="button"><WsmIcon />ETH</button>
                            <button class="styles_button__AXNxo styles_variant-grey__BpSwJ styles_size-200__vitZh  w-[100%]" type="button">
                              <img src={usdtIcon} width="30px" height="30px" /> USDT</button>
                            <button class="styles_button__AXNxo styles_variant-grey__BpSwJ styles_size-200__vitZh  w-[100%]" type="button">
                              <img src={cardIcon} width="30px" height="30px" style={{ color: "white" }} />  CARD</button>
                          </div>
                          <div class="mt-4 flex w-full cursor-pointer flex-col items-center justify-center gap-[20px] xl:flex-row  lg:flex-row md:flex-row lg:gap-[42px]2">
                            <div class="w-[100%]">
                              <div class="flex justify-between gap-2 p-2">
                                <span class="styles_cashItem__Ip6I4">Amount in ETH you pay </span>
                                <span class="styles_liItem__vVjEY text-white"> MAX</span>
                              </div>
                              <div class="relative w-full ">
                                <input class="styles_input__o_7G_ styles_bgVariant-white__GxIfl styles_phVariant-center__EDgNP w-[100%]" name="email"
                                  placeholder="0" type="email" value="" />
                                <div _ngcontent-ng-c1947267045="" style={{ "position": "absolute", "top": "23px", "right": "1rem", "transform": "translateY(-50%)", "display": "flex", "align-items": "center" }} class="amountType">
                                  <WsmIcon />
                                </div>
                                <span class="hidden pl-3 text-left text-[12px] leading-[1.6] text-[#FF5252]"></span>
                              </div>
                            </div>
                            <div class="w-[100%]">
                              <div class="flex justify-between gap-2 p-2">
                                <span class="styles_cashItem__Ip6I4">Amount in <span class="styles_liItem__vVjEY text-white"> WSM</span> you receive </span>
                              </div>
                              <div class="relative w-full ">
                                <input class="styles_input__o_7G_ styles_bgVariant-white__GxIfl styles_phVariant-center__EDgNP w-[100%]" name="email"
                                  placeholder="0" type="email" value="" />
                                <div _ngcontent-ng-c1947267045="" style={{ "position": "absolute", "top": "23px", "right": "1rem", "transform": "translateY(-50%)", "display": "flex", "align-items": "center" }} class="amountType">
                                  <EthIcon />
                                </div>
                                <span class="hidden pl-3 text-left text-[12px] leading-[1.6] text-[#FF5252]"></span>
                              </div>
                            </div>
                          </div>
                          <div class=" gap-[12px] md:flex-nowrap pt-4">
                            <button class="styles_button__AXNxo styles_variant-airdrop__37rFj styles_size-200__vitZh px-5 mb-2 w-[100%]" type="button">Buy Now</button>
                            <button class="styles_button__AXNxo styles_variant-grey__BpSwJ styles_size-200__vitZh  mb-2 bg-black w-[100%]" type="button">Buy with BNB</button>
                            <button class="styles_button__AXNxo styles_variant-grey__BpSwJ styles_size-200__vitZh  mb-2 w-[100%]" type="button">How To Buy</button>
                          </div>
                        </div>

                    </div>
                  </div>
                  <div class="mx-[40px] flex flex-wrap items-center justify-between gap-[16px] pt-[40px] lg:mx-[164px]">

                  </div>
                  <div class="mt-[64px]  sm:mt-[48px] md:mt-[48px] lg:mt-[98px] xl:mt-[112px]">
                    <h2 class="styles_typography__xvvW1 styles_h800__iKuRD col-span-full text-center -tracking-[0.03em]">
                      Backers and Partners
                    </h2>
                    <ImageSlider images={images} slidesToShow={slidesToShow} autoplaySpeed={autoplaySpeed} />
                    <div>
                    </div>
                  </div>
                  <img alt="BillionAir" class="absolute -top-[260px] right-[-210px] -z-10 aspect-[0.94] h-[500px] min-w-full scale-[1.5] sm:-top-[219px] sm:-right-[386px] sm:h-[749px] sm:scale-100 md:-top-[355px] md:-right-[359px] md:h-[942px] lg:-top-[488px] lg:-right-[629px] lg:h-[1267px] xl:-top-[678px] xl:-right-[639px] xl:h-[1547px]"
                    src="https://billionair.com/images/hero/bg-figure.svg" style={{ "max-width": "none" }} />
                </section>

                <section class="pb-[250px] md:pb-[300px] lg:pb-[400px] xl:pb-[540px] ">
                  <div class="flex flex-col-reverse items-center justify-between sm:flex-row sm:pr-[40px] md:pr-[40px] lg:pr-[163px]">
                    <div class="w-[40%]">
                      <img alt="The BillionAir $AIRB token and NFT ticket create an economy filled with opportunities."
                        src="https://billionair.com/images/ido/ipad-pro-1.png" title="The BillionAir $AIRB token and NFT ticket create an economy filled with opportunities." />

                    </div>
                    <div class="mb-4 mt-[64px] grid items-center sm:mt-[0px] sm:mb-0 sm:-ml-[28px] sm:max-w-[50%] md:ml-0 xl:max-w-[908px]">
                      <div class="w-full px-[20px] sm:px-[0px]">
                        <h2 class="styles_typography__xvvW1 styles_h800__iKuRD mb-[20px] -tracking-[0.03em] sm:-tracking-[0.05em] md:mb-[20px] md:-tracking-[0.03em] lg:mb-5">
                          The BillionAir $AIRB token and NFT ticket create an economy filled with opportunities.
                        </h2>
                        <h3 class="styles_typography__xvvW1 styles_p600__pI7gO">
                        Offering the next generation of raffles and games, we provide opportunities to stake, burn, earn rewards, connect communities and win a variety of life-changing prizes.
                        </h3>
                        <div class="mt-4 flex w-full cursor-pointer flex-col items-center justify-center gap-[20px] lg:flex-row lg:gap-[42px]" role="presentation">
                          <span class="styles_bottomText__7Vg8d">Audit and KYC by &gt;</span>
                          <div class="">
                            <img alt="" class="styles_solidProofImg__s_T2x"
                              src="https://billionair.com/images/partners/solid-proof.png" title="solid-proof" />
                          </div>
                          <button class="styles_button__AXNxo styles_variant-airdrop__37rFj styles_size-200__vitZh styles_joinWaitlistBtn__h03d6" type="button">
                            Buy $AIRB
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section class="overflow-hidden pt-6 xl:pt-18 mb-6 sm:mb-6 md:mb-6 lg:mb-6 xl:mb-6">
                    <div>
                      <h2 class="styles_typography__xvvW1 styles_h800__iKuRD col-span-full text-center -tracking-[0.03em]">
                        BillionAir featured in
                      </h2>

                      <ImageSlider images={images2} slidesToShow={slidesToShow} autoplaySpeed={autoplaySpeed} />

                      <div>
                      </div>
                    </div>
                  </section>
                </section>
              </div>
              <div class="Background_background__Obe1R bg-dark">
                <div class="Background_circleContainer__abx_l Background_circle_main-right__ER3F2">

                </div>
                <div class="Background_circleContainer__abx_l Background_circle_slogan-right__kqzV6">

                </div>
                <div class="Background_circleContainer__abx_l Background_circle_slogan-left__TCIgd">
                </div>
              </div>
            </div>

            <div class="Background_container__RCLV5">
              <div class="Background_content___GAg0">
                <section class="relative overflow-visible py-10 px-3 md:p-5 lg:p-10">
                  <div class="row-span-2 my-0 mx-auto grid max-w-[1360px] gap-2 md:gap-3" style={{ "opacity": " 1", "transform": "none" }}>
                    <article class="gs-container relative mt-[-300px] overflow-hidden rounded-[40px] bg-dark text-white lg:mt-[-400px] xl:mt-[-480px] " id="ecosystem">
                      <div class="Background_container__RCLV5">
                        <div class="Background_content___GAg0">
                          <div class="p-3 py-6 sm:py-8 sm:px-6 md:p-4 md:pt-6 lg:p-4 lg:pt-10 xl:p-4 xl:pt-10">
                            <div class="relative z-10 flex flex-col items-center sm:flex-row sm:gap-12 sm:px-2 lg:gap-15 lg:px-3">
                              <div class="col-span-full w-full flex-col sm:w-6/12"><h3 class="styles_typography__xvvW1 styles_h900__a8TGo mb-2 flex flex-col font-bold sm:mb-[20px] md:mb-3 lg:mb-4 xl:mb-6"><span style={{ "background-image": "linear-gradient(90deg, #FF93FF 8.89%, #FFADC7 49.36%, #FFBE9F 86.58%)" }} class="styles_typography__xvvW1 styles_gradient-secondary__0iB4J">BillionAir</span><span>Ecosystem</span></h3>
                                <div class="styles_typography__xvvW1 styles_p600__pI7gO mb-5 flex flex-col gap-2 sm:mb-0"><p>BillionAir is a revolutionary entertainment platform connecting both true gamers and existing web3 users. Combined with blockchain tech, we provide a provably fair ecosystem bringing value and entertainment to a global audience.</p>
                                </div>
                              </div>
                              <div class="flex justify-end sm:w-6/12">
                                <div class="flex flex-col sm:max-w-[231px] md:max-w-[288px] lg:max-w-[403px] xl:max-w-[464px]">
                                  <div class="flex flex-col justify-center rounded-[24px] py-3 px-[24px] text-dark sm:p-3 lg:px-6 lg:py-4 xl:px-6 xl:py-4 styles_ecosystemFeatureBg__o6PS7 mb-2 md:mb-3 lg:mb-4"><h4 class="styles_typography__xvvW1 styles_h650__isr6D">$AIRB Token</h4><p class="styles_typography__xvvW1 styles_p450__b6Mbm">Platform-wide currency utilized for every transaction, including purchases, staking, and earning multipliers with built-in deflation.</p>
                                  </div>
                                  <div class="flex flex-col justify-center rounded-[24px] py-3 px-[24px] text-dark sm:p-3 lg:px-6 lg:py-4 xl:px-6 xl:py-4 styles_ecosystemFeatureBg__o6PS7 mb-0"><h4 class="styles_typography__xvvW1 styles_h650__isr6D">BillionAir NFT Ticket</h4><p class="styles_typography__xvvW1 styles_p450__b6Mbm">Bulletproof NFT, granting access to our full range of provably fair raffles whilst ensuring minimal fees.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="relative w-full overflow-hidden mt-10 hidden !h-auto rounded-2xl !bg-transparent sm:block md:mt-5" style={{ "padding-top": "56.25%" }}>
                              <video class="h-full w-full scale-[1.002] transform transition-opacity opacity-100 absolute top-0 left-0"
                                loop="" playsinline="" preload="auto" poster="/video/blockchain-poster.webp">
                                <source src="https://billionair.com/_next/static/videos/ecosystem-c7e34f0086c353f7539efa646502c415.mp4" type="video/mp4" />
                                <source src="https://billionair.com/_next/static/videos/blockchain-2a17f546fa40fb2c62cc7d299a356840.webm" type="video/webm" />
                              </video>
                            </div>
                            <img alt="Background Figure" class="absolute top-[-168px] right-[-429px] h-[819px] w-[760px] max-w-fit rotate-[-45deg] scale-125 sm:-top-[418px] sm:-right-[320px] sm:h-[948px] sm:w-[796px] sm:scale-110 md:-right-[480px] lg:-top-[710px] lg:-right-[858px] lg:h-[1456px] lg:w-[1360px] xl:-right-[780px] xl:-top-[680px] xl:h-[1400px] xl:w-[1520px]"
                              src="https://billionair.com/images/ido/bg-figure.svg" width="1380" height="1410" />
                          </div>
                        </div>
                        <div class="Background_background__Obe1R ">
                          <div class="Background_circleContainer__abx_l Background_circle_ecosystem-left__2YLIK">
                          </div>
                        </div>
                      </div>
                    </article>
                    <article class="gs-container relative mb-5 rounded-xl text-white sm:mb-8 md:mb-16 lg:mb-20 xl:mb-25 ">
                      <div class="grid grid-cols-8 gap-2 md:grid-cols-[repeat(21,_minmax(0,_1fr))] ">
                        <li class="flex h-full flex-col col-span-full md:col-span-9   " style={{ "opacity": "1", "transform": " none" }}>
                          <article class="relative flex h-full flex-col overflow-hidden rounded-[40px] bg-dark">
                            <div class="Background_container__RCLV5" style={{ "height": "100%" }}>
                              <div class="Background_content___GAg0">
                                <div class="relative z-10 px-3 py-4 sm:pl-5 sm:pr-[125px] md:p-4 lg:px-[50px] lg:py-6 xl:p-7"><h1 class="styles_typography__xvvW1 styles_h800__iKuRD v-h800 mb-12px lg:mb-2">Staking</h1><p class="v-p450 mb-3 text-white/70 sm:mb-2 md:v-p600-md md:mb-3 lg:v-p450-lg lg:mb-4 xl:v-p450-xl">The BillionAir ecosystem provides a variety of safe and secure staking opportunities, with rewards up to <span class="styles_typography__xvvW1 text-gradient-primary-start">240% APY</span>. Maximising the benefits of the available earnings can make your raffles, games and entertainment experience essentially free, and even profitable! </p>
                                </div>
                                <img alt="figure" class="pointer-events-none absolute max-w-fit -top-[406px] -right-[470px] sm:-bottom-[0px] sm:-right-[440px] md:bottom-auto md:-top-[410px] md:-right-[484px] lg:-top-[372px] lg:-right-[475px] xl:-top-[364px] xl:-right-[428px]"
                                  src="https://billionair.com/images/info/article-bg-figures/bg-figure-1.svg" />

                              </div>
                              <div class="Background_background__Obe1R ">
                                <div class="Background_circleContainer__abx_l Background_circle_article-card-left__6I7NJ">
                                </div>
                              </div>
                            </div></article>
                        </li>
                        <li class="flex h-full flex-col col-span-full md:col-span-12 " style={{ "opacity": "1", "transform": " none" }}>
                          <article class="relative flex h-full flex-col overflow-hidden rounded-[40px] bg-dark">
                            <div class="Background_container__RCLV5" style={{ "height": "100%" }}>
                              <div class="Background_content___GAg0">
                                <div class="relative z-10 px-3 py-4 sm:pl-5 sm:pr-[125px] md:p-4 lg:px-[50px] lg:py-6 xl:p-7"><h1 class="styles_typography__xvvW1 styles_h800__iKuRD v-h800 mb-12px lg:mb-2">Raffles</h1><p class="v-p450 mb-3 text-white/70 sm:mb-2 md:v-p600-md md:mb-3 lg:v-p450-lg lg:mb-4 xl:v-p450-xl">Dream cars, skydives, bucket list experiences and much, much more! You can <span class="styles_typography__xvvW1 text-gradient-primary-start">make your dreams come true </span> with our next-generation raffles to win and priceless time for you and your loved ones. Walk away with digital assets such as tokens or NFTs, physical goods including cars, watches, and electronics, and even once-in-a-lifetime trips and activities.</p>
                                </div>
                                <img alt="figure" class="pointer-events-none absolute max-w-fit -bottom-[300px] -right-[262px] sm:w-[343px] sm:h-[290px] sm:-right-[124px] sm:-bottom-[196px] md:-bottom-[185px] md:-right-[149px] lg:w-[629px] lg:h-[484px] lg:-right-[290px] lg:-bottom-[350px] lg:rotate-[-4deg] xl:h-[529px]"
                                  src="https://billionair.com/images/info/article-bg-figures/bg-figure-2.svg" />

                              </div>
                              <div class="Background_background__Obe1R ">
                                <div class="Background_circleContainer__abx_l Background_circle_article-card-left__6I7NJ">
                                </div>
                              </div>
                            </div></article>
                        </li>
                        <li class="flex h-full flex-col col-span-full md:col-span-9 " style={{ "opacity": "1", "transform": " none" }}>
                          <article class="relative flex h-full flex-col overflow-hidden rounded-[40px] bg-dark">
                            <div class="Background_container__RCLV5" style={{ "height": "100%" }}>
                              <div class="Background_content___GAg0">
                                <div class="relative z-10 px-3 py-4 sm:pl-5 sm:pr-[125px] md:p-4 lg:px-[50px] lg:py-6 xl:p-7"><h1 class="styles_typography__xvvW1 styles_h800__iKuRD v-h800 mb-12px lg:mb-2">Tier system</h1><p class="v-p450 mb-3 text-white/70 sm:mb-2 md:v-p600-md md:mb-3 lg:v-p450-lg lg:mb-4 xl:v-p450-xl">Everything counts! Play games, enter raffles, invite friends, or actively participate in the community to level up on our built-in tier system. Earn the opportunity to gain <span class="styles_typography__xvvW1 text-gradient-primary-start">higher APY</span> and greater odds of winning the main raffle prizes with invaluable ticket multipliers.</p>
                                </div>
                                <img alt="figure" class="pointer-events-none absolute max-w-fit w-[300px] h-[318px] -bottom-[206px] left-[-198px] rotate-[254deg] sm:h-[322px] md:-bottom-[206px] md:left-[-198px] lg:w-[350px] lg:h-[364px] lg:-bottom-[214px] lg:left-[-212px] lg:rotate-[248deg] xl:h-[372px]"
                                  src="https://billionair.com/images/info/article-bg-figures/bg-figure-3.svg" />

                              </div>
                              <div class="Background_background__Obe1R ">
                                <div class="Background_circleContainer__abx_l Background_circle_article-card-left__6I7NJ">
                                </div>
                              </div>
                            </div></article>
                        </li>
                        <li class="flex h-full flex-col col-span-full md:col-span-6 md:row-span-2" style={{ "opacity": "1", "transform": " none" }}>
                          <article class="relative flex h-full flex-col overflow-hidden rounded-[40px] bg-dark">
                            <div class="Background_container__RCLV5" style={{ "height": "100%" }}>
                              <div class="Background_content___GAg0">
                                <div class="relative z-10 px-3 py-4 sm:pl-5 sm:pr-[125px] md:p-4 lg:px-[50px] lg:py-6 xl:p-7"><h1 class="styles_typography__xvvW1 styles_h800__iKuRD v-h800 mb-12px lg:mb-2">Games</h1><p class="v-p450 mb-3 text-white/70 sm:mb-2 md:v-p600-md md:mb-3 lg:v-p450-lg lg:mb-4 xl:v-p450-xl">Play games with the community, challenge your friends or take a shot at someone across the globe! Our entertainment ecosystem offers a <span class="styles_typography__xvvW1 text-gradient-primary-start">great selection</span> of thrilling games to satisfy even the most demanding players, ranging from chance-based and arcade games to cutting-edge VR-based options. As we develop and expand, we aim to bridge chains and expand communities, creating and introducing games in collaboration with not-yet-gamified projects.</p>
                                </div>
                                <img alt="figure" class="pointer-events-none absolute max-w-fit w-[276px] h-[306px] -bottom-[182px] -right-[126px] rotate-[190deg] sm:w-[346px] sm:h-[318px] sm:-right-[146px] sm:rotate-[182deg] md:w-[310px] md:h-[310px] md:-bottom-[266px] md:-right-[126px] lg:w-[385px] lg:h-[383px] lg:-bottom-[338px]"
                                  src="https://billionair.com/images/info/article-bg-figures/bg-figure-4.svg" />

                              </div>
                              <div class="Background_background__Obe1R ">
                                <div class="Background_circleContainer__abx_l Background_circle_article-card-top__UmmXG">
                                </div>
                              </div>
                            </div></article>
                        </li>
                        <li class="flex h-full flex-col col-span-full md:col-span-6 md:row-span-2" style={{ "opacity": "1", "transform": " none" }}>
                          <article class="relative flex h-full flex-col overflow-hidden rounded-[40px] bg-dark">
                            <div class="Background_container__RCLV5" style={{ "height": "100%" }}>
                              <div class="Background_content___GAg0">
                                <div class="relative z-10 px-3 py-4 sm:pl-5 sm:pr-[125px] md:p-4 lg:px-[50px] lg:py-6 xl:p-7"><h1 class="styles_typography__xvvW1 styles_h800__iKuRD v-h800 mb-12px lg:mb-2">Buybacks</h1><p class="v-p450 mb-3 text-white/70 sm:mb-2 md:v-p600-md md:mb-3 lg:v-p450-lg lg:mb-4 xl:v-p450-xl">Long-term sustainability and value are key focus areas within our vision, and this is assisted through several value creation mechanisms. We achieve both sustainability and constant growth with a built-in <span class="styles_typography__xvvW1 text-gradient-primary-start">deflationary mechanism</span> powered by a systematic token-burning process. Additionally, the token buyback program controls the circulating supply of $AIRB tokens, supports staking and increases token value.</p>
                                </div>
                                <img alt="figure" class="pointer-events-none absolute max-w-fit w-[290px] h-[366px] bottom-[-242px] right-[-120px] rotate-[14deg] sm:w-[336px] sm:h-[406px] sm:bottom-[-242px] sm:right-[-120px] sm:rotate-[0deg] md:w-[320px] md:h-[310px] md:right-[-140px] lg:w-[385px] lg:h-[383px] lg:bottom-[-300px] lg:right-[-166px]"
                                  src="https://billionair.com/images/info/article-bg-figures/bg-figure-4.svg" />

                              </div>
                              <div class="Background_background__Obe1R ">
                                <div class="Background_circleContainer__abx_l Background_circle_article-card-top__UmmXG">
                                </div>
                              </div>
                            </div></article>
                        </li>
                        <li class="flex h-full flex-col col-span-full md:col-span-9 " style={{ "opacity": "1", "transform": " none" }}>
                          <article class="relative flex h-full flex-col overflow-hidden rounded-[40px] bg-dark">
                            <div class="Background_container__RCLV5" style={{ "height": "100%" }}>
                              <div class="Background_content___GAg0">
                                <div class="relative z-10 px-3 py-4 sm:pl-5 sm:pr-[125px] md:p-4 lg:px-[50px] lg:py-6 xl:p-7"><h1 class="styles_typography__xvvW1 styles_h800__iKuRD v-h800 mb-12px lg:mb-2">Transparency</h1><p class="v-p450 mb-3 text-white/70 sm:mb-2 md:v-p600-md md:mb-3 lg:v-p450-lg lg:mb-4 xl:v-p450-xl">Blockchain technology, and therefore BillionAir, is decentralised, immutable, and unalterable. This creates a level playing field, making every game and raffle <span class="styles_typography__xvvW1 styles_gradient-primary___XZ8G">provably fair</span> for everyone, without any edge over other players.</p>
                                </div>
                                <img alt="figure" class="pointer-events-none absolute max-w-fit w-[350px] h-[334px] -bottom-[240px] right-[auto] sm:w-[350px] sm:h-[334px] sm:-bottom-[240px] sm:right-[auto] md:h-[346px] lg:w-[350px] lg:h-[364px] xl:w-[400px] xl:h-[400px] xl:-bottom-[256px]"
                                  src="https://billionair.com/images/info/article-bg-figures/bg-figure-5.svg" />

                              </div>
                              <div class="Background_background__Obe1R ">
                                <div class="Background_circleContainer__abx_l Background_circle_article-card-left__6I7NJ">
                                </div>
                              </div>
                            </div></article>
                        </li>
                      </div>
                    </article>
                  </div>
                </section>
              </div>
              <div class="Background_background__Obe1R bg-dark isLoaded">
                <canvas class="absolute top-0 left-0 -z-10 h-full w-full isLoaded" data-transition-in="true" id="idostars" style={{
                  backgroundImage: `linear-gradient(90deg, var(--gradient-color-1) 8.89%, var(--gradient-color-2) 49.36%, var(--gradient-color-3) 86.58%)`,
                  /* Add other CSS properties here if needed */
                  '--gradient-color-1': '#b982ff',
                  '--gradient-color-2': '#ffd16b',
                  '--gradient-color-3': '#E87E83',
                  '--gradient-color-4': '#FF94FF',
                }} width="1366" height="600">

                </canvas>
                <div class="Background_backgroundImage__45z_q h-[100%] bg-cover" style={{
                  backgroundImage: `url("https://billionair.com/images/background_logo_ecosystem.webp")`,
                  backgroundPosition: 'top 0 right 20%',
                }}>
                </div>
              </div>
            </div>

            <div class="Background_container__RCLV5">
              <div class="Background_content___GAg0">
                <section class="relative w-[100%] pt-8 pb-25 sm:py-7 sm:pb-25 md:pt-11 md:pb-25 lg:pt-15 lg:pb-18 xl:pt-18 xl:pb-25">
                  <div class="mx-[20px] max-w-[1360px] py-[52px] md:mx-[auto] md:py-[150px]"><p class="styles_typography__xvvW1 styles_h800__iKuRD pb-[28px] text-center">BillionAir platform to be released after Pre-Sale</p>
                    <div class="gs-container bg-[url('https://billionair.com/images/info/device.webp')] bg-[length:100%_100%] p-2 md:mx-[20px] md:p-5"
                      style={{ "background-image": "url(https://billionair.com/images/info/device.webp)" }}>
                      <div class="relative w-full overflow-hidden rounded-2xl">
                        <video class="h-full w-full scale-[1.002] transform transition-opacity  cursor-pointer rounded-5 p-1" autoPlay
                          loop
                          playsInline
                          preload="auto">
                          <source src="https://billionair.com/_next/static/videos/billionair-5e4fc4301286b398fac69a6304bcb1af.mp4" type="video/mp4" />
                          <source src="https://billionair.com/_next/static/videos/billionair-5345ccd9e0321bb4deafd3ac61c93fa8.webm" type="video/webm" />
                        </video>
                        <button aria-label="play video" class="absolute top-0 right-0 left-0 bottom-0 m-auto h-full w-full transition-colors hover:text-white/80 focus:text-white/80 #F4F5F7" type="button">
                          <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style={{ "width": " 29px", " height": " 33px" }}>
                            <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#play"></use></svg></button>
                      </div>
                    </div>
                  </div>
                  <div class="relative z-50 flex justify-center">
                    <div class="styles_tokenCard__cVcO1 mx-[20px] p-[30px] md:px-[88px] md:py-[72px]">
                      <p class="styles_sale__aon4s flex w-[100%] items-center justify-between">
                        <h2 class="styles_typography__xvvW1 styles_h900__a8TGo mb-2 lg:mb-3">
                          $AIRB Tokenomics
                        </h2>
                      </p>
                      <div class="styles_roadmap__5LHFA">
                        <ul class="flex w-[100%] flex-col gap-[12px]">
                          <li class="flex items-center justify-end"><span class="styles_tit__d7cHI">Public Sale</span><span class="styles_per__SDr2Q ml-[10px] mr-[16px]">41%</span><span class="h-[10px] w-[10px]" style={{ "background": "rgb(82, 105, 239)", "border-radius": " 50%" }}></span>
                          </li>
                          <li class="flex items-center justify-end"><span class="styles_tit__d7cHI">Staking</span><span class="styles_per__SDr2Q ml-[10px] mr-[16px]">12%</span><span class="h-[10px] w-[10px]" style={{ "background": "rgb(78, 154, 236)", "border-radius": " 50%" }}></span>
                          </li>
                          <li class="flex items-center justify-end"><span class="styles_tit__d7cHI">Community</span><span class="styles_per__SDr2Q ml-[10px] mr-[16px]">10%</span><span class="h-[10px] w-[10px]" style={{ "background": "rgb(255, 139, 240)", "border-radius": " 50%" }}></span>
                          </li>
                          <li class="flex items-center justify-end"><span class="styles_tit__d7cHI">Marketing</span><span class="styles_per__SDr2Q ml-[10px] mr-[16px]">8%</span><span class="h-[10px] w-[10px]" style={{ "background": "rgb(255, 149, 125)", "border-radius": " 50%" }}></span>
                          </li>
                          <li class="flex items-center justify-end"><span class="styles_tit__d7cHI">Operations &amp; Dev</span><span class="styles_per__SDr2Q ml-[10px] mr-[16px]">8%</span><span class="h-[10px] w-[10px]" style={{ "background": "rgb(99, 143, 255)", "border-radius": " 50%" }}></span>
                          </li>
                        </ul>
                        <img alt="Chart" class="h-auto w-[33%]"
                          src="https://billionair.com/images/partners/chart.svg" />
                        <ul class="flex w-[100%] flex-col gap-[12px]">
                          <li class="flex items-center"><span class="h-[10px] w-[10px]" style={{ "background": "rgb(234, 140, 140)", "border-radius": " 50%" }}></span><span class="styles_per__SDr2Q ml-[16px] mr-[10px]">5%</span><span class="styles_tit__d7cHI">Treasury</span>
                          </li>
                          <li class="flex items-center"><span class="h-[10px] w-[10px]" style={{ "background": "rgb(172, 126, 255)", "border-radius": " 50%" }}></span><span class="styles_per__SDr2Q ml-[16px] mr-[10px]">1%</span><span class="styles_tit__d7cHI">Airdrop</span>
                          </li>
                          <li class="flex items-center"><span class="h-[10px] w-[10px]" style={{ "background": "rgb(255, 203, 111)", "border-radius": " 50%" }}></span><span class="styles_per__SDr2Q ml-[16px] mr-[10px]">5%</span><span class="styles_tit__d7cHI">Exchange &amp; Liquidity</span>
                          </li>
                          <li class="flex items-center"><span class="h-[10px] w-[10px]" style={{ "background": "rgb(255, 122, 122)", "border-radius": " 50%" }}></span><span class="styles_per__SDr2Q ml-[16px] mr-[10px]">5%</span><span class="styles_tit__d7cHI">Team</span>
                          </li>
                          <li class="flex items-center"><span class="h-[10px] w-[10px]" style={{ "background": "rgb(100, 195, 194)", "border-radius": " 50%" }}></span><span class="styles_per__SDr2Q ml-[16px] mr-[10px]">5%</span><span class="styles_tit__d7cHI">Advisors</span>
                          </li>
                        </ul>
                      </div>



                    </div>
                  </div>
                  <RoadmapSection />


                </section>
              </div>
              <div class="Background_background__Obe1R bg-dark">
                <div class="Background_circleContainer__abx_l Background_circle_roadmap-left__kaqP7">

                </div>
                <div class="Background_circleContainer__abx_l Background_circle_roadmap-right__q96el">
                </div>
              </div>
            </div>
            <div class="Background_container__RCLV5">
              <div class="Background_content___GAg0">
                <section class="pb-9  pt-6 sm:pb-13 md:pt-11 lg:pt-15 lg:pb-20 xl:pt-25 xl:pb-19">
                  <section class="col-span-full mb-9 sm:mb-6 md:mb-12 lg:mb-15">
                    <div class="gs container">
                      <article class="gs-container mt-[-240px] overflow-hidden rounded-[40px] bg-dark sm:mt-[-220px] md:mt-[-240px] lg:mt-[-300px] xl:mt-[-400px] " style={{ "box-shadow": "rgba(255, 255, 255, 0.2) 3px 0px 0px inset, rgba(255, 255, 255, 0.2) -3px 0px 0px inset, rgba(255, 255, 255, 0.2) 0px 3px 0px inset", "box-sizing": " border-box", " opacity": "1" }}>
                        <div class="Background_container__RCLV5">
                          <div class="Background_content___GAg0">
                            <div class="py-5 px-3 sm:flex sm:items-center sm:gap-x-13 sm:px-6 sm:pb-7 sm:pt-[44px] md:gap-x-[100px] md:px-7 md:py-5 lg:gap-x-20 lg:px-[122px] lg:py-8 xl:gap-x-25 xl:py-[72px]" id="whitepaper">
                              <div class="w-full flex-shrink-0"><h2 class="v-h650 mb-[4px] block font-bold -tracking-[0.03em] sm:v-h800 sm:mb-12px md:v-h800-md md:mb-2 lg:v-h800-lg lg:mb-[20px] xl:v-h800-xl xl:mb-3">Deepen the knowledge</h2>
                                <div class="grid gap-[22px]">
                                  <div><p class="v-p600-md block opacity-90 sm:v-p450 md:v-p600-md lg:v-p450-lg xl:v-p450-xl ">See for yourself that BillionAir is People-centered and Trustworthy. Understand how our system works. Transparent and Safe. </p>
                                  </div>
                                  <div class="flex w-full flex-col flex-wrap items-center justify-between gap-2 sm:flex-row md:items-end lg:gap-3">
                                    <div class="flex w-[100%] justify-center sm:w-[31%] ">
                                      <a class="styles_button__AXNxo styles_variant-cta__Yg_fZ styles_size-200__vitZh !v-h550 w-full transition-opacity hover:opacity-90 focus:opacity-90 active:opacity-80" href="https://billionair.docsend.com/view/s/66eqhubrbqgnuwqj" rel="nofollow noopener noreferrer" target="_blank" style={{ "background": "linear-gradient(90deg, #54BDCB 17.63%, #3484FD 85.65%)" }}>OnePager
                                      </a>
                                    </div>
                                    <div class="flex w-[100%] justify-center sm:w-[31%] ">
                                      <a class="styles_button__AXNxo styles_variant-cta__Yg_fZ styles_size-200__vitZh !v-h550 w-full transition-opacity hover:opacity-90 focus:opacity-90 active:opacity-80" href="https://billionair.docsend.com/view/s/66eqhubrbqgnuwqj" rel="nofollow noopener noreferrer" target="_blank" style={{ "background": "linear-gradient(90deg, #3458FD 10.45%, #AB83FF 88.14%)" }}>Tokenomics
                                      </a>
                                    </div>
                                    <div class="flex w-[100%] justify-center sm:w-[31%] ">
                                      <a class="styles_button__AXNxo styles_variant-cta__Yg_fZ styles_size-200__vitZh !v-h550 w-full transition-opacity hover:opacity-90 focus:opacity-90 active:opacity-80" href="https://billionair.docsend.com/view/s/66eqhubrbqgnuwqj" rel="nofollow noopener noreferrer" target="_blank" style={{ "background": "linear-gradient(90deg, #FF93FF 8.89%, #FFADC7 49.36%, #FFBE9F 86.58%)" }}>WhitePaper
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="relative flex h-[93px] cursor-pointer items-center justify-center gap-[12px] overflow-hidden rounded-b-xl bg-blue px-3 sm:h-[64px] sm:gap-[20px] md:h-8 lg:h-11 lg:gap-x-6 xl:h-13 styles_bgImg__dLuiz" role="presentation" style={{ "box-shadow": "inset 3px 0 0 rgba(255, 255, 255, 0.2), inset -3px 0 0 rgba(255, 255, 255, 0.2), inset 0 0 0 rgba(255, 255, 255, 0.2), inset 0 -3px 0 rgba(255, 255, 255, 0.2)", "box-sizing": "border-box", "border-radius": "0 0 40px 40px" }}><p class="styles_content__B92J2">Audit and KYC by &gt;</p>
                              <img alt="Background Figure" class="pointer-events-none flex max-h-[55px] w-[40%] max-w-[229px]"
                                src="https://billionair.com/images/partners/solid-proof.png" />
                            </div>
                          </div>
                          <div class="Background_background__Obe1R " style={{ "border-radius": "40px" }}>
                            <div class="Background_circleContainer__abx_l Background_circle_article-card-left__6I7NJ">
                            </div>
                          </div>
                        </div></article>
                    </div>
                  </section>
                  <div class="relative" id="team">
                  </div>
                  <TeamSection />
                  <section class="overflow-hidden pt-12 md:pt-13 lg:pt-20 xl:pt-[224px]">
                    <div class="container"><h2 class="styles_typography__xvvW1 styles_h800__iKuRD mb-4 text-center sm:mb-5 xl:mb-12">Backers and Partners</h2>
                    </div>
                    <ImageSlider images={images3} slidesToShow={slidesToShow} autoplaySpeed={autoplaySpeed} />
                    <div>
                    </div>
                  </section>
                </section>
              </div>
              <div class="Background_background__Obe1R bg-dark isLoaded">
                <canvas class="absolute top-0 left-0 -z-10 h-full w-full isLoaded" data-transition-in="true" id="our" style={{
                  backgroundImage: `linear-gradient(90deg, var(--gradient-color-1) 8.89%, var(--gradient-color-2) 49.36%, var(--gradient-color-3) 86.58%)`,
                  /* Add other CSS properties here if needed */
                  '--gradient-color-1': '#b982ff',
                  '--gradient-color-2': '#ffd16b',
                  '--gradient-color-3': '#E87E83',
                  '--gradient-color-4': '#FF94FF',
                }} width="1366" height="600">
                </canvas>
                <div class="Background_backgroundImage__45z_q h-[100%] bg-cover" style={{ "background-image": "url(&quot;https://billionair.com/images/background_logo_our.webp&quot;)", "background-position": "center" }}>
                </div>
              </div>
            </div>
            <div class="Background_container__RCLV5">
              <div class="Background_content___GAg0">
                <section class="gs container pt-8 sm:pt-6 md:pt-12 lg:pt-12 xl:pt-12 pb-5 sm:pb-10 md:pb-12 lg:pb-15 xl:pb-20" id="invest">
                  <article class="gs-container relative flex flex-col overflow-hidden rounded-[40px] bg-[#FEC5A3] px-[20px] pt-4 pb-3 text-dark sm:flex-row sm:gap-x-12px sm:px-[60px] sm:py-4 md:gap-x-3 md:px-12 md:py-14 lg:px-14 lg:py-9 xl:gap-[99px] xl:py-14 xl:px-18">
                    <div class="relative z-10 flex w-full flex-shrink-0 flex-col justify-center">
                      <h2 class="v-h650 mb-[20px] self-center -tracking-[0.03em] sm:v-h800 md:v-h800-md md:mb-3 md:-tracking-[0.04em] lg:v-h850-lg lg:mb-4 xl:v-h850-xl xl:mb-5">$500k and Tesla giveaway!</h2><p class="styles_typography__xvvW1 styles_p600__pI7gO mb-[20px] text-center md:mb-3 lg:mb-4 ">The more $AIRB you purchase and the more you participate in Gleam, the more tickets you earn, and the higher your chances of walking away with these extraordinary prizes!</p>
                      <a class="styles_button__AXNxo styles_variant-primary__ZsQ0Z styles_size-200__vitZh !h-[44px] rounded-xl !px-[20px] !font-normal sm:!h-5 md:!h-6 md:!rounded-2xl lg:!h-8" href="#subscribe" style={{ "max-width": "242px", " align-self": " center" }}>
                        <a class="text-white" href="/win/">Join the giveaway</a>
                      </a>
                    </div>
                    <img alt="Background Figure" class="pointer-events-none absolute -right-[625px] -bottom-[430px] h-[970px] w-[909px] max-w-[none] scale-110 opacity-90 sm:-right-[651px] sm:-top-[183px] sm:h-[1008px] sm:w-[972px] sm:scale-100 md:-top-[198px] md:-right-[763px] md:h-[1196px] md:w-[1102px] lg:-top-[376px] lg:-right-[1304px] lg:h-[1781px] lg:w-[1649px] xl:-right-[1261px] xl:-top-[352px] xl:h-[1982px] xl:w-[1903px]"
                      src="https://billionair.com/images/affiliate-program/bg-figure.svg" /></article>
                </section>
              </div>
              <div class="Background_background__Obe1R bg-dark">
              </div>
            </div>
            <div class="Background_container__RCLV5">
              <div class="Background_content___GAg0">
                <section class="overflow-hidden pb-12 sm:pb-6 md:pb-12 lg:pb-20 xl:pb-[222px]">
                  <div class="gs container !gap-y-0">
                    <div class="col-span-full mb-5 sm:col-end-5 sm:mb-0 md:col-start-2 md:col-end-6 lg:col-end-7 xl:col-start-3">
                      <h2 class="styles_typography__xvvW1 styles_h900__a8TGo mb-2 sm:mb-3 lg:mb-4 xl:mb-[36px]">FAQs</h2>
                      <p class="text-[11px] opacity-90 sm:v-p600 md:v-p600-md lg:v-p450-lg xl:v-p450-xl">You may have questions, we have the answers.</p>
                    </div>
                    <div class="col-span-full flex flex-col gap-y-2 sm:col-start-5 md:col-start-7 md:col-end-12 lg:col-start-9 lg:col-end-[16] xl:col-end-[15]">
                      <div style={{ "opacity": "1", "transform": " none" }}>
                        <div className={isActive1 ? 'styles_faqItem__7zCFg aaa' : 'styles_faqItem__7zCFg'}
                          data-col="col1" id='col1'
                          role="tab" tabindex="0">
                          <div class="Background_container__RCLV5 h-[100%]">
                            <div class="Background_content___GAg0 h-[100%]">
                              <div class="flex items-start justify-between gap-x-3 h-[100%] px-3 py-[28px] sm:px-4 lg:py-[16px] lg:px-[40px]">
                                <div>
                                  <a data-bs-toggle="collapse" onClick={() => handleLinkClick(1)}
                                    class="text-white col" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <div class="w-full">
                                      &nbsp;<span class="styles_typography__xvvW1 styles_h600__4bIl8 flex w-full items-center justify-between text-left will-change-contents">
                                        <span>What is BillionAir?</span></span>&nbsp;
                                    </div>
                                  </a>
                                  <div class="will-change-transform collapse" id="collapseExample" style={{ "opacity": "0.9", "height": "auto" }}>
                                    <div class="styles_typography__xvvW1 styles_p450__b6Mbm pt-12px opacity-90 overflow-hidden">
                                      <p class="mb-2 last:mb-0">
                                        BillionAir is a raffles and games ecosystem offering life-changing prizes, exciting and engaging entertainment, and opportunities within an all-encompassing, borderless, and provably fair ecosystem. On a larger scale, it’s so much more than that, positioned as a bridge between web3 natives and the traditional and web2 markets and a contra bet to the current web3 gaming projects out there, helping projects to fundraise and engage their community.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <img alt="show answer" class="self-center transition-transform duration-300 ease-in-out rotate-90"
                                  src="https://billionair.com/_next/static/media/arrow-gradient1-3b749b5b6aa3b67e..svg" title="show answer" />
                              </div>
                            </div>
                            <div class="Background_background__Obe1R ">
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">
                                fdsafsad
                              </div>
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <script src="bootstrap.min.js" ></script>

                      <div style={{ "opacity": "1", "transform": " none" }}>
                        <div class="styles_faqItem__7zCFg" role="tab" tabindex="0">
                          <div class="Background_container__RCLV5 h-[100%]">
                            <div class="Background_content___GAg0 h-[100%]">
                              <div class="flex items-start justify-between gap-x-3 h-[100%] px-3 py-[28px] sm:px-4 lg:py-[16px] lg:px-[40px]">
                                <div>
                                  <a data-bs-toggle="collapse" onClick={() => handleLinkClick(2)}
                                    class="text-white col" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                                    <div class="w-full">&nbsp;<span class="styles_typography__xvvW1 styles_h600__4bIl8 flex w-full items-center justify-between text-left will-change-contents"><span>What is $AIRB, and what is its value?</span></span>&nbsp;
                                    </div>
                                  </a>
                                  <div class="will-change-transform collapse" id="collapseExample2" style={{ "opacity": "0.9", "height": "auto" }}>
                                    <div class="styles_typography__xvvW1 styles_p450__b6Mbm pt-12px opacity-90 overflow-hidden">
                                      <p class="mb-2 last:mb-0">
                                        The BillionAir Token $AIRB is the native token of our ecosystem, giving you the real edge to have luck on your side. $AIRB, our platform-wide currency, is the ecosystem powering token behind BillionAir, working in tandem with our NFT raffle tickets. The token itself has value built-in across the platform, with use cases including staking for lucrative rewards, climbing the tier system earning you multipliers, favored game entries, built-in deflation, raffle ticket purchases, and many more perks for holders. As the BillionAir platform and ecosystem grow, the utility and price of the token will grow with it!
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <img alt="show answer" class="self-center transition-transform duration-300 ease-in-out rotate-90"
                                  src="https://billionair.com/_next/static/media/arrow-gradient1-3b749b5b6aa3b67e..svg" title="show answer" />
                              </div>
                            </div>
                            <div class="Background_background__Obe1R ">
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                              </div>
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ "opacity": "1", "transform": " none" }}>
                        <div class="styles_faqItem__7zCFg" role="tab" tabindex="0">
                          <div class="Background_container__RCLV5 h-[100%]">
                            <div class="Background_content___GAg0 h-[100%]">
                              <div class="flex items-start justify-between gap-x-3 h-[100%] px-3 py-[28px] sm:px-4 lg:py-[16px] lg:px-[40px]">
                                <div>
                                  <a data-bs-toggle="collapse" onClick={() => handleLinkClick(3)}
                                    class="text-white col" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                                    <div class="w-full">&nbsp;<span class="styles_typography__xvvW1 styles_h600__4bIl8 flex w-full items-center justify-between text-left will-change-contents"><span>What is the difference between BillionAir and other platforms?</span></span>&nbsp;
                                    </div>
                                  </a>
                                  <div class="will-change-transform collapse" id="collapseExample3" style={{ "opacity": "0.9", "height": "auto" }}>
                                    <div class="styles_typography__xvvW1 styles_p450__b6Mbm pt-12px opacity-90 overflow-hidden">
                                      <p class="mb-2 last:mb-0">
                                        Essentially, BillionAir is a contra bet to the current web3 gaming projects out there, providing innovative ways for projects and communities to fundraise while engaging users from many different communities. Our raffles offer everything from luxury prizes and experiences, through to cash, digital assets and NFTs, in addition to a continuously growing selection of games, the BillionAir ecosystem offers opportunity and entertainment all-round with a minimal upfront investment. Built on top of blockchain technology, and therefore offering the underlying benefits available including tiered rewards, a deflationary token model and real yield staking, the life-changing opportunities are even greater.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <img alt="show answer" class="self-center transition-transform duration-300 ease-in-out rotate-90"
                                  src="https://billionair.com/_next/static/media/arrow-gradient1-3b749b5b6aa3b67e..svg" title="show answer" />
                              </div>
                            </div>
                            <div class="Background_background__Obe1R ">
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                              </div>
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ "opacity": "1", "transform": " none" }}>
                        <div class="styles_faqItem__7zCFg" role="tab" tabindex="0">
                          <div class="Background_container__RCLV5 h-[100%]">
                            <div class="Background_content___GAg0 h-[100%]">
                              <div class="flex items-start justify-between gap-x-3 h-[100%] px-3 py-[28px] sm:px-4 lg:py-[16px] lg:px-[40px]">
                                <div>
                                  <a data-bs-toggle="collapse" onClick={() => handleLinkClick(4)}
                                    class="text-white col" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">
                                    <div class="w-full">&nbsp;<span class="styles_typography__xvvW1 styles_h600__4bIl8 flex w-full items-center justify-between text-left will-change-contents"><span>What makes BillionAir sustainable in the long term?</span></span>&nbsp;
                                    </div>
                                  </a>
                                  <div class="will-change-transform collapse" id="collapseExample4" style={{ "opacity": "0.9", "height": "auto" }}>
                                    <div class="styles_typography__xvvW1 styles_p450__b6Mbm pt-12px opacity-90 overflow-hidden">
                                      <p class="mb-2 last:mb-0">
                                        There are countless sustainability features integrated into our ecosystem, designed to safeguard our future for years to come. From token buyback and burn mechanisms to enticing staking opportunities that incentivize token locking, our platform has it all. And with a finite token supply, the price will only grow over time. And that's just the beginning - stay tuned for even more exciting developments to come!
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <img alt="show answer" class="self-center transition-transform duration-300 ease-in-out rotate-90"
                                  src="https://billionair.com/_next/static/media/arrow-gradient1-3b749b5b6aa3b67e..svg" title="show answer" />
                              </div>
                            </div>
                            <div class="Background_background__Obe1R ">
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                              </div>
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ "opacity": "1", "transform": " none" }}>
                        <div class="styles_faqItem__7zCFg" role="tab" tabindex="0">
                          <div class="Background_container__RCLV5 h-[100%]">
                            <div class="Background_content___GAg0 h-[100%]">
                              <div class="flex items-start justify-between gap-x-3 h-[100%] px-3 py-[28px] sm:px-4 lg:py-[16px] lg:px-[40px]">
                                <div>
                                  <a data-bs-toggle="collapse" onClick={() => handleLinkClick(5)}
                                    class="text-white col" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5">
                                    <div class="w-full">&nbsp;<span class="styles_typography__xvvW1 styles_h600__4bIl8 flex w-full items-center justify-between text-left will-change-contents"><span>How can I participate in the token Pre-Sale?</span></span>&nbsp;
                                    </div>
                                  </a>
                                  <div class="will-change-transform collapse" id="collapseExample5" style={{ "opacity": "0.9", "height": "auto" }}>
                                    <div class="styles_typography__xvvW1 styles_p450__b6Mbm pt-12px opacity-90 overflow-hidden">
                                      <p class="mb-2 last:mb-0">
                                        To participate in our Pre-Sale, simply buy $AIRB through the user-friendly banners and modals available on any of our pages. Don’t hesitate too long! The sooner you will join, the better prize you get, making you great returns.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <img alt="show answer" class="self-center transition-transform duration-300 ease-in-out rotate-90"
                                  src="https://billionair.com/_next/static/media/arrow-gradient1-3b749b5b6aa3b67e..svg" title="show answer" />
                              </div>
                            </div>
                            <div class="Background_background__Obe1R ">
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                              </div>
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ "opacity": "1", "transform": " none" }}>
                        <div class="styles_faqItem__7zCFg" role="tab" tabindex="0">
                          <div class="Background_container__RCLV5 h-[100%]">
                            <div class="Background_content___GAg0 h-[100%]">
                              <div class="flex items-start justify-between gap-x-3 h-[100%] px-3 py-[28px] sm:px-4 lg:py-[16px] lg:px-[40px]">
                                <div>
                                  <a data-bs-toggle="collapse" onClick={() => handleLinkClick(6)}
                                    class="text-white col" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample6">
                                    <div class="w-full">&nbsp;<span class="styles_typography__xvvW1 styles_h600__4bIl8 flex w-full items-center justify-between text-left will-change-contents"><span>Which exchanges will $AIRB be listed on?</span></span>&nbsp;
                                    </div>
                                  </a>
                                  <div class="will-change-transform collapse" id="collapseExample6" style={{ "opacity": "0.9", "height": "auto" }}>
                                    <div class="styles_typography__xvvW1 styles_p450__b6Mbm pt-12px opacity-90 overflow-hidden">
                                      <p class="mb-2 last:mb-0">
                                        Shortly after our public sale, the BillionAir Token will be listed on 3+ major exchanges, starting with Bitmart, with additional exchange listings to be announced in the coming weeks. Follow us on Twitter to be among the first to know about our exchange listings.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <img alt="show answer" class="self-center transition-transform duration-300 ease-in-out rotate-90"
                                  src="https://billionair.com/_next/static/media/arrow-gradient1-3b749b5b6aa3b67e..svg" title="show answer" />
                              </div>
                            </div>
                            <div class="Background_background__Obe1R ">
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                              </div>
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ "opacity": "1", "transform": " none" }}>
                        <div class="styles_faqItem__7zCFg" role="tab" tabindex="0">
                          <div class="Background_container__RCLV5 h-[100%]">
                            <div class="Background_content___GAg0 h-[100%]">
                              <div class="flex items-start justify-between gap-x-3 h-[100%] px-3 py-[28px] sm:px-4 lg:py-[16px] lg:px-[40px]">
                                <div>
                                  <a data-bs-toggle="collapse" onClick={() => handleLinkClick(7)}
                                    class="text-white col" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample7">
                                    <div class="w-full">&nbsp;<span class="styles_typography__xvvW1 styles_h600__4bIl8 flex w-full items-center justify-between text-left will-change-contents"><span>What network does BillionAir run on?</span></span>&nbsp;
                                    </div>
                                  </a>
                                  <div class="will-change-transform collapse" id="collapseExample7" style={{ "opacity": "0.9", "height": "auto" }}>
                                    <div class="styles_typography__xvvW1 styles_p450__b6Mbm pt-12px opacity-90 overflow-hidden">
                                      <p class="mb-2 last:mb-0">
                                        BillionAir is launching on BNB-Chain (formerly known as Binance Smart Chain) network.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <img alt="show answer" class="self-center transition-transform duration-300 ease-in-out rotate-90"
                                  src="https://billionair.com/_next/static/media/arrow-gradient1-3b749b5b6aa3b67e..svg" title="show answer" />
                              </div>
                            </div>
                            <div class="Background_background__Obe1R ">
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                              </div>
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ "opacity": "1", "transform": " none" }}>
                        <div class="styles_faqItem__7zCFg" role="tab" tabindex="0">
                          <div class="Background_container__RCLV5 h-[100%]">
                            <div class="Background_content___GAg0 h-[100%]">
                              <div class="flex items-start justify-between gap-x-3 h-[100%] px-3 py-[28px] sm:px-4 lg:py-[16px] lg:px-[40px]">
                                <div>
                                  <a data-bs-toggle="collapse" onClick={() => handleLinkClick(8)}
                                    class="text-white col" href="#collapseExample8" role="button" aria-expanded="false" aria-controls="collapseExample8">
                                    <div class="w-full">&nbsp;<span class="styles_typography__xvvW1 styles_h600__4bIl8 flex w-full items-center justify-between text-left will-change-contents"><span>When will it launch?</span></span>&nbsp;
                                    </div>
                                  </a>
                                  <div class="will-change-transform collapse" id="collapseExample8" style={{ "opacity": "0.9", "height": "auto" }}>
                                    <div class="styles_typography__xvvW1 styles_p450__b6Mbm pt-12px opacity-90 overflow-hidden">
                                      <p class="mb-2 last:mb-0">
                                        Our platform will be launched in phases, and we are excited that the $AIRB pre-sale is currently underway. This is an excellent opportunity for you to get in on the ground floor and secure your tokens before they are listed on major exchanges, such as Bitmart. After the pre-sale ends, the tokens will become available for everyone, and you will have the chance to claim yours, stake them, and earn rewards before the full platform launches in Q3 of 2023. Don't miss out on this exciting opportunity to be a part of our growing community!
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <img alt="show answer" class="self-center transition-transform duration-300 ease-in-out rotate-90"
                                  src="https://billionair.com/_next/static/media/arrow-gradient1-3b749b5b6aa3b67e..svg" title="show answer" />
                              </div>
                            </div>
                            <div class="Background_background__Obe1R ">
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                              </div>
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ "opacity": "1", "transform": " none" }}>
                        <div class="styles_faqItem__7zCFg" role="tab" tabindex="0">
                          <div class="Background_container__RCLV5 h-[100%]">
                            <div class="Background_content___GAg0 h-[100%]">
                              <div class="flex items-start justify-between gap-x-3 h-[100%] px-3 py-[28px] sm:px-4 lg:py-[16px] lg:px-[40px]">
                                <div>
                                  <a data-bs-toggle="collapse" onClick={() => handleLinkClick(9)}
                                    class="text-white col" href="#collapseExample9" role="button" aria-expanded="false" aria-controls="collapseExample9">
                                    <div class="w-full">&nbsp;<span class="styles_typography__xvvW1 styles_h600__4bIl8 flex w-full items-center justify-between text-left will-change-contents"><span>What are the vesting schedules?</span></span>&nbsp;
                                    </div>
                                  </a>
                                  <div class="will-change-transform collapse" id="collapseExample9" style={{ "opacity": "0.9", "height": "auto" }}>
                                    <div class="styles_typography__xvvW1 styles_p450__b6Mbm pt-12px opacity-90 overflow-hidden">
                                      <p class="mb-2 last:mb-0">
                                        The vesting schedule indicates when tokens will be issued. The pre-sale vesting schedule is set so that right after the pre-sale you will receive 20% of the tokens and they will continue to vest linearly for 4 months. It means that once we’ve reached month 4, ALL PRE-SALE tokens will be distributed.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <img alt="show answer" class="self-center transition-transform duration-300 ease-in-out rotate-90"
                                  src="https://billionair.com/_next/static/media/arrow-gradient1-3b749b5b6aa3b67e..svg" title="show answer" />
                              </div>
                            </div>
                            <div class="Background_background__Obe1R ">
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                              </div>
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ "opacity": "1", "transform": " none" }}>
                        <div class="styles_faqItem__7zCFg" role="tab" tabindex="0">
                          <div class="Background_container__RCLV5 h-[100%]">
                            <div class="Background_content___GAg0 h-[100%]">
                              <div class="flex items-start justify-between gap-x-3 h-[100%] px-3 py-[28px] sm:px-4 lg:py-[16px] lg:px-[40px]">
                                <div>
                                  <a data-bs-toggle="collapse" onClick={() => handleLinkClick(10)}
                                    class="text-white col" href="#collapseExample10" role="button" aria-expanded="false" aria-controls="collapseExample10">
                                    <div class="w-full">&nbsp;<span class="styles_typography__xvvW1 styles_h600__4bIl8 flex w-full items-center justify-between text-left will-change-contents"><span>How will tokens be distributed?</span></span>&nbsp;
                                    </div>
                                  </a>
                                  <div class="will-change-transform collapse" id="collapseExample10" style={{ "opacity": "0.9", "height": "auto" }}>
                                    <div class="styles_typography__xvvW1 styles_p450__b6Mbm pt-12px opacity-90 overflow-hidden">
                                      <p class="mb-2 last:mb-0">
                                        Once the pre-sale ends you will be able to connect your wallet and claim your tokens on our website www.billionair.com, at this time you can find more info in our section “How to claim”.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <img alt="show answer" class="self-center transition-transform duration-300 ease-in-out rotate-90"
                                  src="https://billionair.com/_next/static/media/arrow-gradient1-3b749b5b6aa3b67e..svg" title="show answer" />
                              </div>
                            </div>
                            <div class="Background_background__Obe1R ">
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                              </div>
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ "opacity": "1", "transform": " none" }}>
                        <div class="styles_faqItem__7zCFg" role="tab" tabindex="0">
                          <div class="Background_container__RCLV5 h-[100%]">
                            <div class="Background_content___GAg0 h-[100%]">
                              <div class="flex items-start justify-between gap-x-3 h-[100%] px-3 py-[28px] sm:px-4 lg:py-[16px] lg:px-[40px]">
                                <div>
                                  <a data-bs-toggle="collapse" onClick={() => handleLinkClick(11)}
                                    class="text-white col" href="#collapseExample11" role="button" aria-expanded="false" aria-controls="collapseExample11">
                                    <div class="w-full">&nbsp;<span class="styles_typography__xvvW1 styles_h600__4bIl8 flex w-full items-center justify-between text-left will-change-contents"><span>What is our smart contract address?</span></span>&nbsp;
                                    </div>
                                  </a>
                                  <div class="will-change-transform collapse" id="collapseExample11" style={{ "opacity": "0.9", "height": "auto" }}>
                                    <div class="styles_typography__xvvW1 styles_p450__b6Mbm pt-12px opacity-90 overflow-hidden">
                                      <p class="mb-2 last:mb-0">
                                        Contract address: 0xb6b3b930af6fa095d71876d268a89def5f3e9894
                                      </p>
                                      <p>
                                        You can find it <a href="https://bscscan.com/address/0xb6b3b930af6fa095d71876d268a89def5f3e9894"> here</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <img alt="show answer" class="self-center transition-transform duration-300 ease-in-out rotate-90"
                                  src="https://billionair.com/_next/static/media/arrow-gradient1-3b749b5b6aa3b67e..svg" title="show answer" />
                              </div>
                            </div>
                            <div class="Background_background__Obe1R ">
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                              </div>
                              <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div class="gs container !gap-y-0 py-8 text-center">
                    <div class="col-span-full mb-4 flex justify-center md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-[14] lg:mb-5 lg:-ml-[28px] lg:-mr-[28px] xl:col-start-5 xl:col-end-13 xl:-mx-3 xl:mb-7"><h2 class="v-h900 max-w-[323px] -tracking-[0.04em] sm:max-w-full md:v-h900-md md:mb-3 lg:v-h900-lg xl:v-h850-xl">Don’t miss out, stay updated</h2>
                    </div>
                    <div class="col-start-2 col-end-6 mb-2 sm:col-start-3 sm:col-end-7 sm:-ml-[14px] sm:-mr-[14px] md:col-start-4 md:col-end-10 md:mb-12px lg:col-start-5 lg:col-end-13 lg:ml-4 lg:mr-4 lg:mb-3 xl:col-start-6 xl:col-end-12 xl:mb-5"><form class="flex w-full flex-col gap-12px sm:flex-row sm:gap-1 md:gap-[14px] lg:gap-[18px]" noValidate="">
                      <div class="relative w-full sm:w-[66%]">
                        <input class="styles_input__o_7G_ styles_bgVariant-white__GxIfl styles_phVariant-center__EDgNP" name="email"
                          placeholder="Enter your email" type="email" value="" />
                        <span class="hidden pl-3 text-left text-[12px] leading-[1.6] text-[#FF5252]"></span>
                      </div>
                      <button class="styles_button__AXNxo styles_variant-warning__lppg_ styles_size-150__ujMWg w-full !rounded-[10px] sm:h-[unset] sm:w-[34%] md:!rounded-[14px]" type="submit">Subscribe</button></form>
                    </div>
                    <div class="col-span-full flex justify-center"><p class="styles_typography__xvvW1 styles_p450__b6Mbm max-w-[310px] opacity-90 sm:max-w-[342px] lg:max-w-[489px] xl:max-w-[500px]">Get the latest information about the public Pre-sale, progress and community updates!</p>
                    </div>
                  </div>
                </section>
                <footer>
                  <div class="relative z-10  pt-9 pb-3 sm:mb-13 sm:pt-8 sm:pb-5 md:pb-4 lg:mb-[144px] lg:pt-10 lg:pb-5 xl:pt-20 xl:pb-6">
                    <div class="container">
                      <div class="mb-[32px] flex flex-wrap justify-center gap-[14px] text-center sm:text-left md:gap-[32px]">
                        <p class="styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] opacity-90 sm:w-max">
                          <a class="text-white styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] cursor-pointer opacity-90 sm:w-max">HOME
                          </a>
                        </p>
                        <p class="styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] opacity-90 sm:w-max">
                          <a class="text-white styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] cursor-pointer opacity-90 sm:w-max">ECOSYSTEM
                          </a>
                        </p>
                        <p class="styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] opacity-90 sm:w-max">
                          <a class="text-white" rel="noopener noreferrer" target="_blank" href="https://docsend.com/view/s/66eqhubrbqgnuwqj">WHITEPAPER
                          </a>
                        </p>
                        <p class="styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] opacity-90 sm:w-max">
                          <a class="text-white styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] cursor-pointer opacity-90 sm:w-max">WIN $500K
                          </a>
                        </p>
                        <p class="styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] opacity-90 sm:w-max">
                          <a class="text-white styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] cursor-pointer opacity-90 sm:w-max">HOW TO BUY
                          </a>
                        </p>
                        <p class="styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] cursor-pointer opacity-90 sm:w-max">CONTACT US
                        </p>
                        <p class="styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] opacity-90 sm:w-max">
                          <a class="text-white styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] cursor-pointer opacity-90 sm:w-max">PRIVACY POLICY
                          </a>
                        </p>
                        <p class="styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] opacity-90 sm:w-max">
                          <a class="text-white styles_typography__xvvW1 styles_p450__b6Mbm w-[48%] cursor-pointer opacity-90 sm:w-max">TERMS POLICY
                          </a>
                        </p>
                      </div>
                      <div class="flex flex-wrap justify-between gap-[12px] sm:items-center">
                        <a class="h-[20px] w-full outline-none transition-opacity hover:opacity-70 focus:opacity-70 sm:w-[92px] md:h-[26px] md:w-[138px] xl:h-4 xl:w-20" href="/">
                          <img alt="InnoPlatforms logo" class="shrink-0 m-auto h-full w-[100px] object-contain object-left" src="https://billionair.com/_next/static/media/primary-80ada38261b1c4f4..svg" width="96" height="18" />
                        </a>
                        <div class="-order-1 mb-9 flex w-full justify-center sm:order-last sm:mb-0 sm:w-auto">
                          <ul class="flex items-center gap-4 sm:gap-[20px] md:gap-[26px] xl:gap-4">
                            <li>
                              <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/billionair_app">
                                <img src={social10} class="img-fluid" width="30" height="30" />
                              </a>
                            </li>
                            <li>
                              <a rel="noopener noreferrer" target="_blank" href="https://t.me/billionair_app">
                                <img src={social11} class="img-fluid" width="30" height="30" />
                              </a>
                            </li>
                            <li>
                              <a rel="noopener noreferrer" target="_blank" href="https://t.me/billionair_announcements">
                                <img src={social12} class="img-fluid" width="30" height="30" />
                              </a>
                            </li>
                            <li>
                              <a rel="noopener noreferrer" target="_blank" href="https://discord.gg/QGHv26UajU">
                                <img src={social13} class="img-fluid" width="30" height="30" />

                              </a>
                            </li>
                            <li>
                              <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/billionair_app">
                                <img src={social13} class="img-fluid" width="30" height="30" />
                              </a>
                            </li></ul>
                        </div>
                      </div>
                      <div class="m-auto grid max-w-[916px] py-[47px] text-center"><p class="styles_typography__xvvW1 styles_p450__b6Mbm opacity-90">For support, email us: <strong>support@billionair.com</strong></p><p class="styles_typography__xvvW1 styles_p450__b6Mbm opacity-90">Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p><p class="styles_typography__xvvW1 styles_p450__b6Mbm opacity-90">2023 BillionAir. All rights reserved. IRR Group Limited, Majuro Islands, Marshall Islands</p>
                      </div>
                    </div>
                  </div></footer>
              </div>
              <div class="Background_background__Obe1R bg-dark">
                <div class="Background_circleContainer__abx_l Background_circle_faq-right__00MGn">
                </div>
              </div>
            </div>
            <footer>
              <div class="relative z-0 w-full overflow-hidden bg-gradient-to-r from-[rgba(255,_197,_84,_1)] to-[rgba(255,_190,_159,_1)] sm:fixed sm:bottom-0 sm:left-0">
                <div class="gs container relative z-10 py-3 lg:py-5">
                  <div class="col-span-full flex flex-col items-center justify-center sm:flex-row sm:gap-x-[30px] lg:-ml-12px lg:-mr-12px lg:gap-x-5 lg:px-0 xl:-ml-2 xl:-mr-2 xl:gap-x-6">
                    <h3 class="styles_typography__xvvW1 styles_h820__rHht9  mb-12px text-center -tracking-[0.04em] text-dark sm:mb-0 sm:text-left">
                      Stop scrolling and join our community
                    </h3>
                    <button class="styles_button__AXNxo styles_variant-primary__ZsQ0Z styles_size-200__vitZh w-[200px]" type="button">
                      Buy $AIRB
                    </button>
                  </div>
                </div>
                <img alt="Background Figure" class="pointer-events-none absolute left-[111px] -top-[182px] aspect-[0.93] h-[932px] scale-[140%] opacity-20 sm:left-10 md:left-18 md:scale-125 lg:left-[222px] lg:-top-25 lg:h-[1275px] lg:scale-110 xl:left-[328px] xl:-top-[395px] xl:h-[1506px] xl:scale-100" src="https://billionair.com/_next/static/media/bg-figure-28cdae9eb8b74241..svg" />
              </div>
            </footer>
          </main>
        </div>
      </div>

    </div>








  );
}

export default Index;
/*roadmap section
<section class="pt-12 sm:pt-16 md:pt-13 lg:pt-20 xl:pt-18 mb-[160px] sm:mb-[120px] md:mb-18 lg:mb-15 xl:mb-25" id="roadmap">
                    <div class="gs container">
                      <div class="gs-container flex flex-col gap-y-5 sm:flex-row sm:gap-x-10 md:gap-x-20 lg:gap-x-25 xl:gap-x-[244px]">
                        <div class="h-fit max-w-[280px] sm:sticky sm:top-10 sm:left-0 sm:max-w-[287px] lg:max-w-[393px] xl:max-w-[464px]"><h2 class="styles_typography__xvvW1 styles_h900__a8TGo mb-2 lg:mb-3">Roadmap</h2>
                          <div class="styles_typography__xvvW1 styles_p450__b6Mbm flex flex-col gap-2 text-white/70 "><p>Detailed action plan making us excited for the future of earntertainment.</p>
                          </div>
                        </div>
                        <div class="w-full styles_scheduleList__Qr5UT">
                          <div>
                            <ul class="flex flex-col gap-2 sm:gap-4 lg:gap-5">
                              <li style={{ //"opacity": "0",
                                "transform": "translateY(100px) translateZ(0px)"
                              }}>
                                <div class="Background_container__RCLV5">
                                  <div class="Background_content___GAg0">
                                    <article class="styles_scheduleItem__8fEed"><h3 class="styles_typography__xvvW1 styles_h650__isr6D mb-12px md:mb-2 lg:mb-3"><span class="styles_typography__xvvW1 styles_gradient-primary___XZ8G">Q3 - 2022</span></h3>
                                      <ul class="styles_typography__xvvW1 styles_p450__b6Mbm flex flex-col gap-1 text-white/70">
                                        <li>
                                          BillionAir official website launch
                                        </li>
                                        <li>
                                          Whitepaper and project documentation release
                                        </li></ul></article>
                                  </div>
                                  <div class="Background_background__Obe1R " style={{ "border-radius": "32px" }}>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                                    </div>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li style={{ //"opacity": " 0",
                                " transform": " translateY(100px) translateZ(0px)"
                              }}>
                                <div class="Background_container__RCLV5">
                                  <div class="Background_content___GAg0">
                                    <article class="styles_scheduleItem__8fEed"><h3 class="styles_typography__xvvW1 styles_h650__isr6D mb-12px md:mb-2 lg:mb-3"><span class="styles_typography__xvvW1 styles_gradient-primary___XZ8G">Q4 - 2022</span></h3>
                                      <ul class="styles_typography__xvvW1 styles_p450__b6Mbm flex flex-col gap-1 text-white/70">
                                        <li>
                                          Start of $AIRB private sale
                                        </li>
                                        <li>
                                          Establishing partnerships
                                        </li>
                                        <li>
                                          Smart contract audit
                                        </li>
                                        </ul></article>
                                  </div>
                                  <div class="Background_background__Obe1R " style={{ "border-radius": "32px" }}>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                                    </div>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li style={{ //"opacity": " 0",
                                " transform": " translateY(100px) translateZ(0px)"
                              }}>
                                <div class="Background_container__RCLV5">
                                  <div class="Background_content___GAg0">
                                    <article class="styles_scheduleItem__8fEed"><h3 class="styles_typography__xvvW1 styles_h650__isr6D mb-12px md:mb-2 lg:mb-3"><span class="styles_typography__xvvW1 styles_gradient-secondary__0iB4J">Q1 - 2023</span></h3>
                                      <ul class="styles_typography__xvvW1 styles_p450__b6Mbm flex flex-col gap-1 text-white/70">
                                        <li>
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
                                        </li>
                                        </ul></article>
                                  </div>
                                  <div class="Background_background__Obe1R " style={{ "border-radius": "32px" }}>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                                    </div>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li style={{ //"opacity": " 0",
                                " transform": " translateY(100px) translateZ(0px)"
                              }}>
                                <div class="Background_container__RCLV5">
                                  <div class="Background_content___GAg0">
                                    <article class="styles_scheduleItem__8fEed"><h3 class="styles_typography__xvvW1 styles_h650__isr6D mb-12px md:mb-2 lg:mb-3"><span class="styles_typography__xvvW1 styles_gradient-secondary__0iB4J">Q2 - 2023</span></h3>
                                      <ul class="styles_typography__xvvW1 styles_p450__b6Mbm flex flex-col gap-1 text-white/70">
                                        <li>
                                          Ambassador Influencers Marketing Campaign
                                        </li>
                                        <li>
                                          $AIRB public pre-sale
                                        </li>
                                        <li>
                                          Token generation event for $AIRB
                                        </li></ul></article>
                                  </div>
                                  <div class="Background_background__Obe1R " style={{ "border-radius": "32px" }}>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                                    </div>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li style={{ //"opacity": " 0",
                                " transform": " translateY(100px) translateZ(0px)"
                              }}>
                                <div class="Background_container__RCLV5">
                                  <div class="Background_content___GAg0">
                                    <article class="styles_scheduleItem__8fEed"><h3 class="styles_typography__xvvW1 styles_h650__isr6D mb-12px md:mb-2 lg:mb-3"><span class="styles_typography__xvvW1 styles_gradient-alt__JNxul">Q3 - 2023</span></h3>
                                      <ul class="styles_typography__xvvW1 styles_p450__b6Mbm flex flex-col gap-1 text-white/70">
                                        <li>
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
                                        </li></ul></article>
                                  </div>
                                  <div class="Background_background__Obe1R " style={{ "border-radius": "32px" }}>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                                    </div>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li style={{ //"opacity": " 0",
                                " transform": " translateY(100px) translateZ(0px)"
                              }}>
                                <div class="Background_container__RCLV5">
                                  <div class="Background_content___GAg0">
                                    <article class="styles_scheduleItem__8fEed">
                                      <h3 class="styles_typography__xvvW1 styles_h650__isr6D mb-12px md:mb-2 lg:mb-3">
                                        <span class="styles_typography__xvvW1 styles_gradient-alt__JNxul">Q4 - 2023</span></h3>
                                      <ul class="styles_typography__xvvW1 styles_p450__b6Mbm flex flex-col gap-1 text-white/70">
                                        <li>
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
                                        </li></ul></article>
                                  </div>
                                  <div class="Background_background__Obe1R " style={{ "border-radius": "32px" }}>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                                    </div>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li style={{ //"opacity": " 0",
                                " transform": " translateY(100px) translateZ(0px)"
                              }}>
                                <div class="Background_container__RCLV5">
                                  <div class="Background_content___GAg0">
                                    <article class="styles_scheduleItem__8fEed"><h3 class="styles_typography__xvvW1 styles_h650__isr6D mb-12px md:mb-2 lg:mb-3"><span class="styles_typography__xvvW1 styles_gradient-primary___XZ8G">Q1 - 2024</span></h3>
                                      <ul class="styles_typography__xvvW1 styles_p450__b6Mbm flex flex-col gap-1 text-white/70">
                                        <li>
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
                                        </li></ul></article>
                                  </div>
                                  <div class="Background_background__Obe1R " style={{ "border-radius": "32px" }}>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                                    </div>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li style={{ //"opacity": " 0",
                                " transform": " translateY(100px) translateZ(0px)"
                              }}>
                                <div class="Background_container__RCLV5">
                                  <div class="Background_content___GAg0">
                                    <article class="styles_scheduleItem__8fEed"><h3 class="styles_typography__xvvW1 styles_h650__isr6D mb-12px md:mb-2 lg:mb-3"><span class="styles_typography__xvvW1 styles_gradient-secondary__0iB4J">Q2 - 2024</span></h3>
                                      <ul class="styles_typography__xvvW1 styles_p450__b6Mbm flex flex-col gap-1 text-white/70">
                                        <li>
                                          Building of Metaverse environment
                                        </li>
                                        <li>
                                          Integrate Metaverse and VR games
                                        </li>
                                        <li>
                                          Migrate to a fully DAO ecosystem
                                        </li></ul></article>
                                  </div>
                                  <div class="Background_background__Obe1R " style={{ "border-radius": "32px" }}>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-left__DMDnU">

                                    </div>
                                    <div class="Background_circleContainer__abx_l Background_circle_road-card-right__Zu_Wr">
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
*/
/*
<div role="presentation" aria-describedby=":Rt36:-description" aria-labelledby=":Rt36:-title" class="fixed top-0 left-0 z-dialog h-full w-full bg-[rgba(0,0,0,0.5)] outline-0 MuiModal-root">
        <div tabindex="0" data-test="sentinelStart"></div>
        <div class="absolute flex h-full w-full overflow-auto outline-0 sm:bg-transparent motion-safe:state-closed:animate-fade-out motion-safe:state-open:animate-fade-in" data-state="open" role="presentation" tabindex="-1">
          <div class="m-auto flex w-full items-center justify-center">
            <div class="relative h-auto w-full max-w-[400px] bg-[#1C1D23] py-[50px] px-[20px] backdrop-blur-[0.5px] sm:h-fit sm:w-[424px] sm:rounded-2xl sm:p-7 lg:w-[560px] m-2 sm:m-3 lg:m-6 rounded-2xl sm:relative relative content_purchase__QQZle" role="presentation">
              <button class="absolute top-[16px] right-[16px] cursor-pointer styles_contact__MCjKM">
                <img alt="close" src="https://billionair.com/images/close-button.svg" width="32" height="32" />
              </button>
              <p class="styles_title__c2HiH text-white">Contact us</p>
              <form class="grid gap-[16px]">
                <input class="styles_inputGetEmail__i_Hbv" placeholder="Enter your email" name="get" />
                <input class="styles_inputGetEmail__i_Hbv" placeholder="Your message" name="message" />
                <p class="styles_footer__RVkLF">
                  Do you need help with your purchase or haven’t found answers to your questions? Don’t hesitate to contact us!
                </p>
                <button class="styles_submit__Yp1dU" value="Submit">Send</button>
              </form>
              <div>
                <img alt="icon" class="absolute bottom-0 right-0" src="https://billionair.com/images/circleModal.svg"/>
              </div>
            </div>
          </div>
        </div><div tabindex="0" data-test="sentinelEnd"></div>
      </div>
*/

/*
<section class="overflow-hidden">
                    <div class="gs container">
                      <div class="gs-container mb-3 flex flex-col items-center text-dark">
                        <h3 class="v-h800 mb-12px text-center font-bold md:v-h900-md md:mb-2 lg:v-h850-lg lg:mb-3 xl:v-h850-xl xl:mb-3">
                          A team you can trust
                        </h3>
                        <p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-4 max-w-[296px] text-center opacity-90 sm:mb-4 md:mb-6 md:max-w-[283px] lg:mb-8 lg:max-w-[388px] xl:mb-10 xl:max-w-[458px]">
                          It's not just about the people behind the project, it's about the people in front.
                        </p>
                        <div class=" mb-8 w-screen md:mb-12 md:w-full lg:mb-15">
                          <div class="flex flex-col gap-y-3">
                            <ul class="-mb-2 flex w-full flex-nowrap gap-12px overflow-x-auto pl-[20px] pb-2 sm:mb-0 sm:grid sm:grid-cols-12 sm:gap-3 sm:overflow-x-visible sm:pb-0 sm:pl-0 lg:gap-3 xl:gap-[23px]">
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/radekpleha/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Radek Pléha" title="Radek Pléha" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/radek-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Radek Pléha</h4><p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Co-Founder</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/radovan-voda/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Radovan Voda" title="Radovan Voda" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/radovan-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/radovan-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/radovan-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/radovan-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/radovan-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/radovan-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/radovan-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/radovan-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/radovan-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Radovan Voda</h4><p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Co-Founder</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/michaellaurens/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Michael Laurens" title="Michael Laurens" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/michael-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/michael-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/michael-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/michael-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/michael-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/michael-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/michael-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/michael-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/michael-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Michael Laurens</h4><p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Marketing Director</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/jamie-wheeler1988/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Jamie Wheeler" title="Jamie Wheeler" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/jamie-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/jamie-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/jamie-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/jamie-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/jamie-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/jamie-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/jamie-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/jamie-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/jamie-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Jamie Wheeler</h4><p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Marketing and Operations Manager</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/rahular101/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Rahul A R" title="Rahul A R" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/rahul-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/rahul-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/rahul-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/rahul-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/rahul-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/rahul-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/rahul-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/rahul-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/rahul-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Rahul A R</h4><p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Blockchain Lead</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/tomas-rokos/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Tomas Rokos" title="Tomas Rokos" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/tomas-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/tomas-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/tomas-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/tomas-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/tomas-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/tomas-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/tomas-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/tomas-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/tomas-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Tomas Rokos</h4><p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Technical Analytist</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/lurisante/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Luis Ricardo Sanchez" title="Luis Ricardo Sanchez" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/luis-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/luis-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/luis-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/luis-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/luis-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/luis-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/luis-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/luis-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/luis-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Luis Ricardo Sanchez</h4><p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Senior Blockchain Developer</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/ihor-medvid-208211129/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Ihor Medvediv" title="Ihor Medvediv" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/ihor-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/ihor-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/ihor-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/ihor-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/ihor-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/ihor-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/ihor-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/ihor-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/ihor-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Ihor Medvediv</h4><p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Growth Strategist</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li></ul>
                            <ul class="-mb-2 flex w-full flex-nowrap gap-12px overflow-x-auto pl-[20px] pb-2 sm:mb-0 sm:grid sm:grid-cols-12 sm:gap-3 sm:overflow-x-visible sm:pb-0 sm:pl-0 lg:gap-3 xl:gap-[23px] translate-x-[38.5%]">
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/bohdan-stavskyi/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Bohdan Stavskyi" title="Bohdan Stavskyi" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/bohdan-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/bohdan-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/bohdan-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/bohdan-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/bohdan-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/bohdan-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/bohdan-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/bohdan-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/bohdan-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Bohdan Stavskyi</h4><p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Financial Planning &amp; Analysis</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li></ul>
                          </div>
                        </div>
                        <h3 class="v-h800 mb-4 text-center sm:mb-5 md:v-h900-md md:mb-2 lg:v-h850-lg lg:mb-8 xl:v-h850-xl xl:mb-10">Our advisors</h3>
                        <div class="w-screen sm:mb-6 md:mb-12 md:w-full">
                          <div class="flex flex-col gap-y-3">
                            <ul class="-mb-2 flex w-full flex-nowrap gap-12px overflow-x-auto pl-[20px] pb-2 sm:mb-0 sm:grid sm:grid-cols-12 sm:gap-3 sm:overflow-x-visible sm:pb-0 sm:pl-0 lg:gap-3 xl:gap-[23px]">
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/arthur-iinuma-4115ba17/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Arthur Iinuma" title="Arthur Iinuma" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/arthur-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/arthur-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/arthur-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/arthur-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/arthur-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/arthur-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/arthur-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/arthur-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/arthur-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Arthur Iinuma</h4>
                                    <p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Founder of Iinuma.io and President &amp; Co-Founder at ISBX</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/blaineglobal/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Blaine Graboyes" title="Blaine Graboyes" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/blaine-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/blaine-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/blaine-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/blaine-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/blaine-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/blaine-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/blaine-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/blaine-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/blaine-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Blaine Graboyes</h4>
                                    <p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Casino video games category pioneer</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/stevenmberman/" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Steve Berman" title="Steve Berman" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/steve-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/steve-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/steve-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/steve-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/steve-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/steve-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/steve-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/steve-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/steve-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Steve Berman</h4>
                                    <p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Regulated gaming industry veteran</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li>
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/rbarcolari" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Ricardo Barcolari" title="Ricardo Barcolari" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/riccardo-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/riccardo-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/riccardo-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/riccardo-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/riccardo-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/riccardo-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/riccardo-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/riccardo-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/riccardo-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Ricardo Barcolari</h4>
                                    <p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">CEO
                                      at ChainLab</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li></ul>
                            <ul class="-mb-2 flex w-full flex-nowrap gap-12px overflow-x-auto pl-[20px] pb-2 sm:mb-0 sm:grid sm:grid-cols-12 sm:gap-3 sm:overflow-x-visible sm:pb-0 sm:pl-0 lg:gap-3 xl:gap-[23px] translate-x-[38.5%]">
                              <li class="col-span-3 flex w-19 flex-shrink-0 sm:w-auto" style={{ "opacity": " 1", "transform": "translateY(1px) translateZ(0px)" }}>
                                <div class="w-full">
                                  <a href="https://www.linkedin.com/in/giacomo-voltolina-384b21125" rel="nofollow noopener noreferrer" target="_blank" class="flex h-full w-full flex-col items-center rounded-xl bg-white px-[14px] pt-3 pb-3 text-center sm:rounded-2xl sm:px-3 md:pb-3 md:pt-3 lg:rounded-[30px]">
                                    <div class="relative mb-3 h-[120px] w-full object-contain md:mb-[28px] md:h-[160px] lg:mb-5 lg:h-[220px] xl:mb-3 xl:h-[262px]"><span style={{
                                      boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial',
                                      background: 'none', opacity: 1, border: '0px none', margin: '0px', padding: '0px', position: 'absolute', inset: 0,
                                    }}>
                                      <img alt="Giacomo Voltolina" title="Giacomo Voltolina" sizes="100vw"
                                        srcset="https://billionair.com/images/team/nextImageExportOptimizer/giacomo-opt-640.WEBP 640w, https://billionair.com/images/team/nextImageExportOptimizer/giacomo-opt-750.WEBP 750w, https://billionair.com/images/team/nextImageExportOptimizer/giacomo-opt-828.WEBP 828w, https://billionair.com/images/team/nextImageExportOptimizer/giacomo-opt-1080.WEBP 1080w, https://billionair.com/images/team/nextImageExportOptimizer/giacomo-opt-1200.WEBP 1200w, https://billionair.com/images/team/nextImageExportOptimizer/giacomo-opt-1920.WEBP 1920w, https://billionair.com/images/team/nextImageExportOptimizer/giacomo-opt-2048.WEBP 2048w, https://billionair.com/images/team/nextImageExportOptimizer/giacomo-opt-3840.WEBP 3840w"
                                        src="https://billionair.com/images/team/nextImageExportOptimizer/giacomo-opt-3840.WEBP" decoding="async" data-nimg="fill" class="h-full w-full rounded-xl lg:rounded-[30px]" style={{
                                          position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'medium none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover'
                                        }} />
                                      <noscript></noscript>
                                    </span>
                                    </div><h4 class="styles_typography__xvvW1 styles_h550__oWZyR mb-[4px] -tracking-[0.03em] text-dark md:mb-1 lg:!text-[24px] xl:!v-h550-xl">Giacomo Voltolina</h4>
                                    <p class="styles_typography__xvvW1 styles_p450__b6Mbm mb-1 whitespace-pre-wrap -tracking-[0.03em] text-dark opacity-70 lg:mb-2 lg:!text-[16px] xl:!text-[18px]">Co-Founder &amp; CPO
                                      at Chainlab</p>
                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current mt-auto !h-[20px] !w-[20px] lg:!h-5 lg:!w-5" focusable="false" role="presentation" style={{ "width": "24px", "height": "24px" }}>
                                      <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#linkedin"></use>
                                    </svg>
                                  </a>
                                </div>
                              </li></ul>
                          </div>
                        </div>
                      </div>
                      <div>
                      </div>
                    </div>
                  </section>
*/
