import React, { useRef } from "react";
import { fetchSerachCoctail } from "../redux/features/cocktailSlice";
import { useDispatch } from "react-redux";
import "./SearchInput.css";

const SearchInput = () => {
  const searchValue = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    const text = searchValue.current.value;
    dispatch(fetchSerachCoctail({ text }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
