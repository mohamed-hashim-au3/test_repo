const HowItworks = ({
    preTitle,
    title,
    titleNext,
    content,
    children,
    steps,
}) => {
    return (
        <div className="c-how-it-works">
            <div className=" bg-secondary w-100 c-how-it-works__top-container">
                <div className="container text-center">
                    <div className="content pt-5 pb-4">
                    <p className="mb-0" >{preTitle}</p>
                    <h2 className="text-dark">{title}{titleNext && <span className="text-danger"> {titleNext}</span>}</h2>
                    <div className="row justify-content-center pt-3">
                        <div className="col-md-8 col-lg-6">
                        {content}
                        {children}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="c-how-it-works__steps text-center">
                <div className="container">
                    <div className="row">
                        {steps.map(({
                            preTitle,
                            title,
                            image
                        }, key)=> {
                            return <div key={key} className={`col-12 col-sm-6 col-md-4 col-lg-4 c-how-it-works__step c-how-it-works__step--${key}`}>
                                <div className="c-how-it-works__step-img-wrapper">
                                    <div className="c-how-it-works__step-img-inner">
                                        <img src={image} className="c-how-it-works__step-img" />
                                    </div>
                                </div>
                                <div className="c-how-it-works__step-title">
                                    <span>{preTitle}</span>
                                    <h4 className="font-weight-bold text-dark">{title}</h4>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
HowItworks.defaultProps = {
    steps: []
}
export default HowItworks
