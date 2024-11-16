import '@fortawesome/fontawesome-free/css/all.min.css';

export default function FooterApp() {
    return (
        <div className="flex flex-col items-center text-center space-y-2 mb-5 mt-5 text-gray-900">
            <p>
                Copyright 2024 © <span className="font-semibold">KOA Studio</span> All rights reserved.
            </p>
            <div className="flex space-x-4 text-xl">
                <a href="https://www.facebook.com/koastudiovn" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Follow on Facbook" className="hover:text-yellow-500 text-gray-900">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/koa.architecture.studio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Follow on Instagram" className="hover:text-yellow-500 text-gray-900">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@koaarchitects" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="Follow on TikTok" className="hover:text-yellow-500 text-gray-900">
                    <i className="fab fa-tiktok"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCrcwwY_zfZDW3YLmuIGuD7g" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="Follow on YouTube" className="hover:text-yellow-500 text-gray-900">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
            <p className='text-gray-900'>Trụ sở Miền Nam: 574/1/18 Đường Huỳnh Thị Hai, Phường Tân Chánh Hiệp, Quận 12, TP. Hồ Chí Minh</p>
            <p className='text-gray-900'>Trụ sở Miền Trung: 10/74 Nguyễn Văn Cừ, Phường 7, Thành Phố Tuy Hoà, Phú Yên</p>
            <p className='text-gray-900'>Nhà máy sản xuất: Huyện Hóc Môn - TP. Hồ Chí Minh</p>
        </div>
    )
}
