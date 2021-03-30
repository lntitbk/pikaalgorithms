var lengthOfLongestSubstring = function(s) {
    var strClr = {};
    var str = {};
    var maxLong = 0;
    var tempLong = 0;
    for(var i = 0; i < s.length; i++) {
        var k = s[i];
        if (strClr[k] != undefined && strClr[k] != null) {
            var nbStart = strClr[k];
            str = {};
            for(var j = nbStart + 1; j <= i; j++) {
                var newK = s[j];
                str[newK] = j;
            }
            tempLong = i - nbStart;
            strClr = str;
        } else {
            strClr[k] = i;
            tempLong++;
            maxLong = (maxLong >= tempLong) ? maxLong : tempLong;
        }
    }
    return maxLong;
};