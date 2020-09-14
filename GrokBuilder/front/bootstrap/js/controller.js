//Scrapped from http://jsfiddle.net/b3Fk5/2/
function replaceSelectedText(replacementText) {
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        var activeElement = document.activeElement;
        if (activeElement.nodeName == "TEXTAREA" ||
           (activeElement.nodeName == "INPUT" && activeElement.type.toLowerCase() == "text")) {
               var val = activeElement.value, start = activeElement.selectionStart, end = activeElement.selectionEnd;
               activeElement.value = val.slice(0, start) + replacementText + val.slice(end);
          alert(sel.length());
        }
    }
}

function getInputValue(){
    var dicAndCol = "%{" + $("#dic_name option:selected").val() + ":" + $("#col_name option:selected").val() + "}";
    //alert(dicAndCol);
    replaceSelectedText(dicAndCol);
}

function copyData(){
    $("#work").val($("#log").val());
}

function regularize(){
    var str = $("#work").val();
    str = str.replace(/\\/g, "\\\\");
    str = str.replace(/\|/g, "\\\\|");
    str = str.replace(/\[/g, "\\\\[");
    str = str.replace(/\]/g, "\\\\]");
    str = str.replace(/\(/g, "\\\\(");
    str = str.replace(/\)/g, "\\\\)");
    str = str + "$";
    //alert(str);
    $("#work").val(str);
}