let themeFlag = true;
function darkTheme(){
    document.documentElement.style.setProperty("--mainColor","black");
    document.documentElement.style.setProperty("--bodyBGC","#2a3e75de");
    document.documentElement.style.setProperty("--headerBGC","#2c2c2c");
    document.documentElement.style.setProperty("--aColor","grey");
    document.documentElement.style.setProperty("--aHoverBGC","#3a3a3a");
    document.getElementsByClassName("dark")[0].getElementsByTagName("span")[0].firstChild.nodeValue="Light Mode";
}
function lightTheme(){
    document.documentElement.style.setProperty("--mainColor","white");
    document.documentElement.style.setProperty("--bodyBGC","#323bbdc7");
    document.documentElement.style.setProperty("--headerBGC","rgb(172, 176, 209)");
    document.documentElement.style.setProperty("--aColor","black");
    document.documentElement.style.setProperty("--aHoverBGC","rgb(139, 145, 204)");
    document.getElementsByClassName("dark")[0].getElementsByTagName("span")[0].firstChild.nodeValue="Dark Mode";
}
let theme = document.getElementsByClassName("dark")[0];

theme.addEventListener("click",()=>{if(themeFlag){darkTheme();}else{lightTheme();}themeFlag=!themeFlag; });