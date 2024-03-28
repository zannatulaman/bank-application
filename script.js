const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click", () => {
    
    const  emailInput = document.getElementById("email");
    const  passwordInput = document.getElementById("password");

    const emailValue = emailInput.value; 
    const passwordValue = passwordInput.value; 

    //console.log(emailValue);

    if(emailValue && passwordValue){
        const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";

    }else{
        alert("Give your email and password");
    }

    //add addEventListener for deposit

    const depositButton = document.getElementById("deposit-btn");

    depositButton.addEventListener("click", () => {

        const amount = document.getElementById("depositInput").value
        const depositAmount = parseFloat(amount);
        //console.log(depositAmount);
        document.getElementById("depositInput").value = ""

        const balance = document.getElementById("balanceStatus").innerText
        const currentBalance = parseFloat(balance);
        //console.log("Current balance", currentBalance);

         const minimumAmount = 10;
         
         if(depositAmount < minimumAmount){
            alert("The minium amount is $10");
            return;
         }

        const total = currentBalance + depositAmount;
        document.getElementById("balanceStatus").innerText = total;

        const deposit = document.getElementById("depositStatus");
        const currentDeposit = parseFloat(deposit);
        document.getElementById("depositStatus").innerText = depositAmount;


    })

  //add addEventListener for withdraw
  const withdrawButton = document.getElementById("withdraw-btn");

     withdrawButton.addEventListener("click", () => {

        const amount = document.getElementById("withdrawInput").value
        const withdrawAmount = parseFloat(amount);
        //console.log(depositAmount);
        document.getElementById("withdrawInput").value = ""

        const balance = document.getElementById("balanceStatus").innerText
        const currentBalance = parseFloat(balance);
        //console.log("Current balance", currentBalance);

        if(withdrawAmount >= currentBalance){
            alert("Insufficient Balance");
            return;
        }

        const total = currentBalance - withdrawAmount;
        document.getElementById("balanceStatus").innerText = total;

        const withdraw = document.getElementById("withdrawStatus");
        const currentWithdraw = parseFloat(withdraw);
        document.getElementById("withdrawStatus").innerText = withdrawAmount;


    })


})