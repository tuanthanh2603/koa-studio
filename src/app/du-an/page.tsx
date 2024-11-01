const posts = [
    {
        id: 1,
        title: 'project 2',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 26, 2024',
        datetime: '2020-03-16',
        category: { title: 'Shophouse', href: '#' },

    },
    {
        id: 1,
        title: 'project 1',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 26, 2024',
        datetime: '2020-03-16',
        category: { title: 'Cafe', href: '#' },

    },
    {
        id: 1,
        title: 'project 1',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 26, 2024',
        datetime: '2020-03-16',
        category: { title: 'Cafe', href: '#' },

    },
    {
        id: 1,
        title: 'project 1',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 26, 2024',
        datetime: '2020-03-16',
        category: { title: 'Cafe', href: '#' },

    },

]
export default function ProjectPage() {
    return (
        <>
            <div className=" py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tất cả dự án</h2>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between relative ">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="overflow-hidden relative w-full h-96 group">
                                    <img
                                        src="https://koastudio.vn/wp-content/uploads/RECEP_2.jpg"
                                        alt=""
                                        className="object-cover w-full h-full group-hover:opacity-0 transition-opacity duration-200"
                                        style={{ imageRendering: 'crisp-edges' }}
                                    />
                                    <img
                                        src="https://koastudio.vn/wp-content/uploads/RECEP_16.jpg"
                                        alt=""
                                        className="absolute inset-0 object-cover w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        style={{ imageRendering: 'crisp-edges' }}
                                    />
                                </div>

                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                </div>

                                {/* Div chứa thông tin chi tiết */}
                                <div className="absolute top-0 left-full ml-4 w-48 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                                    <div className="p-4">
                                        <h4 className="text-md font-semibold">{post.title}</h4>
                                        <p className="text-gray-700">{post.description}</p>
                                        <a href={post.href} className="text-blue-500 hover:underline">Xem thêm</a>
                                    </div>
                                </div>
                            </article>
                        ))}


                    </div>
                </div>
            </div>
        </>
    );
}
