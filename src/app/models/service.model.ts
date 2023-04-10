interface IService {
    title: string;
    description: string;
    userId: number;
}

class Service {
    public title: string;
    public description: string;
    public userId: number;

    constructor(props: IService) {
        this.title = props.title;
        this.description = props.description;
        this.userId = props.userId;
    }
}

export { Service, IService };