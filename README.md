# persian-numbers-jquery-plugin
This is a jQuery plugin to converting all digit's in page or element to arabic-indic, persian or english digits

# Usage
## jQuery 1.8 or above
add below code after jQuery core
```<script src="persianNum.jquery.min.js"></script>```

## older version
add below code after jQuery core
```<script src="persianNum.jquery-l.8-lt.min.js"></script>```


```$('selector').persianNum(); // Convert all digits to Persian digits

$('selector').persianNum(options); // options as object

options.forbiddenTag   // as array and upper case ; you can set forbidden tags to ignore them; default: 'SCRIPT','STYLE', 'CODE'

options.numberType   // as string ; you can set final digits type; default: 'persian'

options.forbiddenClass    // as array and upper case ; you can set forbidden classes to ignore them;default: 'EnglishNum'```

for whole the body
```$('body').persianNum();```