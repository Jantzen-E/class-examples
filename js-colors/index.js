const arguements = process.argv;
const userColor = arguements[2];

if (userColor !=='red' &&
    userColor !=='green' &&
    userColor !=='pink' &&
    userColor !=='yellow' &&
    userColor !=='blue' &&
    userColor !=='purple' &&
    userColor !=='orange')
{
    console.log(`You need to enter a valid color. ${userColor} is not valid.  The supported colors are red, green, pink, yellow, blue, purple, and orange.`);
    return;
}


if (userColor === 'red') {
    console.log('Red is a great color');
}

else if (userColor === 'green') {
    console.log('green is the color of poison ivy');
}

else if (userColor === 'pink') {
    console.log('pink is a bright color');
}
else if (userColor === 'yellow') {
    console.log('yellow is the color of a sunflower');
}

else if (userColor === 'blue') {
    console.log('blue is the color that represents loyalty');
}

else if (userColor === 'purple') {
    console.log('purple is a fantastic color');
}

else if (userColor === 'orange') {
    console.log('orange is a color and a fruit');
}

