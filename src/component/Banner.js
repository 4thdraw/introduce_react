import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = ({id, datainfo, cls}) => {
    return (
        <div id={id} className={cls}>
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    datainfo.map((v, i)=>{
                        return(
                            <SwiperSlide>
                                <img src={v.image.desktop} className='img-fluid' ></img></SwiperSlide>
                        )
                    })
                }         
              
            </Swiper>
        </div>
    );
};

export default Banner;