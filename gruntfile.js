module.exports = function(grunt) {

    grunt.initConfig({

        jshint: {
            options: {
                browser: true,
                devel: true,
                esversion: 6,
                jasmine: true,
                jquery: true,
                node: true,
                reporter: require('jshint-stylish'),
                predef: [
                    'angular',
                    'app',
                    'browser',
                    'element',
                    '$$',
                    '$',
                    'by',
                    'inject'
                ]
            },
            build: {
                options: {
                    devel: false
                }
            },
            files: ['./src/**/*.js', './tests/**/*spec.js']
        },        

        karma: {
            options: {
                configFile: './tests/karma.conf.js'
            },
            unit: {
                singleRun: true
            },
            continuous: {
                background: true
            }
        },

        protractor: {
            options: {
                configFile: './tests/protractor.conf.js',
                noColor: false,
                args: {

                }
            },
            e2e: {
                options: {
                    keepAlive: false
                }
            },
            continuous: {
                options: {
                    keepAlive: true
                }
            }
        },

        ngAnnotate: {
            options: { singleQuotes: true },
            app: {
                files: {
                    './min-safe/annotated.js': ['./src/**/*.js']
                }
            }
        },

        babel: {
            dist: { files: { './min-safe/babelified.js': './min-safe/annotated.js' } },
            options: {
                sourceMap: false
            }
        },

        uglify: {
            js: {
                src: ['./min-safe/babelified.js'],
                dest: './dist/build.min.js'
            }
        },    

        processhtml: {
            dist: { files: { './dist/index.html': ['./index.html'] } }
        },

        watch: {
            options: {
                livereload: true
            },
            javascripts: {
                files: ['./src/**/*.js', './tests/**/*.spec.js'],
                tasks: ['jshint', 'concat'] 
            },
            html: {
                files: ['./index.html']
            },
            karma: {
                files: ['./src/**/*.js', './tests/e2e/*.js'],
                tasks: ['karma:continuous:run']
            },
            protractor: {
                files: ['./tests/e2e/*.js'],
                tasks: ['protractor:continuous']
            }
        },

        run: {  // i don't know what this does yet
            mock_server: {
                options: {
                    wait: false
                },
                args: []
                // args: ['app/mockApi/apiserver.js']
            }
        },

        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                base: './',
                livereload: 35729,
                open: true                
            },
            test: {
                options: { livereload: false, open: false }                               
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    
    grunt.registerTask('default', ['jshint', 'connect', 'karma:continuous:start', 'watch']);
    grunt.registerTask('serve', ['connect']);
    grunt.registerTask('test', ['karma:unit:start', 'connect:test', 'protractor:e2e']);
    grunt.registerTask('test:unit', ['karma:continuous:start', 'watch:karma']);
    grunt.registerTask('test:e2e', ['connect:test', 'protractor:continuous', 'watch:protractor']);
    grunt.registerTask('build', ['jshint', 'test', 'ngAnnotate', 'babel', 'uglify', 'processhtml']);  
};