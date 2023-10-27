import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid justify-content-end ">
          <form class="d-flex ">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}
