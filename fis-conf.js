/**
 * Created by yanxlg on 2017/5/19 0019.
 * 开发环境不进行压缩，不进行美化，不设置hash  默认为开发环境
 * 发布环境media=="pub"
 * fis不对es6进行处理，es6交给webpack进行处理
 */
fis.hook('relative');//模块使用相对路径，与webpack统一
fis.set('project.ignore', [
    'output/**',
    'node_modules/**',
    '.git/**',
    '.svn/**',
    'build/**',
    'fis-conf.js',
    'package.json',
    'LICENSE',
    'README.md',
    'webpack.config.js'
]);
fis.match('::package', {
    postpackager: fis.plugin('loader', {})
});


/*fis.match('*.es6', {
    rExt: '.js',
    parser: fis.plugin('babel-5.x'),
    // parser: fis.plugin('typescript'),
    useHash: true
});*/

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js'),
});

fis.match('*.css', {
    optimizer: fis.plugin('clean-css'),
});

fis.match('*.png', {
    optimizer: fis.plugin('png-compressor'),
});

fis.match('*', {
    useHash: false
});




// 压缩 index.html 内联的 js
fis.match('index.html:js', {
    optimizer: fis.plugin('uglify-js')
});

// 压缩 index.tpl 内联的 js
fis.match('index.tpl:js', {
    optimizer: fis.plugin('uglify-js')
})

// 压缩 index.html 内联的 css
fis.match('index.html:css', {
    optimizer: fis.plugin('clean-css')
});

// 压缩 index.tpl 内联的 css
fis.match('index.tpl:css', {
    optimizer: fis.plugin('clean-css')
})


//不同状态发布，通过media来实现  发布 fis3  release <media>
fis.media('prod')
    .match('**.js', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('**.css', {
        optimizer: fis.plugin('clean-css')
    });



// 压缩 index.html 内联的 js
fis.match('index.html:js', {
    optimizer: fis.plugin('uglify-js')
});

// 压缩 index.tpl 内联的 js
fis.match('index.tpl:js', {
    optimizer: fis.plugin('uglify-js')
})


