module.exports = function(grunt) {

grunt.initConfig({
  less: {
    production: {
      options: {
        paths: ["bower_components/bootstrap/less"],
        yuicompress: true
      },
      files: {
        "assets/css/application.min.css": "assets/_less/application.less"
      }
    }
  },
  uglify: {
    application: {
      files: {
        'assets/js/application.min.js': ['src/app.js']
      }
    }
  },
  copy: {
    bootstrap: {
      files: [
        {expand: true, cwd: 'bower_components/bootstrap/dist/css', src: ['*.min.css'], dest: 'assets/css'},
        {expand: true, cwd: 'bower_components/bootstrap/dist/css', src: ['*.min.css.map'], dest: 'assets/css'},
        {expand: true, cwd: 'bower_components/bootstrap/dist/fonts', src: ['**'], dest: 'assets/fonts'},
        {expand: true, cwd: 'bower_components/bootstrap/dist/js', src: ['*.min.js'], dest: 'assets/js'}
      ]
    },
    jquery: {
      files: [{
        expand: true, cwd: 'bower_components/jquery/dist/', src: ['jquery.min.js'], dest: 'assets/js/'
      }]
    },
    sticky: {
      files: [{
        expand: true, cwd: 'src/', src: ['sticky.js'], dest: 'assets/js/'
      }]
    }
  },
  exec: {
    build: {
      cmd: 'jekyll build'
    },
    serve: {
      cmd: 'jekyll serve --watch'
    },
    deploy: {
      cmd: 'rsync --progress -a --delete -e "ssh -q" _site/ svandecappelle@mizore.fr:site/'
    }
  },
  clean: ['assets/']
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-clean');

grunt.loadNpmTasks('grunt-exec');

grunt.registerTask('default', [ 'clean', 'less', 'uglify', 'copy', 'exec:build' ]);
grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};
