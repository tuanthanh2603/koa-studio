import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
export default function FormTuyenDung() {
    return (
        <div className="mx-auto">
            <form >
                <div className="space-y-12">
                    

                    <div className="border-t border-b border-gray-900/10 pb-12 pt-12">
                        <h2 className="text-[20px] font-semibold text-gray-900">Ứng tuyển ngay</h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="name" className="block text-[17px] font-semibold text-gray-900">
                                    Họ và tên
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="full-name"
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[17px]"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="phone" className="block text-[17px] font-semibold text-gray-900">
                                    Số điện thoại
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        autoComplete="phone-number"
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[17px]"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-[17px] font-semibold text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[17px]"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="role" className="block text-[17px] font-semibold text-gray-900">
                                    Vị trí ứng tuyển
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="role"
                                        name="role"
                                        autoComplete="role-name"
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs text-[17px]"
                                    >
                                        <option>Kiến trúc sư</option>
                                        <option>Kiến trúc sư nội thất</option>
                                        <option>Kĩ thuật viên thiết kế</option>
                                        <option>Nhân viên Marketing & PR</option>
                                        <option>Chuyên gia tư vấn kiến trúc</option>
                                        <option>Giám sát công trình</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-[17px] font-semibold text-gray-900">
                                    Link CV (nếu có)
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="street-address"
                                        name="street-address"
                                        type="text"
                                        autoComplete="street-address"
                                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-[17px]"
                                    />
                                </div>
                            </div>

                           
                        </div>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                   
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Gửi cho chúng tôi
                    </button>
                </div>
            </form>
        </div>
    )
}