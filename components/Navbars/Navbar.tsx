/* eslint-disable @next/next/no-img-element */
import React from 'react'
import MaxWidthWrapper from '../layout/MaxWidthWrapper'
import Link from 'next/link'

import NavItems from './NavItems'

import { buttonVariants } from '../ui/button'
import MobileNav from './MobileNav'
//import { buttonVariants } from '../ui/button';


const Navbar = () => {

    const user = null
    return (
        <section className="border-b border-gray-900  sticky top-0 z-50">
            <div className="max-w-[1600px] mx-auto">
                <header className="relative bg-gray-900">

                    <div className="">
                        <div className="flex h-20 items-center">
                            {/* mbl   */}
                            <MobileNav />

                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <img alt='logo' height="32"
                                        width="130"
                                        className="object-cover" src='/Assets/Jun.png' />
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">

                                <NavItems />
                            </div>
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-6 text-white">
                                    {user ? null : (
                                        <Link
                                            href="/sign-in"
                                            className={buttonVariants({ variant: "ghost" }
                                            )}>
                                            Sign in{" "}
                                        </Link>
                                    )}
                                    {user ? null : (
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                    )}

                                    {user ? (
                                        <p></p>
                                    ) : (
                                        <Link
                                            href="/sign-up"
                                            className={buttonVariants({
                                                variant: "ghost",
                                            })}>
                                            Register
                                        </Link>
                                    )}
                                    {user ? (
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                    ) : null}

                                    {user ? null : (
                                        <div className="flex lg:ml-6">
                                            <span
                                                className="h-6 w-px bg-gray-200"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    )}
                                    <div className="ml-4 flow-root lg:ml-6">
                                        {/* <Cart /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>
            </div>
        </section>
    )
}

export default Navbar