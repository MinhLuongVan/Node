class newControllers {
    //GET /new
    index(req,res){
        res.render('new');
    }

    //GET/new:slug
    show(req,res){
        res.send('New detail');
    }
}
module.exports = new newControllers;
