import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch, FaHeart } from 'react-icons/fa';
import { CgUser } from 'react-icons/cg';
import SearchMovie from '../../Screens/SearchMovie';
import { useState } from 'react';
import Logo from '../../assets/netflix-logo.png';

function NavBar() {
  const hover = 'hover:text-subMain transitions text-white';
  const Hover = ({ isActive }) => (isActive ? 'text-subMain' : hover);
  const [data, setData] = useState('');

  const handleChange = e => {
    setData(e.target.value);
  };
  return (
    <div className="sticky top-0 z-20 shadow-md bg-main">
      <div className="container items-center justify-between grid-cols-7 px-2 py-6 mx-auto lg:grid gap:10">
        <div className="hidden col-span-1 lg:block ">
          {/* Logo */}
          <Link to={'/'}>
            <img src={Logo} className="object-contain w-full h-10" alt="logo" />
          </Link>
        </div>
        {/* Search Form */}

        <div className="col-span-3 ">
          <form
            className="w-full gap-4 text-sm rounded bg-dryGray flex-btn"
            onSubmit={e => {
              e.preventDefault();
              setData(data);
            }}
          >
            <button
              type="submit"
              className="w-12 h-12 text-white rounded bg-subMain flex-colo"
            >
              <FaSearch />
            </button>
            <input
              type="search"
              placeholder="Search Movie Name from here"
              className="w-11/12 h-12 px-2 text-sm   font-semibold text-black bg-transparent border-none placeholder:text-border"
              value={data}
              onChange={handleChange}
            />
          </form>
        </div>
        {/* Menu */}
        <div className="col-span-3 font-medium  hidden xl:gap-14 lg:pl-6  2xl:gap-20 justify-between lg:flex lg:gap xl:justify-end  items-center">
          <NavLink to={'/movies'} className={Hover}>
            Movies
          </NavLink>
          <NavLink to={'/about-us'} className={Hover}>
            About Us
          </NavLink>
          <NavLink to={'/contact-us'} className={Hover}>
            Contact Us
          </NavLink>
          <NavLink to={'/login'} className={Hover}>
            <CgUser className="w-6 h-6" />
          </NavLink>
          <NavLink to={'/favorites'} className={`${Hover} relative`}>
            <FaHeart className="w-6 h-6" />
            <div className="w-5 h-5 flex-colo   rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
              2
            </div>
          </NavLink>
        </div>
      </div>
      <SearchMovie movie={data} />
    </div>
  );
}

export default NavBar;
