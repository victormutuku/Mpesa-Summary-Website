import HeaderLinks from '../components/HeaderLinks'

export default function ChangeLog() {
    return (
        <div className="h-screen flex flex-col items-center pt-20 px-5 not-dark:bg-magnolia-50 dark:bg-magnolia-950 not-dark:text-magnolia-950 dark:text-magnolia-50">
            <HeaderLinks active='changelog'/>
            <p className='text-2xl font-medium lg:px-20 mb-8'>ChangeLog</p>
            <div className="lg:px-20">
                <p className="text-xl font-semibold mb-4">1.0.1</p>
                <ul className='mb-5'>
                    <li className='list-disc list-inside'>Added settings page</li>
                    <ul className='ml-5'>
                        <li className='list-disc list-inside'>Users can toggle screen capture (screen recording and screenshotting).</li>
                        <li className='list-disc list-inside'>Users can toggle authentication using screen lock.</li>
                    </ul>
                    <li className='list-disc list-inside'>Able to detect new version of app and alert user</li>
                </ul>

                <p className="text-xl font-semibold mb-4">1.0.0</p>
                <ul className='mb-5'>
                    <li className='list-disc list-inside'>First version of the application</li>
                </ul>
            </div>
        </div>
    )
}
