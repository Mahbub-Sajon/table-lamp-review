import React from 'react';
const Header = () => {
    return (
        <div>
           
            <div className='grid md:grid-cols-2 gap-2 m-4'>
                <div>
                    <h1 className='text-5xl'>We Will Show You</h1>
                    <h1 className='text-4xl text-lime-600'>LIGHT in the DARKNESS!!!</h1>
                    <p className='font-bold'>Fancy eye soothing light is always appreciable. And fancy table lamps are the perfect example where we can get as much as light we need. We are here for you. We are here to serve you. You can get your desirable table lamp from us. You can scroll down to see what our happy customer say!!!</p>
                    <button className='bg-lime-200 font-bold p-4 w-60 mt-5 rounded-lg text-lime-700'>Browse Lamp</button>
                </div>
                  
                <div>
                <img className='rounded' src="https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGUlMjBsYW1wfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;