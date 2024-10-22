import React from 'react';
import menuImg from '../assets/img/menuImg.png'; 
import menuImg1 from '../assets/img/menuImg1.png'; 
import menuImg2 from '../assets/img/menuImg2.png'; 
import menuImg3 from '../assets/img/menuImg3.png'; 
import menuImg4 from '../assets/img/menuImg4.png'; 
import menuImg5 from '../assets/img/menuImg5.png'; 
import menuImg6 from '../assets/img/menuImg6.png'; 
import { AiOutlineArrowRight } from 'react-icons/ai'

const cameras = [
    { id: 1, name: 'HD Security Camera', description: 'Crystal clear video with full HD resolution.', img: menuImg2 },
    { id: 2, name: 'Outdoor Camera Pro', description: 'Durable and weather-resistant for outdoor surveillance.', img: menuImg1},
    { id: 3, name: 'Night Vision Camera', description: 'Enhanced visibility even in complete darkness.', img: menuImg3 },
    { id: 4, name: 'Wireless Dome Camera', description: 'Easy to install with wireless connectivity.', img: menuImg4 },
    { id: 5, name: 'Panoramic CCTV Camera', description: '360-degree coverage with panoramic view.', img: menuImg5 },
    { id: 5, name: 'Panoramic CCTV Camera', description: '360-degree coverage with panoramic view.', img: menuImg6 },
    ];

const Carousel = () => {
    return ( 
        <div className='flex flex-wrap justify-center gap-4 p-4 bg-white '>
            {cameras.map((camera) => (
                <div key={camera.id} className='bg-gray-200 text-black p-4 rounded-lg shadow-md w-80'>
                    <img
                        src={camera.img}
                        alt={camera.name}
                        className='object-cover mb-2'
                    />
                    <h3 className='text-lg font-bold mb-1 text-orange-950 '>{camera.name}</h3>
                    <p className='text-xs mb-2'>{camera.description}</p>
                    <button className='bg-orange-950 text-white py-1 px-2 rounded hover:bg-orange-800 flex items-center '>
                        More <AiOutlineArrowRight className='ml-2'/>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Carousel;














