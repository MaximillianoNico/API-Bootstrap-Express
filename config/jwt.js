const Authorization = (req,res, next) => {
    var headerName = "X-Authorization-Blogdev";
        if (req.headers && req.headers[headerName]) {
            var parts = req.headers[headerName].split(' ');
            if (parts.length === 2 && parts[0] === "Bearer") {
                req["token"] = parts[1];
            }
        }

        next();
}

module.exports = Authorization;