var getName = function(array){
    return array.firstName + " " + array.lastName;
}

d3.select("body")
    .selectAll("h2")
    .data(employees)
    .enter()
    .append("h2")
    .text(getName)