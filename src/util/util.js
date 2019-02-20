// data.formatDD( "yyyy-MM-DD hh:mm:ss");
Date.prototype.formatDD = function( formatStr){ 
	var date = this;
	var str = formatStr; 
	str=str.replace(/yyyy|YYYY/,date.getFullYear()); 
	str=str.replace(/yy|YY/,(date.getYear() % 100)>9?(date.getYear() % 100).toString():"0" + (date.getYear() % 100)); 
	str=str.replace(/MM/,date.getMonth()>8?(date.getMonth()+1).toString():"0" + (date.getMonth()+1)); 
	str=str.replace(/M/g,date.getMonth()+1); 
	str=str.replace(/dd|DD/,date.getDate()>9?date.getDate().toString():"0" + date.getDate()); 
	str=str.replace(/d|D/g,date.getDate()); 
	str=str.replace(/hh|HH/,date.getHours()>9?date.getHours().toString():"0" + date.getHours()); 
	str=str.replace(/h|H/g,date.getHours()); 
	str=str.replace(/mm/,date.getMinutes()>9?date.getMinutes().toString():"0" + date.getMinutes()); 
	str=str.replace(/m/g,date.getMinutes()); 
	str=str.replace(/ss|SS/,date.getSeconds()>9?date.getSeconds().toString():"0" + date.getSeconds()); 
	str=str.replace(/s|S/g,date.getSeconds()); 
	return str; 
}

export default {
	utilName: {
		"tit": "公用utilJs中的内容zw，控制台还将会打印一些东西"
	},
	utilAlert () {
		console.log("公用util中的alert")
	},
	dom (id) {
		return document.getElementById(id);
	},
	domClass (searchClass,node,tag) {
		var classElements = new Array(); 
		if ( node == null ) 
			node = document; 
		if ( tag == null ) 
			tag = '*'; 
		var els = node.getElementsByTagName(tag); 
		var elsLen = els.length; 
		var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)"); 
		for (var i = 0, j = 0; i < elsLen; i++) { 
			if ( pattern.test(els[i].className) ) { 
				classElements[j] = els[i]; 
				j++; 
			} 
		} 
		return classElements; 
	},
	scrollTop (selector) {
		/**
		 * 滚动到某元素
		 * scrollTop("#table");
		 * scrollTop();
		**/
    let element = selector && document.querySelector(selector) || window;
    element.scrollTo(0, 0);
	},
	deepClone(origin, target) {
		/*let a = {"id": "123", "s": [{"si": "sid"} ] }
		let b = {};
		deepClone(b, a);
		b.s[0].si = '重新赋值，不影响a里的数据';*/
		var target = target || {};
		for (var prop in target) {
			if (target.hasOwnProperty(prop)) {
				if (target[prop] !== null && typeof target[prop] === 'object') {
					origin[prop] = Object.prototype.toString.call(target[prop]) === '[object Array]' ? [] : {};
					this.deepClone(origin[prop], target[prop]);
				} else {
					origin[prop] = target[prop];
				}
			}
		}
	},
	zuiaccAdd(arg1,arg2){
		var r1,r2,m;
		try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
		try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
		m=Math.pow(10,Math.max(r1,r2))
		return (arg1*m+arg2*m)/m;
	},
	zuisubtr(arg1,arg2){
		var r1,r2,m,n;
		try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
		try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
		m=Math.pow(10,Math.max(r1,r2));
		n=(r1>=r2)?r1:r2;
		return ((arg1*m-arg2*m)/m).toFixed(n);
	},
	zuiaccDiv(arg1,arg2){  
		var t1=0,t2=0,r1,r2;  
		try{t1=arg1.toString().split(".")[1].length}catch(e){}  
		try{t2=arg2.toString().split(".")[1].length}catch(e){}  
		r1=Number(arg1.toString().replace(".",""));  
		r2=Number(arg2.toString().replace(".",""));  
		return (r1/r2)*Math.pow(10,t2-t1);  
	},
	zuiaccMul(arg1,arg2) {  
		var m=0,s1=arg1.toString(),s2=arg2.toString();  
		try{m+=s1.split(".")[1].length}catch(e){}  
		try{m+=s2.split(".")[1].length}catch(e){}  
		return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);  
	},
	removeByIndex : function(arrays , dx){
    if(isNaN(dx)||dx>arrays.length){return false;}
    for(var i=0,n=0;i<arrays.length;i++){
      if(arrays[i]!=arrays[dx]){
        arrays[n++]=arrays[i]
      }
    }
    arrays.length-=1
    return arrays;
  },
	removeByValue : function(arrays, item ){
    for( var i = 0 ; i < arrays.length ; i++ ){
      if( item == arrays[i] ){
        break;
      }
    }
    if( i == arrays.length ){
      return;
    }
    for( var j = i ; j < arrays.length - 1 ; j++ ){
      arrays[ j ] = arrays[ j + 1 ];
    }
    arrays.length--;
    return arrays;
  },
  arrayLast: function(arrays){
    return arrays[arrays.length - 1];
  },
	getCurDate(cDate, type){
		if(type && type == '2'){
			cDate = cDate.formatDD( "yyyy-MM-DD hh:mm:ss");
		}else if(type){
			cDate = cDate.formatDD( "yyyy-MM-DD hh:mm");
		}else{
			cDate = cDate.formatDD( "yyyy-MM-DD");
		}
		return cDate;
	},
	lStorage: {
		setParam: function(name, value) {
			localStorage.setItem(name, value);
		},
		getParam: function(name) {
			return localStorage.getItem(name);
		},
		removeParam:function(name){
			localStorage.removeItem(name);
		},
		clearParam:function(){
			//清除所有的存储，谨慎使用
			localStorage.clear();
		}
	},
}