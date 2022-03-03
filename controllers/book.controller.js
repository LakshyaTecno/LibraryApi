const model =require("../models");

const Book = model.book;

exports.create=(req,res)=>{

    const book={
        title : req.body.title,
        author : req.body.author,
        release_date : req.body.release_date,
        publisher : req.body.publisher
    }

    Book.create(book).then(book =>{
       res.status(201).send(book);
        console.log("Book Added in DB",book.title);
    }).catch(err=>{
        console.log("Error While adding book in DB",book.title, err);

        res.status(500).send({
            message:"Some internal Error happend"
        })
    })
}

exports.findAll =(req,res) =>{
    
    Book.findAll().then((books)=>{
        console.log("All books are")
        res.status(200).send(books);
    }).catch(err=>{
        res.status(500).send({
            message: "Some internal error happened"
        })
    })


}



exports.findOne = (req, res)=>{

    const bookId  = req.params.id ;

    Book.findByPk(bookId).then((book) =>{
        console.log("find by ID")
        res.stasend(book);
    }).catch(err=>{
        res.status(500).send({
            message : "Internal error occured"
        })
    })
}



/**
 * Handler for updating the book
 */

exports.update = (req, res)=>{

    const book={
        title : req.body.title,
        author : req.body.author,
        release_date : req.body.release_date,
        publisher : req.body.publisher
    }

    const bookId = req.params.id;

    /**
     * Update the book
     */

    Book.update(
        book, {
            returning : true,
            where : {
                id : bookId 
            }
        }
    ).then(updatedBook=>{
        /**
         * I need to fetch the updated object
         */
         Book.findByPk(bookId).then(book =>{
             console.log("Updated")
            res.status(200).send(book);
        }).catch(err=>{
            res.status(500).send({
                message : "Internal error occured"
            })
        })
    }).catch(err=>{
        res.status(500).send({
            message : "Internal error occured"
        })
    })

}

/**
 * Handler for deleting the book
 */

exports.delete = (req, res)=>{
    const bookId = req.params.id;

    Book.destroy({
        where :{
            id: bookId
        }
    }).then( result =>{
        console.log(result);
        res.status(200).send({
            message: "Deleted"
        })
    }).catch(err=>{
        res.status(500).send({
            message : "Internal error occured"
        })
    })
}