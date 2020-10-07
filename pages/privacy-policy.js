import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  const PrivacyPolicyContent = () => (
    <div className="bg-gray-1" style={{ padding: '70px 0px' }}>
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-primary-1">I. Introduction and overview</h2>
            <p className="font-16 text-copy-1 pt32 pb56 border-bottom text-100">
              This Policy describes the user data that Green Tiger Software Inc.
              (dba Green Tiger Markets, and together with its affiliates, “GTM”)
              collects, how it is used and shared, and your choices regarding
              this data. Please note that by accessing GTM’s website and/or
              using any GTM services, you consent to all the provisions of this
              Policy. All those subject to this Policy are referred to as
              “users” in this notice.
              <br />
              <br />
              GTM is the data controller for personal data collected in
              connection with use of GTM’s services and website. GTM may use
              third parties to collect and process user data, and user data may
              be stored on servers (whether physical or virtual) maintained
              either by GTM or by third parties (including without limitation
              third-party hosting vendors). We reserve the right to store and
              process personal data anywhere in the world.
            </p>
            <h2 className="text-primary-1 pt24">
              II. Data collections and uses
            </h2>
            <h3 className="font-21 pt40 text-serif text-copy-2">
              A. The Data We Collect
            </h3>
            <ul className="pl24 pt32 list-plain pb40 border-bottom">
              <li className="pb24">
                <em className="font-16 text-copy-2">GTM Collects:</em>
              </li>
              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Data provided by users to GTM, such as during account creation
                  and website usage
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Data created during use of our services and website, such as
                  location and device data
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Data from other sources, such third parties that use GTM APIs
                </span>
              </li>
            </ul>
            <div className="pt16">
              <em className="font-16 text-copy-2">
                More specifically, the following are nonexclusive examples of
                data collected by or on behalf of GTM:
              </em>
            </div>
            <h3 className="font-21 pt40 text-serif text-copy-2 pl24">
              1. Data provided by users. This includes:
            </h3>
            <ul className="pl24 pt32 list-plain">
              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  User profile: We collect data when users create or update GTM
                  accounts, including without limitation on the GTM website or
                  for the GTM Marketplace. This may include without limitation
                  name, email, phone number, login name and password, address,
                  payment or banking information (including related payment
                  verification information), and government identification
                  documents (including without limitation photographs), and any
                  other information requested in GTM Marketplace onboarding
                  documents.
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Background check and identity verification: We may collect
                  background check and identity verification information as part
                  of GTM’s onboarding processes.
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Demographic data: We may collect demographic data about users,
                  including through user surveys. We may also receive
                  demographic data about users from third parties.
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  User content: We collect the information users submit when
                  they contact GTM customer support.
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Communications with GTM and on the GTM Marketplace: We reserve
                  the right to record all conversations (whether telephonic, by
                  email, by instant message, or by any other means) related to a
                  user’s use of GTM’s services including the GTM Marketplace.
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Transactions on GTM Marketplace: We collect and maintain
                  information regarding bids, offers, and completed transactions
                  on GTM’s Marketplace (directly or indirectly).
                </span>
              </li>
            </ul>
            <h3 className="font-21 pt56 text-serif text-copy-2 pl24">
              2. Data created during use of our services. This includes:
            </h3>
            <ul className="pl24 pt32 list-plain">
              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Location data: We may collect precise or approximate location
                  data from a user’s device if enabled by the user to do so.
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Usage data: We collect data about how users interact with our
                  services (including the GTM website and the Marketplace). This
                  includes data such as access dates and times, app features or
                  pages viewed, app crashes and other system activity, type of
                  browser, and third-party sites or services used before
                  interacting with our services. In some cases, we collect this
                  data through cookies, pixels, tags, and similar tracking
                  technologies that create and maintain unique identifiers. GTM
                  may use “Cookies” to do so.
                </span>
              </li>
              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Device data: We may collect data about the devices used to
                  access our services, including the hardware models, device IP
                  address, operating systems and versions, software, preferred
                  languages, unique device identifiers, advertising identifiers,
                  serial numbers, and mobile network data.
                </span>
              </li>
            </ul>
            <h3 className="font-21 pt56 text-serif text-copy-2 pl24">
              3. Data from other sources. This includes:
            </h3>
            <ul className="pl24 pt32 list-plain pb40 border-bottom">
              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">Publicly available sources. </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">Marketing service providers. </span>
              </li>
              <li className="font-16 text-copy-1 pb16 pt16">
                <i>
                  GTM may combine the data collected from these sources with
                  other data in its possession.
                </i>
              </li>
            </ul>
            <h3 className="font-21 pt16 text-serif text-copy-2">
              B. How we use personal and other user data
            </h3>
            <ul className="pl24 pt32 list-plain pb40 border-bottom">
              <li className="pb24">
                <em className="font-16 text-copy-2">
                  GTM collects and uses data to facilitate provisions of its
                  services, including the GTM Marketplace. We also use the data
                  we collect:
                </em>
              </li>
              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  For customer support and to facilitate user and participant
                  onboarding
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  For research and development, including without limitation
                  with respect to new features, products, services, and
                  financial instruments
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  To provide, maintain, and improve GTM services and features,
                  including without limitation to troubleshoot bugs and
                  operational problems, conduct data analysis, and monitor and
                  analyze usage and activity trends
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  To enable communications between users and Participants
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  To send marketing and non-marketing communications to users
                  and Participants
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  To verify compliance with the Rules of the GTM Marketplace and
                  applicable, including for Marketplace surveillance
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  To provide to governmental authorities/agencies, regulators,
                  and SROs upon their request
                </span>
              </li>
              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  In connection with legal proceedings
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  To generate market data regarding financial instruments listed
                  for trading on the GTM Marketplace
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  To evaluate users’ and Participants’ use of GTM services,
                  including to determine whether Participants meet required
                  usage thresholds if any
                </span>
              </li>
            </ul>
            <h3 className="font-21 pt16 text-serif text-copy-2">
              C. Cookies and third-party technologies
            </h3>
            <ul className="pl24 pt32 list-plain pb40 border-bottom">
              <li className="pb24">
                <em className="font-16 text-copy-2">
                  GTM and its third-party service providers and partners may use
                  cookies and other identification technologies. Cookies are
                  small text files that are stored on browsers or devices by
                  websites, apps, online media, and advertisements. GTM may use
                  cookies and similar technologies for purposes such as:
                </em>
              </li>
              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">Authenticating users </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Remembering user preferences and settings
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Determining the popularity of content
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Delivering and measuring the effectiveness of marketing
                  campaigns
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Analyzing site traffic and trends, and generally understanding
                  the online behaviors and interests of users who interact with
                  our services
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Other uses as determined from time to time by GTM
                </span>
              </li>
              <li className="font-16 text-copy-1 pb16 pt16">
                <i>
                  We may also allow others to provide analytics services for GTM
                  and to track and report on the performance of marketing
                  activities. These entities may use cookies and other
                  technologies to identify the devices used by visitors to our
                  websites, as well as when they visit other online sites and
                  services.
                </i>
              </li>
            </ul>
            <h3 className="font-21 pt16 text-serif text-copy-2">
              D. Data sharing and disclosure
            </h3>
            <ul className="pl24 pt32 list-plain pb40 border-bottom">
              <li className="pb24">
                <em className="font-16 text-copy-2">
                  Some of GTM’s products, services, and features require that we
                  share data with other users or at a user’s request. We may
                  also share data with our affiliates, subsidiaries, and
                  partners, for legal reasons or in connection with claims or
                  disputes. Finally, we also may share data with governmental
                  agencies, regulators, and SROs. GTM will not share a user’s or
                  Participant’s bid, offer, or order information with another
                  user or Participant, other than to execute the transaction. We
                  also may share data with our subsidiaries, affiliates, and
                  third-party service providers to help us provide our services
                  or conduct data processing on our behalf. These third parties
                  may include, without limitation:
                </em>
              </li>
              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Payment processors and facilitators
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Background check and identity verification providers
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">Cloud storage providers </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Marketing partners and marketing platform providers
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">Data analytics providers </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Research partners, including those performing surveys or
                  research projects in partnership with GTM or on GTM’s behalf
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Vendors that assist GTM to enhance the safety and security of
                  its platform
                </span>
              </li>

              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                <i className="pt4 text-primary-0 zmdi zmdi-chevron-right pr16"></i>
                <span className="flex-fill">
                  Consultants, lawyers, accountants, compliance and regulatory
                  services providers, and other professional service providers
                </span>
              </li>
            </ul>
            <h3 className="font-21 pt16 text-serif text-copy-2">
              E. Data retention and deletion
            </h3>
            <ul className="pl24 pt32 list-plain pb40 border-bottom">
              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                By default, GTM retains user profile, transaction-related
                (including without limitation, bid, offer, and completed
                transaction), and other personal and entity-related data
                indefinitely. Requesting Users (which means for this purpose (i)
                individuals who are not affiliated with Participants on GTM’s
                Marketplace, that (ii) are affiliated with entities that are no
                longer Participants on GTM’s Marketplace, or (iii) that have
                been authorized by the entity Participant on GTM’s Marketplace
                to request deletion of the Requesting User’s personal
                information) may request that GTM delete personal information
                with respect to the Requesting User, other than as GTM deems
                necessary to retain for purposes of applicable law, regulatory
                requirements, or to comply with GTM’s rules. For the avoidance
                of doubt, GTM will not delete records of any bids, offers,
                completed transactions, or other GTM Marketplace activity
              </li>
            </ul>

            <h2 className="text-primary-1 pt24">III. Updates to this policy</h2>
            <ul className="pl24 pt32 list-plain pb40 border-bottom">
              <li className="font-16 text-copy-1 pb16 d-flex flex-row text-100">
                We may from time to time update this policy and will provide
                notice to users (which may without limitation be via GTM’s
                website or “click-through” notice). Use of GTM’s or its
                affiliates’ services, including without limitation accessing the
                GTM website, after an update constitutes consent to the updated
                notice to the extent permitted by law.
              </li>
            </ul>

            <h2 className="text-primary-1 pt24">IV. Certain Definitions</h2>
            <ul className="pl24 pt32 list-plain pb80">
              <li className="font-16 text-copy-1 pb16 text-100">
                <strong className="text-copy-2 text-700">Marketplace</strong>
                <br />
                Refers to the marketplace operated or proposed to be operated by
                GTM, an affiliate thereof, or any successor thereto for trading
                in Forwards or other financial instruments.
                <br />
                <br />
                <strong className="text-copy-2 text-700">Participant </strong>
                <br />
                An entity that GTM has been admitted for trading, and remains in
                good standing, on the Marketplace.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return (
    <>
      <Head>
        <title>Privacy Policy - Green Tiger Markets</title>
      </Head>
      <Header
        title="Privacy Policy"
        subheading="Last modified: September 25, 2020"
      />
      <PrivacyPolicyContent />
      <Footer />
    </>
  );
}
