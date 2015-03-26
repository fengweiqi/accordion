module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    src: require('./bower.json').appPath || 'src',
    dist: 'dist',
    bowerPath:'bower_components'
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    yeoman:appConfig,

    //文件复制
    copy: {
      main: {
        files: [
          // includes files within path
          {
            expand: true,
            cwd: '<%=yeoman.bowerPath%>/jquery-1.11.1/dist/',
            flatten: true,
            filter: 'isFile',
            src: [
            'jquery.min.js'
            ],
            dest: '<%=yeoman.src%>/js/jquery/1.11.1/'
          },
          {
            expand: true,
            cwd: '<%=yeoman.bowerPath%>/require/build/',
            flatten: true,
            filter: 'isFile',
            src: [
            'require.min.js'
            ],
            dest: '<%=yeoman.src%>/js/require/'
          },
          // 构建
          // 

        ],
      },
      build: {
        files: [
          // includes files within path
          {
            expand: true,
            cwd: '<%=yeoman.src%>/',
            flatten:true,
            filter: 'isFile',
            src: [
            'js/jquery.accordion.js'
            ],
            dest: '<%=yeoman.dist%>/js'
          }

        ],
      },
    },
    clean: ["<%=yeoman.dist%>"]


  });

  // 构建
  grunt.registerTask('build', ['clean','copy:build']);
};