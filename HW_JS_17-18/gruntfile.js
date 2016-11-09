module.exports = function(grunt) {

  grunt.initConfig({

  concat: {
          dist: {
              src: ['js/src/*.js'],
              dest: 'js/dist/script.js'
          },
          options: {
              separator: ';'
        },

     css: {
         src: ['css/src/*.css'],
         dest: 'css/dest/style.css'
        }
      },

  uglify: {
        dist: {
        src: ['js/dist/script.js'],
        dest: 'js/dist/script.min.js'
     }
 },

 });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};
