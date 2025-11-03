import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Home() {
    const downloadLink = "https://github.com/victormutuku/Mpesa-Summary-Website/releases/download/v1.0.0/spendanalysis_v1.0.0.apk";
  const {theme} = useTheme();
  return (
    <>
      <Head>
        <link rel="icon" href={theme === 'light' ? "/images/icon.png":  "/images/icon-dark.png"} sizes="any" />
      </Head>
      <div className="flex flex-col items-center justify-center px-5 not-dark:bg-magnolia-50 dark:bg-magnolia-950 not-dark:text-magnolia-950 dark:text-magnolia-50">
        <div className="h-screen flex flex-col items-center justify-center">
          <Image src={theme === 'light' ? "/images/icon.png":  "/images/icon-dark.png"} width={250} height={250} alt="App Icon" />
          <p className="font-medium text-5xl tracking-wide -mt-3 pb-10">SpendAnalysis</p>
          <a href={downloadLink} className="border-2 my-5 py-4 px-12 rounded-lg font-medium text-lg cursor-pointer">Download</a>
        </div>
        <div className="max-w-[900px] flex flex-col items-center pb-10">
          <div className="text-center tracking-wide text-xl font-light">
            <p className="mb-2">Introducing SpendAnalysis, the expenditure summary mobile application. This app gives you summaries of your daily and monthly expenditure of all transactions done through Mpesa.</p>
            <p className="mb-2">The summaries assist in financial planning and budgeting, as knowing you monthly expenditure assists in forecasting the next.</p>
            <p className="mb-10">The summaries generated are as accurate as your Mpesa messages are. This means that any deleted messages are not accounted for.</p>
          </div>
          <p className="mb-5 text-2xl font-medium">Setup Instructions</p>
          <div className="text-xl font-light">
            <ol>
              <li className="mb-2 list-decimal">Download the application by clicking the <a href={downloadLink} className="not-dark:text-magnolia-800 dark:text-magnolia-50 underline">download</a> button.</li>
              <li className="mb-2 list-decimal">Pause Play Protect on Google Playstore. This is to allow you to install an application that is not on the Google Playstore. Steps to disable are shown below followed by screenshots.</li>
            </ol>
            <ul className="w-full text-left mb-5">
              <li className="list-disc list-inside mb-2">Open Google Playstore and click your account icon on the top right.</li>
              <li className="list-disc list-inside mb-2">Click Play Protect</li>
              <li className="list-disc list-inside mb-2">Click the settings icon at the top right</li>
              <li className="list-disc list-inside mb-2">Toggle the <span className="font-medium">Scan apps with Play Protect</span></li>
              <li className="list-disc list-inside mb-2">The following popup will appear. Click <span className="font-medium">Turn off</span>.</li>
              <li className="list-disc list-inside mb-2">You will be requested for your security credentials (PIN, fingerprint, Face ID)</li>
              <li className="list-disc list-inside mb-2">Once done, go to your download folder and open the application to install.</li>
            </ul>
            <div className="flex gap-5 flex-wrap justify-center sm:justify-start">
              <Image src="/images/image-1.jpg" width={250} height={300} alt="Screenshot 1" />
              <Image src="/images/image-2.jpg" width={250} height={300} alt="Screenshot 2" />
              <Image src="/images/image-3.jpg" width={250} height={300} alt="Screenshot 3" />
              <Image src="/images/image-4.jpg" width={250} height={300} alt="Screenshot 4" />
              <Image src="/images/image-5.jpg" width={250} height={300} alt="Screenshot 5" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
