prompt('Как тебя зовут?')
let age = prompt('Сколько тебе лет?', 100);
    if (age < 20){
     alert('Тебе меньше 20')
    } else if(age > 20){
        for (let i = 0; i < 5; i++){
            alert('Привет')
        }
    }
let teach = confirm('Хочешь учить js?')
if(teach){
    alert('Супер!')
}else {
    alert("Не хорошо!")
}
