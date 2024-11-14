import React from 'react';
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const About = () => {
  return (
    <section className='about' id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we are serious about is food.</p>
                </div>
                <p className='mid'>
                Welcome to [Restaurant Name], where culinary passion meets exceptional dining. Located in the heart of [City], our restaurant offers a warm and inviting atmosphere, perfect for any occasion. Our menu features a diverse selection of dishes crafted from the freshest, locally-sourced ingredients, ensuring a delightful experience for every palate. Whether you're joining us for a casual lunch, a romantic dinner, or a special celebration, our dedicated team is committed to providing outstanding service and creating memorable moments. At [Restaurant Name], we believe in the power of great food and good company. Come savor the flavors and experience the difference.

                </p>
                <Link to={"/"}>Explore Menu <span>
                <HiOutlineArrowNarrowRight/>
                    </span>
                    </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>

    </section >
  )
}

export default About