import Link from 'next/link'

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col items-center justify-center pt-20 px-5 not-dark:bg-magnolia-50 dark:bg-magnolia-950 not-dark:text-magnolia-950 dark:text-magnolia-50">
            <div className="absolute top-8 left-10 right-10 flex justify-between">
                <Link href={'/'} className="hover:underline">Home</Link>
                <Link href={'/privacy'} className="hover:underline">Privacy</Link>
            </div>
            <p className='text-2xl font-medium lg:px-20 mb-8'>Privacy Policy</p>
            <div className="text- lg:px-20">
                <p className="font-semibold mb-5">Privacy Policy for SpendAnalysis</p>
                <p className="mb-7"><span className="font-semibold">Effective Date:</span> 4th November 2025</p>

                <p className="mb-8">Thank you for using SpendAnalysis, developed by VM Develops. This Privacy<br />
                    Policy outlines how we collect, use, and safeguard your information when you use the SpendAnalysis<br />
                    application. By using SpendAnalysis, you agree to the practices described in this policy.</p>

                <p className="font-semibold mb-5">Information We Collect:</p>

                <ol className="mb-8">
                    {/* <li className="mb-3 list-decimal list-inside">
                        <span className="font-semibold">User-Generated Content:</span>
                        SpendAnalysis allows you to create and store notes, images, and other<br />
                        content on your device. This data is stored locally on your device and is not transmitted to our<br /> servers.
                    </li> */}
                    <li className="mb-3 list-decimal list-inside">
                        <span className="font-semibold">Device Information:</span>
                        We may collect certain information about your device, such as the<br />
                        device model, operating system version, and unique device identifiers. This information helps us<br />
                        improve the application&apos;s compatibility and performance.
                    </li>
                </ol>

                <p className="font-semibold mb-5">How We Use Your Information:</p>
                <ol className="mb-8">
                    <li className="mb-3 list-decimal list-inside">
                        <span className="font-semibold">Improvement of Services:</span>
                        We use device information to analyze trends, troubleshoot<br />
                        issues, and enhance the overall performance and user experience of the application.
                    </li>
                    <li className="mb-3 list-decimal list-inside">
                        <span className="font-semibold">No Transmission of Data:</span>
                        SpendAnalysis operates on a local device basis. We do not collect, store,<br />
                        or transmit any user-generated content or personal information to our servers or any third<br />
                        parties.
                    </li>
                </ol>

                <p className="font-semibold mb-5">Data Security:</p>
                <p className="mb-8">
                    We take data security seriously and have implemented appropriate technical and organizational<br />
                    measures to protect your data from unauthorized access, loss, or alteration. Your<br />
                    user-generated content remains stored on your device and is not accessible to us.
                </p>

                <p className="font-semibold mb-5">Third-Party Services:</p>
                <p className="mb-8">
                    SpendAnalysis does not integrate with any third-party services, and no information is shared with third<br />
                    parties.
                </p>

                <p className="font-semibold mb-5">Children&apos;s Privacy:</p>
                <p className="mb-8">
                    SpendAnalysis is not intended for use by children under the age of 13. We do not knowingly collect<br />
                    personal information from children. If a parent or guardian becomes aware that their child has<br />
                    provided us with information without their consent, they should contact us at<br /> <a href="mailto:vmdevelops24@gmail.com" className="hover:underline">vmdevelops24@gmail.com</a>, and
                    we will delete such information.
                </p>

                <p className="font-semibold mb-5">Changes to Privacy Policy:</p>
                <p className="mb-8">
                    We may update our Privacy Policy from time to time. Any changes will be posted within the<br />
                    application or on our website. By continuing to use SpendAnalysis after those changes become<br />
                    effective, you agree to be bound by the revised Privacy Policy.
                </p>

                <p className="font-semibold mb-5">Contact Us:</p>
                <p className="mb-4">
                    If you have any questions or concerns about this Privacy Policy or your data, please contact us<br />
                    at <a href="mailto:vmdevelops24@gmail.com" className="hover:underline">vmdevelops24@gmail.com</a>.
                </p>
                <p className="mb-5">
                    By using the SpendAnalysis application, you agree to the terms and conditions outlined in this Privacy<br />
                    Policy. Please review this policy carefully, and if you do not agree with our practices, we<br />
                    recommend that you discontinue the use of SpendAnalysis.
                </p>

                <p className="mb-8">
                    VM Develops<br />
                    <a href="mailto:vmdevelops24@gmail.com" className="hover:underline">vmdevelops24@gmail.com</a>
                </p>
            </div>
        </div>

    )
}
