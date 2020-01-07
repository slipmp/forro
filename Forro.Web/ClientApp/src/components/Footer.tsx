import * as React from 'react';
import { connect } from 'react-redux';

function Footer() {

    const hrStyle = {
        borderColor: 'rgba(0, 0, 0, 0.80)'
    };

    const sectionSmallBottomPadding = {
        paddingBottom: '15px'
    };

    //FOOTER
    return (
        <footer>
            <div className="background-dark padding text-center footer-social">
                <a className="margin-right-10" target="_blank" href="https://www.facebook.com" rel="noopener noreferrer">
                    <i className="icon-facebook_circle text-size-30"></i>&nbsp;
                    <span className="text-strong text-white hide-s hide-m">FACEBOOK</span>
                </a>&nbsp;
                <a className="margin-right-10" target="_blank" href="https://www.twitter.com" rel="noopener noreferrer">
                    <i className="icon-twitter_circle text-size-30"></i>&nbsp;
                    <span className="text-strong text-white hide-s hide-m">TWITTER</span>
                </a>&nbsp;
                <a className="margin-right-10" target="_blank" href="https://www.instagram.com" rel="noopener noreferrer">
                    <i className="icon-instagram_circle text-size-30"></i>&nbsp;
                    <span className="text-strong text-white hide-s hide-m">INSTAGRAM</span>
                </a>&nbsp;
                <a target="_blank" href="https://www.linkedin.com" rel="noopener noreferrer">
                    <i className="icon-linked_in_circle text-size-30"></i>&nbsp;
                    <span className="text-strong text-white hide-s hide-m">LINKEDIN</span>
                </a>
            </div>

            <section className="text-center background-dark full-width" style={sectionSmallBottomPadding}>
                <div className="line">
                    <div className="margin">
                        <div className="s-12 m-12 l-12 margin-m-bottom-30">
                            <h3 className="text-size-16">E-mail</h3>
                            <p className="text-size-14">
                                slipmp@gmail.com
                </p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="break margin-top-bottom-0" style={hrStyle} />

            <section className="padding background-dark full-width">
                <div className="text-center">
                    <p className="text-size-12">Copyright 2019, Vision Design - graphic zoo</p>
                </div>
            </section>
        </footer>
    );

};

export default connect()(Footer);