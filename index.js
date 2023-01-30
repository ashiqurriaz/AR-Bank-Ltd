/*const loginbtn = document.getElementById("login");
loginbtn.addEventListener("click" , enter)

function enter(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transationArea = document.getElementById("transation-area");
    transationArea.style.display = "block"
}


const dipositbtn = document.getElementById("adddeposit");
dipositbtn.addEventListener("click" , dipo )

function dipo(){
    const depositamount = document.getElementById("dipositAmount").value;
    const depositnumber = parseFloat(depositamount);

    const currentdeposit = document.getElementById("currentdeposit").innerHTML;
    const currentdepositnumber = parseFloat(currentdeposit);
    const totaldeposit = depositnumber + currentdepositnumber;
    
    document.getElementById("currentdeposit").innerHTML = totaldeposit;

    document.getElementById("dipositAmount").value = "";
}  */


const loginbtn = document.getElementById("login")

loginbtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none"
    const transationArea = document.getElementById("transation-area");
    transationArea.style.display = "block";
})


const depositbtn = document.getElementById("adddeposit");
depositbtn.addEventListener("click" , function(){
    const depositamount = document.getElementById("dipositAmount").value ;
    const depositnumber = parseFloat(depositamount);

    const currentdeposit = document.getElementById("currentdeposit").innerHTML;
    const currentdepositnumber = parseFloat(currentdeposit);
    const totaldeposit = depositnumber + currentdepositnumber;
    document.getElementById("currentdeposit").innerHTML = totaldeposit;
    document.getElementById("dipositAmount").value = "";

    const currentBalance = document.getElementById("currentBalance").innerHTML;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositnumber + currentBalanceNumber;
    document.getElementById("currentBalance").innerHTML =  totalBalance ;
})

