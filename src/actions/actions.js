// Creates Redux functions that edit the Redux variables to be used by any React||Redux component

export const showMenu = (z) => {
    return {
        type: 'SHOW_MENU',
        showMenu: z
    }
}
export const showSearch = (z) => {
    return {
        type: 'SHOW_SEARCH',
        showSearch: z
    }
}
export const showSign = (z) => {
    return {
        type: 'SHOW_SIGN',
        showSign: z
    }
}
export const showSettings = (z) => {
    return {
        type: 'SHOW_SETTINGS',
        showSettings: z
    }
}
export const getGames = (z) => {
    return {
        type: 'GET_GAMES',
        Games: z
    }
}
export const searchGames = (z) => {
    return {
        type: 'SEARCH_GAMES',
        GamesSearch: z
    }
}
export const gameIndex = (z) => {
    return {
        type: 'GAME_INDEX',
        gameIndex: z
    }
}
export const setUser = (z) => {
    return {
        type: 'USER_INFO',
        user: z
    }
}
export const gameurl = (z) => {
    return {
        type: 'GET_URL',
        gameUrl: z
    }
}
export const color = (z) => {
    return {
        type: 'GET_COLORS',
        colors: z
    }
}
export const refreshApp = (z) => {
    return {
        type: 'REFRESH_APP',
        refreshApp: z
    }
}