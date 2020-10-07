import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Green Tiger Markets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.main}>
        <div className={styles['background-container']}>
          <nav className="navbar navbar-right">
            <div className="container">
              <div className={styles['nav-bar-header']}>
                <div className={`media ${styles.logo}`}>
                  <img src="/logo_reverse_small1.svg" width="160" />
                </div>
              </div>
              <Link href="/market-data">
                <a className={`btn btn-link ${styles.link} ml-auto`}>
                  MARKET DATA
                </a>
              </Link>
            </div>
          </nav>
          <div className="container">
            <div className={`row ${styles['main-content']}`}>
              <div className="col-md-9">
                <h2 className={`${styles.title} mt-5`}>
                  Energizing Economic <br />
                  Growth for the Future <br />
                  of the Philippines
                </h2>
                <a
                  href="#ContactUs"
                  className={`${styles.btn} btn-block btn-light mt-5 mb-3 d-md-none`}
                >
                  Contact Us
                </a>
                <h2 className={styles.slogan}>We Believe In Markets.</h2>
              </div>
              <div className="col-md-3 d-none d-md-block d-lg-block d-xl-block">
                <h3 className="mb-4">Sign Up For Updates</h3>
                <form encType="text/plain">
                  <div className="form-group">
                    <label htmlFor="">
                      <span className="required">*</span> Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      <span className="required">*</span> Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <button
                    className={`${styles.btn} btn-block ${styles['btn-success']} mt-5 mb-3`}
                  >
                    Confirm Details
                  </button>
                  <a
                    href="#ContactUs"
                    className={`${styles.btn} btn-block btn-light`}
                  >
                    Contact Us
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.transparency}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className={styles.title}>
                Markets Drive Economic Growth & Prosperity.
              </h3>
            </div>
            <div className="col-md-6 offset-md-2">
              <p className={styles.description}>
                Open, transparent and competitive Markets allow producers,
                consumers and their intermediaries to efficiently allocate
                resources, facilitate the accumulation of capital and the
                production of goods and services.
              </p>
            </div>
          </div>
          <div className={styles['transparency-list']}>
            <div className="row">
              <div className="col-md-4">
                <div>
                  <img src="/transparency.png" className="img-fluid" />
                  <p>1. Transparency</p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src="/price-discovery.png" className="img-fluid" />
                  <p>2. Price Discovery</p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src="/liquidity.png" className="img-fluid" />
                  <p>3. Liquidity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.environment}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-md-left">
                Philippines Electricity <br /> Environment
              </h2>
            </div>
          </div>
          <div className="environment-list">
            <div className="row">
              <div className="col-md-4">
                <div
                  className={`${styles['environment-list-item']} text-sm-center text-md-left`}
                >
                  <img src="/faster-growing.png" className="pb-5 img-fluid" />
                  <p className={`${styles.title} text-md-left`}>
                    One of the fastest growing <br />
                    economies in the world
                  </p>
                  <p className={styles.subtitle}>
                    Average of 6% GDP growth for <br />
                    the past 5 years <br />
                    Source: PSA
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`${styles['environment-list-item']} text-md-left`}
                >
                  <img src="/largest-power.png" className="pb-5 img-fluid" />
                  <p className={styles.title}>
                    12th largest power <br />
                    market in the world
                  </p>
                  <p className={styles.subtitle}>
                    Approximately 25GW of installed capacity <br />
                    Source: PSA
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`${styles['environment-list-item']}  text-md-left`}
                >
                  <img src="/mult-fuel-source.png" className="pb-5 img-fluid" />
                  <p className={styles.title}>
                    Existence of a functioning spot <br />
                    market to balance physical supply <br />
                    and demand
                  </p>
                  <p className={styles.subtitle}>
                    <Link href="/market-data">
                      <a>TO MARKET DATA</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.problem}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <h2>The Problem</h2>
            </div>
            <div
              className={`col-md-8 mx-auto text-center ${styles.description}`}
            >
              It is difficult to efficiently manage, hedge, or transfer forward
              price risk in the Philippines electricity market
            </div>
          </div>
          <div className={styles['problem-list']}>
            <div className="row">
              <div className="col-md-4">
                <div className={styles['problem-list-item']}>
                  <img src="/fwd-prices-high.png" className="img-fluid" />
                  <h5>When Forward Prices Are High </h5>
                  <p>
                    (Expected demand is greater than expected supply) Capital
                    flows into the market to add generation capacity to take
                    advantage of strong margins.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles['problem-list-item']}>
                  <img src="/fwd-prices-low.png" className="img-fluid" />
                  <h5>When Forward Prices Are Low </h5>
                  <p>
                    (Expected supply is greater than expected demand) Capital
                    flows into the market to add manufacturing capacity to
                    consume favorably priced electricity.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles['problem-list-item']}>
                  <img src="/fwd-prices-obscure.png" className="img-fluid" />
                  <h5>When Forward Prices Are Obscure</h5>
                  <p>
                    Companies hold excess capital reserves against uncertainty,
                    investors become reluctant to commit to new projects and
                    underwriters find the risks in lending.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-none d-md-block">
              <hr />
            </div>
          </div>
        </div>
      </section>
      <section className={styles['cash-settled']}>
        <img src="/cash-settled-fwd.png" className="d-block d-md-none mb-5" />
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className={styles.content}>
                <h2>
                  A Cash-Settled
                  <br />
                  Electricity Forward
                  <br />
                  Marketplace
                </h2>
                <p>
                  An open and transparent marketplace where participants with
                  bi-lateral contracts in place can buy and sell electricity
                  forward contracts for a specified future date. These are
                  cash-settled instruments as the price of a purchased contract
                  is compared to the load weighted average price in the spot
                  market (reference price).
                </p>
                <div className="media mt-4">
                  <svg
                    className={`${styles.bi} bi-chevron-right mr-4 mt-2`}
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <div className={styles['media-body']}>
                    If the{' '}
                    <strong>contract is more than the reference price,</strong>{' '}
                    then the buyer pays the seller the difference between these
                    prices.
                  </div>
                </div>
                <div className="media mt-3">
                  <svg
                    className={`${styles.bi} bi-chevron-right mr-4 mt-2`}
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <div className={styles['media-body']}>
                    If the{' '}
                    <strong>contract is less than the reference price,</strong>{' '}
                    then the seller pays the buyer the difference between these
                    prices.
                  </div>
                </div>
                <p></p>
              </div>
            </div>
            <div className="col-md-7">
              <img
                src="/cash-settled-fwd.png"
                className="img-fluid float-right d-none d-md-block"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
