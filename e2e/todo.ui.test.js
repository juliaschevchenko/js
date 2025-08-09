const { test, expect } = require("@playwright/test");

const todoInput = (page) => page.getByPlaceholder("What needs to be done?");
const todoItem = (page) => page.getByTestId("todo-item").last();
const allTodoItems = (page) => page.getByTestId("todo-item");
const todoTitle = (page) => page.getByTestId("todo-title").last();
const checkbox = (page) =>
  page.getByRole("checkbox", { name: "Toggle Todo" }).last();
const clearCompletedtasks = (page) =>
  page.getByRole("button", { name: "Clear completed" });
const taskName = "Купить молоко";
async function addTask(page, name, check = true) {
  await todoInput(page).fill(name);
  await page.keyboard.press("Enter");
  if (check && name.trim()) {
    await expect(todoTitle(page)).toHaveText(name);
  }
}

test.describe("Smoke", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/todomvc/#/");
    await expect(page).toHaveTitle(/React/);
  });
  test("Добавление одной задачи", async ({ page }) => {
    await addTask(page, taskName);
  });
  test("Отметка задачи как выполненной", async ({ page }) => {
    await addTask(page, taskName);
    await checkbox(page).click();
    await expect(todoItem(page), "Задача не отмечена выполненной").toHaveClass(
      /completed/
    );
  });
  test("Удаление задачи через кнопку удаления", async ({ page }) => {
    await addTask(page, taskName);
    await checkbox(page).click();
    await clearCompletedtasks(page).click();
    await expect(
      page.locator(".completed"),
      "Выполненные задачи не удалены"
    ).toHaveCount(0);
    await expect(allTodoItems(page).filter({ hasText: taskName })).toHaveCount(0);
  });
  test("Валидация пустого поля", async ({ page }) => {
    await addTask(page, "");
    await expect(allTodoItems(page), "Пустое поле не валидируется").toHaveCount(
      0
    );
  });
});
