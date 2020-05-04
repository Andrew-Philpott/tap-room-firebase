import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { withFirestore, useFirestore } from "react-redux-firebase";
import { useFirestoreConnect } from "react-redux-firebase";

export const BeerDetail = () => {
  const { id } = useParams();
  useFirestoreConnect([{ collection: "beers" }]);
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
    };
    setBeer(firestoreBeer);
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {beer && (
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <h1>{beer.name}</h1>
            </Grid>
            <Grid item xs={6}>
              <p>Brand: {beer.brand}</p>
              <p>Color: {beer.color}</p>
              <p>Aroma: {beer.aroma}</p>
              <p>Flavor: {beer.flavor}</p>
            </Grid>
            <Grid item xs={6}>
              <p>Alcohol Content: {beer.alcoholContent}</p>
              <p>Price: ${beer.price}</p>
              <p>Pints Left: {beer.pints}</p>
            </Grid>
          </Grid>
          {beer.reviews &&
            beer.reviews.map((review) => {
              return (
                <>
                  <p>{review.rating}</p>
                  <p>{review.rating}</p>
                </>
              );
            })}
        </Container>
      )}
    </div>
  );
};

export default withFirestore(BeerDetail);
