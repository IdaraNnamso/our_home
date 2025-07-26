import '../../css/home.css';
import Navbar from '../../components/navbar.jsx';

export default function Home() {
  return (
    <div className="home-wrapper">
      <Navbar />

      <header className="hero">
        <h1 className="site-title">OURHOME</h1>
        <p className="tagline">Where Pets Feel at Home</p>
        <a href="#categories" className="cta-button">Explore Categories</a>
      </header>
      
      <section id="gallery" className="gallery-section">
        <h2>Our Lovely Pets</h2>
        <div className="gallery">
          <div className="gallery-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg" alt="Kitten" />
            <p>Fluffy the Kitten</p>
          </div>
          <div className="gallery-card">
            <img src="https://placedog.net/250/200?id=1" alt="Puppy" />
            <p>Bingo the Puppy</p>
          </div>
          <div className="gallery-card">
            <img src="https://animalcorner.org/wp-content/uploads/2015/02/british-wild-cat-1.jpg" alt="Cat" />
            <p>Luna the Cat</p>
          </div>
          <div className="gallery-card">
            <img src="https://placedog.net/251/200?id=2" alt="Dog" />
            <p>Max the Dog</p>
          </div>
        </div>
      </section>

      <section id="categories" className="categories-section">
        <h2>Pet Categories</h2>
        <div className="category-cards">
          <div className="category-item">
            <video src="https://assets.mixkit.co/videos/preview/mixkit-dog-playing-with-ball-on-the-floor-4474-large.mp4" autoPlay loop muted playsInline />
            <div className="overlay">
              <h3>Dogs</h3>
            </div>
          </div>

          <div className="category-item">
            <video src="https://assets.mixkit.co/videos/preview/mixkit-small-kitten-lying-on-a-sofa-2589-large.mp4" autoPlay loop muted playsInline />
            <div className="overlay">
              <h3>Cats</h3>
            </div>
          </div>

          <div className="category-item">
            <video src="https://assets.mixkit.co/videos/preview/mixkit-two-colorful-parrots-eating-4749-large.mp4" autoPlay loop muted playsInline />
            <div className="overlay">
              <h3>Birds</h3>
            </div>
          </div>

          <div className="category-item">
            <video src="https://assets.mixkit.co/videos/preview/mixkit-white-rabbit-resting-on-the-ground-2673-large.mp4" autoPlay loop muted playsInline />
            <div className="overlay">
              <h3>Rabbits</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
