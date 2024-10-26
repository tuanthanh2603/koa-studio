"use client";
import { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import '@/styles/global.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaHandshakeSolid } from "react-icons/lia";
import { TbReportMoney } from "react-icons/tb";
import { RiContractLine } from "react-icons/ri";
import { SiTimescale } from "react-icons/si";
const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
]
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}
const packages = [
  {
    title: "Gói 1",
    description: "BÁO GIÁ THIẾT KẾ",
    features: ["25 products", "Up to 10,000 subscribers", "Advanced analytics", "24-hour support response time"]
  },
  {
    title: "Gói 2",
    description: "BÁO GIÁ XÂY NHÀ TRỌN GÓI",
    features: ["25 products", "Up to 10,000 subscribers", "Advanced analytics", "24-hour support response time"]
  },
  {
    title: "Gói 3",
    description: "BÁO GIÁ HOÀN THIỆN",
    features: ["25 products", "Up to 10,000 subscribers", "Advanced analytics", "24-hour support response time"]
  }
];
interface PackageCardProps {
  title: string;
  description: string;
  features: string[];
}

const PackageCard: React.FC<PackageCardProps> = ({ title, description, features }) => {
  return (
    <div className="bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-[#c4c4c4]">
      <h3 className="text-base font-semibold leading-7 text-[#000] text-[30px]">{title}</h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-[16px] font-semibold tracking-tight text-gray-900">{description}</span>
      </p>
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
      <a href="javascript:void(0)" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-[#000] ring-1 ring-inset ring-[#a0a0a0] hover:ring-[#c4c4c4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">LIÊN HỆ</a>
    </div>
  );
};
const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://koastudio.vn/wp-content/uploads/NGOAITHAT_2.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://koastudio.vn/wp-content/uploads/MATTIEN_1.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://koastudio.vn/wp-content/uploads/4-16-scaled.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
]


export default function Home() {
  const [project, setProject] = useState<any[]>([]);
  const fetchProject = async () => {
    try {
      const response = await fetch("/api/project");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setProject(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchProject();
  }, []);

  const [visibleSections, setVisibleSections] = useState({
    section2: false,
    section3: false,
    section4: false,
  });

  const section2Ref = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);
  const section4Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('data-section-id');
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [sectionId as keyof typeof visibleSections]: true,
            }));
          } else {
            setVisibleSections((prev) => ({
              ...prev,
              [sectionId as keyof typeof visibleSections]: false,
            }));
          }
        });
      },
      { threshold: 0.5 }
    );

    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);

    return () => {
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (section3Ref.current) observer.unobserve(section3Ref.current);
      if (section4Ref.current) observer.unobserve(section4Ref.current);
    };
  }, []);


  const handleScrollToSection = () => {
    if (section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const images = [
    '/static/bg_1.jpg',
    '/static/bg_2.jpg',
    '/static/bg_3.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fading in
      }, 500); // Wait for fade out to complete before changing the image
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);
  return (
    <>
      <section
        className={`h-screen flex flex-col justify-center items-center bg-cover bg-center transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 flex flex-col space-y-44">
          <div className="flex-grow text-center">
            <p className="text-xl text-white " style={{ wordSpacing: '5px', letterSpacing: '5px' }}>ARCHITECTURE & INTERIOR DESIGN</p>
          </div>
          <div className="flex-grow text-center">
            <img src="/static/logo-koa-2.png" alt="logo" className="max-w-[30%] max-h-full mx-auto" />
          </div>

          <div className="flex-grow text-center">
            <div className="flex justify-center items-center h-full">

              <button
                className="flex justify-center items-center w-10 h-10 rounded-full bg-transparent border border-[#b3b3b3] text-[#e6e6e6] hover:bg-white hover:text-gray-800 focus:outline-none transition-transform transform bouncing-button"
                onClick={handleScrollToSection}
              >
                <span>
                  <IoChevronDown />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={section3Ref}
        data-section-id="section3"
        className={`min-h-screen flex flex-col justify-center items-center bg-[#fff] transition-opacity duration-1000 ${visibleSections.section3 ? 'animate-slideUp opacity-100' : 'opacity-0'}`}
      >
        <div className="bg-white">
          <div className="mx-auto max-w-4xl text-center pt-20">
            <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              DỰ ÁN NỔI BẬT
            </p>
          </div>
          <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group relative">
                  <div className="w-full aspect-square overflow-hidden bg-gray-200 relative">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-5">
                      <p className="text-lg font-semibold text-white">Đây là một dự án nổi bật</p>
                      <a href={product.href} className="mt-2 inline-block rounded-md bg-yellow-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-yellow-400 transition duration-200">
                        Xem chi tiết
                      </a>
                    </div>
                  </div>
                  <p className="mt-1 text-lg font-semibold text-gray-900 text-center">{product.price}</p>
                </a>
              ))}


            </div>
          </div>
          <div className="flex justify-center pb-10">
            <a href="/project" className=" rounded-md px-24 py-2.5 text-center text-sm font-semibold text-[#000] ring-1 ring-inset ring-[#a0a0a0] hover:ring-[#c4c4c4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">
              XEM TẤT CẢ
            </a>
          </div>
        </div>
      </section>




      <section
        ref={section2Ref}
        data-section-id="section2"
        className={`h-screen flex flex-col justify-center items-center bg-[#fff] transition-opacity duration-1000 ${visibleSections.section2 ? 'animate-slideUp opacity-100' : 'opacity-0'}`}
      >
        <div className="mx-auto max-w-4xl text-center pb-20">
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            BÁO GIÁ
          </p>
        </div>

        <div className="flex space-x-8">
          {packages.map((pkg, index) => (
            <div className="flex-1 flex justify-center items-center" key={index}>
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>
      </section>






      <section
        ref={section4Ref}
        data-section-id="section4"
        className={`h-screen flex flex-col justify-center items-center bg-[#fff] transition-opacity duration-1000 text-white ${visibleSections.section4 ? 'animate-slideUp opacity-100' : 'opacity-0'}`}
      >

        <div className="mx-auto max-w-4xl text-center pb-8">
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            THI CÔNG TRỌN GÓI
          </p>
        </div>


        <div className="flex items-center w-full max-w-6xl">

          <div className="flex flex-col items-center p-4">
            <div className="p-6 rounded-lg shadow-md  flex flex-col items-center">
              <div className="mb-4">
                <LiaHandshakeSolid className="mx-auto text-4xl text-black" />
              </div>
              <h3 className="text-[16px] text-center text-[#000] font-bold">TRAO ĐỔI TƯ VẤN</h3>
              <p className="text-[14px] text-center text-[#1a1a1a]">Trao đổi và tư vấn khách hàng về nhu cầu, mong muốn, và định hướng mức đầu tư.</p>
            </div>

          </div>
          <div className="text-2xl text-black"><FaArrowRightLong /></div>


          <div className="flex flex-col items-center p-4">
            <div className="p-6 rounded-lg shadow-md  flex flex-col items-center">
              <div className="mb-4">
                <TbReportMoney className="mx-auto text-4xl text-black" />
              </div>
              <h3 className="text-[16px] text-center text-[#000] font-bold">BÁO GIÁ</h3>
              <p className="text-[14px] text-center text-[#1a1a1a]">Trao đổi và tư vấn khách hàng về nhu cầu, mong muốn, và định hướng mức đầu tư.</p>
            </div>
          </div>
          <div className="text-2xl text-black"><FaArrowRightLong /></div>


          <div className="flex flex-col items-center p-4">
            <div className="p-6 rounded-lg shadow-md  flex flex-col items-center">
              <div className="mb-4">
                <RiContractLine className="mx-auto text-4xl text-black" />
              </div>
              <h3 className="text-[16px] text-center text-[#000] font-bold">KÝ HỢP ĐỒNG</h3>
              <p className="text-[14px] text-center text-[#1a1a1a]">Trao đổi và tư vấn khách hàng về nhu cầu, mong muốn, và định hướng mức đầu tư.</p>
            </div>
          </div>
          <div className="text-2xl text-black"><FaArrowRightLong /></div>


          <div className="flex flex-col items-center p-4">
            <div className="p-6 rounded-lg shadow-md  flex flex-col items-center">
              <div className="mb-4">
                <SiTimescale className="mx-auto text-4xl text-black" />
              </div>
              <h3 className="text-[16px] text-center text-[#000] font-bold">BÀN GIAO & QUYẾT TOÁN</h3>
              <p className="text-[14px] text-center text-[#1a1a1a]">Trao đổi và tư vấn khách hàng về nhu cầu, mong muốn, và định hướng mức đầu tư.</p>
            </div>
          </div>
        </div>
      </section>




    </>
  );
}
