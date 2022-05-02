import React, { useState } from 'react';

function Contact() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.value);
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
                            <input className="w-full border border-gray-300 rounded-md py-2 px-4" type="text" id="contact-form-name" placeholder="Name" />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <input className=" w-full border border-gray-300 rounded-md py-2 px-4" type="text" id="contact-form-email" placeholder="Email" />
                        </div>
                    </div>
                    <div>
                        <div className="my-3">
                            <textarea className="border border-gray-300 rounded-md w-full py-2 px-4 h-[200px]" id="contact-form-comment" placeholder="How can we help you?"></textarea>
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