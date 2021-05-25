import React from 'react'

function Services() {
    return (
        <div className="services">
            <div className="services__container">
                <h1>Skills</h1>
                <div className="services__grid">
                    <div className="services__left">
                        <div className="services__content">
                            <div className="services__desc">
                                <h2>React JS</h2>
                                <p>
                                    React JS is a popular library for building impressive UIs.
                                </p>
                            </div>
                        </div>
                        <div className="services__content">
                            <div className="services__desc">
                                <h2>NEXT JS</h2>
                                <p>
                                    Lorem Ipsum available, but the majority have suffered
                                    alteration in some form, by injected humour, or randomised
                                    words which don't look even slightly believable.
                                </p>
                            </div>
                        </div>
                        <div className="services__content">
                            <div className="services__desc">
                                <h2>Typescript</h2>
                                <p>
                                    Lorem Ipsum available, but the majority have suffered
                                    alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="services__right">
                        <img src="./images/Macbook.png" alt="macbook" className="macbook" />
                    </div>
                </div>
            </div>
            <div className="yellow__bar">
                <img src="./images/mail.svg" alt="email icon" />
                <p>Email</p>
                <span>qtcoder2@gmail.com</span>
            </div>
        </div>
    )
}

export default Services
