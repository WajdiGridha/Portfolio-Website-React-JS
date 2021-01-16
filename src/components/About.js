import React from 'react'

const About = () => {
    const [state] = React.useState({
        subHeading:"About Me",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text.",
    });
    const [info] = React.useState([
        {id:1 , title:'Name', text:"Wajdi Gridha"},
        {id:2 , title:'Email', text:"wajdigridha744@gmail.com"},
        {id:3 , title:'Phone', text:"+216 55 345 592"},
        {id:4 , title:'LinkedIn', text:"Wajdi Gridha"},
    ]);
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader">{state.subHeading}</h1>
                    <p className="mainContent">{state.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                            <img src="images/man-01.png" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__info">
                             <h1>Hi There</h1>
                             <div className="about__info-p1">
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text.
                             </div>
                             <div className="about__info-p2">
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text.
                             </div>
                             <div className="info__contacts">
                                <div className="row">
                                    {
                                        info.map(key =>(
                                            <div className="col-6">
                                                <strong>{key.title}</strong>
                                                <p>{key.text}</p>
                                            </div>
                                        ))
                                    }
                                    

                                </div>
                             </div>
                        </div>
                    </div>

                </div>
          </div>
        </div>
    )
}

export default About
