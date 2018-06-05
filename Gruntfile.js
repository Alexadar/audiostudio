'use strict';

module.exports = function (grunt) {

	grunt.initConfig({
		clean: {
			folder: ['docs/'],
		},
		copy : {
			main: {
				files: [{
					expand: true,
					cwd   : 'dist/',
					src   : 'songs/*',
					dest  : 'docs/'
				}, {
					expand: true,
					cwd   : 'dist/',
					src   : 'assets/*/**',
					dest  : 'docs/'
				}, {
					expand: true,
					cwd   : 'dist/',
					src   : 'index.html',
					dest  : 'docs/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean', 'copy']);

};