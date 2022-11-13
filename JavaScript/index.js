//print function.
alert("Hello");
document.write("Raja Rahaman <br>");
console.log("Raju Randi");


// type get.
var num = "Sudip";
console.log(typeof(num));


var count = 675;
count = toString(count);
console.log(typeof(count));

var s = 2.5764;
console.log(s.toPrecision(3)); // print total 3 no
console.log(s.toFixed(3));  // print 3 decimal no


var fname = "Raja";
var sname = "Rahaman";
document.write(fname + " " + sname + "<br>");
document.write(fname.concat(sname) + "<br>");


function getFactorial(data) {
    if (data == 0) {
        return 1;
    }
    return data * getFactorial(data - 1);
}

var data = parseInt(prompt("Enter a number : "));
document.write(getFactorial(data) + "<br>");

var arr = new Array();
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);

for(var i = 0; i < arr.length; i++) {
    document.write(arr[i] + " ");
}

document.write("<br>");

arr.pop();
arr.pop();

for(var i = 0; i < arr.length; i++) {
    document.write(arr[i] + " ");
}

document.write("<br>");

arr.shift();
arr.shift();

for(var i = 0; i < arr.length; i++) {
    document.write(arr[i] + " ");
}

document.write("<br>");

arr.unshift(6);
arr.unshift(5);
arr.unshift(4);
arr.unshift(3);
arr.unshift(2);
arr.unshift(1);

for(var i = 0; i < arr.length; i++) {
    document.write(arr[i] + " ");
}

document.write("<br>");

var nArr = new Array();
nArr.push(5);
nArr.push(6);
nArr.push(7);
nArr.push(8);
nArr.push(9);
nArr.push(10);

for(var i = 0; i < nArr.length; i++) {
    if (nArr[i] % 2 == 0) {
        document.write(nArr[i] + " ");
    }
}

document.write("<br>");

var sArr = new Array();
sArr.push("amit");
sArr.push("rahim");
sArr.push("samir");
sArr.push("tutan");
sArr.push("kajal");
sArr.push("dulal");

for(var i = 0; i < sArr.length; i++) {
    document.write(sArr[i] + " ");
}

document.write("<br>");

sArr.splice(2,0, "notun", "abarNotun");
document.write(sArr);

document.write("<br>");

sArr.splice(2,1);
document.write(sArr);

document.write("<br>");

var findMedianSortedArrays = function(nums1, nums2) {
    var l1 = nums1.length;
    var l2 = nums2.length;
    var i = 0;
    var j = 0;
    var k = 0;
    var array = new Array(l1 + l2);

    while (i < l1 && j < l2) {
        if (nums1[i] < nums2[j]) {
            array[k++] = nums1[i++];
        }
        else {
            array[k++] = nums2[j++];
        }
    }
    while (i < l1) {
        array[k++] = nums1[i++];
    }
    while (j < l2) {
        array[k++] = nums2[j++];
    }

    var nl = array.length;
    var ans = 0;
    if (nl % 2 != 0) {
        ans = array[parseInt(nl / 2)];
    }
    else {
        var x = array[nl / 2];
        var y = array[(nl / 2) - 1];
        var p = (x + y) / 2;
        ans = p;
    }
    return ans;
};

var nums1 = [1, 3];
var nums2 = [2];

document.write(findMedianSortedArrays(nums1, nums2));