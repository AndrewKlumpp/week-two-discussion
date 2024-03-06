let discussion = function(string) {
    const numbers = "0123456789";
    const goodFirstChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    let firstChar = string[0];
    if (numbers.includes(firstChar)) {
        console.log(`${string} is a bad variable name because it starts with a number.`)
    } else if (goodFirstChars.includes(firstChar)) {
        console.log(`${string} is most likely a good variable name!`)
    };
};

discussion("1dojo"); // 1dojo is a bad variable name because it starts with a number.
discussion("999_dojo$"); // 999_dojo$ is a bad variable name because it starts with a number.
discussion("dojo"); // dojo is most likely a good variable name!
discussion("$dojo"); // $dojo is most likely a good variable name!
discussion("_dojo"); // _dojo is most likely a good variable name!
