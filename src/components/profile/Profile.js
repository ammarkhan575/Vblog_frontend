import React, { useState } from "react";
import { useEffect } from "react";
import { Typography } from '@mui/material'
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile(props) {
  const handleChange1 = (e) => {
    {
      props.setname(e.target.value);
    }
    localStorage.setItem("inputValue1", e.target.value);
  };

  const handleChange2 = (e) => {
    {
      props.setbio(e.target.value);
    }

    localStorage.setItem("inputValue2", e.target.value);
  };

  const handleChange3 = (e) => {
    {
      props.setavail(e.target.value);
    }

    localStorage.setItem("inputValue3", e.target.value);
  };

  const handleChange4 = (e) => {
    {
      props.settechstack(e.target.value);
    }

    localStorage.setItem("inputValue4", e.target.value);
  };

  useEffect(() => {
    {
      props.setname(localStorage.getItem("inputValue1"));
    }
    {
      props.setbio(localStorage.getItem("inputValue2"));
    }
    {
      props.setavail(localStorage.getItem("inputValue3"));
    }
    {
      props.settechstack(localStorage.getItem("inputValue4"));
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 w-screen mx-10 mt-5 sm:grid-cols-1">
        {/* Left Box */}
        <div className="grid grid-cols-1 mx-8">
          <Typography variant='h4' sx={{ fontSize: '20px' }}>Basic Info</Typography>

          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="profile-tagline" className="block text-sm font-medium leading-6 text-gray-900">
              Profile Tagline
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="profile-tagline"
                id="profile-tagline"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <p>Profile Photo </p>
            <div class="w-20 h-20 rounded-full bg-blue-500">
              {props?.name?.charAt(0).toUpperCase()}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
              Location
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="location"
                id="location"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <div className="sm:col-span-3">
            <label htmlFor="profile-tagline" className="block text-sm font-medium leading-6 text-gray-900">
              Profile Tagline
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="profile-tagline"
                id="profile-tagline"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <Typography variant='h4' sx={{ fontSize: '20px' }}>About You</Typography>

          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
              About
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="techstack" className="block text-sm font-medium leading-6 text-gray-900">
              Tech Stack
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="techstack"
                id="techstack"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="available" className="block text-sm font-medium leading-6 text-gray-900">
              Available For
            </label>
            <div className="mt-2">
              <textarea
                id="available"
                name="available"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>

        </div>

        {/* Right Box */}
        <div className="grid grid-cols-1 mx-8">
          <Typography variant='h4' sx={{ fontSize: '20px' }}>Social</Typography>

          <div className="sm:col-span-3">
            <label htmlFor="twitter-profile" className="block text-sm font-medium leading-6 text-gray-900">
              Twitter Profile
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="twitter-profile"
                id="twitter-profile"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="insta-profile" className="block text-sm font-medium leading-6 text-gray-900">
              Instagram Profile
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="insta-profile"
                id="insta-profile"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="github-profile" className="block text-sm font-medium leading-6 text-gray-900">
              Github Profile
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="github-profile"
                id="github-profile"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="stackOverflow-profile" className="block text-sm font-medium leading-6 text-gray-900">
              StackOverFlow Profile
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="stackOverFlow-profile"
                id="stackOverFlow-profile"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="facebook-profile" className="block text-sm font-medium leading-6 text-gray-900">
              Facebook Profile
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="facebook-profile"
                id="facebook-profile"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="website-url" className="block text-sm font-medium leading-6 text-gray-900">
              Website Url
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="website-url"
                id="website-url"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="linkedin-profile" className="block text-sm font-medium leading-6 text-gray-900">
              LinkedIn Profile
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="linkedin-profile"
                id="linkedin-profile"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="stackOverflow-profile" className="block text-sm font-medium leading-6 text-gray-900">
              StackOverFlow Profile
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="stackOverFlow-profile"
                id="stackOverFlow-profile"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <Typography variant='h4' sx={{ fontSize: '20px' }}>Profile Identity</Typography>

          <div className="sm:col-span-3">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="username"
                id="username"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="email"
                id="email"
                className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update
            </button>
          </div>
        </div>

      </div>


    </>
  );
}

export default Profile;
