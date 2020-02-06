let favMovie = (movie='Superstar', name='Jillian') => console.log(`my name is ${name} and my favorite movie is ${movie}`);

favMovie('Superstar', 'Jillian');

let getFirstNameConcise = name => console.log(name.split(' ')[0]);

let getFirstName = (name) => {
    console.log(`My name is ${name.split(' ')[0]}`);    //template literal (step 10)
}; 

getFirstName('Jillian Turman');
getFirstNameConcise('Jill Turman');

//Spread syntax
let spread = (name, location, favFood) => {
    console.log(`My name is ${name}, I live in ${location}, My favorite food is ${favFood}`);

}

spread('Jillian', 'Glen-Iris', 'Sushi');

let arr = ["Jill","Birmingham","Pizza"]

spread(...arr)

let myFunction= (name) => {
    let arr = [...name]
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element)
        
    }
}

myFunction ('Jillian Turman');