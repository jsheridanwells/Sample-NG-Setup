module.exports = function(grunt) {

    grunt.initConfig({
        protractor: {
            options: {
                configFile: 'tests/protractor.conf.js',
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

        watch: {
            options: {
                livereload: true
            },
            protractor: {
                files: ['tests/e2e/*.js'],
                tasks: ['protractor:continuous']
            }
        },

        run: {
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
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    livereload: 35729,
                    open: true,
                    base: ['']

                }
            },
            test: {
                options: {
                    base: ['./']
                }
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.loadNpmTasks('grunt-protractor-runner');
    // grunt.loadNpmTasks('grunt-run');

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['connect:test', 'protractor:e2e']);

};