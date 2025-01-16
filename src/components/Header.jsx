export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent global-padding">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <p className="fs-2 fw-bold logo">Nebula-X</p>
        </a>

        <button
          className="navbar-toggler shadow-none border-0 fs-4"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="sidebar offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header border-bottom">
            <h2 className="offcanvas-title" id="offcanvasNavbarLabel">
              Nebula-X
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body d-flex flex-column flex-lg-row p-3 p-lg-0">
            <ul className="navbar-nav gap-5 justify-content-center justify-content-lg-end align-items-center flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                <a className="nav-link active text-decoration-underline" aria-current="page" href="#">
                  Get Started Now
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-center align-items-center">
              <button className="custom-btn text-center py-1">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
