import React, { useState } from 'react'
import image from '../assets/image.png'

const Logo = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center pt-8 ">
            <img
                src={image}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 shadow-lg object-contain"
                alt="Lense and Light Club Logo"
            />
            <div className="flex flex-col items-center justify-center mt-4">
                <p className="text-gray-600">
                    Check the link below to know more about us
                    {/*Official Photography Club of JNNCE{' '}*/}
                    {/*<span
                        className="text-blue-600 hover:underline cursor-pointer"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'Show less' : 'Learn more'}
                    </span>*/}
                </p>
                {showMore && (
                    <div className="mt-2 text-sm text-gray-700 text-center max-w-xs">
                        Check the link below to know more about us
                    </div>
                )}
            </div>
        </div>
    )
}

export default Logo
