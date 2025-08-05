function getAgeCategory(age) {
  return age < 13 ? "Ребенок" : age < 18 ? "Подросток" : "Взрослый";
}

function getUserInfo(name, age, job) {
  if (!name || !age) {
    throw new Error("Имя и возраст обязательны");
  }

  const isAdult = age >= 18;
  const jobMessage = job ? `Я работаю как ${job}` : "Я пока безработный";

  return `Меня зовут ${name}, мне ${age} лет. ${
    isAdult ? "Я взрослый" : "Я несовершеннолетний"
  }. ${jobMessage}.`;
}

module.exports = { getAgeCategory, getUserInfo };
