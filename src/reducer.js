import update from "immutability-helper";

export const initialState = {
  isGreen: true,
  withPerspective: true,
  bubbleCount: 20,
  inline: false
};

export function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_COLOR":
      return update(state, { isGreen: { $set: action.data } });
    case "UPDATE_PERSPECTIVE":
      return update(state, { withPerspective: { $set: action.data } });
    case "UPDATE_BUBBLE_COUNT":
      return update(state, { bubbleCount: { $set: action.data } });
    case "UPDATE_LOADER_CASE":
      return update(state, { inline: { $set: action.data } });

    default:
      return initialState;
  }
}
