import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCoctail } from "../redux/features/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleCocktail = () => {
  const { coctail, loading } = useSelector((state) => state.app);
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleCoctail({ id }));
  }, [id]);

  useEffect(() => {
    if (coctail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = coctail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      // console.log("ingredients", ingredients);
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(null);
    }
  }, [id, coctail]);

  if (!modifiedCocktail) {
    return <h2 className="section-title">No Cocktail to Display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      modifiedCocktail;
    return (
      <>
        {loading ? (
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <section className="section cocktail-section">
            <Link to="/">
              <button className="btn btn-danger" style={{ marginTop: "2rem" }}>
                Go Back
              </button>
            </Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
              <img src={image} alt={name} />
              <div className="drink-info">
                <p>
                  <span className="drink-data">Name: </span> {name}
                </p>
                <p>
                  <span className="drink-data">Category: </span> {category}
                </p>
                <p>
                  <span className="drink-data">Info: </span> {info}
                </p>
                <p>
                  <span className="drink-data">Glass: </span> {glass}
                </p>
                <p>
                  <span className="drink-data">Instructions: </span>{" "}
                  {instructions}
                </p>
                <p>
                  <span className="drink-data">Ingredients: </span>
                  {ingredients &&
                    ingredients.map((item, index) => {
                      return item ? <span key={index}>{item}</span> : null;
                    })}
                </p>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
};

export default SingleCocktail;
