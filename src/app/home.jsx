import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";

import HeaderLinks from "./components/HeaderLinks";
import { latestVersion } from "./services/FirebaseConnection"


export default function Home() {
  const playstoreUrl = "https://play.google.com/store/apps/details?id=com.victor.mpesa_message";
  
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <link rel="icon" href={theme === 'light' ? "/images/icon.png" : "/images/icon-dark.png"} sizes="any" />
      </Head>
      <div className="flex flex-col items-center justify-center px-5 not-dark:bg-magnolia-50 dark:bg-magnolia-950 not-dark:text-magnolia-950 dark:text-magnolia-50">
        <HeaderLinks active="home" />
        <div className="pt-10 max-w-[900px] flex flex-col items-center pb-10">
          <Image src={theme === 'light' ? "/images/icon.png" : "/images/icon-dark.png"} width={150} height={150} alt="App Icon" />
          <div className="-mt-3 pb-10 flex flex-col items-center">
            <p className="font-medium text-5xl tracking-wide">SpendAnalysis</p>
          </div>
          <div className="text-cente tracking-wide text-xl font-light">
            <p className="mb-2">Introducing SpendAnalysis, the expenditure summary mobile application. This app gives you summaries of your daily and monthly expenditure of all transactions done through Mpesa.</p>
            <p className="mb-2">The summaries assist in financial planning and budgeting, as knowing you monthly expenditure assists in forecasting the next.</p>
            <p className="mb-0">The summaries generated are as accurate as your Mpesa messages are. This means that any deleted messages are not accounted for.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pb-5">
          <div className="mb-10">
            <a href={playstoreUrl} target="_blank" rel="noreferrer">
              <div className=" flex gap-5 justify-center items-center border-2 my-5 py-4 pl-6 pr-8 rounded-lg font-medium text-lg cursor-pointer whitespace-nowrap">
                <p>Download {latestVersion} on Play Store</p>
              </div>
            </a>
          </div>
          <p className="mb-5 text-2xl font-medium">Frequently Asked Questions</p>
          <div className="max-w-[900px] flex flex-col pb-10">
            <ol className="w-full">
              <li className="list-decimal list-inside text-xl font-medium mb-1">Does the app access my M-pesa Pin?</li>
              <p className="text-lg mb-5">No. It does not.</p>
              <li className="list-decimal list-inside text-xl font-medium mb-1">Does this app send any of my messages outside my phone e.g. to a server?</li>
              <p className="text-lg mb-5">No. All processing happens on-device.</p>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}
