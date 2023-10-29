import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { Routes, Route, useNavigate } from "react-router-dom";
// import ProgressBar from "@/component/Progressbar";
// import LinearProgress from "@mui/material/LinearProgress";
export function Header() {
  // const [progress, setProgress] = useState(0);
  return (
    <>
      <div>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="mt-16 text-clip text-center text-3xl font-semibold leading-7 text-[#495656]">
              Saraswati Vidya Academy
            </h1>
            <h2 className="mt-2 text-clip text-center text-base font-semibold leading-7 text-[#A3A3A3]">
              Address: Village Shilatne, Maval. Dist.Pune, Maharastra 410405
            </h2>
            <h2 className="mt-2 mb-4 text-clip text-center text-base font-semibold leading-7 text-[#A3A3A3]">
              Mobile: +91 8655706526Email Id: support@saraswatividya.academy
            </h2>
            <div className="flex flex-col md:flex-row">
              <div className=" p-4 py-24 text-center text-2xl font-bold text-[#495656] md:w-8/12 lg:text-[32px]">
                Admission Form
              </div>
              <div className=" p-4 md:w-1/4 xl:w-1/4">
                <div className="mt-2 border-4 border-green-900 px-4 py-6">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-10 w-10 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    />
                    <div className="mt-4  text-sm ">
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className=" px-4 ">
              <ProgressBar progress={progress} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
