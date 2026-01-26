import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";

import HeaderLinks from "./components/HeaderLinks";
import { latestVersion, arm64Url } from "./services/FirebaseConnection"


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
          <div className="text-center tracking-wide text-xl font-light">
            <p className="mb-2">Introducing SpendAnalysis, the expenditure summary mobile application. This app gives you summaries of your daily and monthly expenditure of all transactions done through Mpesa.</p>
            <p className="mb-2">The summaries assist in financial planning and budgeting, as knowing you monthly expenditure assists in forecasting the next.</p>
            <p className="mb-10">The summaries generated are as accurate as your Mpesa messages are. This means that any deleted messages are not accounted for.</p>
          </div>
          <p className="mb-5 text-2xl font-medium">Setup Instructions</p>
          <div className="text-xl font-light">
            <ol className="mb-5 pl-5">
              <li className="mb-2 list-decimal">Download the application by clicking the download button below.</li>
              <li className="mb-2 list-decimal">Turn off Play Protect on Google Playstore. This is to allow you to install an application that is not on the Google Playstore. Steps to turn off are shown below followed by screenshots.</li>
              <ul className="w-full text-left mb-5">
                <li className="list-disc list-inside mb-2">Open Google Playstore and click your account icon on the top right.</li>
                <Image src="/images/image-1.jpg" width={250} height={300} alt="Screenshot 1" className="ml-7"/>
                <li className="list-disc list-inside mb-2">Click Play Protect</li>
                <Image src="/images/image-2.jpg" width={250} height={300} alt="Screenshot 2" className="ml-7"/>
                <li className="list-disc list-inside mb-2">Click the settings icon at the top right</li>
                <Image src="/images/image-3.jpg" width={250} height={300} alt="Screenshot 3" className="ml-7"/>
                <li className="list-disc list-inside mb-2">Toggle the <span className="font-medium">Scan apps with Play Protect</span></li>
                <Image src="/images/image-4.jpg" width={250} height={300} alt="Screenshot 4" className="ml-7"/>
                <li className="list-disc list-inside mb-2">The following popup will appear. Click <span className="font-medium">Turn off</span>.</li>
                <Image src="/images/image-5.jpg" width={250} height={300} alt="Screenshot 5" className="ml-7"/>
                <li className="list-disc list-inside mb-2">You will be requested for your security credentials (PIN, fingerprint, Face ID)</li>
                <li className="list-disc list-inside mb-2">Once done, go to your download folder and open the application to install.</li>
              </ul>
              <li className="mb-2 list-decimal">Install the application. You might be requested to enable &quot;Install unknown apps&quot;. Enable this. This setting is just a security measure to preventing installing apps that are not from the Play Store</li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pb-5">
          <div className="mb-10">
            <a href={arm64Url}>
              <div className="w-58 flex gap-5 justify-center items-center border-2 my-5 py-4 pl-6 pr-8 rounded-lg font-medium text-lg cursor-pointer">
                <p>Download {latestVersion}</p>
              </div>
            </a>
          </div>
          {/* <div className="mb-10">
            <a href={playstoreUrl} target="_blank" rel="noreferrer">
              <div className=" flex gap-5 justify-center items-center border-2 my-5 py-4 pl-6 pr-8 rounded-lg font-medium text-lg cursor-pointer whitespace-nowrap">
                <p>Download {latestVersion} on Play Store</p>
              </div>
            </a>
          </div> */}
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
