
// Build christmas tree by the following given argument:
// number of floors (integer and always greater than 0).
/*

0: "         *         "
1: "        ***        "
2: "       *****       "
3: "      *******      "
4: "     *********     "
5: "    ***********    "
6: "   *************   "
7: "  ***************  "
8: " ***************** "
9: "*******************"

*/
function christmassTree(levels) {
    var character = '*';

    var width = (levels * 2) + 1;

    var tree = [];

    for (var i = 0; i < levels; i++) {
        var str = '';
        var numberOfChars = (i * 2) + 1;
        var padding = (width - numberOfChars) / 2;
        for (var leftPadding = 0; leftPadding < padding; leftPadding++) {
            str += ' ';
        }

        for (var x = 0; x < numberOfChars; x++) {
            str += character;
        }

        for (var rightPadding = 0; rightPadding < padding; rightPadding++) {
            str += ' ';
        }
        
        tree.push(str);
    }

    return tree;
}