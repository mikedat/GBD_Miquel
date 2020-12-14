
let tablaTemp = [

    ["Huesca", 20.5, 13.5, 16.5 ],
    ["Zaragoza", 22.5, 13.5, 17.5 ],
    ["Teruel", 24.5, 13.5, 18.5 ],
    ["Lleida", 17.5, 13.5, 13.7 ]
];

console.log(tablaTemp[0][2]);

for (let c = 0; c < tablaTemp.length; c++) {
    for (let v = 0; v < tablaTemp[c].length; v++) {
       console.log("Ciudad: "+c);
       console.log("Valor: "+v); 
    }
    
}

for (const ciudad of tablaTemp) {
        for (const valor of ciudad) {
                console.log(valor);
        }
}