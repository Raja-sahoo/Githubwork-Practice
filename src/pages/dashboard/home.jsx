import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import Mainform from "./Mainform";

export function Home() {
  console.log("Homepage");
  const navigate = useNavigate();
  const navigateToMainform = () => {
    navigate("/dashboard/mainform");
  };
  return (
    <div className="h-screen ">
      <div className="pb-6">
        <h1 className="mt-10 text-clip text-center text-2xl font-normal leading-7 text-gray-700">
          You don't have any application.Click on the
        </h1>
        <h2 className="mt-1 text-clip text-center  text-2xl font-normal leading-7 text-gray-700">
          create application button to create one.
        </h2>
      </div>
      <div className="text-center">
        <button
          className="mt-2 rounded border border-blue-700 bg-[#0F6F6F] py-4 px-4 text-2xl font-bold text-white hover:bg-[#05A8A8]"
          onClick={() => <Mainform />}
        >
          Create Application
        </button>
      </div>
    </div>
  );
}

export default Home;
