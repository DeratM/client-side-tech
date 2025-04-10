import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-3">About Us</h1>
            
            <div className="row">
                <div className="col-md-6">
                    <h2>Welcome to Our Restaurant!</h2>
                    <p>
                        Located in the heart of the city, our restaurant offers a unique and unforgettable dining experience. 
                        We specialize in a variety of gourmet dishes that are made with the freshest ingredients and served with love. 
                        Whether you're here for a casual meal with friends or a special celebration, our team is dedicated to making your visit memorable.
                    </p>
                    <p>
                        Our story began with a passion for cooking and a desire to share our love for food with the world. 
                        Over the years, we’ve honed our recipes and perfected our dishes, bringing the best of local flavors mixed with international influences. 
                        We are proud to serve a menu that satisfies all tastes, from vegetarians to meat lovers, with each dish crafted to perfection.
                    </p>
                </div>
                <div className="col-md-6">
                    <img src="/assets/images/uthappizza.png" alt="Uthappam Pizza" className="img-fluid m-3" />
                    <img src="/assets/images/zucchipakoda.png" alt="Zucchini Pakoda" className="img-fluid" />
                </div>
            </div>

            <h2 className="mt-4">Our Mission</h2>
            <p>
                At our restaurant, we believe in serving more than just food — we serve experiences. Our mission is to create a place where people can gather, share great meals, and make lasting memories. 
                We pride ourselves on exceptional customer service, creating an atmosphere that feels like home, and providing high-quality, mouth-watering dishes.
            </p>
        </div>
    );
}

export default About;
