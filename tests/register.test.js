jest.mock("../functions/logger", () => ({
  log: jest.fn(), // мок метода log
}));

const { registerUser } = require("../functions/register");
const logger = require("../functions/logger"); // подключаем после mock

describe("registerUser", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // очищает мок после каждого теста
  });

  test("логирует при успешной регистрации", () => {
    const user = { name: "Юля", email: "test@example.com" };

    registerUser(user);

    expect(logger.log).toHaveBeenCalledWith("Пользователь Юля зарегистрирован");
  });

  test("ошибка при некорректном email", () => {
    const badUser = { name: "Аня", email: "invalid" };

    expect(() => registerUser(badUser)).toThrow("Некорректный email");
    expect(logger.log).not.toHaveBeenCalled();
  });
});
