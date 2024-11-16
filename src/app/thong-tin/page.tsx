import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import '@/styles/info.css'
interface FeatureDescription {
    id: number;
    text: string;
}

interface Feature {
    name: string;
    description: FeatureDescription[];
}

const features: Feature[] = [
    {
        name: '1. Dịch vụ thiết kế',
        description: [
            { id: 1, text: 'Thiết kế kiến trúc' },
            { id: 2, text: 'Thiết kế nội thất (nhà phố, biệt thự – villa, căn hộ, khách sạn, chung cư, penhouse, văn phòng và tòa nhà văn phòng)' },
            { id: 3, text: 'Thiết kế trọn gói bao gồm Thiết kế kiến trúc & Thiết kế nội thất' }

        ],
    },
    {
        name: '2. Dịch vụ thi công',
        description: [
            { id: 1, text: 'Thi công nhà phần thô' },
            { id: 2, text: 'Thi công hạng mục hoàn thiện' },
            { id: 3, text: 'Thi công nội thất ' },
            { id: 4, text: 'Xây nhà trọn gói – chìa khóa trao tay (phần thô, phần hoàn thiện & phần nội thất) ' }

        ],
    }
];
export default function Info() {
    return (
        <>

            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-[#222222] text-[20px]">KOA Architecture</h2>
                                <p className="mt-2 text-pretty font-semibold tracking-tight text-indigo-600 italic">
                                    "Kiến tạo hơi thở không gian"
                                </p>
                                <p className="mt-6 text-lg/8 text-gray-800">
                                    Sứ mệnh của KOA là mang đến cho khách hàng một không gian sống hiện đại, thông thoáng, tiện nghi để gia đình có một tổ ấm kiên cố và bền vững.
                                </p>
                                <h2 className=" mt-10 text-base/7 font-semibold text-[#222222] text-[20px]">Những dịch vụ mà KOA Architecture cung cấp
                                </h2>
                                <dl className="max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none mt-3">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="pl-3">
                                            <dt className="font-semibold text-gray-900">

                                                {feature.name}
                                            </dt>{' '}
                                            <ul>
                                                {feature.description.map((featureDescription) => (
                                                    <li key={featureDescription.id} className='italic highlighted-list-item text-gray-800'>
                                                        {featureDescription.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            alt="Product screenshot"
                            src="/static/bg_1.jpg"
                            width={2432}
                            height={1442}
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </div>
            </div>
            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                        <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                            <circle r={1} cx={1} cy={1} />
                        </svg>
                        <div className="text-gray-900 font-semibold">Tại sao nên chọn KOA Architecture</div>
                        <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                            <circle r={1} cx={1} cy={1} />
                        </svg>
                    </div>
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                            <p>
                                “KOA Architecture cung cấp dịch vụ thiết kế thi công nội thất trọn gói chuyên nghiệp, giúp hiện thực hóa không gian sống mơ ước của khách hàng với mọi loại hình nhà phố, biệt thự, villa, văn phòng làm việc… Đội ngũ chuyên gia của KOA Architecture luôn chú trọng đến từng chi tiết, từ việc chọn lựa nguyên vật liệu cao cấp đến quy trình thi công tỉ mỉ, nhằm đảm bảo không gian sống đẳng cấp và bền vững. ”
                            </p>
                        </blockquote>
                    </figure>
                </div>
            </section>
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 mt-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-4xl font-semibold tracking-tight text-white">Kết nối với KOA</h2>
                            <p className="mt-4 text-lg text-gray-300">
                                Để lại số điện thoại để nhận được sự hỗ trợ nhiệt tình từ đội ngũ kỹ sư chuyên nghiệp và nhận thông tin mới nhất từ chúng tôi về các dự án, sáng kiến mới nhất.
                            </p>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Số điện thoại liên hệ
                                </label>
                                <input
                                    id="email-address"
                                    name="phone"
                                    type="text"
                                    required
                                    placeholder="Nhập số điện thoại của bạn"
                                    autoComplete="email"
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Gửi
                                </button>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
                                </div>
                                <dt className="mt-4 text-base font-semibold text-white">Tin tức</dt>
                                <dd className="mt-2 text-base/7 text-gray-400">
                                    Cập nhật những xu hướng ngành, thông tin dự án và tin tức thị trường mới nhất.
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
                                </div>
                                <dt className="mt-4 text-base font-semibold text-white">Không spam</dt>
                                <dd className="mt-2 text-base/7 text-gray-400">
                                    Chúng tôi tôn trọng quyền riêng tư của bạn và chỉ gửi những thông tin hữu ích.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
            </div>
        </>
    )
}