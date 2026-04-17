import React from 'react'
import HeaderLinks from '../../components/HeaderLinks'

export default function TermsAndConditions() {
    var companyName = "ComfortChest Limited";
    var address = "Chemilil Road, Nairobi, Kenya";
    var email = "victor.mmuu@gmail.com";
    var phone = "+254 758 973 766";

    var contactEmail = <a href={`mailto:${email}`} rel='noreferrer' className='underline'>{email}</a>

    return (
        <div className='w-full flex justify-center'>
            <div className="flex flex-col items-center justify-center pt-20 px-5 max-w-225">
                <HeaderLinks active='terms' />
                <p className='text-2xl font-medium lg:px-20 mb-4'>Terms and Conditions</p>
                <p className="mb-6"><span className="font-semibold">Effective Date:</span> 6th April 2026</p>
                <div className="lg:px-20">

                    {/* 1. INTRODUCTION */}

                    <p className="font-semibold mb-4">1. INTRODUCTION</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>Welcome to SpendAnalysis. These Terms and Conditions (“Terms”) govern your use of the SpendAnalysis mobile application (“App”), operated by {companyName} (“we,” “us,” or “our”), a company registered in Kenya.</p>
                        <p>By downloading, installing, or using the App, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use the App.</p>
                    </div>

                    {/* 2. ELIGIBILITY */}

                    <p className="font-semibold mb-4">2. ELIGIBILITY</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>You must be at least 18 years of age to use SpendAnalysis. By using the App, you represent that you meet this requirement. If you are under 18, you may only use the App with the consent and supervision of a parent or legal guardian.</p>
                    </div>

                    {/* 3. DESCRIPTION OF THE SERVICE */}

                    <p className="font-semibold mb-4">3. DESCRIPTION OF THE SERVICE</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>SpendAnalysis is a personal finance tool that:</p>
                        <ul className='ml-2'>
                            <li className='list-disc list-inside'>Reads SMS messages stored on your device to identify financial transaction messages (such as M-Pesa notifications, bank alerts, and similar messages);</li>
                            <li className='list-disc list-inside'>Processes the content of those messages to extract spending data; and</li>
                            <li className='list-disc list-inside'>Generates daily and monthly summaries of your spending patterns over time.</li>
                        </ul>
                        <p>The App is designed to help you understand your spending habits. It does not initiate, authorise, or modify any financial transactions on your behalf.</p>
                    </div>

                    {/* 4. SUBSCRIPTIONS */}

                    <p className="font-semibold mb-4">4. SUBSCRIPTIONS</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p className='font-semibold'>4.1 Subscription Plans</p>
                        <p>SpendAnalysis offers the following subscription plans:</p>
                        <ul className='ml-2'>
                            <li className='list-disc list-inside'><span className='font-semibold'>Free Plan</span> — access to core features at no charge</li>
                            <li className='list-disc list-inside'><span className='font-semibold'>Premium Plan</span> — access to all features, including extended spending history and advanced summaries, billed monthly at KES 500 per month</li>
                        </ul>
                        <p>You can view the full breakdown of features available on each plan within the App.</p>

                        <p className='font-semibold mt-4'>4.2 Billing and Payment</p>
                        <p>Subscription fees are charged in advance at the start of each billing period. Payment is processed by Google Play Store and is subject to the <a href="https://play.google.com/about/play-terms/" rel='noreferrer' className='underline'>Google Play Terms of Service</a>.</p>
                        <p>By subscribing, you authorise Google Play Store to charge your chosen payment method for the applicable subscription fee on a recurring basis. Any billing disputes should be directed to Google Play Store in the first instance.</p>

                        <p className='font-semibold mt-4'>4.3 Automatic Renewal</p>
                        <p>Premium Plan subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date. You will be charged KES 500 at the start of each new monthly billing period.</p>
                        <p>To avoid being charged for the next period, you must cancel your subscription at least 24 hours before your renewal date, in accordance with Google Play Store’s cancellation policy.</p>

                        <p className='font-semibold mt-4'>4.4 Cancellation</p>
                        <p>You may cancel your Premium Plan subscription at any time through the Google Play Store subscriptions management page. Instructions on how to cancel can be found at <a href="support.google.com/googleplay" rel='noreferrer' className='underline'>support.google.com/googleplay</a>.</p>
                        <p>Cancellation takes effect at the end of your current billing period — you will retain access to Premium features until that date. After the billing period ends, your account will revert to the Free Plan. Cancelling your subscription does not delete your account.</p>

                        <p className='font-semibold mt-4'>4.5 Refunds</p>
                        <p>As payments are processed by Google Play Store, all refund requests are subject to the <a href="https://support.google.com/googleplay/answer/2479637" rel='noreferrer' className='underline'> Google Play refund policy</a>. We do not process refunds directly.</p>
                        <p>If you believe you are entitled to a refund, please submit your request through Google Play Store. We will cooperate with any refund process initiated by Google Play Store on your behalf.</p>
                        <p>Notwithstanding the above, if you are entitled to a refund under the Consumer Protection Act, 2012 (Kenya), please also contact us at {contactEmail} and we will work with you to resolve the matter.</p>

                        <p className='font-semibold mt-4'>4.6 Price Changes</p>
                        <p>We reserve the right to change the price of the Premium Plan. If we increase the subscription price, we will notify you at least 30 days in advance via the App or email.</p>
                        <p>The new price will apply from your next renewal date. If you do not agree with the new price, you may cancel your subscription before the renewal date through Google Play Store and you will not be charged the higher amount.</p>

                        <p className='font-semibold mt-4'>4.7 Suspension and Termination of Subscription</p>
                        <p>If your account is suspended or terminated for a violation of these Terms, you will lose access to Premium features immediately.</p>
                        <p>As payments are managed by Google Play Store, any refund eligibility in such circumstances will be governed by their refund policy. If we terminate your account for reasons other than a breach on your part, please contact us at {contactEmail} to discuss refund options for any unused portion of your billing period.</p>
                    </div>

                    {/* 5. PERMISSIONS AND DATA ACCESS */}

                    <p className="font-semibold mb-4">5. PERMISSIONS AND DATA ACCESS</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p className='font-semibold'>5.1 SMS Access</p>
                        <p>To function, SpendAnalysis requires permission to read SMS messages on your device. This permission is used solely to identify and extract financial transaction information.</p>
                        <p>We do not read, store, or transmit personal messages unrelated to financial transactions.</p>

                        <p className='font-semibold mt-4'>5.2 Scope of Access</p>
                        <p>The App accesses only the data necessary to provide the service. You may revoke SMS permissions at any time through your device settings, though this will limit or disable the App’s core functionality.</p>

                        <p className='font-semibold mt-4'>5.3 Notification Access</p>
                        <p>SpendAnalysis requests permission to send you push notifications. This is used to deliver your daily and monthly spending summaries, transaction alerts, and other App updates.</p>
                        <p>You may disable notifications at any time through your device settings without affecting the App’s core functionality.</p>

                        <p className='font-semibold mt-4'>5.4 On-Device Processing</p>
                        <p>All message processing is performed locally on your device. Your SMS messages and extracted transaction data are never transmitted to our servers.</p>
                        <p>The only information sent to our servers is:</p>
                        <ul className='ml-2'>
                            <li className='list-disc list-inside'>Account information (such as your name and email address);</li>
                            <li className='list-disc list-inside'>Subscription information (such as your plan and billing status); and</li>
                            <li className='list-disc list-inside'>Error logs generated by the App during usage, to help us diagnose and fix technical issues.</li>
                        </ul>
                    </div>

                    {/* 6. PRIVACY AND DATA PROTECTION */}

                    <p className="font-semibold mb-4">6. PRIVACY AND DATA PROTECTION</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>We are committed to protecting your personal data in accordance with the Kenya Data Protection Act, 2019 and the regulations made thereunder.</p>

                        <p className='font-semibold mt-2'>6.1 Data Collected</p>
                        <p>We may collect and process the following:</p>
                        <ul className='ml-2'>
                            <li className='list-disc list-inside'>Account information (name, email address, and authentication details);</li>
                            <li className='list-disc list-inside'>Subscription and billing information;</li>
                            <li className='list-disc list-inside'>Device identifiers and App usage data for the purposes of analytics and App improvement; and</li>
                            <li className='list-disc list-inside'>Error logs generated during your use of the App.</li>
                        </ul>
                        <p>We do not collect, store, or transmit your SMS messages or transaction data. All spending analysis is performed entirely on your device.</p>

                        <p className='font-semibold mt-2'>6.2 Purpose of Processing</p>
                        <p>Your data is processed solely for the purposes of managing your account, administering your subscription, improving the App experience, and resolving technical issues. We do not sell your personal data to third parties.</p>

                        <p className='font-semibold mt-2'>6.3 Data Storage</p>
                        <p>Your account, subscription, and error log data is stored securely on our servers. All spending and transaction data remains exclusively on your device and is never transmitted to or stored by us.</p>

                        <p className='font-semibold mt-2'>6.4 Your Rights</p>
                        <p>Under the Data Protection Act, 2019, you have the right to:</p>
                        <ul className='ml-2'>
                            <li className='list-disc list-inside'>Access the personal data we hold about you;</li>
                            <li className='list-disc list-inside'>Request correction of inaccurate data;</li>
                            <li className='list-disc list-inside'>Request deletion of your data (“right to be forgotten”);</li>
                            <li className='list-disc list-inside'>Withdraw consent at any time; and</li>
                            <li className='list-disc list-inside'>Lodge a complaint with the Office of the Data Protection Commissioner (ODPC).</li>
                        </ul>
                        <p>To exercise any of these rights, contact us at {contactEmail}.</p>

                        <p className='font-semibold mt-2'>6.5 Data Retention</p>
                        <p>We retain your data for as long as your account is active or as necessary to provide the service. Upon account deletion, we will delete your personal data within 30 days, except where we are required by law to retain it.</p>
                    </div>

                    {/* 7. USER OBLIGATIONS */}

                    <p className="font-semibold mb-4">7. USER OBLIGATIONS</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>By using SpendAnalysis, you agree to:</p>
                        <ul className='ml-2'>
                            <li className='list-disc list-inside'>Use the App only for lawful, personal purposes;</li>
                            <li className='list-disc list-inside'>Not attempt to reverse-engineer, decompile, or tamper with the App;</li>
                            <li className='list-disc list-inside'>Not use the App to process data belonging to another person without their consent;</li>
                            <li className='list-disc list-inside'>Keep your account credentials confidential and notify us immediately of any unauthorised access.</li>
                        </ul>
                    </div>

                    {/* 8. INTELLECTUAL PROPERTY */}

                    <p className="font-semibold mb-4">8. INTELLECTUAL PROPERTY</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>All content, features, and functionality of the App — including but not limited to software, design, trademarks, and data models — are the exclusive property of {companyName} and are protected under applicable Kenyan and international intellectual property laws.</p>
                        <p>You are granted a limited, non-exclusive, non-transferable licence to use the App for personal, non-commercial purposes.</p>
                    </div>

                    {/* 9. ACCURACY OF SUMMARIES */}

                    <p className="font-semibold mb-4">9. ACCURACY OF SUMMARIES</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>SpendAnalysis relies on the format and content of SMS messages to extract transaction data. We do not guarantee that all transactions will be captured or that all summaries will be completely accurate.</p>
                        <p>The App is intended as a personal budgeting aid and should not be solely relied upon for financial decision-making. Always verify important financial information with your bank or financial service provider.</p>
                    </div>

                    {/* 10. THIRD-PARTY SERVICES */}

                    <p className="font-semibold mb-4">10. THIRD-PARTY SERVICES</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>The App may integrate with or display information from third-party services (e.g., mobile money providers, banks). We are not responsible for the accuracy, availability, or conduct of any third-party service.</p>
                        <p>Any links or references to third-party services do not constitute our endorsement of those services.</p>
                    </div>

                    {/* 11. DISCLAIMER OF WARRANTIES */}

                    <p className="font-semibold mb-4">11. DISCLAIMER OF WARRANTIES</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>The App is provided on an “as is” and “as available” basis. To the fullest extent permitted by Kenyan law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
                        <p>We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
                    </div>

                    {/* 12. LIMITATION OF LIABILITY */}

                    <p className="font-semibold mb-4">12. LIMITATION OF LIABILITY</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>To the maximum extent permitted by law, {companyName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the App, including any loss of data or financial loss, even if we have been advised of the possibility of such damages.</p>
                        <p>Our total liability to you for any claim arising from use of the App shall not exceed the amount you paid (if any) for the App in the 12 months preceding the claim.</p>
                    </div>

                    {/* 13. TERMINATION */}

                    <p className="font-semibold mb-4">13. TERMINATION</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>We reserve the right to suspend or terminate your access to the App at any time, with or without notice, if we reasonably believe you have violated these Terms.</p>
                        <p>You may stop using the App and delete it at any time. Upon termination, the provisions of these Terms that by their nature should survive (including data protection obligations and intellectual property rights) shall continue to apply.</p>
                    </div>

                    {/* 14. CHANGES TO THESE TERMS */}

                    <p className="font-semibold mb-4">14. CHANGES TO THESE TERMS</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>We may update these Terms from time to time. When we do, we will notify you through the App or by email.</p>
                        <p>Continued use of the App after the effective date of the updated Terms constitutes your acceptance of the changes. If you do not agree to the revised Terms, you must stop using the App.</p>
                    </div>

                    {/* 15. GOVERNING LAW AND DISPUTE RESOLUTION */}

                    <p className="font-semibold mb-4">15. GOVERNING LAW AND DISPUTE RESOLUTION</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>These Terms are governed by the laws of the Republic of Kenya.</p>

                        <p className='font-semibold mt-2'>15.1 Good-Faith Negotiation</p>
                        <p>If a dispute arises between you and us relating to these Terms or your use of the App, both parties agree to first attempt to resolve the dispute through good-faith negotiation.</p>
                        <p>To initiate this process, please contact us at {contactEmail} with a description of your concern. We will endeavour to respond within 14 days and work with you towards a resolution.</p>
                        <p>This negotiation period shall last no longer than 30 days from the date we receive your written notice of the dispute, unless both parties agree in writing to extend it.</p>

                        <p className='font-semibold mt-2'>15.2 Mediation</p>
                        <p>If the dispute cannot be resolved through good-faith negotiation within the 30-day period, either party may refer the matter to mediation before initiating court proceedings.</p>
                        <p>Mediation shall be administered by the Nairobi Centre for International Arbitration (NCIA) or a neutral mediator agreed upon in writing by both parties. The costs of mediation shall be shared equally between the parties unless the mediator determines otherwise.</p>
                        <p>Any agreement reached through mediation shall be recorded in writing and signed by both parties, at which point it becomes binding.</p>

                        <p className='font-semibold mt-2'>15.3 Litigation</p>
                        <p>If mediation is unsuccessful, is declined by either party, or cannot be arranged within a reasonable time, either party may refer the dispute to the courts of competent jurisdiction in Nairobi, Kenya, whose decisions shall be final and binding.</p>
                    </div>

                    {/* 16. CONTACT INFORMATION */}

                    <p className="font-semibold mb-4">16. CONTACT INFORMATION</p>
                    <div className="flex flex-col gap-2 mb-8">
                        <p>If you have any questions, concerns, or requests regarding these Terms or your data, please contact us at:</p>
                        <p>
                            {companyName}<br />
                            {address}<br />
                            Email: <a href={`mailto:${email}`} rel='noreferrer'>{email}</a><br />
                            Phone: {phone}
                        </p>
                        <p className='mt-4 font-semibold'>These Terms and Conditions constitute the entire agreement between you and {companyName} with respect to your use of SpendAnalysis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}