document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

$(document).ready(function() {
    $('select').formSelect();
});

$('.checkbox').change(function() {
    if ($(this).hasClass('xixi')) {
        if(this.checked) {
            let instance = M.Modal.getInstance(document.querySelector('.ximodal'));
            instance.open();
        }
    }
    if ($(this).hasClass('merasacek')) {
        if(this.checked) {
            let instance = M.Modal.getInstance(document.querySelector('.memodal'));
            instance.open();
        }
    }
});

$('.crot').click(function() {
    let inp = $('#input').val().toLowerCase();
    let outp = '';
    if (inp == '') {
        alert('isi input dulu pack..');
    } else {
        for (let i = 0; i < inp.length; i++) {
            let charnow = inp.charAt(i);
            let charnew;
            if ($('input.alay').is(':checked') || $('input.simbol').is(':checked')) {
                if ($('input.simbol').is(':checked')) {
                    let r = Math.floor(Math.random() * 2) + 1;
                    if (charnow == 'a') {
                        charnew = r == 2 ? '@' : 'ă';
                    } else if (charnow == 'i') {
                        charnew = r == 2 ? '!' : 'ì';
                    } else if (charnow == 'u') {
                        charnew = r == 2 ? 'ű' : 'ů';
                    } else if (charnow == 'e') {
                        charnew = r == 2 ? 'ē' : 'Ē';
                    } else if (charnow == 'o') {
                        charnew = r == 2 ? '()' : 'Ő';
                    } else if (charnow == 's') {
                        charnew = r == 2 ? '$' : 'Ş';
                    } else {
                        charnew = angkadoang(charnow);
                    }
                } else {
                    charnew = angkadoang(charnow);
                }
            } else {
                charnew = charnow;
            }
            outp += charnew;
        }
        if ($('input.xixi').is(':checked')) {
            let v = $('select.xixi').val();
            console.log(v);
            if (v == '1') {
                outp += ' xixixi';
            } else if (v == '2') {
                outp += ' xixixixixixi';
            } else {
                outp += ' xixixixixixixixixi'
            }
        }
        if ($('input.merasacek').is(':checked')) {
            let v = $('#merasa').val();
            outp += '\n- merasa ' + v;
        }
        $('#output').focus();
        $('#output').val(outp);
    }
});

function angkadoang(charnow) {
    if (charnow == 'a') {
        return '4';
    } else if (charnow == 'b') {
        return '8';
    } else if (charnow == 'e') {
        return '3';
    } else if (charnow == 'g') {
        return '6';
    } else if (charnow == 'i') {
        return '1';
    } else if (charnow == 's') {
        return '5';
    } else {
        let r = Math.floor(Math.random() * 2) + 1;
        return r == 2 ? charnow.toUpperCase() : charnow;
    }
}