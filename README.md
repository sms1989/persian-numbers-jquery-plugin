# persian-numbers-jquery-plugin v.2
This is a jQuery plugin to converting all digit's in page or element to arabic-indic, persian or english digits

# Usage
This version based on classes. you can determine some classes for persian numbers, arabic numbers and english numbers. Like the previous version you must first initialize with below code.

```$('selector').persianNum(); // Converting all digits according to element's classes```

## Hierarchy
All digits classes are inherited by their children.

### example
code:
```
<div class="persian">
    <p>1234567890</p>
    <p class="english">1234567890</p>
    <p class="arabic">1234567890</p>
    <div class="english">
        <p>1234567890</p>
        <p class="arabic">1234567890</p>
    </div>
    <div class="arabic">
        <p>1234567890</p>
        <p class="english">1234567890</p>
    </div>
</div>
```
output (preview):
```
۱۲۳۴۵۶۷۸۹۰

1234567890

١٢٣٤٥٦٧٨٩٠

1234567890

١٢٣٤٥٦٧٨٩٠

١٢٣٤٥٦٧٨٩٠

1234567890
```
output (html):
```
<div class="persian">
    <p>۱۲۳۴۵۶۷۸۹۰</p>
    <p class="english">1234567890</p>
    <p class="arabic">١٢٣٤٥٦٧٨٩٠</p>
    <div class="english">
        <p>1234567890</p>
        <p class="arabic">١٢٣٤٥٦٧٨٩٠</p>
    </div>
    <div class="arabic">
        <p>١٢٣٤٥٦٧٨٩٠</p>
        <p class="english">1234567890</p>
    </div>
</div>
```



```$('selector').persianNum(); // Convert all digits to Persian digits

$('selector').persianNum(options); // options as object

options.forbiddenTag   // as array and upper case ; you can set forbidden tags to ignore them; default: 'SCRIPT','STYLE', 'CODE'

options.numberType   // as string ; you can set final digits type; default: 'persian'

options.forbiddenClass    // as array and upper case ; you can set forbidden classes to ignore them;default: 'EnglishNum'

for whole the body
$('body').persianNum();```