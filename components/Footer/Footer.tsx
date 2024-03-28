/* eslint-disable @next/next/no-img-element */
'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import MaxWidthWrapper from '../layout/MaxWidthWrapper'
import MyMap from '../Googlemaps/request'

const Footer = () => {
    const pathname = usePathname()
    const pathsToMinimize = [
        '/verify-email',
        '/sign-up',
        '/sign-in',
    ]

    return (
        <footer className='bg-[#0C0C0C] flex-grow-0'>
            <MaxWidthWrapper>

                {pathsToMinimize.includes(pathname) ? null : (
                    <div className=" pt-16">
                        <div className='flex justify-center'>
                            <img src='/Assets/Jun.png' alt="Logo" height='200' width='120' />
                        </div>
                    </div>
                )}

                {pathsToMinimize.includes(pathname) ? null : (
                    <div>
                        <div className='relative flex items-center px-6 py-2 sm:py-8 lg:mt-0'>
                            <div className='absolute inset-0 overflow-hidden rounded-lg'>
                                <div
                                    aria-hidden='true'
                                    className='absolute app__bg inset-0 bg-gradient-to-br bg-opacity-90'
                                />
                            </div>

                            <div className='text-center relative mx-auto max-w-sm'>
                                <h3 className='font-semibold text-white'>
                                    Visit out Resturnat
                                </h3>
                                <MyMap></MyMap>
                                <p className='mt-2 text-sm text-muted-foreground'>
                                    If you&apos;d like to taste somethings goods, you can Visit out Resturant.{' '}
                                    <Link
                                        href='/sign-in?as=seller'
                                        className='whitespace-nowrap font-medium text-Whie hover:text-blue-900'>
                                        Get started &rarr;
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                )}


                <div className='py-10 md:flex md:items-center md:justify-between'>
                    <div className='text-center md:text-left'>
                        <p className='gap-2 flex text-sm text-muted-foreground justify-center'>
                            &copy; {new Date().getFullYear()} All Rights
                            Reserved <Link href={'https://github.com/Iamhazard'}>Junकिri</Link>
                        </p>
                    </div>

                    <div className='mt-4 flex items-center justify-center md:mt-0'>
                        <div className='flex space-x-8'>
                            <Link
                                href='#'
                                className='text-sm text-muted-foreground hover:text-gray-600'>
                                Terms
                            </Link>
                            <Link
                                href='#'
                                className='text-sm text-muted-foreground hover:text-gray-600'>
                                Privacy Policy
                            </Link>
                            <Link
                                href='#'
                                className='text-sm text-muted-foreground hover:text-gray-600'>
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer