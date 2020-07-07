import React, { Component } from 'react'
import { defaultPrimary, defaultSecondary } from 'lib/constants'
import logo from '../../assets/images/riverside-images/riverside-logo.png'
import headerImage from '../../assets/images/riverside-images/boy-playing-in-the-river-3287914.jpg'

export default class Header extends Component {
    render() {
        return (
            <>
                <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-opacity-0">
                    <div className="block lg:hidden">
                        <button className={`flex items-center px-3 py-2 border rounded ${defaultPrimary} border-teal-400 hover:${defaultSecondary} hover:border-white`}>
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <a target="_blank" href="http://facebook.com/riversidepeersupport" href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 ${defaultPrimary} hover:${defaultSecondary} mr-4`}>
                                Facebook
                            </a>
                            <a target="_blank" href="http://twitter.com/riversidePSG" href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 ${defaultPrimary} hover:${defaultSecondary} mr-4`}>
                                Twitter
                            </a>
                            <a target="_blank" href="http://instagram.com/riversidepeersupport" href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 ${defaultPrimary} hover:${defaultSecondary} mr-4`}>
                                Instagram
                            </a>
                            <a target="_blank" href="mailto:riversidepeersgethelp@gmail.com" href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 ${defaultPrimary} hover:${defaultSecondary} mr-4`}>
                                Mail
                            </a>
                        </div>
                        <div>
                            <h6 className={`${defaultPrimary}`}><span class="fa fa-phone"></span>Enquiry: +234(0)818 306 0273</h6>
                        </div>
                    </div>
                </nav>
                <div class="container mx-auto px-4">
                    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-opacity-0">
                        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="items-center lg:flex-grow flex-shrink-0 w-40 mr-6">
                                <img src={logo} alt="riverside" />
                            </div>
                            <div className="text-sm lg:flex-grow"></div>
                            <div>
                                <a href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 ${defaultSecondary} hover:${defaultPrimary} mr-4`}>
                                    Home
                                </a>
                                <a href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 ${defaultSecondary} hover:${defaultPrimary} mr-4`}>
                                    About
                                </a>
                                <a href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 ${defaultSecondary} hover:${defaultPrimary} mr-4`}>
                                    Testimonial
                                </a>
                                <a href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 ${defaultSecondary} hover:${defaultPrimary} mr-4`}>
                                    Contact
                                </a>
                                <a href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 ${defaultSecondary} hover:${defaultPrimary} mr-4`}>
                                    Blog
                                </a>
                            </div>
                        </div>
                    </nav>
                    <div class="relative w-full" style={{ height: '25em' }}>
                        <img src={headerImage} alt="banner" className={`absolute bottom-0 right-0 top-0 w-3/5 transform -skew-y-6`} style={{ borderRadius: '55%' }} />
                        <div className={`absolute bottom-0 left-0 text-6xl ${defaultPrimary}`} style={{ fontFamily: '"Pacifico","Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif' }}>The Magic Touch To Changing Lives</div>
                        <button style={{ left: 10, bottom: -70 }} class={`absolute ${defaultPrimary} hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded transition duration-700 ease-in-out`}>Hover me</button>
                    </div>
                </div>
            </>
        )
    }
}
