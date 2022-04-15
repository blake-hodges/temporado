import React from 'react';
import { Link } from 'react-router-dom';
import { ChatIcon, PhoneIcon } from '@heroicons/react/outline/';

function Booking() {
  return (
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 px-4 py-16">
        <div className="md:col-span-2 justify-evenly p-5">
            <div>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <p className="py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor at eos mollitia, numquam consequuntur dolores temporibus laboriosam, vitae nemo aspernatur cum, magnam blanditiis facere facilis aliquid exercitationem harum incidunt praesentium. Quam fugit facilis quia molestias, consequatur aut dicta tempora magni asperiores, minus omnis expedita quis rerum fuga provident! Itaque, ex!</p>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex flex-col text-center items-center">
                <PhoneIcon className="w-7 h-7" />
                    <div>
                        <h3>Speak with Someone</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quibusdam!</p>
                    </div>
                </div>
                <div className="flex flex-col text-center items-center">
                    <ChatIcon className="w-7 h-7" />
                    <div>
                        <h3>Chat With Us</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="md:col-span-1 bg-blue-500">
            <div className="text-center border">
                <p className="pt-2">Check our available properties.</p>
                <p className="py-2 text-gray-200">10% OFF MONTH-LONG STAYS</p>
            </div>
            <form className="w-full px-2">
                <div className="flex flex-col my-2">
                    <label>Destination</label>
                    <select className="border rounded-md p-2">
                        <option value="Australia">Australia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Canada">Canada</option>
                        <option value="China">China</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Portugal" selected>Portugal</option>
                        <option value="Spain">Spain</option>
                        <option value="Turkey">Turkey</option>
                        <option value="United States">United States</option>
                    </select>
                </div>
                <div className="flex flex-col my-4">
                    <label>Check-In</label>
                    <input className="p-2 border rounded-md" type="date" />
                </div>
                <div className="flex flex-col my-4">
                    <label>Check-Out</label>
                    <input className="p-2 border rounded-md" type="date" />
                </div>
                <Link to={"/properties"} ><button className="w-full my-4">Check Availability</button></Link>
            </form>
        </div>
    </div>
  )
}

export default Booking;