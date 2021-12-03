//HTTP MOCKS TO USE AS A TEMP DB TO MOCK UP A MONGOOSE SERVCER CALL
const httpMocks = require("node-mocks-http");

//FAKE DATA
const newTodo = require("../mock-data/new-todo.json");

//JEST METHODS
const { it, expect, describe, beforeEach } = require("@jest/globals");

//FUNCTIONS TO BE TESTED
const TodoController = require("../../controllers/todo.controller");

//SCHEMA
const TodoModel = require("../../model/todo.model");


TodoModel.create = jest.fn(); //created a mock or spy function because we are assuming that mongoDB works, we are just checking out code



describe("TodoController", () => {

    let req, res, next; 

    beforeEach(() => {
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next = null;
    })

    describe("TodoController.createTodo", () => {

        beforeEach(() => {
            req.body = newTodo;
        })

        it("checks if there is a create todo function", () => {
            expect(typeof TodoController.createTodo).toBe("function");
        });

        it("should call TodoModel.create", () => {
            //setup
            TodoController.createTodo(req, res, next);

           //exercise & verify
           expect(TodoModel.create).toBeCalledWith(newTodo);
        });

        it("should have a response code of 201", () => {
            //setup
            TodoController.createTodo(req, res, next);

           //exercise & verify
           expect(res.statusCode).toBe(201);
           expect(res._isEndCalled()).toBeTruthy();
        });

        it("should return a json body in response", () => {
            //setup
            TodoModel.create.mockReturnValue(newTodo);
            TodoController.createTodo(req, res, next);
            
           //exercise & verify
           expect(res._getJSONData()).toStrictEqual(newTodo);
        });
    });
});



