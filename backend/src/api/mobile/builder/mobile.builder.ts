import MobileEntity from "../entity/mobile.entity";

export class MobileEntityBuilder {
    private readonly _mobile: MobileEntity;

    constructor() {
        this._mobile = {
            id: null,
            name: "",
            picture: "",
            description: ""
        };
    }

    name(name: string): MobileEntityBuilder {
        this._mobile.name = name;
        return this;
    }

    picture(picture: string): MobileEntityBuilder {
        this._mobile.picture = picture;
        return this;
    }

    description(description: string): MobileEntityBuilder {
        this._mobile.description = description;
        return this;
    }

    build(): MobileEntity {
        return this._mobile;
    }
}