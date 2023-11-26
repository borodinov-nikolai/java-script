





let role;
let password;
role = prompt("Кто там?", '');




if(!role){
    alert('Отменено')
} else if (role !== 'Админ'){
    alert('Я вас не знаю')
} else {
    password = prompt('Пароль?', '')

    if(!password) {
        alert('Отменено')
    } else if(password !== 'Я Главный') {
        alert('Неверный пароль')
    } else {
        alert('Здравствуйте!')
    }

}


