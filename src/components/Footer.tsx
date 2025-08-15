export default function Footer() {

  return (
    
    <footer className="bg-blue-600 pt-4 mt-4 text-center w-full">
      <div>
        <img
          className=" w-[110px] h-[110px] text-white mx-auto myLogo"
          src="/LogoWEB_W_250x250.svg"
          alt="footer logo"
        />
        <p className="text-white text-center mt-0 ">
          &copy;2025 All rights reserved.
          Created By
            <span style={{ color: '#e99401' }} className="font-bold">
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
