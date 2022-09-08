class Entry{
	constructor(entry_data, entry_title){
		this.entry_data = entry_data;
		this.entry_title = entry_title;
	}
}

const entryArr = [];
let date = "";

function save_button(){
	let str = document.getElementById("textbox").value;
	if(str == ""){
		alert("Entry empty, not saved.");
		//location.href = 'index.html';
	}else{
		let temp = new Entry(str , date);
		console.log(temp);
		entryArr.push(temp);
		//location.href = 'index.html';
	}
	console.log(entryArr);
	loader();
}

function loader(){
	console.log("in loader");
	document.getElementById("page1").style.visibility = "visible";
	document.getElementById("page2").style.visibility = "hidden";
	if(entryArr.length == 0){
		document.getElementById("entryDisp").innerHTML = `<p>Wow, such empty</p>`;
	}else{
		let text = `<ul>`;
		for(let i = 0; i < entryArr.length; i++){
			text += `<li><p class="entTitle"> ${entryArr[i].entry_title} </p> <p class="entData"> ${entryArr[i].entry_data}</p></li>`;
		}
		text += `</ul>`;
		document.getElementById("entryDisp").innerHTML = text;
		console.log(text);
	}
}

function new_entry_button(){
	document.getElementById("page1").style.visibility = "hidden";
	document.getElementById("page2").style.visibility = "visible";
	get_date();
}

function get_date(){
	date = new Date();
	year = date.getFullYear();
	month = date.getMonth() + 1;
	let month_str, hr = date.getHours(), min = date.getMinutes(), temp = "am";
	let hr_str = hr, min_str = min;
	day = date.getDate();

	if(hr > 12){
		temp="pm";
		hr=hr-12;
	}

	if(hr < 10)
		hr_str = "0" + hr;

	if(min < 10)
		min_str = "0" + min;

	switch(date.getMonth()){
		case 0:
			month_str="January";
			break;
		case 1:
			month_str="February";
			break;
		case 2:
			month_str="March";
			break;
		case 3:
			month_str="April";
			break;
		case 4:
			month_str="May";
			break;
		case 5:
			month_str="June";
			break;
		case 6:
			month_str="July";
			break;
		case 7:
			month_str="August";
			break;
		case 8:
			month_str="September";
			break;
		case 9:
			month_str="October";
			break;
		case 10:
			month_str="November";
			break;
		case 11:
			month_str="December";
			break;
	}
	date = month_str + " " + day + ", " + year + " - " + hr_str + ":" + min_str + " " + temp;
	document.getElementById("myTitle").innerHTML = date;
}