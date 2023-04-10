interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

class User {
    private id: number | undefined;
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;

    constructor(props: IUser) {
        this.id = props?.id ?? undefined;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.email = props.email;
        this.password = props.password;
    }

}

export { User, IUser };