import React from 'react'
import './/home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>


                {/*  <img src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41fz3+-JzIL._SX1500_.jpg' /> */}
                {/* <img className='home_image' src='https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png' /> */}
                <div id="slider">
                    <figure>
                        <img src="https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png" alt="" />
                        <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61dH+2bE86L._SX3000_.jpg" alt="" />
                        <img src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" alt="" />
                        <img src="https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg" alt="" />
                        <img src="https://m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg" alt="" />

                    </figure>
                </div>
                <div className='home_row'>
                    <Product
                        id="12321341"
                        title={'The lean startup: How constant innovation creates radically successfull Buisnesses paperback'}
                        price={29.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSzMQMZ1Sge4RL2PKO0HGC5NDr9mMwScgmw&usqp=CAU"
                        rating={3}
                    />
                    <Product
                        id="49538094"
                        title={'Nestlé LACTOGROW Nutritious Milk Drink (3-6 Years)- 400g Bag-In-Box Pack (Biscuity and Vanilla Flavour)'}
                        price={20}
                        image="https://images-eu.ssl-images-amazon.com/images/I/71mLU7D4WFL._AC_UL160_SR160,160_.jpg"
                        rating={4}
                    />
                    <Product
                        id="49038508"
                        title={'Colgate Plax Fresh Mint Mouthwash, 0% Alcohol - 500 ml Colgate Plax Fresh Mint Mouthwash, 0% Alcohol - 500 ml'}
                        price={10}
                        image="https://images-eu.ssl-images-amazon.com/images/I/5116pOkKf5S._AC_UL160_SR160,160_.jpg"
                        rating={3}
                    />
                </div>
                <div className='home_row'>
                    <div className="video">
                        <h2>Prime Video:Recommended for you </h2>
                        <span>Sita Ramam</span>
                        <a href="/gp/video/ssoredirect/?ie=UTF8&amp;pvp=%2Fdetail%2Famzn1.dv.gti.0f68d95c-fc37-4a3a-b08a-f567c022a2d8&amp;ref_=dvm_crs_in_dk_hud_rfy_np&amp;source=standards&amp;token=5AA88DFA9D67585B16D08920442C28AB49C39F2B">Start Watching on Prime Video</a>
                        <img src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cb63b2bf1e1e4df8aeb7912fb5029a8a8e82a36e0c28f512199975f7a62ae112._RI_V_TTW_QL40_AC_SL792_.jpg" alt="" />

                    </div>
                    <Product
                        id="49858208"
                        title={'Fortune Sunlite Refined Sunflower Oil, Fortune Premium Kachi Ghani Pure Mustard Oil, 1 tr Pouch, Fortune Xpert Pro Sugar Conscious Edible Oil'}
                        price={2.5}
                        image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51TH5xE+2sL._AC_SY195_.jpg"
                        rating={4}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        id="89858208"
                        title={'OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)'}
                        price={250}
                        image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71vZypjNkPS._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        id="54322158"
                        title={'Apple iPhone 14 Pro Max 128GB Deep Purple'}
                        price={1751.687}
                        image="https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                    <Product
                        id="54322521"
                        title={'Realme Narzo 30 Pro 5G (Sword Black, 6GB RAM, 64GB Storage'}
                        price={193.95}
                        image="https://m.media-amazon.com/images/I/41UVGLJq0KL.jpg"
                        rating={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home