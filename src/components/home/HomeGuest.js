import React from "react";
import Sidebar from "../headers/Sidebar";
import abstract from "../../helpers/images/abstract.svg";
import abstract2 from "../../helpers/images/SVG/abstract2.svg";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddLinkIcon from "@mui/icons-material/AddLink";
import { purple } from "@mui/material/colors";
import quincy from "../../helpers/images/quincy.jpg";

const HomeGuest = () => {
  return (
    <div className="flex px-4">
      <Sidebar />
      <div className="ml-6 my-4">
        <section className="flex items-center justify-between p-4 bg-blue-700 text-white font-bold rounded-2xl">
          <p className="">
            🌟 Introducing Vblog Boost your tech reading with AI-assisted
            features, exclusive perks, and more! Elevate your blogging
            experience like never before.
          </p>
          <p className="ml-8 w-40 px-8 py-4 border-white border-solid border-2 rounded-full text-center">
            Try now
          </p>
        </section>
        <section className="bg-white my-6 px-12 py-12 rounded-2xl flex  border border-slate-200">
          <div>
            <h1 className="text-7xl font-bold mx-4 my-4">
              <span className="text-blue-800">Home</span> for tech writers and
              readers
            </h1>
            <p className="text-xl mx-4 my-12 font-medium text-gray-700">
              The hassle-free blogging platform for engineers, thought-leaders,
              and the dev community!
            </p>
            <p className="text-2xl mx-4 my-8 font-semibold">
              Blog on a custom domain, own your content and share your ideas
              with the world.
            </p>
            <p className="bg-blue-600 font-bold text-white px-8 py-4 rounded-full w-max">
              Get started - it's free{" "}
            </p>
          </div>
          <div className="p-32">
            <img className="w-[40rem]" src={abstract} alt="abstract" />
          </div>
        </section>
        <section className="bg-white px-12 py-12 flex rounded-2xl border border-slate-200">
          <div className="w-[20rem] m-4">
            <img className="rounded-[2rem]" src={quincy} alt="quincy" />{" "}
          </div>
          <div>
            <p className="text-2xl p-4">
              "You can start a dev blog in just a few seconds using Hashnode and
              then you can move that to your own domain if you get one later.
              They will even help distribute your articles on their platform. By
              far the best place to create a blog, imho."
            </p>
            <p className="text-2xl p-4">
              <b>Quincy Larson</b>, Founder freeCodeCamp
            </p>
            <p className="bg-blue-600 font-bold text-white px-8 py-4 rounded-full w-max">
              Join the community
            </p>
          </div>
        </section>
        <section className="bg-[#0F172A] my-6 p-12 rounded-3xl text-white border border-slate-200">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl px-8 font-bold">
              Everything you need to start blogging as a developer!
            </h1>
            <img className="w-28 mx-44" src={abstract2} alt="abstract" />
          </div>
          <div className="grid grid-cols-2 gap-8 my-20">
            <div className="flex my-8 px-8">
              <BackupOutlinedIcon sx={{ color: purple[600], fontSize: 30 }} />
              <div className="px-4">
                <p className="font-bold text-xl mb-2">
                  Automatic github backup
                </p>
                <p>
                  Every time you publish an article on your tech blog, a
                  markdown version of the post is pushed to your private GitHub
                  repo as a backup.
                </p>
              </div>
            </div>
            <div className="flex my-8 px-8">
              <OfflineBoltOutlinedIcon
                sx={{ color: purple[600], fontSize: 30 }}
              />
              <div className="px-4">
                <p className="font-bold text-xl mb-2">
                  Automatic github backup
                </p>
                <p>
                  Every time you publish an article on your tech blog, a
                  markdown version of the post is pushed to your private GitHub
                  repo as a backup.
                </p>
              </div>
            </div>
            <div className="flex my-8 px-8">
              <AddCircleOutlineIcon sx={{ color: purple[600], fontSize: 30 }} />
              <div className="px-4">
                <p className="font-bold text-xl mb-2">
                  Automatic github backup
                </p>
                <p>
                  Every time you publish an article on your tech blog, a
                  markdown version of the post is pushed to your private GitHub
                  repo as a backup.
                </p>
              </div>
            </div>
            <div className="flex my-8 px-8">
              <AddLinkIcon sx={{ color: purple[600], fontSize: 30 }} />
              <div className="px-4">
                <p className="font-bold text-xl mb-2">
                  Automatic github backup
                </p>
                <p>
                  Every time you publish an article on your tech blog, a
                  markdown version of the post is pushed to your private GitHub
                  repo as a backup.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white px-12 py-12 flex rounded-2xl border border-slate-200">
          <div className="w-[20rem] m-4">
            <img className="rounded-[2rem]" src={quincy} alt="quincy" />{" "}
          </div>
          <div>
            <p className="text-2xl p-4">
              "You can start a dev blog in just a few seconds using Hashnode and
              then you can move that to your own domain if you get one later.
              They will even help distribute your articles on their platform. By
              far the best place to create a blog, imho."
            </p>
            <p className="text-2xl p-4">
              <b>Quincy Larson</b>, Founder freeCodeCamp
            </p>
            <p className="bg-blue-600 font-bold text-white px-8 py-4 rounded-full w-max">
              Join the community
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeGuest;
