var win=null;
var wnews=null;
function NewWindow(mypage,myname,w,h,scroll,pos){
if (win!=null) win.close();
if(pos=="random"){LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;}
if(pos=="center"){LeftPosition=(screen.width)?(screen.width-w)/2:100;TopPosition=(screen.height)?(screen.height-h)/2:100;}
else if((pos!="center" && pos!="random") || pos==null){LeftPosition=0;TopPosition=20}
settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=no,directories=no,status=yes,menubar=no,toolbar=yes,resizable=yes';
win=window.open(mypage,myname,settings);
win.focus();
}

function NewWindow_p(mypage,myname,w,h,scroll,pos){
if(pos=="random"){LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;}
if(pos=="center"){LeftPosition=(screen.width)?(screen.width-w)/2:100;TopPosition=(screen.height)?(screen.height-h)/2:100;}
else if((pos!="center" && pos!="random") || pos==null){LeftPosition=0;TopPosition=20}
settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
win=window.open(mypage,myname,settings);}

function showWin1(URL,wWidth,wHight)
{
	leftPos=200;
	topPos=200;
	wWind=650;
    hWind=300;

	if(document.all){		
		if(!wWidth)
		{
		  wWind = 658; // 550
		  hWind = 420+80;
		}
		else
		{
		    wWind =wWidth;
		    hWind=wHight;
		}
		leftPos = (window.screen.availWidth - wWind) / 2;
		topPos = (window.screen.availHeight - hWind) / 2;
		if(topPos>300) topPos=300;
	}else{
		if(!wWidth)
		{
		    wWind = 623; // 475wHight
		    hWind = 150+80;
		}
		else
		{
		    wWind =wWidth;
		    hWind=wHight;
		}
		leftPos = (window.innerWidth - wWind) / 2;
		topPos = (window.innerHeight - hWind) / 2;
	}
//	alert(leftPos+" "+topPos);
	
	window.open( URL, 'message', 'width='+wWind+',height='+hWind+',status=yes,directories=no,location=no,menubar=no,toolbar=no,top='+topPos+',left='+leftPos+',titlebar=yes,resizable=yes,scrollbars=yes');
}



var win1=null;
var wnews1=null;
function MainPhoto_NewWindow(mypage, myname, w, h, scroll, pos) {
    if (mypage.indexOf("dark-gallery.aspx") > 0 || mypage.indexOf("/gallery/pic/") > 0) {
        var str_id = myname.replace("gallery", "");
        var id = parseInt(str_id);
        if (!isNaN(id)) {
            gallery(id);
            return false;
        } else {
            str_id = mypage.substring(mypage.indexOf("/gallery/pic/")).replace("/gallery/pic/", "");
            id = parseInt(str_id);
            if (!isNaN(id)) {
                gallery(id);
                return false;
            }
        }
    }
//if (win!=null) win.close();
//h=parseInt(h)+20;
//alert(mypage);
if(mypage.indexOf("dark-gallery.aspx")>0 || mypage.indexOf("gall_between.aspx")>0)
{
  //h=parseInt(h)-110;
  w=980;
  h=655;
}
if(pos=="random"){LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;}
if(pos=="center"){LeftPosition=(screen.width)?(screen.width-w)/2:100;TopPosition=(screen.height)?(screen.height-h)/2:100;}
else if((pos!="center" && pos!="random") || pos==null){LeftPosition=0;TopPosition=20}
settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=yes,directories=no,status=yes,menubar=no,toolbar=no,resizable=no';
win1=window.open(mypage,myname,settings);
win1.focus();
}
