
const bookController = require('../controllers/book.controller');



module.exports = function(app){


    //Route for creating a new category
    app.post('/library/api/v1/books', bookController.create);

    //Route for getting all the categories
    app.get('/library/api/v1/books', bookController.findAll);

    //Route for getting the category based on the category id
    app.get('/library/api/v1/books/:id', bookController.findOne);

    //Route for updating the category
    app.put('/library/api/v1/books/:id', bookController.update);


    //Route for deleting the category
    app.delete('/library/api/v1/books/:id', bookController.delete);
    //Route for getting the category based on the name - filter the result based on the name
}