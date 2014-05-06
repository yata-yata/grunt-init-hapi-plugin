exports.description = 'Create a hapi plugin repo';

exports.template = function(grunt, init, done) {

    init.process({}, [
        init.prompt('name', 'hapi-plugin'),
        init.prompt('description', 'description')
    ], function(err, props) {

        var files = init.filesToCopy(props);
        init.copyAndProcess(files, props);

        init.writePackageJSON('package.json', {
            name: props.name,
            decription: props.description,
            author: 'Michael Davis',
            version: '0.1.0',
            main: 'index',
            peerDependencies: {
              hapi: '4.x'
            },
            dependencies: {
            },
            devDependencies: {
              lab: '^3.1.1',
              hapi: '^4.1.0'
            },
            scripts: {
              test: 'node ./node_modules/lab/bin/lab -v -c -p'
            },
            licenses: 'MIT'
        });

        done();
    });
};
