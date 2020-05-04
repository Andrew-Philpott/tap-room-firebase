import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useFirestore } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  mainContent: {
    backgroundColor: "black",
    color: "white",
    marginTop: "20%",
  },
  label: {
    color: "white",
  },
});

export const EditBeerForm = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const firestore = useFirestore();
  const [beer, setBeer] = useState({});

  firestore.get({ collection: "beers", doc: id }).then((b) => {
    const firestoreBeer = {
      name: b.get("name"),
      brand: b.get("brand"),
      color: b.get("color"),
      aroma: b.get("aroma"),
      flavor: b.get("flavor"),
      alcoholContent: b.get("alcoholContent"),
      price: b.get("price"),
      pints: b.get("pints"),
    };
    setBeer(firestoreBeer);
  });

  function editBeerInFirestore(event) {
    event.preventDefault();
    const propertiesToUpdate = {
      name: event.target.name.value,
      brand: event.target.brand.value,
      color: event.target.color.value,
      aroma: event.target.aroma.value,
      flavor: event.target.flavor.value,
      price: parseInt(event.target.price.value),
      alcoholContent: parseInt(event.target.alcoholContent.value),
      pints: parseInt(event.target.pints.value),
    };
    firestore.update({ collection: "beers", doc: id }, propertiesToUpdate);
    history.push("/ontap");
  }

  return (
    <div className={classes.mainContext}>
      <div className={"col-lg-8 offset-lg-2"}>
        <form onSubmit={editBeerInFirestore}>
          <div className="form-group">
            <label className={classes.label}>Name:</label>
            <input
              defaultValue={beer.name}
              id="name"
              type="text"
              name="name"
              className={"form-control"}
            />
          </div>

          <div className="form-group">
            <label className={classes.label}>Brand:</label>
            <input
              defaultValue={beer.brand}
              id="brand"
              type="text"
              name="brand"
              className={"form-control"}
            />
          </div>

          <div className="form-group">
            <label className={classes.label} htmlFor="color">
              Color:
            </label>
            <input
              defaultValue={beer.color}
              id="color"
              type="text"
              name="color"
              className={"form-control"}
            />
          </div>

          <div className="form-group">
            <label className={classes.label} htmlFor="aroma">
              Aroma:
            </label>
            <input
              defaultValue={beer.aroma}
              id="aroma"
              type="text"
              name="aroma"
              className={"form-control"}
            />
          </div>

          <div className="form-group">
            <label className={classes.label} htmlFor="flavor">
              Flavor:
            </label>
            <input
              defaultValue={beer.flavor}
              id="flavor"
              type="text"
              name="flavor"
              className={"form-control"}
            />
          </div>

          <div className="form-group">
            <label className={classes.label} htmlFor="price">
              Price:
            </label>
            <input
              defaultValue={beer.price}
              id="price"
              type="text"
              name="price"
              className={"form-control"}
            />
          </div>

          <div className="form-group">
            <label className={classes.label} htmlFor="alcoholContent">
              AlcoholContent:
            </label>
            <input
              defaultValue={beer.alcoholContent}
              id="alcoholContent"
              type="text"
              name="alcoholContent"
              className={"form-control"}
            />
          </div>

          <div className="form-group">
            <label className={classes.label} htmlFor="pints">
              Pints:
            </label>
            <input
              defaultValue={beer.pints}
              id="pints"
              type="text"
              name="pints"
              className={"form-control"}
            />
          </div>

          <Button
            style={{ backgroundColor: "white", color: "black" }}
            className="btn btn-primary"
            type="submit"
          >
            Add Beer
          </Button>
        </form>
      </div>
    </div>
  );
};
