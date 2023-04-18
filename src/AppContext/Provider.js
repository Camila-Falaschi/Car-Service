import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import AppContext from "./AppContext";

function Provider({ children }) {
  const [pageType, setPageType] = useState("");

  const providerValue = useMemo(
    () => ({
      pageType,
      setPageType,
    }),
    [pageType]
  );

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
