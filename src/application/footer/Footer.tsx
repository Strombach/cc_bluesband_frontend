import * as React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h4>Kontakta oss</h4>
                    <ul>
                        <li>
                            Mail:test@mail.com
                        </li>
                    </ul>
                </div>
                <div className="socialmedia">
                    <ul>
                        <li>
                            <a href="https://www.youtube.com/channel/UCu2E9rRYua4_HLhFItrPGFw/featured">Youtube</a>
                        </li>
                        <li>
                            <a href="fb://www.facebook.com/cc.bluesband.3">Facebook</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
