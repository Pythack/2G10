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

function calculate(tool) {
  if (tool == "ecart_relatif") {
    value1 = document.getElementById('value1').value;
    value2 = document.getElementById('value2').value;
    result = Math.abs(value1-value2)/value2
    result *= 100
    document.getElementById('result').value = result + "%";
  }
}
