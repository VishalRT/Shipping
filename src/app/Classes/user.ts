export class LoginUser
{
    mobileNo:number;
    pass:string;
    type:string;
    constructor(id,pass,type)
    {
        this.mobileNo=id;
        this.pass=pass;
        this.type=type;
    }
}

export class User
{
    name:string;
    emailId:string;
    mobileNo:number;
    age:number;
    address:string;
    pass:string;
    
    constructor(name,emailId,mobileNo,age,address,pass)
    {

        this.name=name;
        this.emailId=emailId;
        this.mobileNo=mobileNo;
        this.age=age;
        this.address=address;
        this.pass=pass;
    }
}