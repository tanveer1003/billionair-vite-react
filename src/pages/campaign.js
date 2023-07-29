import React, { Component } from 'react';
import { Header } from '../components/header';
import { Route, BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
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

import product1 from './../assets/img/products/car4.png';
import product2 from './../assets/img/products/lid4.png';
import product3 from './../assets/img/products/rolex4.png';
import product4 from './../assets/img/products/ticket4.png';

import imageside from './../assets/img/banners/ipad-pro-1.png';

import social1 from './../assets/img/social/linkedin+square+icon-1320168278649782468.png';

import ImageSlider from '../components/imageslider';
function Campaign() {

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        // Add more image URLs here
    ];

    const products = [
        product1,
        product2,
        product3,
        product4
    ];
    const slidesToShow = 5; // Number of images to show at once
    const autoplaySpeed = 3000; // Auto-scrolling speed in milliseconds


    return (
        <div className="App bg text-white" style={{ background: " rgb(28 29 35/var(--tw-bg-opacity));" }}>
            <Header />
            <div class="container text-center p-5 ">
                <h3 class="display-5 fw-bold p-5">
                    The $ICOPAD Pre-Sale & Giveaway
                    Win as Easy As 1,2,3...Literally!
                </h3>
                <h2 class="display-8 fw-bold p-5">
                    Join BillionAir's Pre-Sale and earn life-changing prizes
                </h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-4 text-left">
                        <h6 class="display-6 fw-bold  c-yellow" >How does it work?</h6>
                        <p>
                            By participating in the BillionAir Pre-Sale, you are set to multiply your investment and automatically receive one Free NFT Raffle Ticket for every 1000 $ICOPAD you purchase. These tickets can be entered into ANY of our exciting raffles, giving you the chance to win big!
                        </p>
                    </div>
                    <div class="col-4 text-center">
                        <button type="button" class="btn btn-outline-secondary b-primary btn-lg px-5">
                            Step 1
                        </button>
                        <br />
                        <br />
                        <button type="button" class="btn btn-outline-secondary b-primary btn-lg px-5">
                            Step 2
                        </button>
                        <br />
                        <br />
                        <button type="button" class="btn btn-outline-secondary b-primary btn-lg px-5">
                            Step 3
                        </button>
                        <br />
                        <br />
                        <button type="button" class="btn btn-outline-secondary b-primary btn-lg px-5">
                            Step 4
                        </button>
                    </div>
                    <div class="col-4 text-left">
                        <h5 class="display-6 fw-bold  " >Buy $ICOPAD</h5>
                        <p>
                            Multiply and earn NFT Raffle Tickets
                        </p>
                        <h5 class="display-6 fw-bold  " >Enter Gleam</h5>
                        <p>
                            Win Bonus Raffle Tickets
                        </p>
                        <h5 class="display-6 fw-bold  " >Refer to earn</h5>
                        <p>
                            5% INSTANT BONUS
                        </p>
                        <h5 class="display-6 fw-bold  " >Earn big</h5>
                        <p>
                            Multiply your tokens value and win raffles!
                        </p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-5 text-left">
                        <div class="card text-bg-dark mb-3 card-dark" >
                            <div class="card-header"><h6 class="display-6 fw-bold  c-yellow" >Main Prizes</h6></div>
                            <div class="card-body">

                                <p class="card-text" style={{ color: "rgb(255 255 255/1)", "font-size": 20 }}>
                                    <span class="fw-bold">Grand Prize:</span> Tesla Model S
                                    <br />
                                    <span class="fw-bold">Runners up:</span> 10 x $10,000 $ICOPAD
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 text-left">
                        <div class="card text-bg-dark mb-3 card-dark" >
                            <div class="card-header"><h6 class="display-6 fw-bold  c-pink" >Phase Prizes</h6></div>
                            <div class="card-body">

                                <p class="card-text" style={{ color: "rgb(255 255 255/1)", "font-size": 20 }}>
                                    <span class="fw-bold">Luxury Prizes: </span>
                                    $400,000 of luxury prizes! New prizes revealed each phase! Expect exquisite watches, high-end jewelry, and more!

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid py-4 ">
                <ImageSlider images={products} slidesToShow={4} autoplaySpeed={autoplaySpeed} />
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-6 text-left">
                        <h5 class="display-6 fw-bold  " >Step 1: Buy $ICOPAD</h5>
                        <br />
                        <h6 class="display-7 fw-bold  c-yellow" >Invest in BillionAir, the ultimate web3 raffles and games hub</h6>
                        <br />
                        <h6 class="display-7 fw-bold  " >With BillionAir, you the chance to invest in the next big thing in crypto gaming and earn tremendous value multiple ways</h6>
                        <br />
                        <h6 class="display-7 fw-bold  " >Token appreciation</h6>
                        <ul><p>
                        Investing into the initial rounds will immediately multiply your investment when the token lists on exchanges after the Pre-Sale ends
                        </p>
                        </ul>
                        <h6 class="display-7 fw-bold  " >Life-changing raffles</h6>
                        <ul><p>
                        Each 1000 $ICOPAD you invest, you will receive 1 Free NFT Raffle Ticket, giving you the change to earn extraordinary prizes
                        </p>
                        </ul>
                    </div>
                    <div class="col-6 text-left">
                        <div class="card text-bg-dark mb-3 card-dark text-center" >
                            <div class="card-header"><h6 class="display-6 fw-bold  text-white" >1 $ICOPAD = $0.030</h6></div>
                            <div class="card-body text-white">
                                <div class="p-2 ">
                                    <div>
                                        <span>Raised:</span>
                                        <span class="c-lightblue"> $72,797 / $1,200,000</span>
                                    </div>
                                    <div>
                                        <span>Sold:</span>
                                        <span class=" c-lightblue"> 2,426,582 / 40,000,000</span>
                                    </div>
                                </div>
                                <div class="container-fluid d-flex align-items-center gap-4 py-3">
                                    <h1 class="display-5 fw-bold  ">Phase 1</h1>
                                    <div class="p-2">
                                        <div>
                                            <span>Next phase:</span>
                                            <span> $0.033</span>
                                        </div>
                                        <div>
                                            <span>Final phase:</span>
                                            <span> $0.057</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress" role="progressbar" aria-label="Basic example"
                                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: "30px" }}>
                                    <div class="progress-bar w-75 c-p"></div>
                                </div>
                                <div class="container-fluid d-flex align-items-center gap-4 py-3">
                                    <button class="btn btn-secdondary btn-lg text-white b-secondary" onmouseover="mouseover()" type="button">
                                    How to buy?
                                    </button>
                                    <button class="btn btn-secdondary btn-lg text-white b-secondary" type="button">
                                    New to crypto?
                                    </button>
                                </div>
                                <button class="btn btn-primary btn-lg text-white b-primary mt-3" type="button">
                                    Buy $ICOPAD Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">

                <div class="col-6 text-left">
                        <div class="card text-bg-dark mb-3  text-center text-white" >
                            <div class="card-header">
                            <h5 class="display-6 fw-bold  " >Step 2: Enter Gleam</h5>
                                </div>
                            <div class="card-body text-white">
                                <div ng-hide="campaign.showTermsAndConditions" ng-include="'https://billionair.com/views/enter/index.html'" class="ng-scope">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-6 text-left">
                        <h5 class="display-6 fw-bold  c-yellow" >
                         Enter the BillionAir Gleam to earn more free NFT Raffle Tickets!
                        </h5>
                        <br />
                        <h6 class="display-7 fw-bold " >
                        The more $ICOPAD you purchase and the more you participate in Gleam, the more tickets you earn, and the higher your chances of walking away with these extraordinary prizes!
                        </h6>
                        <ol>
                            <li>
                                Buy at least 1000 $ICOPAD
                            </li>
                            <li>
                                Complete ALL Gleam tasks to open the referral section
                            </li>
                            <li>
                                Refer as many friends possible to buy $ICOPADBuy at least 1000 $ICOPAD
                            </li>
                        </ol>
                        <ul>
                            <li>
                                Buy at least 1000 $ICOPAD10 Gleam XP = 1 Free NFT Raffle Ticket
                            </li>
                            <li>
                                Each valid referral = 1 Free NFT Raffle ticket
                            </li>
                        </ul>
                        <h6 class="display-7 fw-bold " >
                            Spread the word via social media, email or word-of-mouth, and let your REFERRAL LINK do the rest. Watch your chances to win life-changing prizes grow as your network expands!
                        </h6>
                        <h6 class="display-7 fw-bold  " >Rules</h6>
                        <ol>
                            <li>
                                Min 1000 $ICOPAD purchase is required to be eligible for NFT tickets distribution
                            </li>
                            <li>
                                A referral bonus is valid only if they have met the minimum purchase requirement of 1000 $ICOPAD
                            </li>
                        </ol>
                    </div>
                    
                </div>
            </div>

            
            <div class="container">
                <div class="row">
                    <h2 class="display-8 fw-bold p-5">
                        Step 3: Earn a 5% bonus from all referred investors!
                    </h2>
                    <div class="col-6">
                        <h2 class="display-8 fw-bold c-yellow">
                        Share your unique link with friends, family, and your network, to automatically receive 5% of all of their investments in $AIRB.
                        </h2>
                        <h6 class="display-7 fw-bold  py-4" >With BillionAir, you the chance to invest in the next big thing in crypto gaming and earn tremendous value multiple ways</h6>
                        <ol>
                            <li>Connect your wallet</li>
                            <li>Generate your unique link</li>
                            <li>SHARE the link with friends, family, and colleagues.</li>
                            <li>EARN 5% of ALL investments into the $AIRB Pre-Sale generated through YOUR code!</li>
                        </ol>
                        <h6 class="display-7 fw-bold  py-4" >Watch your earnings grow as your network expands, earning passive income while you sleep!</h6>
                        <p>
                            Unlimited Earnings: No caps on how much you can earn, the sky's the limit!
                        </p>
                        <p>
                            Pre-Sale Lifetime Benefits: Your referral code doesn't expire until the end of our Pre-Sale!
                        </p>
                    </div>
                    <div class="col-6 text-left">
                        <div class="card text-bg-dark mb-3 card-dark text-center" >
                            <div class="card-header">
                                <h6 class="display-6 fw-bold  text-white" >
                                    Earn more $AIRB by referring your friends and community!
                                </h6>
                                </div>
                            <div class="card-body text-white">
                                <div class="p-2 ">
                                    <p class="lead">
                                        Share your unique link below and receive
                                    </p>
                                    <p >
                                        <span class="c-yellow">5%</span> of all transactions realized with your link <span class="c-yellow">instantly</span>!
                                    </p>
                                </div>

                                <div class="progress" role="progressbar" aria-label="Basic example"
                                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: "30px" }}>
                                    <div class="progress-bar w-0 c-p"></div>
                                </div>
                                
                                <button class="btn btn-primary btn-lg text-white b-primary my-3 " type="button">
                                    Buy $ICOPAD Now
                                </button>
                                <p >
                                    <span class="c-yellow">5%</span> of all transactions realized with your link <span class="c-yellow">instantly</span>!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="container-fluid py-4 ">
                <h1 class="display-5 fw-bold  lh-1 mb-3 text-white text-center">
                    Backers and Partners
                </h1>
                <ImageSlider images={images} slidesToShow={slidesToShow} autoplaySpeed={autoplaySpeed} />
            </div>
            <div class="container-fluid py-4 ">
                <h1 class="display-5 fw-bold  lh-1 mb-3 text-white text-center">
                    Backers and Partners
                </h1>
                <ImageSlider images={images} slidesToShow={slidesToShow} autoplaySpeed={autoplaySpeed} />
            </div>

            <div class="container p-5">
                <div class="containenr p-5">
                    <div class="containenr p-5">
                        <div class="  shadow bg-color rounded-4">
                            <header class="pb-3 mb-2 fw-bold text-white p-5 ">
                                <div class="d-flex align-items-center gap-4">
                                    <h1 class="display-5 fw-bold">Deepen the knowledge</h1>
                                </div>
                                <p>
                                    See for yourself that BillionAir is People-centered and Trustworthy. Understand how our system works. Transparent and Safe.
                                </p>
                            </header>

                            <div class="px-5 mb-4  rounded-3 ">
                                <div class="container-fluid d-flex align-items-center gap-4">

                                    <button class="btn btn-primary btn-lg text-white px-5"
                                        style={{ background: "linear-gradient(90deg, #54BDCB 17.63%, #3484FD 85.65%)" }} type="button">
                                        OnePager
                                    </button>
                                    <button class="btn btn-primary btn-lg text-white px-5"
                                        style={{ background: "linear-gradient(90deg, #3458FD 10.45%, #AB83FF 88.14%);" }} type="button">
                                        Tokenomics
                                    </button>
                                    <button class="btn btn-primary btn-lg text-white px-5"
                                        style={{ background: "linear-gradient(90deg, #FF93FF 8.89%, #FFADC7 49.36%, #FFBE9F 86.58%)" }} type="button">
                                        WhitePaper
                                    </button>
                                </div>
                            </div>
                            <header class="pb-1 mb-1 fw-bold text-white p-5 bg-white" style={{
                                "background-image": "url(https://billionair.com/images/partners/bg.png)",
                                "background-repeat": "no-repeat",
                                "background-size": "cover"
                            }}>
                                <div class="d-flex align-items-center gap-4">
                                    <p class="display-5 fw-bold">Audit and KYC by </p>
                                    <img src={img12} class="img-fluid" width="240" height="240" />
                                </div>
                            </header>

                        </div>
                    </div>
                </div>
            </div>



            <div class="container px-5">
                <div class="containenr p-5">
                    <div class="containenr p-5">
                        <div class=" py-5   rounded-4" >
                            <header class="text-center text-white pb-3 mb-2 fw-bold p-5 ">
                                <h1 class="display-7 fw-bold">Don’t miss out, stay</h1>
                                <h1 class="display-7 fw-bold">updated</h1>
                                <div class="d-flex">
                                    <input type="email" class="form-control border-0 text-white" id="exampleFormControlInput1"
                                        style={{ "background-color": "hsla(0,0%,100%,.2)", "color": "white" }} placeholder="Enter your email"></input>
                                    <button class="btn btn-primary text-black btn-lg rounded-5 px-4  border-0 b-secondary "
                                        onmouseover="mouseover()" style={{ "background-color": "rgb(254 197 163/var(--tw-bg-opacity))" }} type="button">
                                        Subscribe
                                    </button>
                                </div>
                                <br />
                                <p class="lead">
                                    Get the latest information about the public Pre-sale, progress and community updates!
                                </p>
                                <br />
                                <br />
                                <nav class="pt-5 navbar navbar-expand-lg navbar-dark">
                                    <div class="container-fluid">


                                        <div class="collapse navbar-collapse " id="navbarSupportedContent">
                                            <div class="mb-2 mb-lg-0 ms-auto me-auto">
                                                <ul class="navbar-nav   text-white ">

                                                    <li class="nav-item">
                                                        <a class="nav-link active" aria-current="page" href="#">HOME</a>
                                                    </li>
                                                    <li class="nav-item active">
                                                        <a class="nav-link" href="#">ECOSYSTEM</a>
                                                    </li>
                                                    <li class="nav-item active text-blue">
                                                        <a class="nav-link" href="#">WHITEPAPER</a>
                                                    </li>
                                                    <li class="nav-item active">
                                                        <a class="nav-link" href="#">WIN $500K</a>
                                                    </li>
                                                    <li class="nav-item active">
                                                        <a class="nav-link">HOW TO BUY</a>
                                                    </li>
                                                    <li class="nav-item active">
                                                        <a class="nav-link">CONTACT US</a>
                                                    </li>
                                                    <li class="nav-item active">
                                                        <a class="nav-link">PRIVACY POLICAY</a>
                                                    </li>
                                                    <li class="nav-item active">
                                                        <a class="nav-link">TERMS POLICY</a>
                                                    </li>

                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </nav>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <img src={logo} />
                                    </div>
                                    <div>
                                        <ul class="flex items-center gap-4 sm:gap-[20px] md:gap-[26px] xl:gap-4">
                                            <li>
                                                <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/billionair_app">
                                                    <svg aria-hidden="true" class="inline-flex shrink-0 fill-current" focusable="false" role="presentation" style={{ width: "30px", height: "30px" }}>
                                                        <use xlinkHref="/_next/static/media/sprite-9c60ffc5a924d1ba..svg#twitter"></use>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div class="text-white">
                                    <p class="lead">
                                        For support, email us: <b> support@billionair.com </b>
                                    </p>
                                    <p class="lead">
                                        Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
                                    </p>
                                    <p class="lead">
                                        2023 BillionAir. All rights reserved. IRR Group Limited, Majuro Islands, Marshall Islands
                                    </p>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <header class="pb-1 mb-1 fw-bold text-white p-5 bg-white" style={{
                    "background-image": "url(https://billionair.com/images/partners/bg.png)",
                    "background-repeat": "no-repeat",
                    "background-size": "cover"
                }}>
                    <div class="d-flex align-items-center gap-4">
                        <p class="display-5 fw-bold">Audit and KYC by </p>
                        <img src={img12} class="img-fluid" width="240" height="240" />
                    </div>
                </header>
            </div>
        </div>





    );



}


export default Campaign;