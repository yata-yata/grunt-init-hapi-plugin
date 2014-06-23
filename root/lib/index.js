// Load modules


// Declare internals

var internals = {};

exports.register = function(plugin, options, next){
    plugin.route([
    ]);

    next();
};

exports.register.attributes = {
    pkg: require('../package.json')
};
