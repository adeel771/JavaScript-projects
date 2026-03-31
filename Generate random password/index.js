const passwordBox= document.getElementById("Password");
const length=12;
const upperCasae ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz"
const number ="0123456789";
const symbol ="@#${}][*&^%.\][\<>?+-()";


const allchars= upperCasae + lowerCase + number +symbol;
function  createPassword(){
     let  password ="";
     password +=upperCasae[Math.floor(Math.random()* upperCasae.length)]
     password +=lowerCase[Math.floor(Math.random()* lowerCase.length)]
     password +=number[Math.floor(Math.random()* number.length)]
     password +=symbol[Math.floor(Math.random()* symbol.length)]

     while(length > password.length){
    password  +=allchars[Math.floor(Math.random()* symbol.length)]

     }
     passwordBox.value =password;
    };
    const copyPassword = ()=>{
       passwordBox.select();
 navigator.clipboard.writeText(passwordBox.value);
    }
