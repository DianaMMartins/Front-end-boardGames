import React from "react";

export const Loading = (Component) => {
  return function Loading(props) {
    const { isLoading, error, ...otherProps } = props;
    return <section className="loading-page">
    isLoading ? (
      <img
        id="loading"
        src={`${process.env.PUBLIC_URL}/loading.gif`}
        alt="loading"
        width="250vw"
        />
    ) : error ? (
      <p>{error}</p>
    ) : (
      <Component {...otherProps} />
    );
        </section>
  };
};
