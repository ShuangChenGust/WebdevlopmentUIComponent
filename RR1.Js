function cancel(obj,ev,fn)
{
if(obj.attachEvent){obj.attachEvent('on'+ev,function(){return fn.call(obj)})}
else{obj.addEventListener(ev,fn,false)}
}
function getByClass(oParent,sClass)
{
var aEl=oParent.getElementsByTagName('*');
var aResult=[];
var re=new RegExp('\\b'+sClass+'\\b');
for(var i=0;i<aEl.length;i++)
{
if(re.test(aEl[i].className)){aResult.push(aEl[i])}
}
return aResult;
}

(function()
{
var oUl=document.getElementById('ul1');
var aLi=oUl.getElementsByTagName('li');
var oDemo=document.getElementById('demo');
var aBtn=getByClass(oDemo,'t');
var now=0;
var deep_line=-(aLi.length-6)*aLi[0].offsetWidth;
var move_one=aLi[0].offsetWidth;
oUl.style.width=aLi.length*aLi[0].offsetWidth+"px";
function gray()
{
if(oUl.offsetLeft<=deep_line){aBtn[1].className="t right gray_r";}
else{aBtn[1].className="t right black_r";}
if(oUl.offsetLeft>=0){aBtn[0].className="t left gray_l";}
else{aBtn[0].className="t left black_l";}
}
gray();
function getLeft(l)
{
if(l){var dis=-1;if(oUl.offsetLeft<=deep_line){oUl.style.left=deep_line+"px";}else{oUl.style.left=oUl.offsetLeft+dis*move_one+"px";}}//0
else{var dis=1;if(oUl.offsetLeft>=0){oUl.style.left=0+"px";console.log(1)}else{oUl.style.left=oUl.offsetLeft+dis*move_one+"px";}}//1
gray();
}
function mousewheel(ev)
{
var choose=ev||enent;
var True=true;
True=choose.wheelDelta?choose.wheelDelta<0:choose.detail>0 ;
getLeft(True);
if(choose.preventDefault){choose.preventDefault();}
return false;
}
for(var i=0;i<aBtn.length;i++)
{
aBtn[i].index=i;
aBtn[i].onclick=function()
{
getLeft(this.index);
}
}

cancel(oDemo,'mousewheel',mousewheel);
cancel(oDemo,'DOMMouseScroll',mousewheel);
}
)
()