function App(){
    alert("Check the console output!")
    let age=18;
    let name="Kiran";
    let setStatus=false;
    let userDefault=undefined;
    let responseValue=null;
    console.log(age);
    console.log(name);
    console.log(setStatus);
    console.log(userDefault);
    console.log(responseValue);
    
    let oldage=age;
    age=25;
    let status=setStatus;
    setStatus=true;
    console.log(age);
    console.log(setStatus);
}