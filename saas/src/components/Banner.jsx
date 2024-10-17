import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoimg from '../assets/Upvoty+Logo.png'
import bannerimg from '../assets/Upvoty+Header.png'
import IconWithTooltip from './toolKit'
const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
export default function Banner() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const handleType = (count) => {
        // console.log(`Currently typing word index: ${count}`);
    }
    const handleDone = () => {
        // console.log('Done after 5 loops!')
    }
    
    return (
        <div className="bg-white">
            <header className="absolute w-[80%] inset-x-0  top-0 left-[10%] z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src={logoimg}
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src={logoimg}
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            {/* Banner Section */}

            <div className="relative mt-20  flex-col justify-center items-center isolate px-6  lg:px-8">

                <div className="flex flex-col justify-center items-center py-10 sm:py-48 lg:py-36">
                    <div className=" flex flex-col justify-center items-center">
                        <h1 className='text-7xl w-[100%] text-center md:w-[70%] font-extrabold text-gray-800 text-balance'>Instant feedback to
                            build better {" "}
                            <span style={{ color: '#6366F1' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Product', 'Success', 'Results']}
                                    loop={false}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                    onType={handleType}
                                />
                            </span>
                        </h1>
                        <p className="mt-6 text-2xl w-[100%] text-center lg:w-[100%] leading-8 text-gray-800">
                            Connect your favourite accounts and let monitor followers, revenue and many more.
                        </p>
                        <p className="mt-2 text-center text-2xl leading-8 text-gray-800">
                            Then add them to your free link-in-bio page.
                        </p>
                        <div className="mt-10 flex items-center justify-center  gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-1xl  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Start For Free
                                <span aria-hidden="true" className='ml-4'>→</span>
                            </a>
                        </div>
                       
                    </div>
                </div>
                {/* Banner Image */}
                <div className=' flex justify-center items-center'>
                    <img className='w-[60%]' src={bannerimg} alt="" />
                </div>
                <div className='mt-20'>
                        <IconWithTooltip/>
                        </div>
            </div>
        </div>
    )
}
