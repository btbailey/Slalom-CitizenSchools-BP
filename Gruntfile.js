module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      css: {
        files: './public/stylesheets/**/*.scss',
        tasks: ['sass']
      }
    },
    
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          './public/stylesheets/main.css': './public/stylesheets/main.scss'
        }
      }
    }
  });

  // load all grunt tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  
  grunt.registerTask('default', ['sass', 'watch']);
};