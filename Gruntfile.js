module.exports = function(grunt) {
	//load package JSON
	var pkg = grunt.file.readJSON("package.json");

	//initialize grunt
	grunt.initConfig({
		pkg: pkg,
		concat: {
			javascript: {
				src: [
					/**
					* Static
					*/
					// Utilities module
          'sdk/utility/utility.module.js',
					'sdk/utility/helpers.service.js',
					'sdk/utility/timestamps.service.js',
					'sdk/utility/cache.service.js',
					'sdk/utility/convertions.service.js',
					// Adapter module
					'sdk/adapter/adapter.module.js',
					'sdk/adapter/http_client.factory.js',
					'sdk/adapter/mock_server.factory.js',
					'sdk/adapter/adapter.factory.js',
					'sdk/adapter/http.adapter.factory.js',
					'sdk/adapter/dispatcher.factory.js',
					// Authentication module
					'sdk/auth/authentication.module.js',
					'sdk/auth/authentication_storage.service.js',
					'sdk/auth/authentication_manager.factory.js',
					'sdk/auth/authentication.factory.js',
					// Model module
          'sdk/model/model.module.js',
					'sdk/model/registry.service.js',
          'sdk/model/model.factory.js',
					// AP module
          'sdk/ap/ap.module.js',
					/**
					* Generated
					*/
					// Application Main adapter and dispatcher
					'sdk/adapters/adapters.module.js',
					'sdk/adapters/*.adapter.factory.js',
					'sdk/adapters/dispatcher.factory.js',
					// Application auth
					'sdk/auth/default.authentication.module.js',
					'sdk/auth/default.authentication.factory.js',
					// Application config
					'sdk/config/config.module.js',
					'sdk/config/config.service.js',
					// Models
					'sdk/models/model.module.js',
					'sdk/models/*.factory.js',
					// Sdk module
					'sdk/application/definition.module.js',
					/**
					* Custom
					*/
		      // 'custom/**.js'
				],
				dest: 'ap_sdk.js'
			}
		},
		mocha_phantomjs: {
			all: ['test/index.html']
		},
	    watch: {
	      sdk: {
	        files: ['sdk/**/*.js'],
	        tasks: ['build', 'test']
		  },
	      test: {
	        files: ['test/**/*.js'],
	        tasks: ['test']
		  }
		},
	    yuidoc: {
	      all: {
	        name: '<%= pkg.name %>',
	        description: '<%= pkg.description %>',
	        version: '<%= pkg.version %>',
	        options: {
	          syntaxtype: 'js',
	          extension: '.js',
	          paths: ['./sdk'],
	          outdir: './docs/api'
					}
		  }
		},
	    guides: {
	      all: {
	        expand: true,
	        cwd: 'docs/guides/',
	        src: ['guides.json'],
	        ext: '.html',
	        template: 'guide.html.mustache',
		  }
		},
	    template: {
	      docs: {
	        src: 'docs/index.html.mustache',
	        dest: 'docs/index.html',
					variables: {}
		  }
		}
	});

	grunt.registerMultiTask("guides", "Compile guides", function() {
		var markdown = require("markdown").markdown;
		this.filesSrc.forEach(function(filespath) {
			var guidesConfig = grunt.file.readJSON(filespath);
			for(var i=0; i<guidesConfig.length; i++) {
				var section = guidesConfig[i];
				for(var j=0; j<section.items.length; j++) {
					var guide = section.items[j];
					guide.section_name = section.name;
					var content = grunt.file.read(this.data.cwd+"/src/"+section.name+"/"+guide.name+"/README.md");
					var compiled = markdown.toHTML(content);
					grunt.log.writeln("Compiling guide source for \'"+section.title+": "+guide.title+"\'");
					grunt.config("template.guide-"+guide.name, {
						src: this.data.cwd+"/"+this.data.template,
						dest: this.data.cwd+"/"+section.name+"/"+guide.name+"/index.html",
						variables: {
							title: guide.title,
							name: guide.name,
							section_title: section.title,
							section_name: section.name,
							content: compiled
						}
					});
					grunt.config("template.docs.variables", {
						guides: guidesConfig
					});
				}
			}
		}.bind(this));

		grunt.task.run("template");
	});

	// load required grunt tasks
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-mocha-phantomjs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-templater');

	// define custom tasks
	grunt.registerTask('build', ['concat']);
	// grunt.registerTask('build_docs', ['yuidoc', 'guides']);
	grunt.registerTask('build_docs', ['yuidoc', 'template']);
	grunt.registerTask('test', ['mocha_phantomjs']);
}
