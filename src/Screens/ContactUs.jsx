import React from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Head from '../components/Head';
import Layout from '../Layout/Layout';

function ContactUs() {
  const ContactData = [
    {
      id: 1,
      title: 'Email Us',
      info: 'interactively grow frontend ideas for cross-platform model. Quick coordinate e-business applications trough revolutionary catalysts for change. continually seize superior initiatives for wireless technologies. dynamically optimize.',
      icon: FiMail,
      Contact: 'Email',
      link: 'https://www.facebook.com',
    },
    {
      id: 2,
      title: 'call Us',
      info: 'Distinctively exploit optimal alignments for intuitive bandwidth.',
      icon: FiPhone,
      Contact: '+255 789 456 123',
    },
    {
      id: 3,
      title: 'Location',
      info: 'Egypt , Cairo. Elmoez 10 ST',
      icon: FiMapPin,
      contact: '',
    },
  ];
  return (
    <Layout>
      <div className=" container mx-auto px-2 my-6">
        <Head title="Contact Us" />
        <div className="grid md:col-span-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8">
          {ContactData.map(item => (
            <div
              key={item.id}
              className="border border-border flex-colo p-10 bg-dry rounded-lg text-center"
            >
              <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl">
                <item.icon />
              </span>
              <h5 className="text-2xl font-semibold mb-2">{item.title}</h5>
              <p className="mb-0 text-sm text-text font-semibold leading-7">
                <a href={item.link} target="_blank" className="text-blue-600">
                  {item.Contact}
                </a>
                <br />
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
