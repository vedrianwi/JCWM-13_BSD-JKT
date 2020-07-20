let N = 5, result = '', result2 = ''
for (let i = 1; i < N; i++) {
    for (let j = 1; j <= i; j++) {
        result += j
    }
    result += '\n'
}

for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
        result += i + j
    }
    result += '\n'
}

console.log(result)