import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoctails } from "../redux/features/cocktailSlice";
import { Link } from "react-router-dom";

const CocktailList = () => {
  const { coctails, loading } = useSelector((state) => state.app);
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoctails());
  }, []);

  useEffect(() => {
    if (coctails) {
      const newCocktails = coctails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [coctails]);

  // console.log(cocktails);

  if (loading) {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (!coctails) {
    return <h2>No Cocktails matched your search criteria</h2>;
  }

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {modifiedCocktail.map((item) => {
          const { id, name, image, glass, info } = item;
          return (
            <div className="col" key={id}>
              <div className="card h-2">
                <img src={image} alt={name} className="card-img-top" />
                <div className="card-body" style={{ textAlign: "left" }}>
                  <h6 className="card-title">{name}</h6>
                  <h5 className="card-title">{glass}</h5>

                  <p className="card-text">{info}</p>
                  <Link to={`/cocktail/${id}`}>
                    <button className="btn btn-info">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CocktailList;
