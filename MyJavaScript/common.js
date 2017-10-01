//helper
function C(c, a, f){
    if(a){
        return f ? f.getElementsByClassName(c) : document.getElementsByClassName(c);
    }else{
        return f ? f.getElementsByClassName(c)[0] : document.getElementsByClassName(c)[0];
    }
}
function hasC(t,c){
    return (' ' + t.className + ' ').indexOf(' ' + c + ' ') !== -1
}
function getTop(e){
    var t = 0;
    while(e.nodeName !== 'BODY'){
        t += e.offsetTop;
        e = e.offsetParent;
    }
    return t;
}
//upload
function upImage(obj) {
    require(['util'], function (util) {
        options = {
            multiple: false,//是否允许多图上传
            data:'',
            hash:1
            //hash为确定上传文件标识（可以是用户编号，标识为此用户上传的文件，系统使用这个字段值来显示文件列表），data为文件的附加数据值，开发者根据业务需要自行添加
        };
        util.image(function (images) {          //上传成功的图片，数组类型 
            $("[name='thumb']").val(images[0]);
            $(".img-thumbnail").attr('src', images[0]);
        }, options)
    });
}
//remove
function removeImg(obj) {
    $(obj).prev('img').attr('src', 'resource/images/nopic.jpg');
    $(obj).parent().prev().find('input').val('');
}
//submit event
function rmCd(p, c){
    var i = 0;
    while(c[i]){
        p.removeChild(c[i]);
    }
}

document.getElementById('form').onsubmit = function(e){
    var b = C('ke-edit-iframe').contentWindow.document.body,
        s = b.getElementsByTagName('script'),
        k = C('ke-script', false, b),
        h = C('hidden');
    rmCd(b, s);
    if(k){ rmCd(b, k); }
    h.value = b.innerHTML;
};
//KindEditor
KindEditor.ready(function(K) {
    window.editor = K.create('#editor_id',{
        cssPath : './SyntaxHighlighter/styles/shCoreDefault.css',
        uploadJson : './KindEditor/php/uploadJson.php',
        fileManagerJson : './KindEditor/php/file_manager_json.php',
        allowFileManager : true,
        filterMode : false
    });
    var b = C('buttons'), a = C('form-control',true)[4], k = null, h = null, f = C('form-horizontal'),
        s = true, t = getTop(C('ke-container')), c = C('ke-toolbar'), d = true;
    b.onclick = function(e){
        e = e || window.event;
        var t = e.target || e.srcElement;
        if(hasC(t,'toTop')){
            window.scrollTo(0, getTop(a));
        }else if(hasC(t,'toHigh')){
            k = C('ke-edit-iframe');
            h = parseInt(k.style.height) + 600 + 'px';
            k.style.height = h;
            C('ke-edit').style.height = h;
        }else if(hasC(t,'toLow')){
            k = C('ke-edit-iframe');
            h = parseInt(k.style.height) - 600 + 'px';
            k.style.height = h;
            C('ke-edit').style.height = h;
        }else{
            window.scrollTo(0, getTop(f) + f.offsetHeight - document.documentElement.clientHeight);
        }
    };
    function onScroll(){
        if(s){
            requestAnimationFrame(relFun);
            s = false;
        }
    }
    function relFun(){
        if(pageYOffset >= t){
            if(d){
                c.classList.add('toFix');
                d = false;
            }
        }else{
            if(!d){
                c.classList.remove('toFix');
                d = true;
            }
        }
        s = true;
    }
    window.addEventListener('scroll',onScroll,false);
});
