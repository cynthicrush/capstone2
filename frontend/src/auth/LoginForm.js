import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../helpers/Alert";

function LoginForm({ login }) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const [formErrors, setFormErrors] = useState([])
    const history = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        let result = await login(formData)
        if(result.success) {
            history('/dishes')
        } else {
            setFormErrors(result.errors)
        }
    }

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(data => ({...data, [name]: value}))
    }
    return (
        <section id="book-a-table" className="LoginForm book-a-table">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Log In</h2>
                    <p>Log in to your account</p>
                </div>
                
                <form onSubmit={handleSubmit}class="php-email-form" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 form-group">
                            <label>Username</label>
                            <input 
                                name="username"
                                className="form-control"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group">
                            <label>Password</label>
                            <input 
                                name="password"
                                type='password'
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {formErrors.length
                        ? <Alert type='danger' messages={formErrors} />
                        : null
                    }

                    <div className="">
                        <button 
                            type="submit"
                            className="btn btn-primary float-right"
                            onSubmit={handleSubmit}
                        >Sign Up</button>
                    </div>
                    
                </form>
            </div>
        </section>
    )
}

export default LoginForm;
