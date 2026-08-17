import { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const photos = [
    {
      type: 'image',
      src: 'https://live.staticflickr.com/65535/55436781239_9655648b51_b.jpg',
      alt: 'Talia photo 1',
    },
    {
        type: 'image',
        src: 'https://live.staticflickr.com/65535/55436653411_77bcf2c339_b.jpg',
        alt: '2',
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/embed/UYuCgFn1T9E',
        alt: 'Talia video',
      },
      {
        type: 'image',
        src: 'https://live.staticflickr.com/65535/55436816444_ff466e81ca_b.jpg',
        alt: '3',
      },
      {
        type: 'image',
        src: 'https://live.staticflickr.com/65535/55436652901_4a0d2f4393_b.jpg',
        alt: '4',
      },
      {
        type: 'image',
        src: 'https://live.staticflickr.com/65535/55436134176_d3c91fd870_b.jpg',
        alt: '5',
      },


  ]

function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setSelectedPhoto(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <main className="home">
      <header className="header">
        <h1>Talia Web</h1>
        <Link to="/photos" className="photos-link">
    Photos
  </Link>
        </header>

      
        <section className="gallery">
            {photos.map((photo, index) => (
                <div key={index} className="gallery-item">
                {photo.type === 'image' ? (
                    <button
                    className="photo-button"
                    onClick={() => setSelectedPhoto(photo)}
                    >
                    <img
                        src={photo.src}
                        alt={photo.alt}
                        className="gallery-image"
                    />
                    </button>
                ) : (
                    <div className="video-container">
                    <iframe
                        src={photo.src}
                        title={photo.alt}
                        className="gallery-video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    </div>
                )}
                </div>
            ))}
            </section>

      {selectedPhoto && (
        <div
          className="lightbox"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="close-button"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close preview"
          >
            ×
          </button>

          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            className="preview-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  )
}

export default Home