import * as a from "../../actions";
import * as c from "../../actions/ActionTypes";

describe("beer list actions", () => {
  const beer = {};

  it("newBeer correctly creates a NEW_BEER action", () => {
    expect(a.newBeer(beer)).toEqual({ type: c.NEW_BEER, payload: beer });
  });

  it("deleteBeer correctly creates a DELETE_BEER action", () => {
    expect(a.deleteBeer(1)).toEqual({ type: c.DELETE_BEER, payload: 1 });
  });

  it("updateBeer correctly creates a UPDATE_BEER action", () => {
    expect(a.updateBeer(1)).toEqual({ type: c.UPDATE_BEER, payload: 1 });
  });

  it("toggleEditBeerFormVisibility correctly creates a TOGGLE_EDIT_BEER_FORM_VISIBILITY action", () => {
    expect(a.toggleEditBeerFormVisibility()).toEqual({
      type: c.TOGGLE_EDIT_BEER_FORM_VISIBILITY,
    });
  });

  it("toggleNewBeerFormVisibility correctly creates a TOGGLE_NEW_BEER_FORM_VISIBILITY action", () => {
    expect(a.toggleNewBeerFormVisibility()).toEqual({
      type: c.TOGGLE_NEW_BEER_FORM_VISIBILITY,
    });
  });
});
