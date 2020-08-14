const { Ink } = imports.ink;

const D = 'DEFAULT';
const R = 'RED';
const S = 'LIGHT_SALMON';
const O = 'LIGHT_ORANGE';
const H = 'BROWN';
const B = 'BLUE';
const K = 'BLACK';

const MARIO = [
    [[5,D],[5,R],[6,D]],
    [[4,D],[9,R],[3,D]],
    [[4,D],[3,H],[2,S],[1,K],[1,S],[5,D]],
    [[3,D],[1,H],[1,S],[1,H],[3,S],[1,K],[3,S],[3,D]],
    [[3,D],[1,H],[1,S],[2,H],[3,S],[1,K],[3,S],[2,D]],
    [[4,D],[1,H],[4,S],[4,K],[3,D]],
    [[5,D],[6,S],[5,D]],
    [[4,D],[2,R],[1,B],[2,R],[1,B],[2,R],[4,D]],
    [[3,D],[3,R],[1,B],[2,R],[1,B],[3,R],[3,D]],
    [[2,D],[4,R],[4,B],[4,R],[2,D]],
    [[2,D],[2,S],[1,R],[1,B],[1,O],[2,B],[1,O],[1,B],[1,R],[2,S],[2,D]],
    [[2,D],[3,S],[6,B],[3,S],[2,D]],
    [[2,D],[2,S],[8,B],[2,S],[2,D]],
    [[4,D],[3,B],[2,D],[3,B],[4,D]],
    [[3,D],[3,H],[4,D],[3,H],[3,D]],
    [[2,D],[4,H],[4,D],[4,H],[2,D]],
];

let printer = new Ink.Printer();

for(let line of MARIO) {
    let str = '';
    for(let el of line) {
        let part = '';
        let count = el[0] * 2;
        while(count--)
            part += ' ';

        printer.color = (el[1] === R)
            ? Ink.Color.GREEN : Ink.Color[el[1]];
        printer.background = Ink.Color[el[1]];
        part = printer.getPainted(part);
        str += part;
    }
    print(str);
}
