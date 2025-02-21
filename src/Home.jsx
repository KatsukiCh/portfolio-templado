import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ creatorName, creatorDescription }) => {
  return (
    <section className="home">
      <Link to="/about">
      <br>
      </br>
      <br>
      </br>
        <button>Click here to learn more about me~</button>
      </Link>
    </section>
  );
};

export default Home;