import HeaderLinks from '../components/HeaderLinks'

export default function PrivacyPolicy() {
    var companyName = "ComfortChest Limited";
    var address = "Chemilil Road, Nairobi, Kenya";
    var email = "victor.mmuu@gmail.com";
    var phone = "+254 758 973 766";

    var contactEmail = <a href={`mailto:${email}`} rel='noreferrer' className='underline'>{email}</a>

    return (
        <div className='w-full flex justify-center'>
            <div className="flex flex-col items-center justify-center pt-20 px-5 not-dark:text-magnolia-950 dark:text-magnolia-50 max-w-[900px]">
                <HeaderLinks active='privacy' />
                <p className='text-2xl font-medium lg:px-20 mb-4'>Privacy Policy</p>
                <p className="mb-6"><span className="font-semibold">Effective Date:</span> 8th April 2026</p>
                <div className="lg:px-20">
                    {/* 1. INTRODUCTION */}

                    <p className="font-semibold mb-4">1. INTRODUCTION</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>{companyName} (“we,” “us,” or “our”) operates the SpendAnalysis mobile application (“App”). We are committed to protecting your personal data and respecting your privacy in accordance with the Kenya Data Protection Act, 2019 (“the Act”) and its regulations.</p>
                        <p>This Privacy Policy explains what data we collect, why we collect it, how we use and protect it, and what rights you have over it. Please read this policy carefully before using the App. By creating an account or using the App, you acknowledge that you have read and understood this policy.</p>
                    </div>

                    {/* 2. WHO WE ARE */}

                    <p className="font-semibold mb-4">2. WHO WE ARE</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p><span className='font-semibold'>Data Controller:</span><br />
                            {companyName}<br />
                            {address}<br />
                            Email: {email}<br />
                            Phone: {phone}</p>
                        <p>We are the data controller responsible for the personal data you provide to us through the App. If you have any questions about how we handle your data, please contact us using the details above.</p>
                    </div>

                    {/* 3. WHAT DATA WE COLLECT */}

                    <p className="font-semibold mb-4">3. WHAT DATA WE COLLECT</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>
                            We collect only what is necessary to provide and improve the App. Here is a clear breakdown:
                        </p>

                        <p className='font-semibold mt-2'>3.1 Account Information</p>

                        <p>When you create an account, we collect:</p>
                        <ul className='ml-2'>
                            <li className='list-disc list-inside'>Your name</li>
                            <li className='list-disc list-inside'>Your email address</li>
                            <li className='list-disc list-inside'>Your password (stored in hashed, encrypted form — we never store your password in plain text)</li>
                        </ul>

                        <p className='font-semibold mt-2'>3.2 Subscription and Billing Information</p>

                        <p>When you subscribe to a paid tier, we collect:</p>
                        <ul className='ml-2'>
                            <li className='list-disc list-inside'>Your chosen subscription plan and status</li>
                            <li className='list-disc list-inside'>Payment confirmation references</li>
                        </ul>
                        <p> <span className='font-semibold'>Note:</span> We do not directly handle or store your full payment card details. Payment processing is handled by Google Play Store, and is subject to their own privacy policy.</p>
                        <p className='font-semibold mt-2'>3.3 Device and Usage Data</p>
                        <p>We automatically collect certain technical data when you use the App, including:</p>
                        <ul className='ml-2'>
                            <li className='list-disc list-inside'>Device identifiers (such as your device ID or advertising ID)</li>
                            <li className='list-disc list-inside'>App usage data (such as features used, session duration, and crash reports)</li>
                            <li className='list-disc list-inside'>Error logs generated during your use of the App
                                This data helps us diagnose issues, understand how the App is used, and improve performance.</li>
                        </ul>
                        <p className='font-semibold mt-2'> 3.4 What We Do NOT Collect</p>
                        <p>We want to be transparent about what we do not collect:</p>
                        <ul className='ml-2'>
                            <li className='list-disc list-inside'>We do not collect, transmit, or store your SMS messages</li>
                            <li className='list-disc list-inside'>We do not collect, transmit, or store your transaction data or spending summaries</li>
                            <li className='list-disc list-inside'>We do not collect, transmit, or store your transaction data or spending summaries</li>
                            <li className='list-disc list-inside'>All SMS processing and spending analysis happens entirely on your device</li>
                        </ul>
                        <p className='font-semibold'>Your financial data never leaves your phone.</p>
                    </div>

                    {/* 4. HOW WE COLLECT YOUR DATA */}

                    <p className="font-semibold mb-4">4. HOW WE COLLECT YOUR DATA</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>We collect your data in the following ways:</p>
                        <p>
                            <span className='font-semibold'>Directly from you</span> — when you register an account, update your profile, or subscribe to a plan.
                        </p>
                        <p><span className='font-semibold'>Automatically</span> — through the App itself, which generates usage data and error logs as you interact with it.</p>
                        <p><span className='font-semibold'>From your device</span> — device identifiers are collected automatically when you install and use the App.</p>
                    </div>

                    {/* 5. WHY WE COLLECT YOUR DATA */}

                    <p className="font-semibold mb-4">5. WHY WE COLLECT YOUR DATA (LEGAL BASIS AND PURPOSE)</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>
                            Under the Kenya Data Protection Act, 2019, we must have a lawful basis for processing your personal data. The table below sets out what we collect, why, and our legal basis for doing so:</p>
                        <table className='border-collapse border my-2'>
                            <thead>
                                <tr>
                                    <th className='border py-1'>Data</th>
                                    <th className='border py-1'>Purpose</th>
                                    <th className='border py-1'>Legal Basis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='border px-4 py-1 text-left'>Account information</td>
                                    <td className='border px-4 py-1 text-left'>Creating and managing your account</td>
                                    <td className='border px-4 py-1 text-left'>Performance of a contract</td>
                                </tr>
                                <tr>
                                    <td className='border px-4 py-1 text-left'>Subscription and billing Information</td>
                                    <td className='border px-4 py-1 text-left'>Administering your subscription and payments</td>
                                    <td className='border px-4 py-1 text-left'>Performance of a contract</td>
                                </tr>
                                <tr>
                                    <td className='border px-4 py-1 text-left'>Device identifiers and usage data</td>
                                    <td className='border px-4 py-1 text-left'>App analytics and performance improvement</td>
                                    <td className='border px-4 py-1 text-left'>Legitimate interests</td>
                                </tr>
                                <tr>
                                    <td className='border px-4 py-1 text-left'>Error logs</td>
                                    <td className='border px-4 py-1 text-left'>Diagnosing and fixing technical issues</td>
                                    <td className='border px-4 py-1 text-left'>Legitimate interests</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>We will not use your personal data for any purpose that is incompatible with the purposes listed above without first obtaining your consent.</p>
                    </div>

                    {/* 6. HOW WE STORE AND PROTECT YOUR DATA */}

                    <p className="font-semibold mb-4">6. HOW WE STORE AND PROTECT YOUR DATA</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p className='font-semibold mt-2'>6.1 Storage Location</p>
                        <p>Your account, subscription, and error log data is stored on secure servers. We take appropriate technical and organisational measures to protect your data against unauthorised access, loss, or disclosure.</p>
                        <p className='font-semibold mt-2'>6.2 Security Measures</p>
                        <p>Our security practices include:</p>
                        <ul className='ml-2'>
                            <li className='list-disc list-inside'>Encryption of data in transit (using TLS/SSL)</li>
                            <li className='list-disc list-inside'>Encryption of data at rest</li>
                            <li className='list-disc list-inside'>Secure, hashed storage of passwords</li>
                            <li className='list-disc list-inside'>Access controls limiting who within our organisation can access your data</li>
                            <li className='list-disc list-inside'>Regular security reviews</li>
                        </ul>
                        <p className='font-semibold mt-2'>6.3 Data Minimisation</p>
                        <p>
                            We collect only the minimum data necessary to operate the App. We do not process your SMS messages or financial transaction data on our servers at any point.</p>
                    </div>

                    {/* 7. HOW LONG WE KEEP YOUR DATA */}

                    <p className="font-semibold mb-4">7. HOW LONG WE KEEP YOUR DATA</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>
                            We retain your personal data for as long as your account is active or as necessary to deliver our services. Specifically:
                        </p>
                        <ul className='ml-2'>
                            <li className='list-disc list-inside'><span className='font-semibold'>Account information</span> — retained for the duration of your account, and deleted within 30 days of account deletion</li>
                            <li className='list-disc list-inside'><span className='font-semibold'>Subscription and billing information</span> — retained for up to 7 years as required by Kenyan tax and financial record-keeping obligations</li>
                            <li className='list-disc list-inside'><span className='font-semibold'>Device identifiers and usage data</span> — retained for up to 12 months, after which it is anonymised or deleted</li>
                            <li className='list-disc list-inside'><span className='font-semibold'>Error logs</span> — retained for up to 6 months for diagnostic purposes
                            </li>
                        </ul>
                        <p>When data is no longer needed, we securely delete or anonymise it.</p>
                    </div>

                    {/* 8. SHARING YOUR DATA */}

                    <p className="font-semibold mb-4">8. SHARING YOUR DATA</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>We do not sell your personal data to any third party. We may share your data only in the following limited circumstances:</p>
                        <p className='font-semibold mt-2'>8.1 Service Providers</p>
                        <p>
                            We work with trusted third-party service providers who help us operate the App, such as cloud hosting providers and payment processors. These providers are contractually required to process your data only on our instructions and in accordance with applicable data protection law.
                        </p>
                        <p className='font-semibold mt-2'>8.2 Legal Obligations</p>
                        <p>We may disclose your data if required to do so by law, court order, or a request from a competent government authority in Kenya.</p>

                        <p className='font-semibold mt-2'>8.3 Business Transfers</p>
                        <p>
                            In the event of a merger, acquisition, or sale of our business, your data may be transferred to the acquiring entity. We will notify you in advance if this occurs and ensure your data continues to be protected.
                        </p>
                        <p className='mt-4'>In all other cases, your data stays with us.</p>
                    </div>

                    {/* 9. YOUR RIGHTS UNDER THE KENYA DATA PROTECTION ACT, 2019 */}

                    <p className="font-semibold mb-4">9. YOUR RIGHTS UNDER THE KENYA DATA PROTECTION ACT, 2019</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p> <span className='font-semibold'>Right of Access</span> — You may request a copy of the personal data we hold about you at any time.</p>
                        <p> <span className='font-semibold'>Right to Rectification</span> — If any of your personal data is inaccurate or incomplete, you may request that we correct it.</p>
                        <p> <span className='font-semibold'>Right to Erasure</span> — You may request that we delete your personal data. We will comply unless we have a legal obligation to retain it.</p>
                        <p> <span className='font-semibold'>Right to Restrict Processing</span> — You may ask us to limit how we use your data in certain circumstances.</p>
                        <p> <span className='font-semibold'>Right to Object</span> — You may object to our processing of your data where we rely on legitimate interests as our legal basis.</p>
                        <p> <span className='font-semibold'>Right to Data Portability</span> — You may request a copy of your data in a structured, commonly used format.</p>
                        <p> <span className='font-semibold'>Right to Withdraw Consent</span> — Where we process your data based on your consent, you may withdraw that consent at any time without affecting the lawfulness of processing before withdrawal.</p>
                        <p>
                            To exercise any of these rights, contact us at {contactEmail}.  We will respond within 21 days as required under the Act. We may need to verify your identity before processing your request.</p>
                    </div>

                    {/* 10. COOKIES AND TRACKING TECHNOLOGIES */}

                    <p className="font-semibold mb-4">10. COOKIES AND TRACKING TECHNOLOGIES</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>The App itself does not use browser cookies. However, we may use device identifiers and analytics SDKs within the App to understand usage patterns and improve performance. You may be able to reset your device advertising ID through your device settings, which will limit our ability to associate usage data with your device over time.</p>
                    </div>

                    {/* 11. CHILDREN'S PRIVACY */}

                    <p className="font-semibold mb-4">11. CHILDREN&apos;S PRIVACY</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>SpendAnalysis is not intended for use by persons under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a minor, please contact us immediately at {contactEmail} and we will promptly delete it.</p>
                    </div>

                    {/* 12. CHANGES TO THIS PRIVACY POLICY */}

                    <p className="font-semibold mb-4">12. CHANGES TO THIS PRIVACY POLICY</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. When we make material changes, we will notify you via the App or by email before the changes take effect. The updated policy will always be available within the App and on our website.</p>
                        <p>
                            Your continued use of the App after the effective date of any changes constitutes your acceptance of the revised policy.</p>
                    </div>

                    {/* 13. HOW TO LODGE A COMPLAINT */}

                    <p className="font-semibold mb-4">13. HOW TO LODGE A COMPLAINT</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p className='mb-2'>If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC):</p>
                        <p>
                            <span className='font-semibold'>Office of the Data Protection Commissioner</span><br />
                            Website: www.odpc.go.ke<br />
                            Email: info@odpc.go.ke</p>
                        <p>We encourage you to contact us first at {contactEmail} so we can try to resolve your concern directly before you escalate to the ODPC.</p>
                    </div>

                    {/* 14. CONTACT US */}

                    <p className="font-semibold mb-4">14. CONTACT US</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p className='mb-2'>For any privacy-related questions, requests, or concerns, please reach out to us:</p>
                        <div className="flex flex-col gap-2 mb-8">
                            <p>
                                {companyName}<br />
                                {address}<br />
                                Email: <a href={`mailto:${email}`} rel='noreferrer'>{email}</a><br />
                                Phone: {phone}</p>
                            <p className='mt-4 font-semibold'>This Privacy Policy should be read alongside the SpendAnalysis Terms and Conditions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
