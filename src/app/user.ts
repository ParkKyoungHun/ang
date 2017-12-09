export class User{
    userName : string;
    userAge : number;
    getUserName():string{
        return this.userName;
    }
    setUserName(userName:string):void{
        this.userName = userName;
    }
}