import React from 'react';

const SocialLinks = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-6 mx-2 gap-4">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Visit Us</h2>
                <div className="flex flex-col gap-4 w-full">
                    <a
                        href="https://jnnce.ac.in/jnndemo//lens_light.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center border-2 border-gray-300 rounded-xl p-3 text-gray-700 hover:text-black hover:border-black transition w-full justify-center"
                        aria-label="Website"
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 mr-2">
                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 16c-2.67 0-5.064-1.312-6.5-3.344.03-1.994 4-3.09 6.5-3.09s6.47 1.096 6.5 3.09C17.064 18.688 14.67 20 12 20z" />
                        </svg>
                        <span className="text-base font-medium">Website</span>
                    </a>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h2>
                <div className="flex flex-col gap-4 w-full">
                    <a
                        href="https://www.instagram.com/jnnce_lens_light/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center border-2 border-pink-200 rounded-xl p-3 text-pink-500 hover:text-pink-700 hover:border-pink-500 transition w-full justify-center"
                        aria-label="Instagram"
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 mr-2">
                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                        <span className="text-base font-medium">Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;