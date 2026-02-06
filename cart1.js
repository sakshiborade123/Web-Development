// Watch
let watch = 0;
function watchAdd() {
    watch++;
    document.getElementsByClassName("count")[0].innerText = watch;
}
function watchRemove() {
    if (watch > 0) {
        watch--;
        document.getElementsByClassName("count")[0].innerText = watch;
    }
}

// TV
let tv = 0;
function tvAdd() {
    tv++;
    document.getElementsByClassName("count")[1].innerText = tv;
}
function tvRemove() {
    if (tv > 0) {
        tv--;
        document.getElementsByClassName("count")[1].innerText = tv;
    }
}

// Mobile
let mobile = 0;
function mobileAdd() {
    mobile++;
    document.getElementsByClassName("count")[2].innerText = mobile;
}
function mobileRemove() {
    if (mobile > 0) {
        mobile--;
        document.getElementsByClassName("count")[2].innerText = mobile;
    }
}

// Perfume
let perfume = 0;
function perfumeAdd() {
    perfume++;
    document.getElementsByClassName("count")[3].innerText = perfume;
}
function perfumeRemove() {
    if (perfume > 0) {
        perfume--;
        document.getElementsByClassName("count")[3].innerText = perfume;
    }
}

// Powder
let powder = 0;
function powderAdd() {
    powder++;
    document.getElementsByClassName("count")[4].innerText = powder;
}
function powderRemove() {
    if (powder > 0) {
        powder--;
        document.getElementsByClassName("count")[4].innerText = powder;
    }
}

// Books
let books = 0;
function booksAdd() {
    books++;
    document.getElementsByClassName("count")[5].innerText = books;
}
function booksRemove() {
    if (books > 0) {
        books--;
        document.getElementsByClassName("count")[5].innerText = books;
    }
}
