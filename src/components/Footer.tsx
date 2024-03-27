import Link from "next/link"

const Footer = () => {
  return (


<footer className="bg-white dark:bg-black">
    <div className="w-full sm:max-w-screen-xl mx-auto text-center sm:p-4 md:py-8">
        <div className="sm:flex sm:flex-row text-center flex-col items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0 sm:space-x-3 rtl:space-x-reverse">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-red-600 text-gray-800">Sirohi Computer Institute</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="/courses" className="hover:underline me-4 md:me-6">Courses</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">Sirohi Computer Institute™</Link>. <br /> All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer