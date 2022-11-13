import React, { useEffect } from "react";
import ReactGa from "react-ga";

ReactGa.initialize(
  [
    {
      trackingId: "G-4EEECNLV6L",
    },
  ],
  { debug: true }
);

const withTracker = (WrappedComponente, options = {}) => {
  const trackerPage = (page) => {
    ReactGa.set({
      page,
      ...options,
    });

    ReactGa.pageview(page);
  };

  const HOC = (props) => {
    useEffect(
      () => trackerPage(props.location.pathname),
      [props.location.pathname]
    );

    return <WrappedComponente {...props} />;
  };

  return HOC;
};

export default withTracker;
