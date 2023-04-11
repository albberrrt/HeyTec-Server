import { createId } from "@paralleldrive/cuid2";

export class User {

    public readonly id: string;

    public username: string;
    public email: string;
    public password: string;
    public avatarUrl: string;
    public CPF: string | undefined;

    constructor (props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = createId();
        }
    }

}