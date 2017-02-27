var arr = [];
function inputInLeft(){
	var num = document.getElementById("num").value;
	/*console.log(num);
    document.getElementById("num1").innerHTML = num;
    */
   arr.unshift(document.getElementById("num").value);
   
   console.log(arr);
   
}


function inputOutLeft(){
   alert("已删除元素：" + arr.shift());
   
   console.log(arr);
}


function inputInRight(){
   arr.push(document.getElementById("num").value);
   
   console.log(arr);

}

function inputOutRight(){
   alert("已删除元素：" + arr.pop());
  
   console.log(arr);
}

function output(){
	document.getElementById("num1").innerHTML = arr;
}


document.getElementById("parent").addEventListener("click",function(event){
	if(event.target.nodeName == "LI"){     
		switch(event.target.id){
			case 'inputInLeft': inputInLeft();break;
			case 'inputOutLeft': inputOutLeft();break;
			case 'inputInRight': inputInRight();break;
			case 'inputOutRight': inputOutRight();break;
		}
		output();
	}
})
