import contact1 from '../assets/contact1.png'
import qa from '../assets/qa.png'
// App.tsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* <div className="relative bg-green-50 overflow-hidden">
        <div className="h-64 flex items-center relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-7xl font-bold ">Contact</h1>
              <p className="text-xl mt-4">
                Pure love is amazing essence of each human which the more we
                give it to others, the happier we feel.
              </p>
            </div>
          </div>
        </div>

        <div 
          className="absolute inset-0 z-0 bg-cover bg-center rounded-bl-full"
          style={{ 
            backgroundImage: `url(${contact_background})`, 
            width: '70%', 
            left: '30%'
          }}
        />
      </div> */}

            <section className="relative h-[400px] w-full">
                <img
                    src="/contributors-banner.jpg"
                    alt="Smiling children"
                    className="absolute inset-0 object-cover w-full h-full rounded-md"
                />
                <div className="absolute bg-black/35 top-10 left-0 bottom-10 right-20" />
                <div className="absolute inset-0 flex items-center justify-center flex-col text-white text-4xl font-bold gap-3">
                    <h4 className="text-7xl font-bold text-white">Contact</h4>
                    <h4 className="text-2xl font-medium text-white text-center">Pure love is amazing essence of each human which the more
                        <br /> we give it to others, the happier we feel.</h4>
                </div>

            </section>

            {/* FAQ and Contact Form section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left side - FAQ */}
                    <div className="space-y-2">
                        <FaqItem title="Health in other Countries?" />

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center">
                                <div className="h-2 w-2 bg-red-500 rounded-full mr-2"></div>
                                <h3 className="font-medium text-gray-800">We Build and Create?</h3>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                                Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.
                            </p>
                        </div>

                        <FaqItem title="Water Delivery in Africa?" />
                        <FaqItem title="How to became a volunteer?" />
                        <FaqItem title="How Do I Make Donation" />
                        <FaqItem title="Health in other Countries?" />
                        <FaqItem title="Water Delivery in Africa?" />
                        <FaqItem title="How to became a volunteer?" />
                        <FaqItem title="How Do I Make Donation" />
                        <FaqItem title="Health in other Countries?" />
                    </div>

                    {/* Right side - Question form */}
                    <div>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                            <div className="flex items-center justify-center mb-8">
                                <img src={qa} alt="Q&A" className="h-32" />
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Any Question?</h2>
                            <p className="text-center text-gray-700 mb-6">
                                "The meaning of life is to find your gift.<br />
                                The purpose of life is to give it away."
                            </p>
                            <div className="flex justify-center">
                                <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                                    MAIL YOUR QUESTION
                                </button>
                            </div>
                        </div>

                        {/* Contact form */}
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your name *"
                                className="w-full p-3 border border-gray-300 rounded-md"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your email *"
                                className="w-full p-3 border border-gray-300 rounded-md"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Your phone"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <textarea
                                placeholder="Message"
                                rows={6}
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Contact Info section */}
            <div className="container mx-auto px-4 py-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img
                            src={contact1}
                            alt="Charity Jar"
                            className="rounded-lg w-full h-64 object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Info</h2>

                        <div className="space-y-4">
                            <ContactInfoItem
                                icon={<BuildingIcon />}
                                text="Company name: Smile Eye Charity"
                            />

                            <ContactInfoItem
                                icon={<LocationIcon />}
                                text="Pa-Ong Village, Ca Dy Commune, Nam Giang District, Quang Nam Province"
                            />

                            <ContactInfoItem
                                icon={<PersonIcon />}
                                text="Director: Nguyen Van A"
                            />

                            <ContactInfoItem
                                icon={<PhoneIcon />}
                                text="0123 456 789"
                            />

                            <ContactInfoItem
                                icon={<EmailIcon />}
                                text="smile@gmail.com"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Component for FAQ items
const FaqItem: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:bg-gray-50">
            <h3 className="font-medium text-gray-800">{title}</h3>
            <ChevronRight size={20} className="text-gray-500" />
        </div>
    );
};

// Component for contact info items
const ContactInfoItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => {
    return (
        <div className="flex items-start">
            <div className="mr-4 text-gray-700 mt-1">{icon}</div>
            <p className="text-gray-700">{text}</p>
        </div>
    );
};

// Simple icon components
const BuildingIcon = () => (
    <div className="h-6 w-6 flex items-center justify-center border border-gray-400 rounded">
        <span className="text-sm">🏢</span>
    </div>
);

const LocationIcon = () => (
    <div className="h-6 w-6 flex items-center justify-center border border-gray-400 rounded">
        <span className="text-sm">📍</span>
    </div>
);

const PersonIcon = () => (
    <div className="h-6 w-6 flex items-center justify-center border border-gray-400 rounded">
        <span className="text-sm">👤</span>
    </div>
);

const PhoneIcon = () => (
    <div className="h-6 w-6 flex items-center justify-center border border-gray-400 rounded">
        <span className="text-sm">📞</span>
    </div>
);

const EmailIcon = () => (
    <div className="h-6 w-6 flex items-center justify-center border border-gray-400 rounded">
        <span className="text-sm">✉️</span>
    </div>
);

export default ContactPage;