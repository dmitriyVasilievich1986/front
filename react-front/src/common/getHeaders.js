import store from '../store'

export default function () {
    const options = {
        headers: {
            'Authorization': `token ${store.getState().main.token}`
        }
    }
    return options
}