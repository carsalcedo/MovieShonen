import {useState} from 'react'
import { helpHttp } from '../helpers/helpHttp';


export const useForm = (initialForm, validateForm) => {
    const[form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [respond, setRespond] = useState(null);

    const handleChange = (e) =>{
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        });    
    }

    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validateForm(form));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            setLoading(true);
            helpHttp()
            .post("https://formsubmit.co/ajax/fercarrera07@gmail.com", {
                body: form,
                headers:{
                    "Content-Type": "applicaction/json",
                    Accept: "aplication/json",
                },
            })
            .then((res) =>{
                setLoading(false);
                setRespond(true);
                setForm(initialForm);
                setTimeout(() => setRespond(false), 5000)
            })

        }else{
            return
        }

    }

  return {
    form, 
    errors, 
    loading, 
    respond, 
    handleChange, 
    handleBlur, 
    handleSubmit
  }
  
}
