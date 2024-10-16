"use client"
import { SetStateAction, useEffect, useState } from 'react';
import { MdOutlineLanguage } from 'react-icons/md';
import { BsSearch, BsX } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import '@/styles/header.css';
import { LuMenu } from 'react-icons/lu';
const HeaderApp = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Khi cuộn xuống và vị trí cuộn vượt quá 100px thì ẩn header
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Khi cuộn lên thì hiện header
        setIsHeaderVisible(true);
      }

      // Cập nhật vị trí cuộn trước đó
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLanguageSelect = (language: SetStateAction<string>) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Hàm mở modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setIsModalOpen(false);
  };



  const [activeSubmenu, setActiveSubmenu] = useState('');

  const handleMouseEnter = (menu: SetStateAction<string>) => {
    setActiveSubmenu(menu); // Mở submenu tương ứng
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(''); // Đóng tất cả submenu
  };
  const MenuItemProject = ({ onMouseEnter, onMouseLeave, isOpen }) => {
    return (
      <li className="relative py-2" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <a href="/project" className="text-black hover:text-yellow-500 text-[16px]">
          PROJECT
        </a>
        <ul
          className={`${isOpen ? 'block' : 'hidden'
            } w-60 absolute left-0 mt-2 bg-white border shadow-md z-10`}
          onMouseEnter={onMouseEnter} // Khi di chuột vào submenu, giữ submenu mở
          onMouseLeave={onMouseLeave} // Khi rời chuột khỏi submenu, ẩn submenu
        >
          <li>
            <a
              href="/project/item1"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              NHÀ PHỐ
            </a>
          </li>
          <li>
            <a
              href="/project/item2"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Item 2
            </a>
          </li>
          <li>
            <a
              href="/project/item3"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Item 3
            </a>
          </li>
        </ul>
      </li>
    );
  };
  const MenuItemService = ({ onMouseEnter, onMouseLeave, isOpen }) => {
    return (
      <li className="relative py-2" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <a href="/service" className="text-black hover:text-yellow-500 text-[16px]">
          SERVICE
        </a>
        {/* Menu con */}
        <ul
          className={`${isOpen ? 'block' : 'hidden'
            } w-60 absolute left-0 mt-2 bg-white border shadow-md z-10`}
          onMouseEnter={onMouseEnter} // Khi di chuột vào submenu, giữ submenu mở
          onMouseLeave={onMouseLeave} // Khi rời chuột khỏi submenu, ẩn submenu
        >
          <li>
            <a
              href="/service/item1"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              NHÀ PHỐ
            </a>
          </li>
          <li>
            <a
              href="/service/item2"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Item 2
            </a>
          </li>
          <li>
            <a
              href="/service/item3"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Item 3
            </a>
          </li>
        </ul>
      </li>
    );
  };
  const MenuItemQuote = ({ onMouseEnter, onMouseLeave, isOpen }) => {
    return (
      <li className="relative py-2" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <a href="/service" className="text-black hover:text-yellow-500 text-[16px]">
          QUOTE
        </a>
        {/* Menu con */}
        <ul
          className={`${isOpen ? 'block' : 'hidden'
            } w-60 absolute left-0 mt-2 bg-white border shadow-md z-10`}
          onMouseEnter={onMouseEnter} // Khi di chuột vào submenu, giữ submenu mở
          onMouseLeave={onMouseLeave} // Khi rời chuột khỏi submenu, ẩn submenu
        >
          <li>
            <a
              href="/service/item1"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              NHÀ PHỐ
            </a>
          </li>
          <li>
            <a
              href="/service/item2"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Item 2
            </a>
          </li>
          <li>
            <a
              href="/service/item3"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Item 3
            </a>
          </li>
        </ul>
      </li>
    );
  };
  const MenuItemKnowledge = ({ onMouseEnter, onMouseLeave, isOpen }) => {
    return (
      <li className="relative py-2" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <a href="/service" className="text-black hover:text-yellow-500 text-[16px]">
          KNOWLEDGE
        </a>
        {/* Menu con */}
        <ul
          className={`${isOpen ? 'block' : 'hidden'
            } w-60 absolute left-0 mt-2 bg-white border shadow-md z-10`}
          onMouseEnter={onMouseEnter} // Khi di chuột vào submenu, giữ submenu mở
          onMouseLeave={onMouseLeave} // Khi rời chuột khỏi submenu, ẩn submenu
        >
          <li>
            <a
              href="/service/item1"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              NHÀ PHỐ
            </a>
          </li>
          <li>
            <a
              href="/service/item2"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Item 2
            </a>
          </li>
          <li>
            <a
              href="/service/item3"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Item 3
            </a>
          </li>
        </ul>
      </li>
    );
  };
  const MenuItemRecruitment = ({ onMouseEnter, onMouseLeave, isOpen }) => {
    return (
      <li className="relative py-2" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <a href="/service" className="text-black hover:text-yellow-500 text-[16px]">
          RECRUITMENT
        </a>
        {/* Menu con */}
        <ul
          className={`${isOpen ? 'block' : 'hidden'
            } w-60 absolute left-0 mt-2 bg-white border shadow-md z-10`}
          onMouseEnter={onMouseEnter} // Khi di chuột vào submenu, giữ submenu mở
          onMouseLeave={onMouseLeave} // Khi rời chuột khỏi submenu, ẩn submenu
        >
          <li>
            <a
              href="/service/item1"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              NHÀ PHỐ
            </a>
          </li>
          <li>
            <a
              href="/service/item2"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Item 2
            </a>
          </li>
          <li>
            <a
              href="/service/item3"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Item 3
            </a>
          </li>
        </ul>
      </li>
    );
  };
  const MenuItemInformation = ({ onMouseEnter, onMouseLeave, isOpen }) => {
    return (
      <li className="relative py-2" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <a href="/service" className="text-black hover:text-yellow-500 text-[16px]">
          KOA INFORMATION
        </a>
        {/* Menu con */}
        <ul
          className={`${isOpen ? 'block' : 'hidden'
            } w-60 absolute left-0 mt-2 bg-white border shadow-md z-10`}
          onMouseEnter={onMouseEnter} // Khi di chuột vào submenu, giữ submenu mở
          onMouseLeave={onMouseLeave} // Khi rời chuột khỏi submenu, ẩn submenu
        >
          <li>
            <a
              href="/service/item1"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              NHÀ PHỐ
            </a>
          </li>
          <li>
            <a
              href="/service/item2"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Item 2
            </a>
          </li>
          <li>
            <a
              href="/service/item3"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Item 3
            </a>
          </li>
        </ul>
      </li>
    );
  };

  const renderDesktopHeader = () => {
    return (
      <header className={`header`}>
        <div className="wrapper__header relative">
          <div className={`absolute left-0 top-5 p-4 text-black flex items-center mt-3 ${isHeaderVisible ? 'visible' : 'hidden'}`}>
            <MdOutlineLanguage className="mr-2 text-[22px] mt-1 cursor-pointer" onClick={toggleDropdown} />
            <span className="mt-1 text-[15px]">{selectedLanguage}</span>
            {isOpen && (
              <div className="absolute left-0 top-12 bg-white shadow-md rounded-md z-10 ">
                <ul className="flex flex-col">
                  <li
                    onClick={() => handleLanguageSelect("Vietnamese")}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  >
                    Vietnamese
                  </li>
                  <li
                    onClick={() => handleLanguageSelect("English")}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  >
                    English
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className={`absolute right-0 top-5 p-4 text-black flex items-center mt-3 ${isHeaderVisible ? 'visible' : 'hidden'}`} >
            <div className="flex items-center mr-2 text-[16px] cursor-pointer" onClick={openModal}>
              <BsSearch className="mr-2 mt-1 text-[20px]" />
            </div>
            {isModalOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                onClick={closeModal}
              >
                <div
                  className={`p-2  rounded-md transform transition-all duration-500 ease-out ${isModalOpen ? 'animate-slide-down' : 'opacity-0'}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="text"
                    placeholder="Nhập dự án cần tìm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`p-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500 md:w-[400px] `}
                  />
                </div>
              </div>
            )}
            <div className="border-l border-gray-500 mx-2 h-6"></div>
            <div className="flex items-center mr-2 text-[16px] cursor-pointer">
              <a href="mailto:koastudiovn@gmail.com" className="flex items-center text-black" title="koastudiovn@gmail.com">
                <MdOutlineMail className="mr-2 text-[22px] mt-1" />
                <span className="mt-1">CONTACT</span>
              </a>
            </div>
            <div className="border-l border-gray-500 mx-2 h-6"></div>
            <div className="flex items-center text-[16px] cursor-pointer">
              <a href='tel:0785968888' className="flex items-center text-black">
                <FaPhoneAlt className="mr-2 mt-1" />
                <span className="mt-1">0785 96 8888</span>
              </a>
            </div>
          </div>


          <div className={`flex justify-center items-center py-1 ${isHeaderVisible ? 'visible' : 'hidden'}`}>
            <img src="/static/logo.png" alt="Logo" className="h-28" />
          </div>
          <nav>
            <ul className="flex justify-center space-x-8 ">

              <MenuItemProject onMouseEnter={() => handleMouseEnter('project')} onMouseLeave={handleMouseLeave} isOpen={activeSubmenu === 'project'} />
              <MenuItemService onMouseEnter={() => handleMouseEnter('service')} onMouseLeave={handleMouseLeave} isOpen={activeSubmenu === 'service'} />
              <MenuItemQuote onMouseEnter={() => handleMouseEnter('quote')} onMouseLeave={handleMouseLeave} isOpen={activeSubmenu === 'quote'} />
              <MenuItemKnowledge onMouseEnter={() => handleMouseEnter('knowledge')} onMouseLeave={handleMouseLeave} isOpen={activeSubmenu === 'knowledge'} />
              <MenuItemRecruitment onMouseEnter={() => handleMouseEnter('recruitment')} onMouseLeave={handleMouseLeave} isOpen={activeSubmenu === 'recruitment'} />
              <MenuItemInformation onMouseEnter={() => handleMouseEnter('information')} onMouseLeave={handleMouseLeave} isOpen={activeSubmenu === 'information'} />
            </ul>
          </nav>
        </div >
      </header >
    )
  }
  const [isMenuOpenMobile, setIsMenuOpenMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpenMobile(!isMenuOpenMobile);
  };
  const renderMobileHeader = () => (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow  w-full">
      <div className="flex items-center justify-between">
        {isMenuOpenMobile ? (
          <BsX className="text-[30px] text-black ml-5 cursor-pointer" onClick={toggleMenu} />
        ) : (
          <LuMenu className="text-[24px] text-black ml-5 cursor-pointer" onClick={toggleMenu} />
        )}

        <div className="flex-grow text-center">
          <img src="/static/logo.png" alt="Logo" className="h-20 inline-block" />
        </div>

        <BsSearch className="text-[20px] text-black mr-5" />
      </div>
    </div>
  );

  const renderSideMenu = () => (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 transform ${isMenuOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <div className="p-5">
        <ul className='mt-16'>
          <li className="py-2 text-black">PROJECT</li>
          <li className="py-2 text-black">SERVICE</li>
        </ul>
      </div>
    </div>
  );
  return (
    <>
      {renderMobileHeader()}
      {renderSideMenu()}
      {isMobile ? renderMobileHeader() : renderDesktopHeader()}
    </>
  );
};

export default HeaderApp;
