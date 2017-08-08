/**
 * Created by Mohammad Shobeiri 2016
 * mohammad.shobeiri@gmail.com
 * version 1.1.2
 * last edit 2017
 */

jQuery.fn.persianNum = function (options,isSupperElement) {
    options = options || {forbiddenTag:['SCRIPT','STYLE'],numberType:'persian',forbiddenClass:['EnglishNum']};
    forbiddenTag = options.forbiddenTag || ['SCRIPT','STYLE'];
    numberType = options.numberType || 'persian';
    forbiddenClass = options.forbiddenClass || ['EnglishNum'];
    for (var j = 0; j < this.length; j++) {
        var el = this[j];
        for (var i = 0; i < el.childNodes.length; i++) {
            className = typeof el.className == "string" ? getAllClasses(el,'body') : [] ;
            if (forbiddenTag.indexOf(el.nodeName) >= 0 || hasCommonElements(forbiddenClass, className ))
                continue;
            var cnode = el.childNodes[i];
            if (cnode.nodeType == 3) {
                var nval = cnode.nodeValue;
                switch (numberType.toLowerCase()) {
                    case 'persian':
                        cnode.nodeValue = traverse(nval);
                        break;
                    case 'arabic':
                        cnode.nodeValue = traverseAr(nval);
                        break;
                    default:
                        cnode.nodeValue = traverseEn(nval);
                        break;
                }
            } else if (cnode.nodeType == 1) {
                if(cnode.nodeName == "OL")
                    switch (numberType.toLowerCase()) {
                        case 'persian':
                            jQuery(cnode).css("list-style-type","persian");
                            break;
                        case 'arabic':
                            jQuery(cnode).css("list-style-type","arabic-indic");
                            break;
                        default:
                            jQuery(cnode).css("list-style-type","decimal");
                            break;
                    }
                jQuery(cnode).persianNum({forbiddenTag:forbiddenTag, numberType:numberType, forbiddenClass:forbiddenClass},false);
            }
        }
    }
    if(isSupperElement == null) realtime(jQuery(this));


};

function realtime(elm){
    elm.bind("DOMSubtreeModified",function(element){
        elm.unbind("DOMSubtreeModified");
        jQuery(element.target).persianNum({forbiddenTag:forbiddenTag, numberType:numberType, forbiddenClass:forbiddenClass},false);
        realtime(elm);
    });
}
function hasCommonElements(array1, array2) {
    res = false;
    if (array1 == [] || array2 == [] ) return res;
    array1.forEach(function (element) {
        if (array2.indexOf(element) >= 0){
            res = true;
            return;
        }
    });
    return res;
}

function getAllClasses (from, until) {
    var cs = [];
    jQuery(from)
        .parentsUntil(until)
        .andSelf()
        .each(function(){
            if (this.className)
                cs.push.apply(cs, this.className.split(' '));
        });
    return cs;
}

function traverseAr(str) {
    return str.replace(/0/g,'٠').replace(/1/g,'١').replace(/2/g,'٢').replace(/3/g,'٣').replace(/4/g,'٤')
        .replace(/5/g,'٥').replace(/6/g,'٦').replace(/7/g,'٧').replace(/8/g,'٨').replace(/9/g,'٩')
        .replace(/۰/g,'٠').replace(/۱/g,'١').replace(/۲/g,'٢').replace(/۳/g,'٣').replace(/۴/g,'٤')
        .replace(/۵/g,'٥').replace(/۶/g,'٦').replace(/۷/g,'٧').replace(/۸/g,'٨').replace(/۹/g,'٩');
}
function traverse(str) {
    return str.replace(/0/g,'۰').replace(/1/g,'۱').replace(/2/g,'۲').replace(/3/g,'۳').replace(/4/g,'۴')
        .replace(/5/g,'۵').replace(/6/g,'۶').replace(/7/g,'۷').replace(/8/g,'۸').replace(/9/g,'۹')
        .replace(/٠/g,'۰').replace(/١/g,'۱').replace(/٢/g,'۲').replace(/٣/g,'۳').replace(/٤/g,'۴')
        .replace(/٥/g,'۵').replace(/٦/g,'۶').replace(/٧/g,'۷').replace(/٨/g,'۸').replace(/٩/g,'۹');
}

function traverseEn(str) {
    return str.replace(/۰/g,'0').replace(/۱/g,'1').replace(/۲/g,'2').replace(/۳/g,'3').replace(/۴/g,'4')
        .replace(/۵/g,'5').replace(/۶/g,'6').replace(/۷/g,'7').replace(/۸/g,'8').replace(/۹/g,'9')
        .replace(/٠/g,'0').replace(/١/g,'1').replace(/٢/g,'2').replace(/٣/g,'3').replace(/٤/g,'4')
        .replace(/٥/g,'5').replace(/٦/g,'6').replace(/٧/g,'7').replace(/٨/g,'8').replace(/٩/g,'9');
}