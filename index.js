let verification=confirm ("Salam. Sual-cavabda iştirak etmək istəyirsən?");
let cavablarin_sayi=[];
let toplamBal =[];
if (verification == true) {
    let name=prompt('Adınızı daxil edin');
    let welcome=alert ("Səhifəmizə xoş gəlmisən--" +name);
    let notification=alert("Elə isə suallara cavab ver və topladığın balları gör");
    let question1=prompt("Sual 1- Dünyanın ən yüksək dağı hansıdır?")
    if (question1 =="Everest") {
        alert ("10 xalınız var") 
        cavablarin_sayi++;
    }
    else {
        alert ("Doğru cavab vermədiniz")
    }
    let question2=prompt("Sual 2- Neçə okean var?")
    if (question2 ==4) {
        alert ("10 xalınız var")
        cavablarin_sayi++;
    }
    else {
        alert ("Doğru cavab vermədiniz")
    }
    let question3=prompt("Sual 3- İngiltərənin paytaxtı haradır?")
    if (question3 =="London") {
        alert ("10 xalınız var")
        cavablarin_sayi++;
}
else {
    alert ("Doğru cavab vermədiniz")
}
    let question4 =prompt("Sual 4- 'Okeanlarda üzən iri buz parçalarına' nə deyilir?")
    if (question4=="Aysberq")
    {
        alert ("10 xalınız var")
        cavablarin_sayi++;
    }
    else {
        alert ("Doğru cavab vermədiniz")
    }
    let question5=prompt("Sual 5- 'Axşam' sözünün antonimi nədir?")
    if (question5=="Gündüz")
    {
        alert ("10 xalınız var")
        cavablarin_sayi++;
    }
    else {
        alert ("Doğru cavab vermədiniz")
    }
    let question6=prompt("Sual 6- 'Elektrik lampası'n kim icad edib?")
    if (question6=="Thomas Edison")
    {
        alert ("10 xalınız var")
        cavablarin_sayi++;
    }
    else {
        alert ("Doğru cavab vermədiniz")
    }
    let question7=prompt("Sual 7- Ən böyük 'məməli' heyvan hansidir?")
    if (question7=="Balina")
    {
        alert ("10 xalınız var")
        cavablarin_sayi++;
    }
    else {
        alert ("Doğru cavab vermədiniz")
    }
    let question8=prompt("Sual 8- 'Atom bombası'n hansı Alim icad edib?")
    if (question8=="Albert Einstein")
    {
        alert ("10 xalınız var")
        cavablarin_sayi++;
    }
    else {
        alert ("Doğru cavab vermədiniz")
    }
    let question9=prompt("Sual 9- Arxaya uça bilən yeganə 'quş' növü hansıdır?")
    if (question9=="Kolibri")
    {
        alert ("10 xalınız var")
        cavablarin_sayi++;
    }
    else {
        alert ("Doğru cavab vermədiniz")
    }
    let question10=prompt("Sual 10- 'Suç ve Ceza' kitabının müəllifi kimdir?")
    if (question10=="Fyodor Dostoevski")
    {
        alert ("10 xalınız var")
        cavablarin_sayi++;
    }
    else {
        alert ("Doğru cavab vermədiniz")
    }
}
else {
    alert("Ok. Yaxşı yol ")
}
if (cavablarin_sayi==1) {
    alert ("Topladığınız bal (10) (E)")
}
    else if (cavablarin_sayi==2)
    {
        alert ("Topladığınız bal (20) (E)")
    }
    else if (cavablarin_sayi==3) {
        alert ("Topladığınız bal (30) (D)")
    }
    else if (cavablarin_sayi==4) {
        alert ("Topladığınız bal (40) (D)")
}
    else if (cavablarin_sayi==5) {
        alert ("Topladığınız bal (50) (C)")
    }
    else if (cavablarin_sayi==6) {
        alert ("Topladığınız bal (60) (C)")
    }
    else if (cavablarin_sayi==7) {
        alert ("Topladığınız bal (70) (B)")
    }
    else if (cavablarin_sayi==8) {
        alert ("Topladığınız bal (80) (B)")
    }
else if (cavablarin_sayi==9) {
    alert ("Topladığınız bal (90) (A)")
}
else if (cavablarin_sayi==10)
{
    alert ("Topladığınız bal (100) (A)")
}

let netice=alert("Düzgün cavabların sayı--" +cavablarin_sayi)
