const { logUserInfo } = require("../functions/logger");

describe("logUserInfo", () => {
  test("вызывает logger с правильным сообщением", () => {
    const mockLogger = jest.fn(); // создаём мок

    const user = { name: "Юля", age: 27 };
    logUserInfo(user, mockLogger);

    expect(mockLogger).toHaveBeenCalled(); // был вызван
    expect(mockLogger).toHaveBeenCalledWith("Юля, 27 лет"); // вызван с этим сообщением
    expect(mockLogger).toHaveBeenCalledTimes(1); // один раз
  });
});
