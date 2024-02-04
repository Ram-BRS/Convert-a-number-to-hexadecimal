function convertToHex() {
    var num = parseInt(document.getElementById("inputNumber").value);
    var result = toHex(num);
    document.getElementById("result").innerHTML = "Hexadecimal Representation: " + result;
}

function toHex(num) {
    if (num === 0) return "0";

    var hexChars = "0123456789abcdef";
    var result = "";

    while (num !== 0) {
        result = hexChars[num & 0xf] + result;
        num >>>= 4;
    }

    return result || "0";
}
