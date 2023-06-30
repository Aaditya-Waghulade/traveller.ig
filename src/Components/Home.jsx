import React from "react";
import vg from "../Assets/eng1.jpeg";
import tg from "../Assets/italy.jpeg";
import gg from "../Assets/usa.jpeg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Travellers</h1>
          <p>Travel around the beutifull world.....</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="pic1" id="pic1" />
        <img src={tg} alt="pic2" id="pic2" />
        <img src={gg} alt="pic3" id="pic3" />
        <div> </div>
      </div>
      <div className="home3" id="destinations">
        <div>
          <h1>Travelle with Us</h1>
          <p>
<ul>
              1.Italy
              2.England
              3.USA
              </ul>

            The Benefits of Travelling There are numerous benefits to travelling
            if we think about it. The first one being, we get to meet new
            people. When you meet new people, you get the opportunity to make
            new friends. It may be a fellow traveller or the local you asked for
            directions. Moreover, new age technology has made it easier to keep
            in touch with them. Thus, it offers not only a great way to
            understand human nature but also explore new places with those
            friends to make your trip easy. Similar to this benefit, travelling
            makes it easier to understand people. You will learn how other
            people eat, speak, live and more. When you get out of your comfort
            zone, you will become more sensitive towards other cultures and the
            people. Another important factor which we learn when we travel is
            learning new skills.
          </p>
        </div>
      </div>
      <div className="home4" id="sources">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instags</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
