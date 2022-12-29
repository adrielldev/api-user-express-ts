export interface IUserCreate{
    name:string
    email:string
    password:string
    age:number
    created_at:Date
    updated_at:Date
}

export interface IUserEdit{
    name?:string
    email?:string
    password?:string
    age?:number
    update_at:Date
}

export interface IUserShow {
    name:string
    email:string,
    password?:string,
    age:number
    created_at:Date
    updated_at:Date

}