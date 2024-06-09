const addprefix = (strtoaddprefix)=>{
    const prefixtoadd ="$";

    return strtoaddprefix
    .split("\n")
    .map((str)=> prefixtoadd+str)
    .join("\n");

};

const strtoprint = addprefix(` my fisrt
 my second line`);

console.log(strtoprint)