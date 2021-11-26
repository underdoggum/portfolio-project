import React, { useState } from "react"
import emailjs from "emailjs-com"
import { useForm } from "react-hook-form";


const Contacts = () => {

  // setup for react-hook-form
  //refer to docs: https://react-hook-form.com/get-started
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [successMessage, setSuccessMessage] = useState("");

  // setup for EmailJS
  // refer to docs: https://www.emailjs.com/docs/examples/reactjs/
  const serviceID = "service_ID";
  const templateID = "template_ID"
  const userID = "user_2es2SmqQCZTf0uUUk2cNr";

  const onSubmit = (data, resetForm) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID,
    )
    resetForm.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully. I'll be in touch!");
      }).catch(error => console.error(`Opps... something went wrong./nError: ${error}`))
  }

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>Contact me</h1>
        <p>Please fill out the form below, and describe what you'd like to chat about. I'll contact you soon!</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  // below "ref" and following is from react-hook-form docs
                  {...register("name", { required: true, maxLength: 20 })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.name?.type === "required" && "Please provide your name."}</span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register("phone", { required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                })}
                  />
                <div className="line"></div>
              </div>
              <span className="error-message">{(errors.phone?.type === "required" || errors.phone?.type === "pattern") && "Please provide a valid phone number."}</span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input 
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register("email", { required: true, pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{(errors.email?.type === "required" || errors.email?.type === "pattern") && "Please provide a valid email address."}</span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input 
                  type="text"
                  className="form-control"
                  placeholder="Subject (optional)"
                  subject="subject"
                />
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea 
                  className="form-control"
                  placeholder="In a few words, please describe what you'd like to talk about"
                  name="email"
                  {...register("description", { required: true })}
                  ></textarea>
                  <div className="line"></div>
                </div>
                <span className="error-message">{errors.description?.type === "required" && "Please write a little something regarding your job needs and/or interest."}</span>
              <button className="btn-main-offer contact-btn" type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts
