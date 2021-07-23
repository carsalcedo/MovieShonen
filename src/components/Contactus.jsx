import React from 'react';
import '../css/Contactus.css';

 const Contactus = () => {
    return (
        <div className='contents'>
            <h2 className='title'>Contact<span> Us</span></h2>
            <div className="contacWraper">
                <div className="contactForm">
                    <form action="">
                        <p>
                            <label for='fullName'>Full Name</label>
                            <input type="text" name='fullName' id='fullName' required/>
                        </p>
                        <p>
                            <label for='email'>Email</label>
                            <input type="email" name='email' id='email' required/>
                        </p>
                        <p>
                            <label for='tel'>phone</label>
                            <input type="tel" name='tel' id='tel' pattern="\([0-9]{3}\) [0-9]{3}[ -][0-9]{4}" required/>
                        </p>
                        <p>
                            <label>Affair</label>
                            <input type="text" name='affair' required/>
                        </p>
                        <p className='block'>
                            <label>Message</label>
                            <textarea name="message" rows="3"></textarea>
                        </p>
                        <p className='block'>
                            <button type='submit'>Send</button>
                        </p>
                    </form>
                </div>
                <div className="contactInfo">
                    <h4>More Info</h4>
                    <ul>
                        <li><i class="fab fa-whatsapp"></i>0424-8088917</li>
                        <li><i class="fas fa-envelope"></i>movieshonen@gmail.com</li>
                    </ul>
                    <p>
                        Do you want see the most popular movies? MovieShonen has it! contact us and fallow us on our social network
                    </p>
                    <h4><i class="fas fa-film"></i>MovieShonen.net</h4>
                    <nav>
                        <a href='#'><i className="fab fa-facebook"></i></a>
                        <a href='#'><i className="fab fa-instagram"></i></a>
                        <a href='#'><i className="fab fa-twitter"></i></a>
                        <a href='#'><i className="fab fa-youtube"></i></a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Contactus;