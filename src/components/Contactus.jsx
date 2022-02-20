import React from 'react';
import '../css/Contactus.css';
import { useForm } from '../hooks/useForm';
import { Spinner } from './Spinner';

const initialForm = {
    name: "",
    email: "",
    tel: "",
    affair: "",
    message: "",
};

const validationForm = (form) =>{
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexTel = /^\d{7,14}$/;
    let regexMessage = /^.{1,255}$/;

    if(!form.name.trim()){
        errors.name ="Full Name is requerid";
    }else if(!regexName.test(form.name.trim())){
        errors.name = 'Full Name only accept letters & white spaces'
    }

    if(!form.email.trim()){
        errors.email ="Email is requerid";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = 'parameter invalid. example: name@gmail.com'
    }

    if(!form.tel.trim()){
        errors.tel ="Number is requerid";
    }else if(!regexTel.test(form.tel.trim())){
        errors.tel = 'only numbers'
    }

    if(!form.affair.trim()){
        errors.affair ="affair is requerid";
    }

    if(!form.message.trim()){
        errors.message ="you must send a message";
    }else if(!regexMessage.test(form.message.trim())){
        errors.message = 'max 255 characters'
    }

    return errors
};

let styles ={
    color: '#FF0000'
}

let sExito={
    color: '#28B463 ',
    textAlign: 'center'
}

 const Contactus = () => {

    const {form, 
        errors, 
        loading, 
        respond, 
        handleChange, 
        handleBlur, 
        handleSubmit} = useForm(initialForm, validationForm);

    return (
        <div className='contents'>
            <h2 className='title'>Contact<span> Us</span></h2>
            <div className="contacWraper animated bounceInUp">
                <div className="contactForm">
                    <form onSubmit={handleSubmit}>
                        <p>
                            <label for='fullName'>Full Name</label>
                            <input type="text"
                             name='name' 
                             id='name' 
                             onBlur={handleBlur} 
                             onChange={handleChange}
                             value={form.name}
                              required/>
                              {errors.name && <p style={styles}>{errors.name}</p>}
                        </p>
                        <p>
                            <label for='email'>Email</label>
                            <input type="email" 
                            name='email' 
                            id='email'
                            onBlur={handleBlur} 
                            onChange={handleChange}
                            value={form.email}
                             required/>
                              {errors.email && <p style={styles}>{errors.email}</p>}
                        </p>
                        <p>
                            <label for='tel'>phone</label>
                            <input type="tel" 
                            name='tel' 
                            id='tel' 
                            onBlur={handleBlur} 
                            onChange={handleChange}
                            value={form.tel}
                            required/>
                             {errors.tel && <p style={styles}>{errors.tel}</p>}
                        </p>
                        <p>
                            <label>Affair</label>
                            <input type="text" 
                            name='affair'
                            onBlur={handleBlur} 
                            onChange={handleChange}
                            value={form.affair}
                             required/>
                              {errors.affair && <p style={styles}>{errors.affair}</p>}
                        </p>
                        <p className='block'>
                            <label>Message</label>
                            <textarea 
                              name="message"
                              onBlur={handleBlur} 
                              onChange={handleChange}
                              value={form.message}
                              rows="3"></textarea>
                               {errors.message && <p style={styles}>{errors.message}</p>}
                        </p>
                        <p className='block'>
                            <button type='submit'> {loading ? <Spinner/> : 'Send'}</button>
                        </p>
                    </form>
                    {respond && <p style={sExito}>Message Sent</p>}
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