'use strict';

var config = module.exports = {};

var root = process.cwd();
var publicDir = root + '/public';
var buildDir = root + '/build';

var port = 9000;

config.dev = {
    browserSync: {
        proxy: 'localhost:' + port
    },
    harp: {
        dir: publicDir,
        options: {
            port: port
        }
    },
    watch: {
        content: [
            publicDir + '/**/*.jade',
            publicDir + '/**/*.json'
        ],
        styles: root + '/styles/**/*.styl'
    }
}


// config.

//     del: {
//         src: 'build'
//     },

//     rev: {
//         src: 'build/*.css',
//         dest: 'build'
//     },

//     revReplace: {
//         src: 'build/**/*.html'
//     },

//     tidy: {
//         manifest: 'build/rev-manifest.json'
//     }
