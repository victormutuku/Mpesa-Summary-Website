import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";

import HeaderLinks from "./components/HeaderLinks";
import { latestVersion, arm64Url } from "./services/FirebaseConnection"
import FeatureCard from "./components/home/FeatureCard";
import FAQCard from "./components/home/FAQCard";


export default function Home() {
  const playstoreUrl = "https://play.google.com/store/apps/details?id=com.victor.spend_analysis";

  const { theme } = useTheme();

  const imageLink = theme !== 'light' ? "/images/icon.png" : "/images/icon-dark-2.png";

  return (
    <>
      <Head>
        <link rel="icon" href={imageLink} sizes="any" />
      </Head>
      <HeaderLinks active="home" />
      <div className="w-full h-screen lg:h-180 flex flex-col lg:flex-row items-center justify-center px-5 md:px-20 mt-10 sm:mt-30 lg:mt-0 mb-30">
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center">
          <div className="sm:w-125 flex flex-col items-center lg:items-start">
            <p className="text-[2em] text-magnolia-950 font-semibold z-10">Tracking your <span className="underlinfe font-bold">Expenses</span> has never been easier </p>
            <p className="font-light mb-5">Automatically track your spending on Mpesa. Get monthly and daily summaries of your spending. Know how much goes to transaction cost.</p>
            <a href={playstoreUrl} target="_blank" rel="noreferrer">
              <button
                type="button"
                className="bg-magnolia-950 text-magnolia-50 py-3 px-11 rounded-lg text-lg cursor-pointer flex gap-2">
                Get it now on
                <Image src={"/images/play-store-logo.svg"} alt='' width={20} height={20} />
              </button>
            </a>
          </div>
          <div className="relative"> 
            <Image src={"/images/landing-page.png"} width={600} height={600} alt="App Icon" className="hidden lg:block"/>
            <Image src={"/images/landing-page.png"} width={500} height={500} alt="App Icon" className="lg:hidden"/>
            <div className="absolute -bottom-13 left-1 w-123 lg:w-148 h-2 rounded-full bg-magnolia-950/50 blur-lg"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center mb-20">
        <p className="text-[2em] text-magnolia-950 font-semibold mb-10">Features</p>
        <div className="w-full px-5 lg:px-20 xl:px-40 grid grid-cols-1 gap-10 lg:flex lg:flex-col lg:gap-10">
          <FeatureCard
            title={"Monthly Summaries"}
            description={"Get monthly summaries of your Mpesa spending including the total outgoing amount and total transaction cost incurred in the month"}
            image={"/images/monthly-summary-cards-2.svg"}
          />
          <FeatureCard
            reverse
            title={"Budgeting"}
            description={"Create budgets to keep track of your spending. The budgets can be monthly, weekly, daily or even custom-defined e.g. A 2-week budget"}
            image={"/images/budget-card.svg"}
          />
          <FeatureCard
            title={"Monthly Trend Graph"}
            description={"Visualize your spending to learn your spending patterns across the month"}
            image={"/images/monthly-trend.svg"}
          />
            <FeatureCard
              reverse
              title={"Daily Summaries and Breakdown"}
              description={"Know how much you spent per day including where you spent it, and how many times you spent your money at the same place"}
              image={"/images/daily-summaries-2.svg"}
            />
          <FeatureCard
            title={"Establishments"}
            description={"Learn how much you've spent at your favourite places since forever!"}
            image={"/images/establishment-tiles.svg"}
          />
          <div className="w-full mt-10 flex justify-center">
            <a href={playstoreUrl} target="_blank" rel="noreferrer">
              <button
                type="button"
                className="bg-magnolia-950 text-magnolia-50 py-3 px-11 rounded-lg text-lg cursor-pointer">
                Download Now
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full  px-5 lg:px-20 flex flex-col justify-center items-center mb-20">
        <p className="text-[2em] text-magnolia-950 font-semibold mb-10">Frequently Asked Questions</p>
        <div className="w-full flex flex-col gap-5">
          <FAQCard
            question="Is the app free?"
            answer="Yes, most of the features are free. Some features are premuim and hence need to be paid for." />
          <FAQCard
            question="Do I need to sign up to use the app?"
            answer="No, most of the features are accessible without an account. An account is only needed if you want to access the premium features." />
          <FAQCard
            question="Can you see my M-Pesa balance/messages/summaries?"
            answer="No, I cannot. That stays private to you." />
        </div>
      </div>
      <div className="flex justify-between mb-0.5 mx-1 text-sm text-magnolia-950">
        <p>Made by <a href="https://www.victor-mutuku.com" rel="noreferrer" tabIndex={1} target="_blank" className="underline">Victor Mutuku</a></p>
        <p className="">Copyright 2026</p>
      </div>
    </>
  )
}
