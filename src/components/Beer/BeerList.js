import React from "react";
import { useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Grid, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {
  useFirestoreConnect,
  useFirestore,
  useFirebase,
} from "react-redux-firebase";
import { withFirestore, isLoaded } from "react-redux-firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const useStyles = makeStyles({
  orange: {
    color: "orange",
  },
  yellow: {
    color: "yellow",
  },
  green: {
    color: "green",
  },
  tableCell: {
    borderBottom: "none",
    color: "white",
  },
  actionLinkStyle: {
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
    minWidth: "100",
  },
});

export const BeerList = () => {
  useFirestoreConnect([{ collection: "beers" }]);
  const firestore = useFirestore();
  const beers = useSelector((state) => state.firestore.ordered.beers);
  const [user] = useAuthState(firebase.auth());
  const classes = useStyles();

  const deleteBeer = (id) => {
    return firestore.delete({ collection: "beers", doc: id });
  };

  const incrementBeerPints = (id, pints) => {
    const incrementPintsByOne = {
      pints: parseInt(pints + 1),
    };
    return firestore.update(
      { collection: "beers", doc: id },
      incrementPintsByOne
    );
  };

  const decrementBeerPints = (id, pints) => {
    const decrementPintsByOne = {
      pints: parseInt(pints - 1),
    };
    return firestore.update(
      { collection: "beers", doc: id },
      decrementPintsByOne
    );
  };

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={8}>
            <br></br>
            <span style={{ color: "white", fontSize: "2em" }}>
              Beer... Delicious beer.
            </span>
            {user && <h1>{user.email}</h1>}
            <br></br>
          </Grid>
          <Grid item xs={4}>
            <Button
              style={{ backgroundColor: "white", float: "right" }}
              href="/new"
            >
              Add beer
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      On Tap
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Brand
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Flavor
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      ABV
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Price
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Pints
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Buy
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Restock
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Edit
                    </TableCell>
                    <TableCell className={classes.tableCell} align="left">
                      Remove
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {beers &&
                    beers.map((beer) => (
                      <TableRow key={beer.id}>
                        <TableCell className={classes.tableCell}>
                          <Link
                            to={`/beers/${beer.id}`}
                            // onClick={() => props.onShowBeerDetail(beer.id)}
                            className={classes.actionLinkStyle}
                          >
                            {beer.name}
                            {beer.pints > 10 ? (
                              ""
                            ) : beer.pints > 0 ? (
                              <>
                                <br />
                                <i style={{ color: "yellow" }}>Almost Empty</i>
                              </>
                            ) : (
                              <>
                                <br />
                                <i style={{ color: "red" }}>Out of stock</i>
                              </>
                            )}
                          </Link>
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {beer.brand}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {beer.flavor}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {beer.alcoholContent}
                        </TableCell>
                        {beer.price > 12 ? (
                          <TableCell
                            style={{ color: "orange", borderBottom: "none" }}
                            align="left"
                          >
                            {beer.price}
                          </TableCell>
                        ) : beer.price > 8 ? (
                          <TableCell
                            style={{ color: "yellow", borderBottom: "none" }}
                            align="left"
                          >
                            {beer.price}
                          </TableCell>
                        ) : (
                          <TableCell
                            style={{ color: "green", borderBottom: "none" }}
                            align="left"
                          >
                            {beer.price}
                          </TableCell>
                        )}
                        <TableCell className={classes.tableCell} align="left">
                          {beer.pints}
                        </TableCell>
                        {beer.pints > 0 ? (
                          <TableCell
                            className={classes.tableCell}
                            align="center"
                          >
                            <span
                              style={{ fontSize: "1.8em" }}
                              className={classes.actionLinkStyle}
                              onClick={() =>
                                decrementBeerPints(beer.id, beer.pints)
                              }
                            >
                              -
                            </span>
                          </TableCell>
                        ) : (
                          <TableCell
                            className={classes.tableCell}
                            align="center"
                          >
                            <span
                              style={{ fontSize: "1.8em" }}
                              className={classes.actionLinkStyle}
                              onClick={() =>
                                decrementBeerPints(beer.id, beer.pints)
                              }
                            >
                              -
                            </span>
                          </TableCell>
                        )}

                        <TableCell className={classes.tableCell} align="center">
                          <span
                            className={classes.actionLinkStyle}
                            onClick={() =>
                              incrementBeerPints(beer.id, beer.pints)
                            }
                          >
                            +
                          </span>
                        </TableCell>
                        <TableCell className={classes.tableCell} align="center">
                          <Link to={`/beers/edit/${beer.id}`}>
                            <EditIcon
                              style={{
                                cursor: "pointer",
                              }}
                            ></EditIcon>
                          </Link>
                        </TableCell>
                        <TableCell
                          style={{
                            borderBottom: "none",
                          }}
                          align="center"
                        >
                          <span
                            className={classes.actionLinkStyle}
                            onClick={() => deleteBeer(beer.id)}
                          >
                            X
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
  // }
};

export default withFirestore(BeerList);
