const { registerUser } = require("../functions/register");
const logger = require("../functions/logger");

describe("registerUser", () => {
  beforeEach(() => {
    jest.spyOn(logger, "log").mockImplementation(() => {}); // ✅ мок логгера
  });

  afterEach(() => {
    jest.restoreAllMocks(); // 🔁 очищает spy после каждого теста
  });

  test("логирует при успешной регистрации", () => {
    const user = { name: "Юля", email: "test@example.com" };

    registerUser(user);

    expect(logger.log).toHaveBeenCalledWith("Пользователь Юля зарегистрирован");
  });

  test("ошибка при некорректном email", () => {
    const badUser = { name: "Аня", email: "nope" };

    expect(() => registerUser(badUser)).toThrow("Некорректный email");
    expect(logger.log).not.toHaveBeenCalled(); // 💡 убеждаемся, что логгер не вызывался
  });
});
