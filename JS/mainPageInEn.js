/*设想做一个语言切换的功能，看到以下方案：
1、使用翻译api实时翻译；感觉翻译的准确性存疑，不采用；
2、使用多份文件；不采用；
我自己想到，可以用js修改各个文本节点，但文本属于网页内容而非行为，最好直接放在HTML文件里，打算将英语文本放到display:none里，通过js替换
*/

/*
遇到的问题：改变语言后无法改回去，以下两个方式可以解决：
1、获取点击事件后的文档树；因为改变语言后文档树发生改变，但需要点击事件触发后才会改变，不知道js怎么写。
2、多次点击同一元素执行不同函数；既然获取不到改变后的文档树，那我可以对多次点击触发不同的事件。这个我可以写。
*/
let langFlag = true;
function chLang(){
    if(langFlag)chLangToEng();
    else location.reload();
}
function chLangToEng(){
    langFlag = false;

    let headNode = document.getElementsByTagName("header")[0].getElementsByTagName("a");
    let textNode = document.getElementsByTagName("main")[0].getElementsByTagName("div")[0].getElementsByTagName("p");
    let newHeadNode = document.getElementsByClassName("hiddenLanguage")[0].getElementsByTagName("a");
    let newTextNode =  document.getElementsByClassName("hiddenLanguage")[0].getElementsByTagName("p");
    let langNode = document.getElementsByClassName("en")[0].getElementsByTagName("span")[0];
    let newLangNode =  document.getElementsByClassName("hiddenLanguage")[0].getElementsByTagName("span")[0];
    for(let i=0;i<headNode.length;i++){
        headNode[i].firstChild.nodeValue =newHeadNode[i].firstChild.nodeValue;
    }
    for(let i=0;i<textNode.length;i++){
        textNode[i].firstChild.nodeValue =newTextNode[i].firstChild.nodeValue;
    }
    langNode.firstChild.nodeValue = newLangNode.firstChild.nodeValue;
}


let eng = document.getElementsByClassName("en")[0];
eng.addEventListener("click",chLang,false);

