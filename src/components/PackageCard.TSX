interface PackageCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
}

const PackageCard: React.FC<PackageCardProps> = ({ title, price, description, features }) => {
    return (
        <div className="bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0">
            <h3 className="text-base font-semibold leading-7 text-indigo-600">{title}</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-semibold tracking-tight text-gray-900">{price}</span>
                <span className="text-base text-gray-500">/1m2</span>
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
                {features.map((feature, index) => (
                    <li key={index} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <a href="javascript:void(0)" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Liên hệ</a>
        </div>
    );
};
