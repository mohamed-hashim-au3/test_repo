import React from 'react'

const BannerType1 = ({
    bgImage, image, title, button, imageAlt, number, children
}) => {
    return (
        <div className="c-banner-type-1">
            {bgImage && 
                <img className="d-block c-banner-type-1__bg-img" src={bgImage} alt={title} />
            }
            <div className="d-flex justify-content-center c-banner-type-1__inner">
                <div className="mx-auto d-flex align-items-center">
                    {image && 
                        <img className="c-banner-type-1__img d-md-block d-none" src={image} alt={imageAlt ? imageAlt : title} />
                    }
                    <div className="c-banner-type-1__content pl-md-5 px-3">
                        <div className="c-banner-type-1__text">
                            {number && <div className="c-banner-type-1__num">{number}</div>}
                            <h1 className="c-banner-type-1__title">
                                {title}
                                {children}
                            </h1>
                            <div className="c-banner-type-1__btn-area">
                                {button}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
BannerType1.defaultProps = {
    bgImage: "/images/hero/banner-img.png"
}
export default BannerType1
