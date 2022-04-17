import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
const getUnique = (item, value) => {
  return [...new Set(item.map((item) => item[value]))];
};
const RoomsFilter = ({ rooms }) => {
  console.log(rooms);
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  console.log(types);
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <>
      <section className="filter-container">
        <Title title="search rooms" />
        <form action="" className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {people}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">room size </label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                value={maxSize}
                onChange={handleChange}
                className="size-input"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">pets</label>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default RoomsFilter;
