import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

const PreLoader = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 3000); // hide after 3s
  }, []);

  return (
    <div
      className={`ai-pre-loader ${
        loader ? "ai-pre-loader-enabled" : "ai-pre-loader-disabled"
      }`}
    >
      <DNA
        visible={loader}
        height="150"
        width="150"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default PreLoader;
