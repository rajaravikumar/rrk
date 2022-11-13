import ReactGA from "react-ga";

const useAnalyticsEventTracker = (
  category = "Default",
  action = "DefaultPageLoad",
  label = "DefaultPageLoad"
) => {
  return ReactGA.event({ category, action, label });
};
export default useAnalyticsEventTracker;
