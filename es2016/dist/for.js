
console.log('******************************');
//Old JS
let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

for (let browser in browsers) {
  console.log(browser + " " + browsers[browser]);
}

console.log('******************************');
//New JS
for (let browser of browsers) {
  console.log(browser);
}

console.log(browsers);