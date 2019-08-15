var arr = [];
var status = 0;
var now_select = -1;

function xor_sum(arr) {
	let sum = 0;
	for(let i in arr) sum ^= i;
	return sum;
}

function init(n) {
	for (let i = 0; i < n-1; i++) arr.push(Math.ceil(Math.random()*8));
	arr.splice(Math.floor(Math.random()*arr.length), 0, xor_sum(arr)+1);

	for (let i = 0; i < n; i++) {
		$('#body').append(`<span onclick="selectRow(${i})" class="badge badge-pill badge-success id="cnt${i}">${arr[i]}</span>`)
		let bgstyle = i&1 ? "badge-light" : "badge-dark";
		$("#body").append(`<span onclick="takeOne(${i})" class="badge badge-pill ${bgstyle}" id="row${i}">`);
		for (let j = 0; j < arr[i]; j++) {
			$(`#row${i}`).append(`<img src="cobble_stone.png" width="64px" id="stone-${i}-${j}">`);
		}
		$("#body").append("</span><br>");
	}
}

function takeOne(x) {
	if(arr[x] <= 0) alert("illegal!!");
	$(`#stone-${x}-${arr[x]-1}`).css("opacity: 0");
	$(`#cnt${x}`).text(`${--arr[x]}`);
}

function selectRow(x) {
	console.log("select" + x);
	$(`#cnt${x}`).removeClass(``)
}

function endTake() {
	status = 0;
	now_select = -1;
}
init(6);