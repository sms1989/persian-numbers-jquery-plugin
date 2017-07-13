# persian-numbers-jquery-plugin
This is a jQuery plugin to converting all digit's in page or element to arabic-indic, persian or english digits


$('selector').persianNum(); // Convert all digits to Persian digits 
$('selector').persianNum(options); // options as object
options.forbiddenTag   // as array and upper case ; you can set forbidden tags to ignore them; default: 'SCRIPT'
options.numberType   // as string ; you can set final digits type; default: 'persian' 
options.forbiddenClass    // as array and upper case ; you can set forbidden classes to ignore them; default: 'English

for whole the body
$('body').persianNum();