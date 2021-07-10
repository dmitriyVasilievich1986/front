import ACTION_TYPES from '../actions/actionTypes'

const initState = {
    fullCatalog: { 'name': '/', title: 'Главная', catalog: [] },
    token: localStorage.getItem('token') || "",
    comments: [],
    indexes: [],
    search: [],
    user: null,
}

export default function (state = initState, action) {
    switch (action.type) {
        case (ACTION_TYPES.UPDATE_INDAXES):
            return {
                ...state,
                indexes: action.payload,
            }
        case (ACTION_TYPES.UPDATE_PROPERTIES):
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}