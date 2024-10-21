"use client"
import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  Select,
} from '@headlessui/react'
import {
  EnvelopeIcon,
  GlobeAltIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PhoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'SHOPHOUSE', description: 'ABC', href: '#', icon: ChartPieIcon },
  { name: 'BILLIARD', description: 'ABCD', href: '#', icon: CursorArrowRaysIcon },
  { name: 'CAFE', description: 'ABC', href: '#', icon: FingerPrintIcon },
]
const information = [
  { name: 'CONTACT', href: '#' },
  { name: 'INTRODUCTION IMAGE', href: '#' }
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
import '../styles/header.css'
const HeaderApp = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [projectPanelOpen, setProjectPanelOpen] = useState(false);
  const [servicePanelOpen, setServicePanelOpen] = useState(false);
  const [quotePanelOpen, setQuotePanelOpen] = useState(false);
  const [knowledgePanelOpen, setKnowledgePanelOpen] = useState(false);
  const [informationPanelOpen, setInformationPanelOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      if (scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(scrollY);
    }
  };
  const [project, setProject] = useState<any[]>([]);

  const fetchProject = async () => {
    try {
      const response = await fetch("/api/project");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Extract the 'data' field from the response
      if (data.success) {
        console.log(data.data); // Log the projects data
        setProject(data.data); // Set the project state with the data array
      } else {
        console.error("Failed to fetch project data:", data.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  return (
    <>
      <header className={` header ${!isVisible ? 'header-hidden' : ''}`}>
        <nav
          aria-label="Global"
          className="mx-auto max-w-7xl flex flex-col items-center justify-center p-2 lg:px-8"
        >
          <div className={`flex items-center justify-between w-full `}>
            <div className="flex items-center">
              <span className="text-black flex items-center">
                <GlobeAltIcon className="mr-1 h-4" />
                <Select name="language" className="text-[14px]">
                  <option value="english">English</option>
                  <option value="vietnamese">Vietnamese</option>
                </Select>
              </span>
            </div>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/static/logo.png" className="h-24 w-auto" />
            </a>
            <div className="flex items-center">
              <span className="text-black flex items-center" title='koastudiovn@gmail.com'>
                <a href="mailto:koastudiovn@gmail.com" className="flex items-center mr-3">
                  <EnvelopeIcon className="mr-1 h-4" />
                  <span className="text-[14px]">CONTACT</span>
                </a>
              </span>
              <span className="text-black flex items-center">
                <a href="tel:0785968888" className="flex items-center">
                  <PhoneIcon className="mr-1 h-4" />
                  <span className="text-[14px]">0785 96 8888</span>
                </a>
              </span>
            </div>

          </div>

          <div className={`mt-4 w-full flex justify-center `}>

            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
              {/* PROJECT Menu */}
              <Popover className="relative">
                <div
                  className="relative"
                  onMouseEnter={() => setProjectPanelOpen(true)}
                  onMouseLeave={() => setProjectPanelOpen(false)}
                >
                  <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                    PROJECT
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                  </div>

                  {projectPanelOpen && (
                    <div className="absolute -left-8 top-full z-10 w-max max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition">
                      <div className="">
                        {project.map((item) => (
                          <div
                            key={item.category_name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >

                            <div className="flex-auto">
                              <a href="#" className="block font-semibold text-gray-900">
                                {item.category_name}
                                <span className="absolute inset-0" />
                              </a>
                              
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                          >
                            <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Popover>

              {/* SERVICE Menu */}
              <Popover className="relative">
                <div
                  className="relative"
                  onMouseEnter={() => setServicePanelOpen(true)}
                  onMouseLeave={() => setServicePanelOpen(false)}
                >
                  <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                    SERVICE
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                  </div>

                  {servicePanelOpen && (
                    <div className="absolute -left-8 top-full z-10 w-max max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition">
                      <div className="">
                        {products.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                            </div>
                            <div className="flex-auto">
                              <a href={item.href} className="block font-semibold text-gray-900">
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                          >
                            <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Popover>

              {/* QUOTE Menu */}
              <Popover className="relative">
                <div
                  className="relative"
                  onMouseEnter={() => setQuotePanelOpen(true)}
                  onMouseLeave={() => setQuotePanelOpen(false)}
                >
                  <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                    QUOTE
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                  </div>

                  {quotePanelOpen && (
                    <div className="absolute -left-8 top-full z-10 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition">
                      <div className="">
                        {products.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                            </div>
                            <div className="flex-auto">
                              <a href={item.href} className="block font-semibold text-gray-900">
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                          >
                            <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Popover>

              {/* KNOWLEDGE Menu */}
              <Popover className="relative">
                <div
                  className="relative"
                  onMouseEnter={() => setKnowledgePanelOpen(true)}
                  onMouseLeave={() => setKnowledgePanelOpen(false)}
                >
                  <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                    KNOWLEDGE
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                  </div>

                  {knowledgePanelOpen && (
                    <div className="absolute -left-8 top-full z-10 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition">
                      <div className="">
                        {products.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                            </div>
                            <div className="flex-auto">
                              <a href={item.href} className="block font-semibold text-gray-900">
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                          >
                            <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Popover>

              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                RECRUITMENT
              </a>
              {/* KNOWLEDGE Menu */}
              <Popover className="relative">
                <div
                  className="relative"
                  onMouseEnter={() => setInformationPanelOpen(true)}
                  onMouseLeave={() => setInformationPanelOpen(false)}
                >
                  <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                    KOA INFORMATION
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                  </div>

                  {informationPanelOpen && (
                    <div className="absolute -left-8 top-full z-10  max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition">
                      <div className="">
                        {information.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >

                            <div className="flex-auto">
                              <a href={item.href} className="block font-semibold text-gray-900">
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  )}
                </div>
              </Popover>
            </PopoverGroup>
          </div>

        </nav>
      </header>
    </>
  );
};

export default HeaderApp;
