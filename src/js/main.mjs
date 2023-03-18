import alg from './4b5b.mjs';

const plainTextElm = document.body.querySelector('#plaintext textarea'),
    ciperElem = document.body.querySelector('#cipher textarea'),
    outputElem = document.body.querySelector('#output textarea'),
    encodeButton = document.body.querySelector('#encode');

encodeButton.addEventListener('click', e=>{
    e.preventDefault();
    let plainText = plainTextElm.value,
        cipher = alg.encode4b5b(plainText),
        output = alg.decode4b5b(cipher);

    ciperElem.value = cipher.map(c=>'0b' + c.toString('2')).join('\n');
    outputElem.value = output;
    return false;
});
