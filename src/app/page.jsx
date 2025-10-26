
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <p className="font-medium text-5xl tracking-wide pt-50 pb-20">Mpesa Summary</p>
      <p></p>
      <a href="../assets/apk/app-release.apk" target='_blank' download="mpesa-summary-v1.0.0.apk" rel='noreferrer' className="border py-4 px-12 rounded-lg font-medium text-lg cursor-pointer">Download</a>
    </div>
  );
}
