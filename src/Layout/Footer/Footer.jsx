import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/netflix-logo.png';

function Footer() {
  const Links = [
    {
      title: 'Company',
      links: [
        {
          name: 'Home',
          link: '/',
        },

        {
          name: 'About Us',
          link: '/about-us',
        },

        {
          name: 'contact Us',
          link: '/contact-us',
        },

        {
          name: 'Movies',
          link: '/movies ',
        },
      ],
    },
    {
      title: 'Top Categories',
      links: [
        {
          name: 'Action',
          link: '#',
        },

        {
          name: 'Romantic',
          link: '#',
        },

        {
          name: 'Drama',
          link: '/#',
        },

        {
          name: 'Historical',
          link: '#',
        },
      ],
    },
    {
      title: 'My Account',
      links: [
        {
          name: 'Dashboard',
          link: '/dashboard',
        },

        {
          name: 'My Favorites',
          link: '/favorites',
        },

        {
          name: 'Profile',
          link: '/profile',
        },

        {
          name: 'Change Password',
          link: '/password',
        },
      ],
    },
  ];

  return (
    <div className=" bg-dry py-4   border-t-2 border-black">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
          {Links.map((link, index) => (
            <div
              key={index}
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3 sm:pb-0"
            >
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-1">
                {link.title}
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                {link.links.map((text, index) => (
                  <li key={index}>
                    <Link
                      className="text-border hover:text-subMain"
                      to={text.link}
                    >
                      {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="bp-3 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link to="/">
              <img
                src={Logo}
                className="object-contain w-2/4 h-12"
                alt="logo"
              />
            </Link>
            <p className="leading-7 text-sm text-border mt-3">
              <span>
                Lorem 196 Andrew Road Suite 200, <br />
                New York , NY 10007
              </span>
              <br />
              <span>Tell: +225 754 661 423</span>
              <br />
              <span>Email: info@zpunet.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;