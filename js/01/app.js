array = [1,2,3,4,5]
let suma = 0
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`${suma} + ${array[index]}`);
    suma = array[index] + suma
}