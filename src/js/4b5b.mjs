//4-bit 5-bit
const encodingTable = [
    0b11110, //0b0000
    0b01001, //0b0001
    0b10100, //0b0010
    0b10101, //0b0011
    0b01010, //0b0100
    0b01011, //0b0101
    0b01110, //0b0110
    0b01111, //0b0111
    0b10010, //0b1000
    0b10011, //0b1001
    0b10110, //0b1010
    0b10111, //0b1011
    0b11010, //0b1100
    0b11011, //0b1101
    0b11100, //0b1110
    0b11101 //0b1111,
];

export function encode4b5b(str) {
    const HIGH = 0b11110000,
        LOW = 0b00001111;

    return str.split('').map(c=>c.charCodeAt(0)).reduce((a, n)=>{
        a.push(encodingTable[(n & HIGH)>>4]);
        a.push(encodingTable[n & LOW ]);
        return a;
    }, []);
};

export function decode4b5b(aValues) {
    if(!Array.isArray(aValues)) throw new Error('Invalid input.');
    let result = '';
    for(let i=0; i<aValues.length-1; i+=2) {
        result += String.fromCharCode((encodingTable.indexOf(aValues[i]) << 4) + encodingTable.indexOf(aValues[i + 1]));
    }
    return result;
};

export default {
    encode4b5b: encode4b5b,
    decode4b5b: decode4b5b
}
