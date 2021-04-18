import React, {useState} from 'react';

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(false);

    const faqList = [
        {id:1 , title:"질문입니다.", contents: "<p>회원 차단이 되지 않도록 유의사항을 꼭 지켜주시기 바랍니다.</p>"},
        {id:2 , title:"질문입니다.", contents: "<p><b>질문2번에</b> 대한 답변입니다.</p>"},
        {id:3 , title:"질문2입니다.", contents: "<p>회원 차단이 되지 않도록 유의사항을<br/> 꼭 지켜주시기 바랍니다.</p>"},
        {id:4 , title:"질문입니다.", contents: "<p>회원 차단이<br/> 되지 않도록 유의사항을 꼭 지켜주시기 바랍니다.</p>"},
    ]

    return (
        <div className="accordion">

            {/*//border box*/}
            <div className="accordion-wrapper">

                <p className="accordion__title">아코디언</p>

                <div className="space-bar"/>

                <div className="accordion-header-title">자주 묻는 질문</div>

                {faqList.map((list, i) => {
                    return (
                        <div key={i}>
                            <div
                                className={`accordion-header ${activeIndex === i ? "menu-active" : ""}`}
                            >
                                <div
                                    className="has-arrow"
                                    onClick={() => {
                                        setActiveIndex(activeIndex === i ? false : i)
                                    }}
                                >
                                    {list.title}
                                </div>
                            </div>
                            {i === activeIndex
                                ?
                                <>
                                   <div className="accordion-body">
                                       <div
                                           dangerouslySetInnerHTML={{__html: list.contents}}
                                       />
                                   </div>
                                   <div className="space-bar"/>
                                </>
                                : ""
                            }

                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Accordion;
