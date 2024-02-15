/* Funções */
function addNumber(x: number, y: number): number {
    return x + y;
}

let soma: number = addNumber(22, 3);

function addToHello(name: string) {
    return `Hello ${name}.`
}

// Função multi type
function callToPhone(phone: number | string) {
    return phone;
}

// Função assincrona 
async function getDataBase(id: number): Promise<string> {
    return "Felipe";
}