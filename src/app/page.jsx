
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <p className="font-medium text-5xl tracking-wide pt-50 pb-20">Expenditure Summary</p>
      <p></p>
      <a href="https://raw.githubusercontent.com/victormutuku/Mpesa-Summary-Website/blob/master/src/assets/apk/app-release.apk" target='_blank' download="mpesa-summary-v1.0.0.apk" rel='noopener noreferrer' className="border py-4 px-12 rounded-lg font-medium text-lg cursor-pointer">Download</a>
    </div>
  );
}
