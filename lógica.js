function id_ioncomum (cat1, cat2, an1, an2, cf1, cf2) {
    if (cat1 === cat2 && an1 !== an2) {
        cat_comum1 = cf1
        cat_comum2 = cf2
        an_comum1 = 0
        an_comum2 = 0
    } else if (an1 === an2 && cat1 !== cat2) {
        an_comum1 = cf1
        an_comum2 = cf2
        cat_comum1 = 0
        cat_comum2 = 0
    } else if (an1 !== an2 && cat1 !== cat2) {
        cat_comum1 = 0
        cat_comum2 = 0
        an_comum1 = 0
        an_comum2 = 0
    } else if (an1 === an2 && cat1 === cat2){
        cat_comum1 = cf1
        cat_comum2 = cf2
        an_comum1 = cf1
        an_comum2 = cf2
    }
}

function id_kps(cat, an) {
    i = cat
    j = an
    var matriz = [[5.4e-13, 1.8e-10, 1.0e-12, 8.5e-17],
                  [6.3e-9, 1.7e-7, 1.8e-13, 1.3e-12],
                  [3.7e-6, 1.9e-4, 1.6e-4, 5.5e-8]]
    return matriz[i][j]
}
//  Br Cl SCN I
//Ag
//Cu
//Tl

function novas_concentracoes (ci1, ci2, vol1, vol2) {
    vf = vol1 + vol2
    cf1 = ci1*vol1/vf
    cf2 = ci2*vol2/vf
}

function ioncomum (an_comum, cat_comum, kps, n, m) {
    var s = (-(an_comum + cat_comum) + Math.sqrt((an_comum + cat_comum)**2 - 4 * (an_comum * cat_comum - kps)))/2
    concfcat = s + cat_comum
    concfan = s + an_comum
    window.document.getElementById(n).innerHTML=concfan.toExponential(4)
    window.document.getElementById(m).innerHTML=concfcat.toExponential(4)
}

function ion_ph (ka, kps, ph, an_comum, cat_comum, n, m) {
    let alpha = ka/(ka+(10**(-ph)))
    var s = (-(an_comum + alpha * cat_comum) + Math.sqrt((an_comum + alpha * cat_comum)**2 - 4*alpha*(an_comum * cat_comum - kps)))/2*alpha
    concfcat = s + cat_comum
    concfan = s*alpha + an_comum
    window.document.getElementById(n).innerHTML=concfan.toExponential(4)
    window.document.getElementById(m).innerHTML=concfcat.toExponential(4)
}

function id_caso (an, kps, ph, an_comum, cat_comum, n, m) {
    if (an == 2) {
        let ka = 7.94e-2
        ion_ph(ka, kps, ph, an_comum, cat_comum, n, m)

    } else {
        ioncomum(an_comum, cat_comum, kps, n, m)
    }
}

var a = window.document.getElementById("butao")
a.addEventListener("click", clicar)

function clicar () {
    let cat1 = parseFloat(window.document.getElementById("cat1").value)
    let cat2 = parseFloat(window.document.getElementById("cat2").value)
    let an1 = parseFloat(window.document.getElementById("an1").value)
    let an2 = parseFloat(window.document.getElementById("an2").value)
    let ph = parseFloat(window.document.getElementById("ph").value)
    let ci1 = parseFloat(window.document.getElementById("conc1").value)
    let ci2 = parseFloat(window.document.getElementById("conc2").value)
    let vol1 = parseFloat(window.document.getElementById("vol1").value)
    let vol2 = parseFloat(window.document.getElementById("vol2").value)
    novas_concentracoes(ci1, ci2, vol1, vol2)
    id_ioncomum(cat1, cat2, an1, an2, cf1, cf2)
    kpsdosal1 = id_kps(cat1, an1)
    kpsdosal2 = id_kps(cat2, an2)
    id_caso (an1, kpsdosal1, ph, an_comum2, cat_comum2, "resposta1.1", "resposta1.2")
    id_caso (an2, kpsdosal2, ph, an_comum1, cat_comum1, "resposta2.1", "resposta2.2")
}
