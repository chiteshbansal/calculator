
var screen = document.getElementById('screen');
var txt = screen.innerHTML;
var operator;
var operand;
var currentoperand ='';
var operands = new Array();


function calculation(obj)
{
   if(obj.id==='AC')
    {
      screen.innerHTML='';
      operands.length=0;
      currentoperand='';
    }
   else if(obj.id==='seven')
   {
     operand = 7;
    currentoperand+=7;
     screen.innerHTML+=operand;
   }else if(obj.id==='eight')
   {
     operand =8;
    currentoperand+=8;
     screen.innerHTML+=operand;
   }else if(obj.id==='nine')
   {
     operand = 9;
    currentoperand+=9;
     screen.innerHTML+=operand;
   }else if (obj.id==='eight')
   {
    operand = 8;
    currentoperand+=8;
    screen.innerHTML+=operand;
   }
   else if(obj.id==='six')
   {
     operand = 6;
    currentoperand+=6;
     screen.innerHTML+=operand;
   }else if(obj.id==='five')
   {
     operand = 5;
    currentoperand+=5;
     screen.innerHTML+=operand;
   }else if(obj.id==='four')
   {
     operand = 4;
    currentoperand+=4;
     screen.innerHTML+=operand;
   }else if(obj.id==='three')
   {
     operand = 3;
    currentoperand+=3;
     screen.innerHTML+=operand;
   }else if(obj.id==='two')
   {
     operand = 2;
    currentoperand+=2;
     screen.innerHTML+=operand;
   }else if(obj.id==='one')
   {
     operand = 1;
    currentoperand+=1;
     screen.innerHTML+=operand;
   }else if(obj.id==='zero')
   {
     operand = 0;
    currentoperand+=0;
     screen.innerHTML+=operand;
   }else if(obj.id==='add')
   {
     operator = '+';
    currentoperand='';
    if(check())
     {
      screen.innerHTML+=operator;
    }else{
      var y = screen.innerHTML;;
      screen.innerHTML=y.slice(0,y.length-1)+operator;
    }
     
   }else if(obj.id==='subtract')
   {
     operator = '-';
    currentoperand='';
     if(check())
     {
      screen.innerHTML+=operator;
    }else{
      var y = screen.innerHTML;;
      screen.innerHTML=y.slice(0,y.length-1)+operator;
    }
   }else if(obj.id==='divide')
   {
     operator = '/';
    currentoperand='';
    if(check())
     {
      screen.innerHTML+=operator;
    }else{
      var y = screen.innerHTML;;
      screen.innerHTML=y.slice(0,y.length-1)+operator;
    }
     
   }else if(obj.id==='multiply')
   {
     operator = '*';
     currentoperand='';
     if(check())
     {
      screen.innerHTML+=operator;
    }else{
      var y = screen.innerHTML;;
      screen.innerHTML=y.slice(0,y.length-1)+operator;
    }
     
   }else if(obj.id==='decimal')
   {
     operand='.';
     currentoperand+='.'; 
     screen.innerHTML+=operand;
   }else if(obj.id==='backspace')
   {

        currentoperand=currentoperand.slice(0,currentoperand.length-1);
        var currentdata = screen.innerHTML;
        if(currentdata.length!=0)
        {
          screen.innerHTML=currentdata.slice(0,currentdata.length-1);
        }
      
   }
}


function check()
{
  var i = screen.innerHTML.length;
  var cnt = screen.innerHTML;
  if(cnt[i-1]=="/"||cnt[i-1]=='*'||cnt[i-1]=='-'||cnt[i-1]=='+'||cnt[i-1]=='%')
  {
    console.log('false');
    return false;
  }
  else
   {
    console.log('true');
    return true;
   }
}

function calculate()
{
 
  var content =screen.innerText;
  var x='';
  for(var i = 0 ;i<content.length;i++)
  {
    if(content[i]=='/'||content[i]=='*'||content[i]=='+'||content[i]=='-'||content[i]=='%')
    {
      operands.push(x);
      operands.push(content[i]);
      x ='';
    }else 
    {
      x+=content[i];
    }

  }
  operands.push(x);
  console.log(operands);
   var result =0;
  var a = operands[0];
  for(var i = 1 ;i < operands.length-1;i+=2)
  {
    var oper = operands[i];
    var b  = operands[i+1];
    console.log(a+oper + b);
    result = eval(a+oper+b);
    a = result;
  }
  var historyitemcontent=screen.innerText;
  screen.innerHTML=result;
  operands.length=0;
  currentoperand=result; 

  var historyitem = document.createElement('li');
  var listitem = document.createTextNode(historyitemcontent+'='+result);
  historyitem.appendChild(listitem);
  var parentlist = document.getElementById('history-list');
  parentlist.insertBefore(historyitem,document.getElementById('history-list').firstChild);

}


function changethesign(obj)
{
  
  var content = screen.innerText;

  for(var i = content.length-1;i>=0;i--)
  {
    if(content[i]=='/'||content[i]=='*'||content[i]=='+'||content[i]=='-'||content[i]=='%')
      break;
  }
  console.log('currentoperand is ', currentoperand);
  console.log('content[i] is ' , content[i]);
  console.log('i is ' ,i );


  if(i==-1)
  {
    screen.innerText='';
    if(currentoperand>0)
    {
      console.log(currentoperand);
      screen.innerText+='-'+currentoperand;

    }
    else
      {
        screen.innerText+='+'+Math.abs(currentoperand);
        currentoperand=Math.abs(currentoperand);

        }
  }
  else if(content[i]=='-')
    {
    screen.innerText=content.slice(0,i);

      console.log(content[i]);
      screen.innerText+='+' +Math.abs(currentoperand);
      currentoperand = Math.abs(currentoperand);
    }
  else if(content[i]=='+')
    {
       screen.innerText=content.slice(0,i);
      console.log(content[i]);
      screen.innerText+= '-'+currentoperand; 
    } 
}

var buttonpressed = document.addEventListener('keydown',fun);

function fun(event)
{
  if(event.keyCode==48||event.keyCode==96)
  {
    calculation(document.getElementById('zero'));
  }else if(event.keyCode==49||event.keyCode==97)
  {
    calculation(document.getElementById('one'));
  }else if(event.keyCode==50||event.keyCode==98)
  {
    calculation(document.getElementById('two'));
  }else if(event.keyCode==51||event.keyCode==99)
  {
    calculation(document.getElementById('three'));
  }else if(event.keyCode==52||event.keyCode==100)
  {
    calculation(document.getElementById('four'));
  }else if(event.keyCode==53||event.keyCode==101)
  {
    calculation(document.getElementById('five'));
  }else if(event.keyCode==54||event.keyCode==102)
  {
    calculation(document.getElementById('six'));
  }else if(event.keyCode==55||event.keyCode==103)
  {
    calculation(document.getElementById('seven'));
  }else if(event.keyCode==56||event.keyCode==104)
  {
    calculation(document.getElementById('eight'));
  }else if(event.keyCode==57||event.keyCode==105)
  {
    calculation(document.getElementById('nine'));
  }else if(event.keyCode==109)
  {
    calculation(document.getElementById('subtract'));
  }else if(event.keyCode==107)
  {
    calculation(document.getElementById('add'));
  }else if(event.keyCode==106)
  {
    calculation(document.getElementById('multiply'));
  }else if(event.keyCode==111)
  {
    calculation(document.getElementById('divide'));
  }else if(event.keyCode==8)
  {
    calculation(document.getElementById('backspace'));
  }else if(event.code=='Enter')
  {
    calculate();
  }else if(event.keyCode==110)
  {
    calculation(document.getElementById('decimal'));
  }
}
