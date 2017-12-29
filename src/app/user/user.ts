export class User {
    userNo: number;
    userId: string;
    userName: string;
    userPwd : string;
    userAge : number;
    complete: boolean;
    token:string;
    constructor(values: Object = {}) {
      console.log('날 실행했구나 니가!!');
      Object.assign(this, values);
    }
}