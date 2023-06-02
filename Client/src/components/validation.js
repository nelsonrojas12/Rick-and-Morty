export default (data) =>{
    let errors = {};

    if(data.email.includes('@')){ 
       errors.e1 = 'Email is not valid'
    }
    if(!data.email){
        errors.e2 ='ingrese el Email'
    }
    if(data.email.length > 35){
        errors.e3 = 'menos de 35 caracteres'
    }
    if(!/\d/.test(data.password)){
        errors.e4 = 'Al menos debe tener un numero'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.e5 = 'Longitud incorrecta'
    }
    return errors
};
