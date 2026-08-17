import { Link } from 'react-router-dom'

import './Home.css'

function Photos() {
  return (
    <main className="photos-page">
      <header className="header">
        <Link to="/" className="site-title">
          Talia Web
        </Link>

        <Link to="/photos" className="photos-link">
          Photos
        </Link>
      </header>

      <section className="photos-content">
        <h2>Hi</h2>
      </section>
    </main>
  )
}

export default Photos

