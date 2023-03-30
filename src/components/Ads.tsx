import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faSplotch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import className from "../interfaces/className";
// import ad1 from "./ad1.png";
// import ad2 from "./ad2.png";
// import ad3 from "./ad3.png";

const Ads = (props:className) => {
    const { className } = props;
    return (

            <div className={`col-span-1 grid grid-rows-2 gap-4 ${className}`}>
                <div className="row-span-1 bg-gray-800 text-white p-4 rounded-md">
                    <h2 className="text-lg font-medium mb-4">Sponsored</h2>
                    <a href="src/index#" className="block relative">
                        <img
                            alt="Advertisement"
                            src="https://via.placeholder.com/300x200"
                            className="object-cover w-full h-48 rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-20 rounded-b-lg bg-gradient-to-t from-gray-700 opacity-90"></div>
                        <div className="absolute bottom-0 left-0 w-full h-20 rounded-b-lg px-4 pb-2">
                            <h3 className="text-lg font-medium text-white">Shop now!</h3>
                            <p className="text-sm text-gray-300">Discover new products and brands</p>
                        </div>
                    </a>
                </div>
                <div className="row-span-1 bg-gray-800 p-4 rounded-md">
                    <a href="src/index#" className="block relative">
                        <img
                            alt="Advertisement"
                            src="https://via.placeholder.com/300x200"
                            className="object-cover w-full h-48 rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-20 rounded-b-lg bg-gradient-to-t from-gray-700 opacity-90"></div>
                        <div className="absolute bottom-0 left-0 w-full h-20 rounded-b-lg px-4 pb-2">
                            <h3 className="text-lg font-medium text-white">Travel the world!</h3>
                            <p className="text-sm text-gray-300">Book your next adventure today</p>
                        </div>
                    </a>
                </div>
            </div>

    );

}
export default Ads;
