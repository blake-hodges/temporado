import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        let name = data.get('contact-form-name');
        let email = data.get('contact-form-email');
        let comment = data.get('contact-form-comment');
        console.log(name, email, comment);
        let info = {
            name: name,
            email: email,
            commment: comment
        }
        axios.post('/contact-form', info )
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
        
    }
    function handleInvalid(e) {
        e.target.setCustomValidity('Enter email ksajdksj here');
    }
    function handleInput(e) {
        e.target.setCustomValidity("")
    }
    return (
        <div className="w-[400px] mx-auto flex flex-col my-6">
            <div className="my-4">
                <h1 className="text-center">Contact Us!</h1>
            </div>
            <div>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 md:col-span-1">
                            <input className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none" type="text" placeholder="Name" name="contact-form-name" required />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <input className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none" type="email" placeholder="Email" name="contact-form-email" required onInvalid={handleInvalid} onInput={handleInput} />
                        </div>
                    </div>
                    <div>
                        <div className="my-3">
                            <textarea className="border border-gray-300 rounded-md w-full py-2 px-4 h-[200px] focus:outline-none" name="contact-form-comment" placeholder="How can we help you?" required></textarea>
                        </div>
                    </div>
                    <div>
                        <div className="my-2">
                            <button className="py-2 px-4 w-full text-white bg-blue-500">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact