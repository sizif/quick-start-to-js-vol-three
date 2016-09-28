function ObjectName(param1, param2, paramN){
    this.param1 = param1,
    this.param2 = param2,
    this.paramN = paramN
}

var varNameAsObjectInstance = new ObjectName("param1", "param2", "paramN");

console.log("I've made a new object with these params: " +
                varName.param1 + ", " + ", " + varName.param2 + ", " + varName.paramN);
