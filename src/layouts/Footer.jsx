import img6 from "../Components/assets/Img/banner6.jpg";
const Footer = () => {
  return (
    <>
      <footer className="row">
        <div className="col">
          <div class="social">
            <div class="container"></div>
          </div>
          <div className="banner6">
            <img src={img6} alt="" className="ChildernImg-banner6-Footer" />
          </div>
          <div class="row">
            <div class="col-md-12">
              <a class="facebook" href="https://twitter.com/?lang=es">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                class="twitter"
                href="https://www.instagram.com/"
                target={"_blank"}
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
