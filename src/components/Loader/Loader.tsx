import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled>
      <span
        className="loader"
        aria-label="The page is loading"
        role="dialog"
      ></span>
    </LoaderStyled>
  );
};

export default Loader;
