const { getAgeCategory, getUserInfo } = require("../functions/utils");
const userFixtures = require("./fixtures/users");

describe("getAgeCategory", () => {
  test.each(userFixtures)("Проверка возрастных категории", ({age, ageExpected}) => {
    expect(getAgeCategory(age)).toBe(ageExpected)
  });
});

describe("getUserInfo", () => {
  test.each(userFixtures)(
    "Корректно возвращает информацию о пользователе: %o",
    ({ name, age, job, expected }) => {
      expect(getUserInfo(name, age, job)).toBe(expected);
    }
  );

  test("Ошибка при отсутствии имени или возраста", () => {
    expect(() => getUserInfo(null, 12)).toThrow("Имя и возраст обязательны");
    expect(() => getUserInfo("Юля", null)).toThrow("Имя и возраст обязательны");
    expect(() => getUserInfo(null, null)).toThrow("Имя и возраст обязательны");
  });
});