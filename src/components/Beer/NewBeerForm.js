import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useFirestore } from "react-redux-firebase";

const useStyles = makeStyles({
  mainContent: {
    height: "100%",
    backgroundColor: "black",
    color: "white",
  },
  label: {
    color: "white",
  },
});

export const NewBeerForm = () => {
  const classes = useStyles();
  const firestore = useFirestore();

  function addBeerToFirestore(event) {
    event.preventDefault();

    return firestore.collection("beers").add({
      name: event.target.name.value,
      brand: event.target.brand.value,
      color: event.target.color.value,
      aroma: event.target.aroma.value,
      flavor: event.target.flavor.value,
      price: parseInt(event.target.price.value),
      alcoholContent: parseInt(event.target.alcoholContent.value),
      pints: parseInt(event.target.pints.value),
    });
  }
  return (
    <div style={classes.mainContext}>
      <div className={"col-sm-8 offset-sm-2"}>
        <br></br>
        <span style={{ color: "white", fontSize: "2em" }}>Add a beer</span>
        <br></br>
        <form onSubmit={addBeerToFirestore}>
          <div className="form-group">
            <label className={classes.label}>Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              className={"form-control"}
            />
          </div>

          <div className="form-group">
            <label className={classes.label}>Brand:</label>
            <input
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
              id="alcoholContent"
              type="text"
              name="alcoholContent"
              className={"form-control"}
            />
          </div>

          <div className="form-group">
            <label className={classes.label} htmlFor="pints">
              # of Pints:
            </label>
            <input
              id="pints"
              type="text"
              name="pints"
              className={"form-control"}
            />
          </div>

          <Button type="submit">Add Beer</Button>
        </form>
      </div>
    </div>
  );
};
