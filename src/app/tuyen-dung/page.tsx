import FormTuyenDung from '@/components/FormRecruitment'
import '@/styles/tuyendung.css'
const posts = [
    {
        id: 1,
        title: 'Ứng tuyển',
        description:
            'Ứng viên quan tâm về các vị trí đang tuyển dụng tại KOA Architecture Studio vui lòng gửi thông tin về cho bộ phận nhân sự thông qua các hướng dẫn trong tin đăng tuyển',

    },
    {
        id: 2,
        title: 'Tiếp nhận và sàng lọc',
        description:
            'Sau khi ứng viên nộp hồ sơ, Bộ phận nhân sự sẽ xem xét và chọn những ứng viên có các thông tin gần với yêu cầu của vị trí tuyển dụng để mời tham dự vòng phỏng vấn.',

    }, {
        id: 3,
        title: 'Phỏng vấn',
        description:
            'Thông qua lần gặp gỡ đầu tiên, công ty có thể hiểu rõ hơn về ứng viên để đánh giá mức độ phù hợp của bạn với vị trí cần tuyển và văn hóa của KOA Architecture Studio.',

    },
]
export default function TuyenDung() {
    return (
        <>
            <div className="bg-white sm:py-10">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Vì sao nên chọn KOA</h2>
                    <p className="mt-2 text-lg/8 text-gray-900">Phát triển con người luôn là điều mà KOA chú trọng nhất, như tinh thần của câu “không ngừng thay đổi, không ngừng tiến lên”. Trở thành thành viên của KOA, chúng ta sẽ cùng phát triển, tiến lên gặt hái nhiều thành công mới.</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center py-10 px-10 mx-auto">
                <div className="column px-5 mb-5 sm:mb-0">
                    <h2 className="title text-gray-900 font-semibold text-center">LÃNH ĐẠO NHIỆT HUYẾT</h2>
                    <p className="content text-gray-900">
                        Lãnh đạo luôn quan tâm và tạo mọi điều kiện để bạn được
                        đóng góp ý kiến, sáng tạo, phát triển bản thân.
                    </p>
                </div>
                <div className="column px-5 mb-5 sm:mb-0">
                    <h2 className="title text-gray-900 font-semibold text-center">ĐỜI SỐNG TINH THẦN</h2>
                    <p className="content text-gray-900">
                        Chúng tôi tổ chức nhiều sự kiện để tăng cường sự gắn kết
                        của thành viên trong công ty.
                    </p>
                </div>
                <div className="column px-5">
                    <h2 className="title text-gray-900 font-semibold text-center">CÔNG VIỆC Ý TƯỞNG</h2>
                    <p className="content text-gray-900">
                        Được làm việc trong một môi trường năng động, sáng tạo
                        là cơ hội để bạn được phát huy hết khả năng của mình.
                    </p>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className=" flex mx-auto lg:mx-0 justify-center">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center">Quy trình tuyển dụng</h2>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-900 hover:bg-gray-100">
                                        <span className="text-[18px] font-semibold px-4">{post.title}</span>
                                    </a>
                                </div>
                                <div className="group relative">
                                    <p className="mt-5 line-clamp-4 text-[16px] text-gray-900">{post.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 gap-4 max-w-7xl mx-auto sm:grid-cols-2 p-4" id="td">
                <div>
                    <FormTuyenDung />
                </div>
                <div className="hidden sm:flex justify-center items-center">
                    <img src="/static/tuyendung-2.png" alt="" />
                </div>
            </div>
            <div className="relative overflow-hidden bg-white mt-16">
                <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="text-lg/8 font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Gửi các thành viên KOA tương lai
                            </h1>
                            <p className="mt-4 text-lg/8 text-gray-900">
                                Hy vọng rằng ở một “giao lộ” nào đó, chúng ta sẽ được gặp nhau, để chúng tôi được hân hoan chào đón bạn về với đại gia đình KOA. Trở thành những người đồng hành lý tưởng và đưa KOA cũng như chính bản thân mình chạm được đến nhiều thành công.
                            </p>
                        </div>
                        <div>
                            <div className="mt-10">
                                {/* Decorative image grid */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                >
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                                        className="size-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                        className="size-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                                        className="size-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                                        className="size-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                                        className="size-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                                        className="size-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        alt=""
                                                        src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                                        className="size-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="#td"
                                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                                >
                                    Ứng tuyển ngay
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}