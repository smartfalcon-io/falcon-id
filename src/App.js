import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line

/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

// import Hero1 from "components/hero/TwoColumnWithVideo.js";
// import Hero2 from "components/hero/TwoColumnWithInput.js";
// import Hero3 from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
// import Hero4 from "components/hero/TwoColumnWithPrimaryBackground.js";
// import Hero5 from "components/hero/FullWidthWithImage.js";
// import Hero6 from "components/hero/BackgroundAsImage.js";
// import Hero7 from "components/hero/BackgroundAsImageWithCenteredContent.js";

// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
// import Features from "components/features/VerticalWithAlternateImageAndText.js";
// import Features from "components/features/DashedBorderSixFeatures";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
// import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";

// import Pricing from "components/pricing/ThreePlans.js";
// import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

// import SliderCard from "components/cards/ThreeColSlider.js";
// import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import TabGrid from "components/cards/TabCardGrid.js";

// import Blog from "components/blogs/ThreeColSimpleWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
// import Blog from "components/blogs/GridWithFeaturedPost.js";

// import Testimonial from "components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";

// import FAQ from "components/faqs/SimpleWithSideImage.js";
// import FAQ from "components/faqs/SingleCol.js";
// import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";

// import ContactUsForm from "components/forms/SimpleContactUs.js";
// import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
// import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
//
// import GetStarted from "components/cta/GetStarted.js";
// import GetStarted from "components/cta/GetStartedLight.js";
// import DownloadApp from "components/cta/DownloadApp.js";

// import Footer1 from "components/footers/SimpleFiveColumn.js";
// import Footer2 from "components/footers/FiveColumnWithInputForm.js";
// import Footer3 from "components/footers/FiveColumnWithBackground.js";
// import Footer4 from "components/footers/FiveColumnDark.js";
// import Footer5 from "components/footers/MiniCenteredFooter.js";

/* Ready Made Pages (from demos folder) */
// import EventLandingPage from "demos/EventLandingPage.js";
// import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
// import AgencyLandingPage from "demos/AgencyLandingPage.js";
// import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
// import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
// import ServiceLandingPage from "demos/ServiceLandingPage.js";
// import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

/*cards__html*/
// import card1 from "components/cards/PortfolioTwoCardsWithImage"
// import card2 from "components/cards/ProfileThreeColGrid"
// import card3 from "components/cards/TabCardGrid"
// import card4 from "components/cards/ThreeColContactDetails"
// import card5 from "components/cards/ThreeColSlider"
// import card6 from "components/cards/TwoTrendingPreviewCardsWithImage"

/* Inner Pages */
// import LoginPage from "pages/Login.js";
// import SignupPage from "pages/Signup.js";
// import PricingPage from "pages/Pricing.js";
// import AboutUsPage from "pages/AboutUs.js";
// import ContactUsPage from "pages/ContactUs.js";
// import BlogIndexPage from "pages/BlogIndex.js";
// import TermsOfServicePage from "pages/TermsOfService.js";
// import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

// import ComponentRenderer from "ComponentRenderer.js";
// import MainLandingPage from "MainLandingPage.js";
// import ThankYouPage from "ThankYouPage.js";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactus from "MyLandingWebsite/Contactus";
import Home from "MyLandingWebsite/Home";
import Trydemocontacts from "MyLandingWebsite/TrydemoContact";
import Blogsgrid from "MyLandingWebsite/Blogsgrid"
import Usecases from "MyLandingWebsite/Usecasesgrid"
import Technology from "MyLandingWebsite/Technology";
import InsideGovernmentUsecase from "MyLandingWebsite/Usecases/GovernmentUsecase";
import FarmerUsecase from "MyLandingWebsite/Usecases/FarmerUsecase";
import TravelUsecases from "MyLandingWebsite/Usecases/TravelUsecases";
import EducationUsecase from "MyLandingWebsite/Usecases/EducationUsecase";



import Blogdid from "MyLandingWebsite/Blogs/Blogdid";
import Blogvc from "MyLandingWebsite/Blogs/Blodvc";
import BlogGov from "MyLandingWebsite/Blogs/BlogGovernment";
import Blogssi from "MyLandingWebsite/Blogs/Blogssi";


import ReactGA from "react-ga4";
const ga4react = ReactGA.initialize("G-PWWT4L8MQE");



export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" >
            {/* Default route */}
            <Route index element={<Home />} />

            {/* Nested routes */}
            <Route path="technology" element={<Technology />} />
            <Route path="trydemo" element={<Trydemocontacts />} />
            <Route path="usecases" >
              <Route index element={<Usecases />} />
              <Route path="government" element={<InsideGovernmentUsecase />} />
              <Route path="education" element={<EducationUsecase />} />
              <Route path="farmer" element={<FarmerUsecase />} />
              <Route path="travel" element={<TravelUsecases />} />
            </Route>
            <Route path="blogs" >
              <Route index element={<Blogsgrid />} />
              <Route path="did" element={<Blogdid />} />
              <Route path="vc" element={<Blogvc />} />
              <Route path="ssi" element={<Blogssi />} />
              <Route path="gov" element={<BlogGov />} />
              {/* <Route path="edu" element={<Blogdid />} />
        <Route path="travel" element={<Blogdid />} />
        <Route path="farmer" element={<Blogdid />} /> */}
            </Route>
            <Route path="contactus" element={<Contactus />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
