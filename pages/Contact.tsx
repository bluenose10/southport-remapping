
import React, { useState } from 'react';
import PageHero from '../components/PageHero';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as any).toString(),
    })
      .then(() => {
        setStatus('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        setStatus(`Error submitting form: ${error.message}`);
        setTimeout(() => setStatus(''), 5000);
      });
  };
  
  const inputStyles = "mt-1 block w-full bg-white/80 border-2 border-brand-red-600/30 rounded-xl shadow-inner shadow-gray-100 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red-600 focus:border-brand-red-300 transition-all duration-300";

  return (
    <div className="animate-fadeIn">
        <PageHero
          eyebrow="Contact"
          title="Get in touch"
          subtitle="Ready for a quote or have a question? We're here to help."
        />

        <main className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 rounded-3xl border-2 border-brand-red-600/30 bg-white/90 p-10 shadow-2xl shadow-gray-200/70">
                    {/* Contact Form */}
                    <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-brand-red-500/70">Message</p>
                        <h2 className="text-3xl font-bold text-brand-darker mb-6">Send us a message</h2>
                        
                        {/* 
                          This is a hidden, static version of the form for Netlify's bots to find during the build.
                          It does not get displayed to the user.
                        */}
                       <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden>
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="name" />
  <input type="email" name="email" />
  <input type="tel" name="phone" />
  <textarea name="message"></textarea>
</form>
                        
                        {/* This is the visible form the user interacts with */}
                        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-5">

                            <input type="hidden" name="form-name" value="contact" />
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={inputStyles} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className={inputStyles} />
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={inputStyles} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message (Include car make, model, year)</label>
                                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className={inputStyles}></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full rounded-full bg-brand-red-600 text-white font-semibold py-3.5 px-6 transition-all duration-300 hover:bg-brand-red-700 hover:-translate-y-0.5 shadow-[0_15px_30px_rgba(239,0,0,0.35)] uppercase tracking-wide">Get Quote</button>
                            </div>
                        </form>
                        {status && <p className={`mt-4 text-sm text-center ${status.includes('Thank you') ? 'text-green-600' : 'text-gray-600'}`}>{status}</p>}
                    </div>

                    {/* Contact Info */}
                    <div className="text-gray-700">
                         <p className="text-xs uppercase tracking-[0.35em] text-brand-red-500/70">Information</p>
                         <h2 className="text-3xl font-bold text-brand-darker mb-6">Contact information</h2>
                         <p className="mb-6 leading-relaxed text-gray-600">
                            Have questions or want to discuss your vehicle's tuning options? Reach out to us. We operate a mobile service across Southport and the surrounding areas.
                         </p>
                         <ul className="space-y-5">
                            <li className="flex items-start rounded-2xl border-2 border-brand-red-600/30/70 p-4 bg-gray-50/80">
                                <svg className="w-6 h-6 mr-3 text-brand-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <div>
                                    <h3 className="font-semibold text-brand-darker">Location</h3>
                                    <p className="text-gray-600">Mobile Service based in Southport, UK</p>
                                </div>
                            </li>
                             <li className="flex items-start rounded-2xl border-2 border-brand-red-600/30/70 p-4 bg-gray-50/80">
                                <svg className="w-6 h-6 mr-3 text-brand-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <div>
                                    <h3 className="font-semibold text-brand-darker">Phone</h3>
                                    <a href="tel:+441512345678" className="text-brand-red-600 hover:text-brand-red-700">07871 297200</a>
                                </div>
                            </li>
                             <li className="flex items-start rounded-2xl border-2 border-brand-red-600/30/70 p-4 bg-gray-50/80">
                                <svg className="w-6 h-6 mr-3 text-brand-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <div>
                                    <h3 className="font-semibold text-brand-darker">Email</h3>
                                    <a href="mailto:Renko_Remaps@outlook.com" className="text-brand-red-600 hover:text-brand-red-700">Renko_Remaps@outlook.com</a>
                                </div>
                            </li>
                         </ul>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
};

export default Contact;
