var apples = 14
console.log('I have '+ apples + ' apples.')

var materials = ['wood', 'metal', 'stone'];
var words =  {elephant: "The world's largest land mammal.",
school: 'A place of learning.', iceCream: 'A delicious milk-based dessert.',
}

var num = 16;
if (num > 10){
      console.log(num + ' is greater than 10.')
    } else if (num === 10) {
      console.log(num + ' is exactly 10.')
    } else {
      console.log(num + 'must be less than 10.'  )
    }

for (var counter = 0; counter < 10 ; counter++){
  console.log("Doing the same thing over and over.");
}
console.log(counter)

var base = 5,
    counter = 0;
while (counter < 20){
  console.log(counter + base);
  counter++
}
counter++

var total = 0,
    num = 0
while(num < 100){
  total += num
  num++
}
console.log(total)

for (var height = 3; height <= 15 ; height++){
  if (height > 9){
    console.log("You can get on the rollercoaster!");
  } else {
    console.log('You are too short to ride this rollercoaster.');
    }
}

var containers = ['purse', 'wallet', 'backback'];
for (var i=0; i < containers.length; i++){
  console.log(containers[i]);
}


var helloWorld = "Hello world!"
helloWorld


function add(firstNum, secondNum) {
  return firstNum + secondNum;
}
var amount = add(5,7)
console.log(amount)
