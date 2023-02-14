
window.onload = function()
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

