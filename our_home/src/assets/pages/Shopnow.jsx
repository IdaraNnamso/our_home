import React from 'react';
import '../../css/shopnow.css';
import Navbar from '../../components/navbar.jsx';

export default function Shopnow() {
  const pets = [
    {
      name: 'Bella',
      type: 'Golden Retriever',
      image: 'https://cdn.pixabay.com/photo/2025/07/22/18/24/dog-golden-retriever-9728981_1280.jpg',
      price: '$450',
    },
    {
      name: 'Luna',
      type: 'Persian Cat',
      image: 'https://cdn.pixabay.com/photo/2022/07/04/04/47/cat-7300365_1280.jpg',
      price: '$300',
    },
    {
      name: 'Chirpy',
      type: 'Parrot',
      image: 'https://cdn.pixabay.com/photo/2023/10/27/10/49/australian-king-parrot-8345064_1280.jpg',
      price: '$150',
    },
    {
      name: 'Snowball',
      type: 'White Rabbit',
      image: 'https://cdn.pixabay.com/photo/2024/03/17/09/51/rabbits-8638626_1280.jpg',
      price: '$100',
    },
    {
      name: 'Rocky',
      type: 'Bulldog',
      image: 'https://cdn.pixabay.com/photo/2018/07/06/07/14/french-bulldog-3519865_1280.jpg',
      price: '$400',
    },
    {
      name: 'Whiskers',
      type: 'Siamese Cat',
      image: 'https://cdn.pixabay.com/photo/2017/08/10/12/39/cat-2622252_1280.jpg',
      price: '$280',
    },
    {
      name: 'Sunny',
      type: 'Cockatiel',
      image: 'https://cdn.pixabay.com/photo/2017/03/06/23/48/cockatiel-2122876_1280.jpg',
      price: '$120',
    },
    {
      name: 'Thumper',
      type: 'Brown Rabbit',
      image: 'https://cdn.pixabay.com/photo/2025/01/03/07/45/rabbits-9307358_1280.jpg',
      price: '$90',
    },
    {
      name: 'Max',
      type: 'Labrador Retriever',
      image: 'https://cdn.pixabay.com/photo/2022/08/01/20/33/dog-7358953_1280.jpg',
      price: '$460',
    },
    {
      name: 'Misty',
      type: 'Ragdoll Cat',
      image: 'https://cdn.pixabay.com/photo/2017/03/08/13/02/cat-pretty-2126692_1280.jpg',
      price: '$320',
    },
    {
      name: 'Kiwi',
      type: 'Lovebird',
      image: 'https://cdn.pixabay.com/photo/2022/08/06/01/02/lovebird-7367776_1280.jpg',
      price: '$130',
    },
    {
      name: 'Flopsy',
      type: 'Lop-Eared Rabbit',
      image: 'https://cdn.pixabay.com/photo/2014/04/05/11/10/lop-eared-314881_1280.jpg',
      price: '$110',
    },
    {
      name: 'Bruno',
      type: 'German Shepherd',
      image: 'https://cdn.pixabay.com/photo/2014/07/30/18/11/german-shepherd-405503_1280.jpg',
      price: '$500',
    },
    {
      name: 'Cleo',
      type: 'Maine Coon',
      image: 'https://cdn.pixabay.com/photo/2022/07/28/13/38/cat-7349872_1280.jpg',
      price: '$350',
    },
    {
      name: 'Tango',
      type: 'Macaw',
      image: 'https://cdn.pixabay.com/photo/2017/11/02/00/34/parrot-2909828_1280.jpg',
      price: '$600',
    },
    {
      name: 'BunBun',
      type: 'Dwarf Rabbit',
      image: 'https://cdn.pixabay.com/photo/2018/04/14/23/03/rabbit-3320431_1280.jpg',
      price: '$85',
    },
    {
      name: 'Zoe',
      type: 'Beagle',
      image: 'https://cdn.pixabay.com/photo/2023/05/20/16/48/dog-8006839_1280.jpg',
      price: '$420',
    },
    {
      name: 'Shadow',
      type: 'Black Cat',
      image: 'https://cdn.pixabay.com/photo/2019/10/11/13/34/cat-4541889_1280.jpg',
      price: '$250',
    },
    {
      name: 'Peanut',
      type: 'Budgerigar',
      image: 'https://cdn.pixabay.com/photo/2023/03/29/17/02/budgerigar-7885980_1280.jpg',
      price: '$100',
    },
    {
      name: 'Cinnamon',
      type: 'Angora Rabbit',
      image: 'https://www.zooplus.co.uk/magazine/wp-content/uploads/2022/03/white-angora-rabbit-on-grass.webp',
      price: '$115',
    }
  ];

  return (
    <div className="shopnow-page">
      <Navbar />
      <header className="shopnow-hero">
        <h1>Available Pets</h1>
        <p>Find your perfect companion today</p>
      </header>

      <section className="pet-list">
        {pets.map((pet, index) => (
          <div className="pet-card" key={index}>
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p className="type">{pet.type}</p>
            <p className="price">{pet.price}</p>
            <button>Adopt Now</button>
          </div>
        ))}
      </section>
      <footer className="footer">
      <div className="footer-content">
            <div className="footer-section about">
          <h2>OURHOME</h2>
          <p>Your trusted destination for finding and adopting pets. We connect loving homes with lovable animals.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#adoption">Adopt</a></li>
            <li><a href="/">Home</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@ourhomepets.com</p>
          <p>Phone: +234 812 345 6789</p>
          <p>Location: Lagos, Nigeria</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} OURHOME. All rights reserved.</p>
      </div>
    </footer>

    </div>
  );
}
