
import React from 'react';
import { Testimonial } from '../types';
import PageHero from '../components/PageHero';

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-brand-red-600' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
);

const testimonialsData: Testimonial[] = [
    {
        quote: "Absolutely brilliant service! The difference in my BMW after the remap is night and day. More power, better fuel economy, and the team were professional throughout.",
        name: 'John Davies',
        car: 'BMW 320d'
    },
    {
        quote: "Best decision I made for my Audi. The car feels completely transformed, and the service in Southport was top-notch. Highly recommend!",
        name: 'Sarah Mitchell',
        car: 'Audi A4'
    },
    {
        quote: "Took my Transit van for an ECO remap. I'm now saving a fortune on diesel, and it pulls much better when fully loaded. Brilliant service.",
        name: 'Mike P. (Builder)',
        car: 'Ford Transit Custom'
    },
    {
        quote: "Professional, knowledgeable, and honest. The remap has given my Mercedes incredible performance gains while maintaining reliability.",
        name: 'Michael Thompson',
        car: 'Mercedes C220'
    },
    {
        quote: "Really happy with the results on my Audi A3. Much better throttle response and the extra MPG is a welcome bonus. Cheers!",
        name: 'Emily R.',
        car: 'Audi A3 2.0 TDI'
    },
    {
        quote: "If you're looking for an ECU remap near you in Southport, look no further. These guys are the best in the business. 10/10.",
        name: 'David L.',
        car: 'Ford Focus ST'
    }
];

const TestimonialsPage: React.FC = () => {
    return (
        <div className="animate-fadeIn">
            <PageHero
              eyebrow="Testimonials"
              title="What our customers say"
              subtitle="Hear from satisfied clients about our tuning services in Southport."
            />

            <main className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonialsData.map((testimonial, index) => (
                           <div key={index} className="bg-white/90 p-8 rounded-3xl border-2 border-brand-red-600/30 shadow-xl flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className="flex-grow mb-4">
                                   <div className="flex items-center gap-3">
                                     <StarRating rating={5} />
                                     <span className="text-xs uppercase tracking-[0.35em] text-brand-red-600">Verified</span>
                                   </div>
                                    <p className="text-gray-600 italic mt-4 leading-relaxed">"{testimonial.quote}"</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-gray-200">
                                    <p className="font-bold text-brand-darker">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.car}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TestimonialsPage;