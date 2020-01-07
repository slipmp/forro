import * as React from 'react';
import { connect } from 'react-redux';

import img03 from './img-03.jpg';
import img04 from './img-04.jpg';
import img05 from './img-05.jpg';

const Home = () => (
    //MAIN 
    <main role="main">
        <article>
            <header className="section-top-padding background-white">
                <div className="line text-center">
                    <h1 className="text-dark text-s-size-30 text-m-size-40 text-l-size-headline text-thin text-line-height-1">About Us</h1>
                    <p className="margin-bottom-0 text-size-16 text-dark">
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.<br />
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                </div>
            </header>
            <section className="section-top-padding background-white">
                <div className="line">
                    <div className="margin">
                        <div className="s-12 m-12 l-4 margin-m-bottom">
                            <a className="image-hover-zoom margin-bottom" href="/"><img src={img03} alt="" /></a>
                            <h2>Soluta esse molestie</h2>
                            <p className="margin-bottom">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                        </div>
                        <div className="s-12 m-12 l-4 margin-m-bottom">
                            <a className="image-hover-zoom margin-bottom" href="/"><img src={img04} alt="" /></a>
                            <h2>Dolore feugiat nulla</h2>
                            <p className="margin-bottom">Iriure dolor in hendrerit duis autem vel eum in vulputate velit esse molestie vel illum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                        </div>
                        <div className="s-12 m-12 l-4 margin-m-bottom">
                            <a className="image-hover-zoom margin-bottom" href="/"><img src={img05} alt="" /></a>
                            <h2>Consequat vel illum</h2>
                            <p className="margin-bottom">Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    </main>


);

export default connect()(Home);
