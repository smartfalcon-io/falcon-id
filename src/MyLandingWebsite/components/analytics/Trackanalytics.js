import ReactGA from "react-ga4";

// Creating an instance of GA4React and initializing it
const ga4react = ReactGA.initialize("G-0SPQ2Z9EE2");

// Defining the AnalyticsData interface
const trackPathForAnalytics = (data) => {
    const { path, search, title } = data;
    
    // Using ga4react to track pageview
    ga4react
        .then((ga) => {
            ga.pageview(path, search, title);
        })
        .catch((err) => console.error(`Analytics failed: ${err}`));
};



export default trackPathForAnalytics;