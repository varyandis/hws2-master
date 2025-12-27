const initState = {
  themeId: 1,
};

export const themeReducer = (
  state = initState,
  action: ActionType
): typeof initState => {
  switch (action.type) {
    case "SET_THEME_ID":
      return {
        ...state,
        themeId: action.id,
      };

    default:
      return state;
  }
};

export const changeThemeId = (id: number): changeThemeIdType => ({
  type: "SET_THEME_ID",
  id,
});

type ActionType = changeThemeIdType;
type changeThemeIdType = {
  type: string;
  id: number;
};
