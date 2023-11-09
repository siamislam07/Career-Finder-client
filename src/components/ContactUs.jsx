
import { useLottie } from 'lottie-react';
import email from '../assets/animationJson/email.json'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';


const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nkq4sit', 'template_3l8jez1', form.current, '5ykua3e3wxwV0i9BS')
            .then((result) => {
                // console.log(result.text);
                toast.success('Email send. Thank You')
                e.target.reset()
            }, (error) => {
                console.log(error.text);
                toast.error('Server Busy. Send Later')
                e.target.reset()
            });
    };

    const options = {
        animationData: email,
        loop: 2,

    };

    const { View } = useLottie(options);

    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-transparent border shadow-2xl ">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leadi lg:text-5xl text-center">Let's talk!</h2>
                    <span className="">{View}</span>
                </div>

            </div>
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                <div>
                    <label  className="text-sm">Full name</label>
                    <input id="name" name='from_name' type="text" placeholder="" className="w-full p-3 rounded border" />
                </div>
                <div>
                    <label  className="text-sm">Email</label>
                    <input id="email" name='from_email' type="email" className="w-full p-3 rounded border" />
                </div>

                <div>
                    <label  className="text-sm">Message</label>
                    <textarea id="message" name='message' rows="3" className="w-full p-3 rounded border"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;