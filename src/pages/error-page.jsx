import { Link } from "react-router-dom";
import notFound from "../assets/images/not-found.svg";

function ErrorPage() {
  return (<>
    <section className="not-found-container">
      <div className="flex">
        <div>
          <p className="small-heading">
            Not Found <br />
          </p>
          <h1 className="heading-404">
            404
          </h1>
        </div>
        <img src={notFound} alt="not-found" className="not-found-img" />
      </div>

      <Link to="/" className="go-home-back">
        Go To Home
        <span className="go-home-arrow" >
          <svg fill="#000000" width="12px" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" id="arrow">
            <path d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" />
          </svg>
        </span>

      </Link>


    </section>

  </>)
}

export default ErrorPage;