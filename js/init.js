/* Функциональное выражение */
let GRU = function()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#secondNameOutput').innerText = initPerson.secondName;
    document.querySelector('#surnameOutput').innerText = initPerson.surName;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
    document.querySelector('#jobOutput').innerText = initPerson.job;
    document.querySelector('#birthDayOutput').innerText = initPerson.birthDay;
};

/* При открытии страницы */
window.onload = GRU();

/* При нажатии кнопки Генерация */
document.querySelector('#btnGen').addEventListener('click', GRU);

/* Функция очистки значений генерации */
function clear () {
    document.querySelector('#firstNameOutput').innerText = null;
    document.querySelector('#secondNameOutput').innerText = null;
    document.querySelector('#surnameOutput').innerText = null;
    document.querySelector('#genderOutput').innerText = null;
    document.querySelector('#birthYearOutput').innerText = null;
    document.querySelector('#jobOutput').innerText = null;
    document.querySelector('#birthDayOutput').innerText = null;
}

/* При нажатии кнопки Сброс */
document.querySelector('#btnReset').addEventListener('click', clear);