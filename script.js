let total=0;
let stack="",flag=false;
let prevsign="+";
let prevsignflag=false;
let memorystorageflag=false;
let memoryStorageValue=0;
let numberArr=[0,1,2,3,4,5,6,7,8,9];

var bodydiv=document.body;
bodydiv.setAttribute("class","bg-dark");

let divstart=document.createElement("div");
divstart.classList.add("divstart","container");


let calculatordiv=document.createElement("div");
calculatordiv.classList.add("calculator","container");

let calculatorheaderdiv=document.createElement("div");
calculatorheaderdiv.classList.add("calc_header","container");

let outputdiv=document.createElement("textarea");
outputdiv.classList.add("output","container");
outputdiv.setAttribute("id","outputdisplay");
outputdiv.setAttribute("disabled","true");

let inputdiv=document.createElement("div");
inputdiv.classList.add("input","container");
inputdiv.setAttribute("id","inputdisplay");
inputdiv.innerText=total;
calculatorheaderdiv.append(outputdiv,inputdiv);

let branddiv=document.createElement("div");
branddiv.setAttribute("class","brand");
let brandname=document.createElement("a");
brandname.setAttribute("href","#");
brandname.innerText="Guvi calculator";
branddiv.appendChild(brandname);

let calc_buttonsdiv=document.createElement("div");
calc_buttonsdiv.classList.add("calc_buttons","container");
let rowdiv1=document.createElement("div");
rowdiv1.setAttribute("class","row");
let columndiv1=document.createElement("div");
columndiv1.classList.add("col-2","buttons","disabledDiv");
columndiv1.setAttribute("id","mc");
columndiv1.setAttribute("onclick","memoryClear()");

columndiv1.innerText="MC";
let columndiv2=document.createElement("div");
columndiv2.classList.add("col-2","buttons","disabledDiv");
columndiv2.setAttribute("id","mr");
columndiv2.setAttribute("onclick","memoryRead()");
columndiv2.setAttribute("disabled","true");
columndiv2.innerText="MR";
let columndiv3=document.createElement("div");
columndiv3.classList.add("col-2","buttons");
columndiv3.setAttribute("id","ms");
columndiv3.setAttribute("onclick","memoryStore()");
columndiv3.innerText="MS";
let columndiv4=document.createElement("div");
columndiv4.classList.add("col-2","buttons");
columndiv4.setAttribute("id","m+");
columndiv4.setAttribute("onclick","memoryAdd()");
columndiv4.innerText="M+";
let columndiv5=document.createElement("div");
columndiv5.classList.add("col-2","buttons");
columndiv5.setAttribute("id","m-");
columndiv5.setAttribute("onclick","memorySub()");
columndiv5.innerText="M-";
rowdiv1.append(columndiv1,columndiv2,columndiv3,columndiv4,columndiv5);

let rowdiv2=document.createElement("div");
rowdiv2.setAttribute("class","row");
let columndiv6=document.createElement("div");
columndiv6.classList.add("col-2","buttons");
columndiv6.setAttribute("id","backspace");
columndiv6.setAttribute("onclick","backFun()");
columndiv6.innerText="←";
let columndiv7=document.createElement("div");
columndiv7.classList.add("col-2","buttons");
columndiv7.setAttribute("id","ce");
columndiv7.setAttribute("onclick","ceFun()");
columndiv7.innerText="CE";
let columndiv8=document.createElement("div");
columndiv8.classList.add("col-2","buttons");
columndiv8.setAttribute("id","c");
columndiv8.setAttribute("onclick","clearInput()");
columndiv8.innerText="C";
let columndiv9=document.createElement("div");
columndiv9.classList.add("col-2","buttons");
columndiv9.setAttribute("id","plusminus");
columndiv9.setAttribute("onclick","evalRytFun('±')");
columndiv9.innerText="±";
let columndiv10=document.createElement("div");
columndiv10.classList.add("col-2","buttons");
columndiv10.setAttribute("id","sqrroot");
columndiv10.setAttribute("onclick","evalRytFun('√')");
columndiv10.innerText="√";
rowdiv2.append(columndiv6,columndiv7,columndiv8,columndiv9,columndiv10);

let rowdiv3=document.createElement("div");
rowdiv3.setAttribute("class","row");
let columndiv11=document.createElement("div");
columndiv11.classList.add("col-2","buttons","number");
columndiv11.setAttribute("id","seven");
columndiv11.setAttribute("onclick","display(7)");
columndiv11.innerText="7";
let columndiv12=document.createElement("div");
columndiv12.classList.add("col-2","buttons","number");
columndiv12.setAttribute("id","eight");
columndiv12.setAttribute("onclick","display(8)");
columndiv12.innerText="8";
let columndiv13=document.createElement("div");
columndiv13.classList.add("col-2","buttons","number");
columndiv13.setAttribute("id","nine");
columndiv13.setAttribute("onclick","display(9)");
columndiv13.innerText="9";
let columndiv14=document.createElement("div");
columndiv14.classList.add("col-2","buttons");
columndiv14.setAttribute("id","divide");
columndiv14.setAttribute("onclick","evalFun('/')");
columndiv14.innerText="/";
let columndiv15=document.createElement("div");
columndiv15.classList.add("col-2","buttons");
columndiv15.setAttribute("id","modulus");
columndiv15.setAttribute("onclick","evalFun('%')");
columndiv15.innerText="%";
rowdiv3.append(columndiv11,columndiv12,columndiv13,columndiv14,columndiv15);

let rowdiv4=document.createElement("div");
rowdiv4.setAttribute("class","row");
let columndiv16=document.createElement("div");
columndiv16.classList.add("col-2","buttons");
columndiv16.setAttribute("id","four","number");
columndiv16.setAttribute("onclick","display(4)");
columndiv16.innerText="4";
let columndiv17=document.createElement("div");
columndiv17.classList.add("col-2","buttons","number");
columndiv17.setAttribute("id","five");
columndiv17.setAttribute("onclick","display(5)");
columndiv17.innerText="5";
let columndiv18=document.createElement("div");
columndiv18.classList.add("col-2","buttons","number");
columndiv18.setAttribute("id","six");
columndiv18.setAttribute("onclick","display(6)");
columndiv18.innerText="6";
let columndiv19=document.createElement("div");
columndiv19.classList.add("col-2","buttons");
columndiv19.setAttribute("id","multiply");
columndiv19.setAttribute("onclick","evalFun('*')");
columndiv19.innerText="*";
let columndiv20=document.createElement("div");
columndiv20.classList.add("col-2","buttons");
columndiv20.setAttribute("id","reciprocal");
columndiv20.setAttribute("onclick","evalRytFun('1/x')");
columndiv20.innerText="1/x";
rowdiv4.append(columndiv16,columndiv17,columndiv18,columndiv19,columndiv20);

let rowdiv5=document.createElement("div");
rowdiv5.setAttribute("class","row");
let columndiv21=document.createElement("div");
columndiv21.classList.add("col-2","buttons","number");
columndiv21.setAttribute("id","one");
columndiv21.setAttribute("onclick","display(1)");
columndiv21.innerText="1";
let columndiv22=document.createElement("div");
columndiv22.classList.add("col-2","buttons","number");
columndiv22.setAttribute("id","two");
columndiv22.setAttribute("onclick","display(2)");
columndiv22.innerText="2";
let columndiv23=document.createElement("div");
columndiv23.classList.add("col-2","buttons","number");
columndiv23.setAttribute("id","three");
columndiv23.setAttribute("onclick","display(3)");
columndiv23.innerText="3";
let columndiv24=document.createElement("div");
columndiv24.classList.add("col-2","buttons");
columndiv24.setAttribute("id","plus");
columndiv24.setAttribute("onclick","evalFun('+')");
columndiv24.innerText="+";
let columndiv25=document.createElement("div");
columndiv25.classList.add("col-2","buttons");
columndiv25.setAttribute("id","minus");
columndiv25.setAttribute("onclick","evalFun('-')");
columndiv25.innerText="-";
rowdiv5.append(columndiv21,columndiv22,columndiv23,columndiv24,columndiv25);

let rowdiv6=document.createElement("div");
rowdiv6.setAttribute("class","row");
let columndiv26=document.createElement("div");
columndiv26.classList.add("col-4","buttons","number");
columndiv26.setAttribute("id","zero");
columndiv26.setAttribute("onclick","display(0)");
columndiv26.innerText="0";
let columndiv27=document.createElement("div");
columndiv27.classList.add("col-2","buttons");
columndiv27.setAttribute("id","dot");
columndiv27.setAttribute("onclick","display('.')");
columndiv27.innerText=".";
let columndiv28=document.createElement("div");
columndiv28.classList.add("col-4","buttons");
columndiv28.setAttribute("id","equal");
columndiv28.setAttribute("onclick","evalFun('=')");
columndiv28.innerText="=";
rowdiv6.append(columndiv26,columndiv27,columndiv28);
calc_buttonsdiv.append(rowdiv1,rowdiv2,rowdiv3,rowdiv4,rowdiv5,rowdiv6);

calculatordiv.append(calculatorheaderdiv,branddiv,calc_buttonsdiv);

let notediv=document.createElement("div");
notediv.classList.add("notes","container");
let ul=document.createElement("ul");
let li1=document.createElement("li");
li1.innerText="Use Keyboard events only for numbers.";
let li2=document.createElement("li");
li2.innerText="This calculator handles infix expressions";
let li3=document.createElement("li");
li3.innerText="To calculate x percent of y simply enter x%y.";
let li4=document.createElement("li");
li4.innerText="When any letters pressed, alert will be displayed";
let li5=document.createElement("li");
li5.innerText="Maximum length of any input is 16";
ul.append(li1,li2,li3,li4,li5);
notediv.appendChild(ul);
divstart.append(calculatordiv,notediv);
bodydiv.appendChild(divstart);


let buttoneventListener=document.querySelectorAll(".buttons");
buttoneventListener.forEach((value)=>
value.addEventListener("mouseover",function()
{
    this.style.backgroundColor="#f93076"; 
}));

buttoneventListener.forEach((value)=>
value.addEventListener("mouseout",function()
{
    this.style.backgroundColor="#EBEBEB"; 
}));


function display(value){ 
    if(inputdiv.innerText.length>16)
    {
        if(flag){
            flag=false;
            inputdiv.innerText=value;            
        }
        else
        alert("Input length should be lesser than 17");
    }
    else{
        if(prevsign=="=")
        {
            total=0;
            prevsign="+";
            inputdiv.innerText=value;        
            stack="";
            outputdiv.innerText="";
        }
        else{
            if(flag){
                flag=false;
                inputdiv.innerText=value;            
            }
            else{
                if(inputdiv.innerText!=0)
                {
                    inputdiv.innerText+=value;
                }
                else
                {
                    inputdiv.innerText=value;    
                }
            }     
        } 
    }
}

function clearInput()
{
    inputdiv.innerText=0;
    outputdiv.innerText="";
    total=0;
    stack="";
    prevsign="+";
}

function backFun()
{
    inputdiv.innerText=inputdiv.innerText.slice(0,-1);
    if(inputdiv.innerText==""){
        inputdiv.innerText=0;
        stack="";
    }
    if(prevsign==="=")
    {
        stack="";
        outputdiv.innerText=""; 
        inputdiv.innerText=total;
        total=0;
        prevsign="+";        
        
    }
}

function ceFun()
{
    if(prevsign==="=")
    {
        stack="";
        outputdiv.innerText=""; 
        prevsign="+";
        total=0;
    }
    inputdiv.innerText=0;

}

function evalFun(sign)
{    
    switch(prevsign)
    {
        case "+":
            total+=Number(inputdiv.innerText); 
            break;
        case "-":
            total-=Number(inputdiv.innerText);
            break;
        case "*":
            total*=Number(inputdiv.innerText);
            break;
        case "/":
            total/=Number(inputdiv.innerText);
            break;

        case "%":
            total%=Number(inputdiv.innerText);
            break;

        case "=":
            stack=total; 
            break; 
    }
    if(prevsignflag)
    {
        stack+=sign;
        prevsignflag=false;
    }  
    
    else{
        if(prevsign!="=")
        stack+=inputdiv.innerText;
        stack+=sign;       
    }
    outputdiv.innerText=stack;    
    prevsign=sign;
    inputdiv.innerText=total;
    flag=true;
}


function evalRytFun(value){
    if(value=="1/x")
    {
        let reciprocal=1/Number(inputdiv.innerText);
        stack+="1/"+inputdiv.innerText;
        inputdiv.innerText=reciprocal; 
    }
    else if(value=="√")
    {
        let squareroot=Math.sqrt(Number(inputdiv.innerText));
        stack+="sqrt("+inputdiv.innerText+")";
        inputdiv.innerText=squareroot; 
    }

    else if(value=="±")
    {
        let negate=-(Number(inputdiv.innerText));
        stack+="-"+inputdiv.innerText;
        inputdiv.innerText=negate; 
    }

    outputdiv.innerText=stack;    
    prevsignflag=true;
}

function memoryStore()
{
    memorystorageflag=true;
    memoryStorageValue=Number(inputdiv.innerText);
    columndiv1.setAttribute("class","col-2 buttons");
    columndiv2.setAttribute("class","col-2 buttons");
}

function memoryClear()
{
    memorystorageflag=false;
    memoryStorageValue=0;
    columndiv1.setAttribute("class","col-2 buttons disabledDiv");
    columndiv2.setAttribute("class","col-2 buttons disabledDiv");
}

function memoryRead()
{
    inputdiv.innerText=memoryStorageValue;  
}


function memoryAdd()
{
    memorystorageflag=true;
    memoryStorageValue+=Number(inputdiv.innerText); 
    columndiv1.setAttribute("class","col-2 buttons");
    columndiv2.setAttribute("class","col-2 buttons");
}

function memorySub()
{
    memorystorageflag=true;
    memoryStorageValue-=Number(inputdiv.innerText); 
    columndiv1.setAttribute("class","col-2 buttons");
    columndiv2.setAttribute("class","col-2 buttons");
}

window.addEventListener('keydown', function (e) {
    let key=Number(e.key);
    if(numberArr.includes(key))
    {
        display(key);
    }
    else
    alert(`Only Numbers can be read from keyboard action`);
    
  },false);
