//Helper
function C(c, a, f){
    if (a) {
        return f ? f.getElementsByClassName(c) : document.getElementsByClassName(c);
    } else {
        return f ? f.getElementsByClassName(c)[0] : document.getElementsByClassName(c)[0];
    }
}

/**
 * rmCd 过滤KindEditor编辑器中多余的HTML标签
 * @param p  祖先元素 (依赖祖先元素删除子元素)
 * @param c  要删除的元素集合
 */
function rmCd (p, c) {
    i = 0;
    while (c[i]) {
        p.removeChild(c[i]);
    }
}

//初始化配置信息
var af = document.forms[0], fb;

/**
 * 初始化KindEditor
 */
KindEditor.ready(function (K) {
    window.editor = K.create('#editor_id', {
        cssPath : './SyntaxHighlighter/styles/shCoreDefault.css',    //指定syntaxHighlighter css路径
        uploadJson : './KindEditor/php/uploadJson.php',    //指定控制上传文件的PHP路径
        allowFileManager : true,
        filterMode : false
    });
    fb = C('ke-edit-iframe').contentWindow.document.body;    //获取生成的iFrame标签中的body元素
});

//Submit Event
af.onsubmit = function(e){
    var b = C('ke-edit-iframe').contentWindow.document.body,
        s = b.getElementsByTagName('script'),
        k = C('ke-script', false, b),
        h = C('hidden');
    rmCd(b, s);
    k && rmCd(b, k);
    h.value = b.innerHTML;
};