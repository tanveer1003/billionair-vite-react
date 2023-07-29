import react from 'react';
import logo from './../assets/img/primary-80ada38261b1c4f4.svg';

//export const Navbar = props => (
export class Navbar extends react.Component {

    state = {
    navbarBg: false,
  };

  changeBackground = () => {
    if (window.scrollY > 0) {
      this.setState({ navbarBg: true });
    } else {
      this.setState({ navbarBg: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.changeBackground);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeBackground);
  }


  render() {

    const navbarStyle = this.state.navbarBg ? { background: 'rgba(80, 80, 80, 0.4)' } : {};

    return (
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${this.state.navbarBg ? '' : ''}`} style={navbarStyle}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={logo} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <div class="ms-auto me-auto">


            </div>
            <div class="pt-3">
              <ul class="navbar-nav  mb-2 mb-lg-0  ">

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">WHITEPAPER</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/campaign">WIN $500K</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/campaign">REFER TO EARN</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/how-to-buy-the-airb-token-pre-sale">HOW TO BUY</a>
                </li>
                <li class="nav-item" data-bs-toggle="modal" href="#" data-bs-target="#exampleModal">
                  <a class="nav-link">CONTACT US</a>
                </li>

                <form class="d-flex pl-2" role="search">
                  <button class="btn btn-outline-secondary b-primary btn-lg px-4 radius"
                    type="submit">
                    Buy $AIRB Now
                  </button>
                </form>

              </ul>

              <div class="display-7 fw-bold  lh-1 mb-3 text-white">
                <span class="c-yellow">$AIRB</span>
                <span class=""> Pre-Sale LIVE — Phase 1 Raised: </span>
                <span class="c-yellow">$77,771</span>
              </div>

            </div>

          </div>
        </div>


        <div class="modal fade"
          id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog"  >
            <div class="modal-content text-white" style={{ "background-color": "rgb(28 29 35/1)" }} >
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Contact us</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <input type="text" class="form-control" id="recipient-name" placeholder='Enter your email' />
                  </div>
                  <div class="mb-3">
                    <input type="text" class="form-control" id="recipient-name" placeholder='Your message' />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <p class="lead">
                  Do you need help with your purchase or haven’t found answers to your questions? Don’t hesitate to contact us! Send icon
                </p>
                <button type="button" class="btn btn-primary">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

    );
  }
}
//export default Navbar;

/*
<nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">

    <a class="navbar-brand" href="#"><img src={logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <div class="ms-auto me-auto">

      <ul class="navbar-nav  mb-2 mb-lg-0  ">

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">WHITEPAPER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">WIN $500K</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">REFER TO EARN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">HOW TO BUY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">CONTACT US</a>
        </li>

      </ul>
      <div class="display-8 fw-bold  lh-1 mb-3 text-white">
        <span class="styles_typography__xvvW1 text-gradient-primary-start">$AIRB</span>
        <span class="styles_typography__xvvW1"> Pre-Sale LIVE — Phase 1 Raised: </span>
        <span class="styles_typography__xvvW1 styles_textLinear__DDUZv">$77,771</span>
      </div>
      </div>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-secondary b-primary btn-lg px-4" type="submit">
          Buy $AIRB Now
        </button>
      </form>
    </div>
  </div>
</nav>
*/
