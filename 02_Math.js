function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

// module.exports =add;
// module.exports =sub; //take this one

module.exports={
    addFun:add,
    subFun:sub

};