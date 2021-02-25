import "./banner.css";

const Banner = ({ title }) => {
  return (
    <h3 className="banner" id="bannerTitle">
      {title}
    </h3>
  );
};

export default Banner;
