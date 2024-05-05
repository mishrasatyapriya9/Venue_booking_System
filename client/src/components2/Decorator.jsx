import React, { useEffect, useState } from "react";
import ShareDiv from "./ShareDiv";
import "../styles/decorator.css";
import ShortList from "./ShortList";
import axios from "axios";

function Decorator() {

    const [data, setData] = useState([]);

    const url = "http://localhost:5500/decorators";

    const fetchInfo = async () => {
        try {
            let res = await axios(url)
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    const username = data.length > 0 ? data[0].username : '';
    const decorStyle = data.length > 0 ? data[0].decorStyle : '';
    const availabilityDate = data.length > 0 ? data[0].availability[0].date : '';
    const availabilityStatus = data.length > 0 ? data[0].availability[0].status : '';
    const statusColor = availabilityStatus.toLowerCase() == "booked" ? "red" : "green";
    return (
        <div>
            {/* <Shortlist id="cont-short" /> */}

            <div id="container">
                <div id="color">
                </div>
                <div id="banner">
                    <img src="https://cache.careers360.mobi/media/article_images/2018/06/19/wildlife-photographer.webp" alt="" srcset="" id="img-l" />
                    <img src="https://w.forfun.com/fetch/a9/a9b33f4085013fb64e65c2d6b596a26a.jpeg?h=900&r=0.5" alt="" id="img-r" />
                </div>
                <div id="share">
                    <ShareDiv />
                </div>
            </div>
            <div id="about">
                <div></div>
                <div id="about-body">
                    <h1>{username}</h1> <br />

                    <div id="about-cuisine">
                        <h2>Decorator: </h2>
                        <p>{decorStyle}</p><br />
                    </div><hr />

                    <div id="about-avail">
                        <h2>Availability</h2>
                        <p>Date: {availabilityDate}</p><br />
                        <p></p>
                        <span>
                            Status:
                            <p style={{color : statusColor}}> {availabilityStatus}</p>
                        </span>
                    </div><hr />

                    <div id="price"><h2>Pricing</h2>
                        <div id="g-i-t"><h2>Get in touch with pricing details</h2></div>
                    </div><hr />
                    <div><h2>Location</h2></div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14963.122704026026!2d85.806336!3d20.3506773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e064769e73%3A0x9288172f3a98c7a4!2sSilicon%20University!5e0!3m2!1sen!2sin!4v1707661437232!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <div id="floating-box">
                        <h2>Photography Company</h2><br />
                        <div id="g-i-t"><h2>Get in touch with pricing details</h2></div>
                        <button id="con-btn"><h2>Contact Service</h2></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Decorator;