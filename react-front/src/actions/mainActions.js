import ACTION_TYPES from './actionTypes'

export const updateProperties = newProps => dispatch => {
    dispatch({
        type: ACTION_TYPES.UPDATE_PROPERTIES,
        payload: newProps,
    })
}