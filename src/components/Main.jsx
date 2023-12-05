import React from 'react';
import productS from '../assets/image-product-mobile.jpg';
import productL from '../assets/image-product-desktop.jpg';
import cart from '../assets/icon-cart.svg';

export const Main = () => {
  return (
    <div className='flex items-center justify-center' id='content-container'>
        <div className="items-center p-10 w-[35rem] lg:mt-[10rem]
        sm:w-[40rem] md:w-[45rem] lg:w-auto"
        id="content-wrapper">
          <div className='rounded-xl overflow-hidden shadow-md shadow-[#e4e3e3]
          flex flex-col lg:flex-row' id='content'>
            <div className="" id="product-image">
              <img src={productS} alt="productS" className='lg:hidden'/>
              <img src={productL} alt="productL" className='hidden lg:block lg:h-[32rem]
              lg:w-[29rem] object-cover'/>
            </div>

            <div className="p-10 lg:w-[35rem] 2xl:w-[30rem] lg:flex" id="under-image-content">
              <div className="text-start" id="text-wrapper">
                <div id='main-text'>
                  <h4 
                  className='uppercase tracking-[.5rem] font-medium text-[gray]
                  text-[.9rem] font-sans sm:text-[1.1rem]'>
                    perfume
                  </h4>

                  <h1 className='font-bold text-[2.6rem] sm:text-[2.9rem]'>Gabrielle Essence Eau De Parfum</h1>

                  <p className='text-dgblue leading-relaxed font-bold sm:text-[1.2rem]'>
                  A floral, solar and voluptuous interpretation composed by
                  Olivier Polge, Perfumer-Creator for the house of CHANEL.
                  </p>
                </div>
                
                <div className="flex flex-row space-x-5" id="price-text">
                  <h1 className='text-darkcyan font-bold tracking-wide text-[2.5rem]'>$149.99</h1>

                  <h4 className='text-dgblue flex items-center line-through lg:text-[1.2rem]'>$169.99</h4>
                </div>

                <div className="" id="add-to-cart-button">
                  <button 
                  className='flex flex-row bg-darkcyan rounded-lg w-[15rem] h-[3rem]
                  items-center justify-center space-x-4 hover:bg-green-900 duration-100'>
                    <img src={cart} alt="cart"/>

                    <h4 className='text-white font-bold font-sans'>Add to cart</h4>
                  </button>
                </div>
              </div>
            </div> 
          </div> 
        </div>

    </div>
  )
}
