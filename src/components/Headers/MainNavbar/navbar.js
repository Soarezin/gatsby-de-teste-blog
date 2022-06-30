import React from "react"

export default function Navbar({ children }) {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            class="me-2"
            height="20"
            alt="MDB Logo"
            loading="lazy"
          />
          <small>MDBootstrap</small>
        </a>
      </div>
    </nav>
  )
}
