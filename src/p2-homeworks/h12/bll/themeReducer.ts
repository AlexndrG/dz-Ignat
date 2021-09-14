export const themes = ['dark', 'red', 'some', 'new'];

type ThemeStateType = {
    themeName: string
}

const initState = {
    themeName: themes[0],
};

type changeThemeType = {
    type: 'CHANGE_THEME'
    themeName: string
}

type ActionsType = changeThemeType

export const themeReducer = (state:ThemeStateType = initState, action: ActionsType): ThemeStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {
                ...state,
                themeName: action.themeName,
            }
        }

        default: return state;
    }
};

export const changeThemeC = (themeName: string): changeThemeType => ({type: 'CHANGE_THEME', themeName}); // fix any