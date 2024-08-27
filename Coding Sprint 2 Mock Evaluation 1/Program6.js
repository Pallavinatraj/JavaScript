//
function printNumberLines(count) {
    let lines = [];
    let start = 1;
    for (let i = 0; i < count; i++) {
        const currentLine = [];

        for (let j = start; j < start + 3; j++) {
            currentLine.push(j);
        }
        lines.push(currentLine.join(' '));
        start += 3;
    }
    console.log(lines.join('\n'));
}
printNumberLines(3);  


