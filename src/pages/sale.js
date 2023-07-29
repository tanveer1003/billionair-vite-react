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

function Sale() {

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
                    How to participate in the $ICOPAD Pre-Sale
                </h3>
                <div class="container py-4 shadow bg-color rounded-4">

                    <header class="pb-3 mb-4 fw-bold text-white p-5 ">
                        <div class="d-flex align-items-center gap-4">
                            <h1 class="display-5 fw-bold">$ICOPAD=$0.030</h1>
                            <div class="p-2">
                                <div>
                                    <span>Raised:</span>
                                    <span class="c-lightblue"> $72,797 / $1,200,000</span>
                                </div>
                                <div>
                                    <span>Sold:</span>
                                    <span class=" c-lightblue"> 2,426,582 / 40,000,000</span>
                                </div>
                            </div>
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
                    </header>

                    <div class="progress" role="progressbar" aria-label="Basic example"
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: "30px" }}>
                        <div class="progress-bar w-75 c-p"></div>
                    </div>

                    <div class="p-5 mb-4  rounded-3 ">
                        <div class="container-fluid d-flex align-items-center gap-4">

                            <button class="btn btn-secdondary btn-lg text-white b-secondary" onmouseover="mouseover()" type="button">
                                New to crypto?
                            </button>
                            <button class="btn btn-secdondary btn-lg text-white b-secondary" type="button">
                                New to crypto?
                            </button>
                            <button class="btn btn-secdondary btn-lg text-white b-secondary" type="button">
                                New to crypto?
                            </button>
                            <button class="btn btn-primary btn-lg text-white b-primary" type="button">
                                Buy $ICOPAD Now
                            </button>
                        </div>
                    </div>

                    <div class="container text-center text-white">
                        You have <span class="c-lightblue">0</span> $ICOPAD
                    </div>

                </div>
            </div>
            <div class="container-fluid py-4 ">
                <ImageSlider images={images} slidesToShow={slidesToShow} autoplaySpeed={autoplaySpeed} />
            </div>
            <div class="container p-5">
                <div class="container p-5">
                    <div class="p-5 mb-4  rounded-3 ">
                        <div class="container-fluid d-flex align-items-center gap-4">
                            <button class="btn btn-secdondary btn-lg text-white b-secondary" onmouseover="mouseover()" type="button">
                                New to crypto?
                            </button>
                            <button class="btn btn-secdondary btn-lg text-white b-secondary" type="button">
                                New to crypto?
                            </button>
                            <button class="btn btn-secdondary btn-lg text-white b-secondary" type="button">
                                New to crypto?
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container p-5">
                <h1 class="display-5 fw-bold  lh-1 mb-3 text-white text-center">
                    How to buy <span class="c-yellow">$ICOPAD</span> token with crypto?
                </h1>
                <p class="lead py-2 pt-5">
                    1. Firstly, make sure you have one of the supported wallets ready. For desktop, we recommend using the <span class="c-yellow"> Metamask</span> browser extension. For mobile, we recommend using <span class="c-yellow">TrustWallet</span> and its built in browser.
                </p>
                <p class="lead py-2">
                    2. Click on the <span class="c-yellow">"Buy $ICOPAD"</span> button to enable BillionAir to connect with your wallet. Once connected, you can buy <span class="c-yellow">$ICOPAD</span> tokens using a selection of currencies from the BNB chain such as <span class="c-yellow">BNB, BUSD, USDC, USDT </span>or <span class="c-yellow">ETH.</span>
                </p>
                <p class="lead py-2">
                    3. Choose the amount of<span class="c-yellow"> $ICOPAD</span> tokens you wish to buy or the amount of your assets you wish to spend and click <span class="c-yellow">"Buy now"</span>. We recommend having at least <span class="c-yellow">$10</span> of <span class="c-yellow">BNB</span> to cover gas fees. If you don't have enough BNB please transfer it from any crypto exchange to your wallet address or buy more through <span class="c-yellow">Metamask</span> or <span class="c-yellow">TrustWallet</span> marketplace.
                </p>
            </div>

            <div class="container p-5">
                <h1 class="display-5 fw-bold  lh-1 mb-3 text-white text-center">
                    New to crypto?
                </h1>
                <h1 class="display-5 fw-bold  lh-1 mb-3 text-white ">
                DESKTOP
                </h1>
                <p class="lead py-2 pt-5">
                1. First, ensure you have the <span class="c-yellow">MetaMask</span> wallet installed as a browser extension in order to connect your wallet to the platform.
                </p>
                <p class="lead py-2 pt-2">
                    <a class="text-white" href="https://metamask.io/download/">https://metamask.io/download/</a>
                </p>
                <p class="lead py-2">
                2. Once connected, you can buy BNB or a stablecoin such as BUSD via card. Just click on "Buy" and it will open the MetaMask marketplace, at:
                </p>
                <p class="lead py-2 pt-2">
                    <a class="text-white" href="https://portfolio.metamask.io/">https://portfolio.metamask.io/</a>
                </p>
                <p class="lead py-2">
                    3. Once you have the necessary funds in your wallet, head over to the BillionAir platform at:
                </p>
                <p class="lead py-2 pt-2">
                    <a class="text-white" href="https://app.billionair.com/">https://app.billionair.com/</a>
                </p>
                <p class="lead py-2">
                    4. Click on the "Buy $ICOPAD" button to enable BillionAir to connect with your wallet. Once connected, you can buy $ICOPAD tokens using a selection of currencies from the BNB chain such as BNB, BUSD, USDC, USDT or ETH.
                </p>
                <p class="lead py-2">
                    5. Choose the amount of $ICOPAD tokens you wish to buy or the amount of your assets you wish to spend and click "Buy now". We recommend having at least $10 worth of BNB to cover gas fees. If you don't have enough BNB, please transfer it from any crypto exchange to your wallet address or buy more through MetaMask marketplace.
                </p>


                <h1 class="display-5 fw-bold  lh-1 mb-3 text-white ">
                    MOBILE
                </h1>
                <p class="lead py-2">
                    If you are purchasing on <span class="c-yellow">mobile</span>, we recommend using Trust Wallet and connecting through the <span class="c-yellow">WalletConnect.</span>
                </p>
                <p class="lead py-2 pt-2">
                    <a class="text-white" href="https://community.trustwallet.com/t/how-to-use-walletconnect-with-trust-wallet/36247">https://community.trustwallet.com/t/how-to-use-walletconnect-with-trust-wallet/36247</a>
                </p>
                <p class="lead py-2">
                    Download the TrustWallet app on to your mobile device from the relevant app store (Apple App Store, Google Play Store, etc)
                </p>
                <p class="lead py-2">
                    Once your wallet is activated, you need to ensure you have the BNB Chain available in your wallet. If you don’t, you can add it to your wallet by following the steps at:
                </p>
                <p class="lead py-2 pt-2">
                    <a class="text-white" href="https://community.trustwallet.com/">https://community.trustwallet.com/</a>
                </p>
                <p class="lead py-2">
                    Once your wallet is activated, you need to ensure you have the BNB Chain available in your wallet. If you don’t, you can add it to your wallet by following the steps at:
                </p>
                <p class="lead py-2 pt-2">
                    <a class="text-white" href="https://community.trustwallet.com/t/how-to-add-a-custom-network-on-the-trust-wallet-mobile-app/626781">https://community.trustwallet.com/t/how-to-add-a-custom-network-on-the-trust-wallet-mobile-app/626781</a>
                </p>
                <p class="lead py-2">
                    If you don't have any assets on the wallet, please transfer it from any crypto exchange to your wallet address or buy more through Trust Wallet marketplace simply by clicking on the “Buy” button. Once you have the necessary funds in your wallet, head over to the BillionAir platform at:
                </p>
                <p class="lead py-2 pt-2">
                    <a class="text-white" href="https://billionair.com/">https://billionair.com/</a>
                </p>
                <p class="lead py-2">
                    Click on the "Buy $ICOPAD" button to enable BillionAir to connect with your wallet. Once connected you can buy $ICOPAD tokens using a selection of currencies from the BNB chain such as BNB, BUSD, USDC, USDT or ETH.
                </p>
                <p class="lead py-2">
                Choose the amount of $ICOPAD tokens you wish or select how much assets you wish to spend and click "Buy now". We recommend having at least $10 of BNB to cover gas fees. If you don't have enough BNB, please transfer it from any crypto exchange to your wallet address or buy more through the Trust Wallet marketplace with the “Buy” button.
                </p>

                <h1 class="display-5 fw-bold  lh-1 mb-3 text-white text-center">
                    Troubleshoot
                </h1>
                <p class="lead py-2 pt-5">
                    1. Insufficient Funds For Intrinsic Transaction Cost
                </p>
                <p class="lead py-2">
                    This error usually occurs when you do not have enough BNB to pay for the gas fee. Make sure your BNB is on the BEP20 Network. Reduce the amount of BNB you are trying to purchase with.
                </p>
                <p class="lead py-2">
                    2. No wallet
                </p>
                <p class="lead py-2">
                    To start with, ensure you have the MetaMask wallet extension installed on your browser in order to connect your wallet to the platform.
                </p>
                <p class="lead py-2 pt-2">
                    <a class="text-white" href="https://metamask.io/download/">https://metamask.io/download/</a>
                </p>
                <p class="lead py-2">
                    If you are purchasing on <span class="c-yellow">mobile</span>, we recommend using Trust Wallet and connecting through the  <span class="c-yellow">WalletConnect.</span>
                </p>
                <p class="lead py-2 pt-2">
                    <a class="text-white" href="https://community.trustwallet.com/t/how-to-use-walletconnect-with-trust-wallet/36247">https://community.trustwallet.com/t/how-to-use-walletconnect-with-trust-wallet/36247</a>
                </p>
                <p class="lead py-2">
                    3. Problems with your wallet
                </p>
                <p class="lead py-2">
                    If you are experiencing any problems using Metamask, please consult the Metamask support materials here:
                </p>
                <p class="lead py-2 pt-2">
                    <a class="text-white" href="https://support.metamask.io/hc/en-us/articles/4406430256539-User-Guide-Troubleshooting">https://support.metamask.io/hc/en-us/articles/4406430256539-User-Guide-Troubleshooting</a>
                </p>
                <p class="lead py-2">
                    If you are experiencing any problems using TrustWallet, please consult the TrustWallet support materials here:
                </p>
                <p class="lead py-2 pt-2">
                    <a class="text-white" href="https://community.trustwallet.com/c/helpcenter/troubleshooting/17">https://community.trustwallet.com/c/helpcenter/troubleshooting/17</a>
                </p>
                <p class="lead py-2">
                    These are the experts, after all, they are the wallet providers! However, you can alternatively contact us and we will provide any assistance we can.
                </p>

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
                    <div class="d-flex align-items-center gap-4 text-center pb-4">
                        <h4 class="display-5 fw-bold text-black">Stop scrolling and join our community </h4>
                        <button class="btn btn-primary px-5 py-2 bg-black" style={{"background":"black"}}>Buy $AIR</button>
                    </div>
                </header>
            </div>
        </div>





    );



}


export default Sale;