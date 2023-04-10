interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

class User {
    public id: number | undefined;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;

    constructor(props: IUser) {
        this.id = props?.id ?? undefined;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.email = props.email;
        this.password = props.password;
    }

}

export { User, IUser };