var mobile:string = "+(44)(30) 2242 4563";
if(mobile.match(/\+\(44\)\([0-9]{2}\)\s[0-9]{4}\s[0-9]{4}/)) {
   console.log("OTP Sent");
   document.write("OTP Sent");
} else {
  console.log("Invalid Mobile");
  document.write("Invalid Mobile");
}