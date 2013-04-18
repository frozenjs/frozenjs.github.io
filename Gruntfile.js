/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    markdown: {
      options: {
        author: 'Iced Dev',
        title: 'Frozen Blog',
        description: 'Blog for the FrozenJS HTML5 Game Engine',
        url: 'http://blog.frozenjs.com',
        baseUrl: 'http://frozenjs.com',
        logo: 'https://secure.gravatar.com/avatar/272e5230cf45370ed751878105330f3c?s=200',
        rssCount: 10,
        disqus: 'frozenjs',
        layouts: {
          wrapper: 'templates/wrapper.jst',
          index: 'templates/index.jst',
          post: 'templates/post.jst',
          archive: 'templates/archive.jst'
        },
        paths: {
          markdown: 'markdown/*.md',
          posts: '.',
          index: 'index.html',
          archive: 'archive.html',
          rss: 'index.xml'
        }
      },
      blog: {
        dest: '.'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-markdown-blog');

  // Default task.
  grunt.registerTask('default', ['markdown']);

};
