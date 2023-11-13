function parseString(object) {
    return JSON.stringify(object);
}


const user = {
    name: 'Wiliamis',
    idade: 26,
    address: {
        street: 'Rua teste',
        number: 34,
        // zip: {
        //     code: 8916000,
        //     city: 'Rio do Sul',
        // }
    },
};  



document.body.innerText = user.address?.zip?.code ?? 'Não informado';