function closingBracket(srt) {
    let open = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let close = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    let stack = []
    for (let i = 0; i < srt.length; i++) {
        let current = srt[i]
        if (open[current]) {
            stack.push(current)
        } else if (close[current]) {
            let last = stack.pop()
            if (close[current] !== last) {
                return false
            }
        }
    }
    return stack.length === 0
}
console.log(closingBracket("((()))")) //true
console.log(closingBracket("[[]](())")) //true
console.log(closingBracket("((())")) //false
console.log(closingBracket("][]")) //false
console.log(closingBracket("({})")) //true