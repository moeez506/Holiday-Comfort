import React, { useState, useContext } from "react";
import defaultImg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import { useParams } from "react-router-dom";
import StyledHero from "../components/StyledHero";

const SingleRoom = () => {
  const { slug } = useParams();
  const [state, setState] = useState({
    slug: slug
  });
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(state.slug);
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...deafultImg] = images;
  if (!room) {
    return (
      <div className="error">
        <h3> no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }
  return (
    <>
      <StyledHero img={mainImg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {deafultImg.map((img, index) => {
            return <img src={img} alt="" key={index} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>price: ${price}</h6>
            <h6>size: ${size} SQFT</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extra</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>-{item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
