export class User {
    constructor(props) {
        this.email = props.email
        this.username = props.username
        this.last_name = props.last_name
        this.first_name = props.first_name
        this.is_superuser = props.is_superuser
    }
    get_name() {
        let payload = this.username
        payload = this.last_name || payload
        payload = this.first_name || payload
        return payload
    }
}