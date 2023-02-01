//Login Area

    const loginbtn = document.getElementById("login")

    loginbtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none"
    const transationArea = document.getElementById("transation-area");
    transationArea.style.display = "block";
})

//Deposit Part

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

//Withdraw Part

    const withdrawbtn = document.getElementById("addwithdraw")
    withdrawbtn.addEventListener("click" , function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawnumber = parseFloat(withdrawAmount);

    const currentwithdraw = document.getElementById("currentWithdraw").innerHTML;
    const currentwithdrawnumber = parseFloat(currentwithdraw);
    const totalwithdraw = withdrawnumber  + currentwithdrawnumber;
    document.getElementById("currentWithdraw").innerHTML = totalwithdraw;
    document.getElementById("withdrawAmount").value = "";

    const currentBalanceAW = document.getElementById("currentBalance").innerHTML;
    currentBalanceAWNumber = parseFloat(currentBalanceAW);
    const totalbalance = currentBalanceAWNumber  -  withdrawnumber;
    document.getElementById("currentBalance").innerHTML = totalbalance;

   
})

