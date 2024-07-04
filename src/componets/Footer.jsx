import { TiSocialInstagram } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
function Footer() {

    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top m-2">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><TiSocialInstagram /></svg>
                    </a>
                    <span className="text-muted">© 2021 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><FaXTwitter /></svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><TiSocialInstagram /></svg></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><IoLogoFacebook /></svg></a></li>
                </ul>
            </footer >
        </>
    )

} export default Footer;