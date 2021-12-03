const { it, expect, describe } = require("@jest/globals");
const TodoController = require("../../controllers/todo.controller");

describe("TodoController", () => {
    describe("TodoController.createTodo", () => {
        it("checks if there is a create todo function", () => {
            expect(typeof TodoController.createTodo).toBe("function");
        });
    });
});



