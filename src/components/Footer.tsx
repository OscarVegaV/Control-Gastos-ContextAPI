export default function Footer() {

  return (
    <footer className="bg-dark footer mt-3">
      <div className="container-xl text-center">
        <img
          className="img-fluid footer-logo"
          src="/LogoWEB_W_250x250.svg"
          alt="footer logo"
        />
        <p className="text-white text-center fs-6 mt-0 m-md-0">
          &copy;2025 All rights reserved.
        </p>

        <p className="text-white text-center fs-6 mt-4 m-md-0">
          Created By 
            <span className="text-primary">
              Oscar Vega Venegas
            </span>
        </p>
      </div>
      <div className="share text-center">
        <a
          href="https://github.com/OscarVegaV"
          className="fab fa-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        ></a>

        <a
          href="https://www.linkedin.com/in/oscar-vega-v/"
          rel="noopener noreferrer"
          className="fab fa-linkedin"
          target="_blank"
          aria-label="Linkedin Profile"
        ></a>
        <a
          href="https://wa.me/50661950509?text=Hello%20Oscar,%20I%20am%20interested%20in%20your%20profile"
          className="fab fa-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Contact"
        ></a>
      </div>
    </footer>
  )
}