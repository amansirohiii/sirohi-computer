import Link from "next/link"

const Footer = () => {
  return (


<footer className="bg-white dark:bg-black">
    <div className="w-full sm:max-w-screen-xl mx-auto text-center sm:p-4 md:py-8">
        <div className="sm:flex sm:flex-row text-center flex-col items-center sm:justify-between mx-auto">
            <Link href="/" className="flex items-center mb-4 sm:mb-0 sm:space-x-3 rtl:space-x-reverse">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-red-600 text-gray-800 mx-auto text-center mt-5">Sirohi Computer Institute</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 justify-center">
                <li>
                    <Link href="/courses" className="hover:underline me-4 md:me-6">Our Courses</Link>
                </li>
                <li>
                    <Link href="/about" className="hover:underline me-4 md:me-6">About Us</Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:underline me-4 md:me-6">Contact Us</Link>
                </li>
                <li>
                    <Link href="/register" className="hover:underline">Register</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline">Sirohi Computer Institute™</Link>. <br /> All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer