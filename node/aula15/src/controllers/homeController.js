exports.paginaInicial = (req,res) => {
    // req.session.usuario = { nome: 'Luiz', logado: true };
    //console.log(req.session.usuario);
    // req.flash('info', 'Ola mundo');
    // req.flash('error', 'Errou');
    // req.flash('success', 'Ola mundo sucesso');
    console.log(req.flash('error'), req.flash('info'), req.flash('success'));
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(`Ei, sou sua nova rota de POST`);
    return;
};