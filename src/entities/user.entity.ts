import {Entity,Column,PrimaryColumn} from 'typeorm';

import { v4 as uuidv4} from 'uuid'

@Entity()

export class User {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    age:number

    @Column()
    created_at:Date

    @Column()
    updated_at:Date

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}