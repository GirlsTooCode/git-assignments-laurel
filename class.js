class User
{
    constructor(username, password)
    {
        this.username=username;
        this.password=password;
    }
    message(){
        console.log(this.username,this.password)
      } 
}
let user = new User(username,password);
user.message();