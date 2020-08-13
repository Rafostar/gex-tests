const { Ink } = imports.ink;

const W = Ink.TextColor.WHITE;
const R = Ink.TextColor.RED;
const S = Ink.TextColor.LIGHT_SALMON;
const Y = Ink.TextColor.LIGHT_ORANGE;
const H = Ink.TextColor.BROWN;
const B = Ink.TextColor.BLUE;
const K = Ink.TextColor.BLACK;

const MARIO = [
    [[16,W]],
    [[5,W],[5,R],[6,W]],
    [[4,W],[9,R],[3,W]],
    [[4,W],[3,H],[2,S],[1,K],[1,S],[5,W]],
    [[3,W],[1,H],[1,S],[1,H],[3,S],[1,K],[3,S],[3,W]],
    [[3,W],[1,H],[1,S],[2,H],[3,S],[1,K],[3,S],[2,W]],
    [[4,W],[1,H],[4,S],[4,K],[3,W]],
    [[5,W],[6,S],[5,W]],
    [[4,W],[2,R],[1,B],[2,R],[1,B],[2,R],[4,W]],
    [[3,W],[3,R],[1,B],[2,R],[1,B],[3,R],[3,W]],
    [[2,W],[4,R],[4,B],[4,R],[2,W]],
    [[2,W],[2,S],[1,R],[1,B],[1,Y],[2,B],[1,Y],[1,B],[1,R],[2,S],[2,W]],
    [[2,W],[3,S],[6,B],[3,S],[2,W]],
    [[2,W],[2,S],[8,B],[2,S],[2,W]],
    [[4,W],[3,B],[2,W],[3,B],[4,W]],
    [[3,W],[3,H],[4,W],[3,H],[3,W]],
    [[2,W],[4,H],[4,W],[4,H],[2,W]]
];

let printer = new Ink.Printer({
    font: Ink.TextFont.REVERSE
});

for(let line of MARIO) {
    let str = '';
    for(let el of line) {
        let part = '';
        let count = el[0] * 2;
        while(count--)
            part += ' ';

        printer.color = el[1];
        part = printer.getPainted(part);
        str += part;
    }
    print(str);
}
