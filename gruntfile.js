module.exports = function(grunt) {
   grunt.initConfig({
   browserify: {
     js: {
       src: 'app/js/app.js',
       dest: 'dist/js/app.js',
       options: {
         external: ['angular'],
         debug: true,
         browserifyOptions: { debug: true }
       }
     }
   },
   copy: {
     
    all: {
       // This copies all the html and css into the dist/ folder
       expand: true,
       cwd: 'app/',
       src: ['**/*.html', '**/*.css', '**/*.png'],
       dest: 'dist/',
     }
   },
   'http-server': {
       dev: {
           root: './dist',
           port: 420,
           host: "localhost",
           showDir: true,
           autoIndex: true,
           ext: "html",
           runInBackground: true,
           logFn: function(req, res, err){
            //    console.log('request: ' + req);  
            //    console.log('response: ' + res);
            //    console.log('error: ' + err);
            },
           openBrowser: true
       }
   },
   sass: {
     dist: {
       options: {
         style: 'expanded'
       },
       files: {
         'dist/css/app.css': 'app/css/app.scss'
       }
     }
   },
   watch: {
     
    js: {
       files: "app/**/*.js",
       tasks: "browserify"
     },
     img: {
         files: "app/**/*.png",
         tasks: "copy"
     },
     html: {
       files: 'app/**/*.html',
       tasks: 'copy'
     },
     css: {
       files: 'app/**/*.scss',
       tasks: 'sass'
     }
   }
 });

 // Load the npm installed tasks
 grunt.loadNpmTasks('grunt-browserify');
 grunt.loadNpmTasks('grunt-contrib-copy');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-http-server');

 // The default tasks to run when you type: grunt
 grunt.registerTask('default', ['browserify', 'copy', 'sass', 'http-server', 'watch']);
};