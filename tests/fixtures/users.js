const userFixtures  = [
  {
    name: "Юля",
    age: 27,
    job: "QA Lead",
    expected: "Меня зовут Юля, мне 27 лет. Я взрослый. Я работаю как QA Lead.",
    ageExpected: "Взрослый",
  },
  {
    name: "Аня",
    age: 17,
    job: "",
    expected:
      "Меня зовут Аня, мне 17 лет. Я несовершеннолетний. Я пока безработный.",
    ageExpected: "Подросток",
  },
    {
    name: "Андрей",
    age: 18,
    job: "разработчик",
    expected:
      "Меня зовут Андрей, мне 18 лет. Я взрослый. Я работаю как разработчик.",
    ageExpected: "Взрослый",
  },
      {
    name: "Вася",
    age: 11,
    job: "",
    expected:
      "Меня зовут Вася, мне 11 лет. Я несовершеннолетний. Я пока безработный.",
    ageExpected: "Ребенок",
  },
];

module.exports = userFixtures;