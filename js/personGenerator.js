const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Петр",
            "id_6": "Костантин",
            "id_7": "Михаил",
            "id_8": "Роман",
            "id_9": "Егор",
            "id_10": "Артур"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Мария",
            "id_2": "Анна",
            "id_3": "Виктория",
            "id_4": "Анастасия",
            "id_5": "Алиса",
            "id_6": "Полина",
            "id_7": "Елизавета",
            "id_8": "Александра",
            "id_9": "Дарья",
            "id_10": "Варвара"
        }
    }`,
    maleJobJson: `{
        "count": 10,
        "list": {
            "id_1": "моряк",
            "id_2": "летчик",
            "id_3": "шахтер",
            "id_4": "сантехник",
            "id_5": "полицейский",
            "id_6": "охранник",
            "id_7": "пожарный",
            "id_8": "слесарь",
            "id_9": "строитель",
            "id_10": "водитель"
        }
    }`,
    femaleJobJson: `{
        "count": 10,
        "list": {
            "id_1": "врач",
            "id_2": "няня",
            "id_3": "швея",
            "id_4": "косметолог",
            "id_5": "студентка",
            "id_6": "официантка",
            "id_7": "портная",
            "id_8": "стюардесса",
            "id_9": "переводчица",
            "id_10": "балерина"
        }
    }`,
    birthMonthJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

// генератор пола, от него зависят фамилия, отчество, профессия
    randomGender: function () {
        if (this.randomIntNumber() == 1) {
            return this.GENDER_MALE;
        }
        return this.GENDER_FEMALE;
    },
// генератор базовых значений фамилии и имени, извлекаемых из json
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
// генератор имени, зависит от пола
    randomFirstName: function(gender) {
        if (gender == this.GENDER_FEMALE) {
        return this.randomValue(this.firstNameFemaleJson);
        }
        return this.randomValue(this.firstNameMaleJson);
    },
// генератор фамилии, зависит от пола
    randomSurname: function(gender) {
        if (gender == this.GENDER_FEMALE) {
            return this.randomValue(this.surnameJson) + 'а';
        }
        return this.randomValue(this.surnameJson);
    },
// генератор отчества, зависит от пола
    randomSecondName: function(gender) {
        if (gender == this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameMaleJson) + 'овна';
        }
        return this.randomValue(this.firstNameMaleJson) + 'ович';
    },
// генератор года рождения с границами max, min
    randomBirthYear: function() {
        return this.randomIntNumber(2000,1960) + ' года рождения';
    },
// генератор профессии, зависит от пола
    randomJob: function(gender) {
        if (gender == this.GENDER_FEMALE) {
            return this.randomValue(this.femaleJobJson);
        }
            return this.randomValue(this.maleJobJson);
    },
// генератор месяца рождения
    randomMonth: function() {
        return this.randomValue(this.birthMonthJson);
    },
// генератор дня рождения, зависит от месяца
    randomBirthDay: function(month) {
        let day;
        if (month == "февраля") {
            console.log("февраль");
            day = 28;
        } else if (month == "апреля" || "июня" || "сентября" || "ноября") {
            console.log("30"); 
            day = 30;
        } else {
            console.log("31");
            day = 31;
        }
        return this.randomIntNumber(day, 1) + ' ' + month;
    },
    getPerson: function () {
        let gender = this.randomGender();
        let month = this.randomMonth();
        this.person = {};
        this.person.gender = gender; 
        this.person.surName = this.randomSurname(gender);
        this.person.firstName = this.randomFirstName(gender);
        this.person.secondName = this.randomSecondName(gender);
        this.person.birthYear = this.randomBirthYear();
        this.person.job = this.randomJob(gender);
        this.person.birthMonth = month;
        this.person.birthDay = this.randomBirthDay(month);
        return this.person;
    }
};