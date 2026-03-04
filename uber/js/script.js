
function getData(){
    debugger;
Pickup=document.getElementById("Pickup-location").value;
Drop=document.getElementById("Drop-location").value;
date=document.getElementById("date").value;
time=document.getElementById("time").value;
console.log("your information: -");
console.log("from: " + Pickup );
console.log("to: " + Drop );
console.log("day: " + date );
console.log("time: " + time );
}

function showPayment(){
  const paymentUrl = "https://accept.paymob.com/api/acceptance/iframes/1010871?payment_token=ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5WDJsa0lqb3lNVGN6TVRjMExDSmhiVzkxYm5SZlkyVnVkSE1pT2pFd01EQXdMQ0pqZFhKeVpXNWplU0k2SWtWSFVDSXNJbWx1ZEdWbmNtRjBhVzl1WDJsa0lqbzFOVFl3T1Rjd0xDSnZjbVJsY2w5cFpDSTZORGM0TXpVeE5qZ3hMQ0ppYVd4c2FXNW5YMlJoZEdFaU9uc2labWx5YzNSZmJtRnRaU0k2SWxSbGMzUWlMQ0pzWVhOMFgyNWhiV1VpT2lKVmMyVnlJaXdpYzNSeVpXVjBJam9pVGtFaUxDSmlkV2xzWkdsdVp5STZJazVCSWl3aVpteHZiM0lpT2lKT1FTSXNJbUZ3WVhKMGJXVnVkQ0k2SWs1Qklpd2lZMmwwZVNJNklrTmhhWEp2SWl3aWMzUmhkR1VpT2lKRFlXbHlieUlzSW1OdmRXNTBjbmtpT2lKRlJ5SXNJbVZ0WVdsc0lqb2lkR1Z6ZEVCMFpYTjBMbU52YlNJc0luQm9iMjVsWDI1MWJXSmxjaUk2SWpBeE1EQXdNREF3TURBd0lpd2ljRzl6ZEdGc1gyTnZaR1VpT2lKT1FTSXNJbVY0ZEhKaFgyUmxjMk55YVhCMGFXOXVJam9pVGtFaWZTd2liRzlqYTE5dmNtUmxjbDkzYUdWdVgzQmhhV1FpT21aaGJITmxMQ0psZUhSeVlTSTZlMzBzSW5OcGJtZHNaVjl3WVhsdFpXNTBYMkYwZEdWdGNIUWlPbVpoYkhObExDSmxlSEFpT2pFM056SXpPVEUyTlRRc0luQnRhMTlwY0NJNklqTXVNakl3TGpJeU1DNHlNekFpZlEuaFFZbC1hZzI4U2JMeU9MeVBWMUJPNk5KYzBlX1Bfd3BaeVIyTnFwbVlxcngxSzRPWVEyZzNXeHN1bzJSU2RXbExOYmNlS3ZBWkhoa2FpdEh5UVZ1NlE=";
  
  document.getElementById("paymentFrame").src = paymentUrl;
  document.getElementById("paymentBox").style.display = "block";
}
  var creditRadio = document.getElementById("creditCard");
  var walletRadio = document.getElementById("wallet");
  var cashRadio = document.getElementById("cash");
  var iframeContainer = document.getElementById("iframeContainer");

  creditRadio.addEventListener("change", function() {
    if (this.checked) {
      iframeContainer.style.display = "block";
    }
  });

  walletRadio.addEventListener("change", function() {
    iframeContainer.style.display = "none";
  });

  cashRadio.addEventListener("change", function() {
    iframeContainer.style.display = "none";
  });

// EN----------------AR

