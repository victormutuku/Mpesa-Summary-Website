import Image from "next/image";

export default function FeatureCard({ reverse = false, title = '', description = '', image = '' }) {
    return (
        <div className={`w-full ${reverse && 'lg:flex-row-reverse lg:justify-between'} flex flex-col lg:flex-row items-center`}>
            <div className={`${reverse ? 'pr-4' : 'lg:w-1/2'}`}>
                <Image src={image} alt='' width={400} height={200} preload className="hidden lg:block"/>
                <Image src={image} alt='' width={350} height={200} preload className="lg:hidden"/>
            </div>
            <div className="w-3/4 lg:w-1/2 px-4 pt-2 pb-4 mt-5 lg:mt-0 ">
                <p className="text-magnolia-950 text-2xl font-semibold mb-4 text-center lg:text-left">{title}</p>
                <p className="text-lg font-light ml-6 lg:ml-0">{description}</p>
            </div>
        </div>
    );
}