"use client"
import React, {useState, useEffect} from "react";
import {
  ChartBarIcon as ChartBarIconOutline,
  UsersIcon as UsersIconOutline,
  UserPlusIcon as UserPlusIconOutline,
  CurrencyDollarIcon as CurrencyDollarIconOutline,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import {ChartBarIcon as ChartBarIconSolid, UsersIcon as UsersIconSolid, CurrencyDollarIcon as CurrencyDollarIconSolid, UserPlusIcon as UserPlusIconSolid} from "@heroicons/react/24/solid";
import adam from "@/public/adam.jpeg";
import Image from "next/image";

const SideBar = () => {

  const [select, setSelect] = useState(0);


  return (
    <div className="bg-primary flex flex-col p-5 gap-y-5 rounded-3xl basis-1/5">
      <div onClick={() => setSelect(0)} className={`text-white flex items-center p-4 gap-3 rounded-xl cursor-pointer ${select === 0 && "bg-sky-500"}`}>
        {select == 0 ? <ChartBarIconSolid width={19} height={19} /> : <ChartBarIconOutline width={19} height={19} />}
        <p className="">Dashboard</p>
      </div>
      <div onClick={() => setSelect(1)} className={`text-white flex items-center p-4 gap-3 rounded-xl cursor-pointer ${select === 1 && "bg-sky-500"}`}>
      {select == 1 ? <UsersIconSolid width={19} height={19} /> : <UsersIconOutline width={19} height={19} />}
        <p>Employee</p>
        {select == 1 ? <ChevronUpIcon className="ml-auto" width={19} height={19} /> : <ChevronDownIcon className="ml-auto" width={19} height={19} />}
      </div>
      <div onClick={() => setSelect(2)} className={`text-white flex items-center p-4 gap-3 rounded-xl cursor-pointer ${select === 2 && "bg-sky-500"}`}>
        {select == 2 ? <CurrencyDollarIconSolid width={19} height={19} /> : <CurrencyDollarIconOutline width={19} height={19} />}
        <p>Payroll</p>
        {select == 2 ? <ChevronUpIcon className="ml-auto" width={19} height={19} /> : <ChevronDownIcon className="ml-auto" width={19} height={19} />}
      </div>
      <div onClick={() => setSelect(3)} className={`text-white flex items-center p-4 gap-3 rounded-xl cursor-pointer ${select === 3 && "bg-sky-500"}`}>
        {select == 3 ? <UserPlusIconSolid width={19} height={19} /> : <UserPlusIconOutline width={19} height={19} />}
        <p>Recruitment</p>
      </div>
      <div className="mt-auto flex items-center gap-3">
        <img className="rounded-full border-[3px]" src="/adam.jpeg" width="48" height="48"/>
        <div className="text-white">
        <h1 className="font-semibold">Hadi Yusuf</h1>
        <p className="text-xs">Human Resource</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
