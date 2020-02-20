exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor';
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404');
    }
    next();
}

exports.csrfMiddleware = (req, res) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}