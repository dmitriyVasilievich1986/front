let a = "<h3>1. Title</h3><h3>1. Title</h3>"

// console.log(a.match(/<h3.*?h3>/g).map(c => c.replace(/<h3.*?>|<\/h3>/g, '')))

let result = ""
a.split(/<h3/).map((c, i) => {
    result += `<h3 id='${i}'` + c
})
console.log(result)