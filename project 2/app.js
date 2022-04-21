//Simple application to extract info from an array of dictionaries
let data = [
    {
        name : 'Henrique',
        age : 32,
        work : 'designer',
    },
    {
        name : 'Victor',
        age : 26,
    },
    {
        name : 'Marta',
        age : 34,
    },
    {
        name : 'Alex',
        age : 26,
    },
    {
        name : 'John',
        age : 35,
    },
    {
        name : 'Sam',
        age : 23,
        
    },
    {
        name : 'Sandra',
        age : 29,
    }
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' is ' + item.age + ' years old' + '</div>'
        
    
});

info.innerHTML = details.join('\n');




