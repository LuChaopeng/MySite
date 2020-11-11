let tool = document.getElementsByClassName("tool");

let flag =[];       //给给每一个鼠标事件一个标志位
for(let i = 0;i<tool.length;i++)    //给每一个项目添加点击事件
{
    flag[i] = true; //display为none时（默认），flag为true
    tool[i].addEventListener("click",()=>{
        if(flag[i]){
            tool[i].getElementsByTagName("ul")[0].style.setProperty("display","block");
            tool[i].classList.add("triangle");      //三角箭头反向
        }else{tool[i].getElementsByTagName("ul")[0].style.setProperty("display","none"); 
             tool[i].classList.remove("triangle");  }
        flag[i]=!flag[i];   //每次鼠标事件倒转标志
    },false)
}

