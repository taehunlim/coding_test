import React from 'react';
import Slider from 'react-slick';


const TimePickerDetail = ({close, hours, minutes, handleSubmit}) => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 100,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        arrows: false,
        adaptiveHeight: false,
    };

    return (

        <div className="timepicker-modal">
            <form
                onSubmit={handleSubmit}
            >
                <div   className="d-flex">
                    <Slider
                        {...settings}
                        infinite={false}
                        className="slider-entity ampm"
                    >
                        <div className="about-times">
                            AM
                        </div>
                        <div className="about-times">
                            PM
                        </div>
                    </Slider>
                    <Slider
                        {...settings}
                        className="slider-entity hours"
                    >
                        {hours.map((hour) => (
                            <div
                                key={hour}
                                className="about-times"
                            >
                                {hour}
                            </div>
                        ))}
                    </Slider>
                    <div className="separator">
                        :
                    </div>
                    <Slider
                        {...settings}
                        className="slider-entity minutes"
                    >
                        {minutes.map((minutes) => (
                            <div
                                className="about-times"
                                key={minutes}
                            >
                                {minutes}
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="timepicker-modal__footer">
                    <button
                        className="confirm_button"
                        type="submit"
                    >
                        확인
                    </button>
                    <button
                        className="cancel_button"
                        onClick={close}
                    >
                        뒤로
                    </button>
                </div>
            </form>

            <div className="mask">
                <div className="mask-item">
                </div>
                <div className="mask-item">
                </div>
                <div className="mask-item" />
            </div>
        </div>

    );
};

export default TimePickerDetail;
