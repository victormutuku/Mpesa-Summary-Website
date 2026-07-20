import Image from "next/image";

export default function FeatureCard({ reverse = false, title = '', description = '', image = '' }) {
    return (
        <div className={`w-full ${reverse && 'flex-row-reverse justify-between'} flex items-center`}>
            <div className={`${reverse ? 'pr-4' : 'w-1/2'}`}>
                <Image src={image} alt='' width={400} height={370} preload/>
            </div>
            <div className="w-1/2 px-4 pt-2 pb-4">
                <p className="text-magnolia-950 text-2xl font-semibold mb-4">{title}</p>
                <p className="text-lg font-light">{description}</p>
            </div>
        </div>
    );
}