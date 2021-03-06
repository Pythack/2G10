function getDeviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    console.log('Detected device type : tablet');
    localStorage.setItem('device_type', 'tablet');
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    console.log('Detected device type : mobile');
    localStorage.setItem('device_type', 'mobile');
    return "mobile";
  }
  console.log('Detected device type : desktop');
  localStorage.setItem('device_type', 'desktop');
  return "desktop";
}

function format() {
  var device_type = getDeviceType();
  if (device_type == "mobile") {
    document.getElementById('stylesheet').setAttribute('href', 'mobile.css');
  }
  if (device_type == "tablet") {
    document.getElementById('stylesheet').setAttribute('href', 'tablet.css');
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function dropdown() {
  var dropdownContent = document.getElementById('dropdown-container');
  if (dropdownContent.style.height == "95px") {
    dropdownContent.style.height = "0";
  } else {
    dropdownContent.style.height = "95px";
  }
}
