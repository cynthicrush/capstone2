import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../helpers/Alert";

function SignupForm({ signup }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    })

    const [formErrors, setFormErrors] = useState([])
    const history = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        let result = await signup(formData)
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
        <section id="book-a-table" className="SignupForm book-a-table">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Sign Up</h2>
                    <p>Sign up a new account</p>
                </div>
                <form onSubmit={handleSubmit} class="php-email-form" data-aos="fade-up" data-aos-delay="100">
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
                            <label>Email</label>
                            <input 
                                name="email"
                                type='email'
                                className="form-control"
                                value={formData.email}
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
                        <div className="col-lg-4 col-md-6 form-group">
                            <label>First Name</label>
                            <input 
                                name="first_name"
                                className="form-control"
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group">
                            <label>Last Name</label>
                            <input 
                                name="last_name"
                                className="form-control"
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    

                    {formErrors.length
                        ? <Alert type='danger' messages={formErrors} className="error-message" />
                        : null
                    }

                    <button 
                        type="submit"
                        className="btn btn-primary float-right"
                        onSubmit={handleSubmit}
                    >Sign Up</button>
                </form>
            </div>
        </section>
    )
}

export default SignupForm
