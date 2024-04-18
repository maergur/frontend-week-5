 function askName() {
    var name = prompt("Lütfen adınızı giriniz:");
    document.getElementById("myName").textContent = name || "Misafir";
  }

  function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var time = h + ":" + m + ":" + s;
    document.getElementById("myClock").innerText = time;
    setTimeout(showTime, 1000);
  }

  askName();
  showTime();