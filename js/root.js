
// Variables Declared

const btn_primary = document.querySelectorAll('.btn-primary');
const btn_default = document.querySelectorAll('.btn-default');
const btn_primary_ico = document.querySelectorAll('.btn-primary-ico');
const btn_default_ico = document.querySelectorAll('.btn-default-ico');
const btn_dashed_default = document.querySelectorAll('.btn-dashed-default');
const btn_dashed_default_ico = document.querySelectorAll('.btn-dashed-default-ico');
const btn_nobg_primary = document.querySelectorAll('.btn-nobg-primary');
const btn_nobg_primary_ico = document.querySelectorAll('.btn-nobg-primary-ico');
const btn_nobg_default = document.querySelectorAll('.btn-nobg-default');
const btn_nobg_default_ico = document.querySelectorAll('.btn-nobg-default-ico');

// Functions Defined

// 1) btn_primary :
btn_primary.forEach((v1) => {
    v1.addEventListener('mouseenter', () => {
        v1.classList.add('btn-primary-hover');
    });
    v1.addEventListener('mouseleave', () => {
        v1.classList.remove('btn-primary-hover');
    });
    v1.addEventListener('click', () => {
        v1.classList.remove('btn-primary-hover');
        v1.classList.add('btn-click-primary');
        setTimeout(
            function () {
                v1.classList.remove('btn-click-primary');
                v1.classList.add('btn-load-primary');
            }
            , 200);
        setTimeout(
            function () {
                v1.classList.remove('btn-load-primary');
                v1.classList.add('btn-disabled');
                v1.disabled = true
            }
            , 2000)

    });
});

// 2) btn_default :
btn_default.forEach((v2) => {
    v2.addEventListener('mouseenter', () => {
        v2.classList.add('btn-default-hover');
    });
    v2.addEventListener('mouseleave', () => {
        v2.classList.remove('btn-default-hover');
    });
    v2.addEventListener('click', () => {
        v2.classList.remove('btn-default-hover');
        v2.classList.add('btn-click-default');
        setTimeout(
            function () {
                v2.classList.remove('btn-click-default');
                v2.classList.add('btn-load-default');
            }
            , 200)
        setTimeout(
            function () {
                v2.classList.remove('btn-load-default');
                v2.classList.add('btn-disabled');
                v2.disabled = true
            }
            , 2000)
    });
});

// 3) btn_primary_ico :
btn_primary_ico.forEach((v3) => {
    v3.addEventListener('mouseenter', () => {
        v3.classList.add('btn-primary-hover');
    });
    v3.addEventListener('mouseleave', () => {
        v3.classList.remove('btn-primary-hover');
    });
    v3.addEventListener('click', () => {
        v3.classList.remove('btn-primary-hover');
        v3.classList.add('btn-click-primary');
        setTimeout(
            function () {
                v3.classList.remove('btn-click-primary');
                v3.classList.add('btn-load-primary');
            }
            , 200);
        setTimeout(
            function () {
                v3.classList.remove('btn-load-primary');
                v3.classList.add('btn-disabled-ico');
                v3.disabled = true
            }
            , 2000)

    });
});

// 4) btn_default_ico :
btn_default_ico.forEach((v4) => {
    v4.addEventListener('mouseenter', () => {
        v4.classList.add('btn-default-ico-hover');
    });
    v4.addEventListener('mouseleave', () => {
        v4.classList.remove('btn-default-ico-hover');
    });
    v4.addEventListener('click', () => {
        v4.classList.remove('btn-default-ico-hover');
        v4.classList.add('btn-click-default');
        setTimeout(
            function () {
                v4.classList.remove('btn-click-default');
                v4.classList.add('btn-load-default');
            }
            , 200)
        setTimeout(
            function () {
                v4.classList.remove('btn-load-default');
                v4.classList.add('btn-disabled-ico');
                v4.disabled = true
            }
            , 2000)
    });
});

// 5) btn_dashed_default :
btn_dashed_default.forEach((v5) => {
    v5.addEventListener('mouseenter', () => {
        v5.classList.add('btn-dashed-hover');
    });
    v5.addEventListener('mouseleave', () => {
        v5.classList.remove('btn-dashed-hover');
    });
    v5.addEventListener('click', () => {
        v5.classList.remove('btn-dashed-hover');
        v5.classList.add('btn-dashed-click');
        setTimeout(
            function () {
                v5.classList.remove('btn-dashed-click');
                v5.classList.add('btn-load-default');
            }
            , 200);
        setTimeout(
            function () {
                v5.classList.remove('btn-load-default');
                v5.classList.add('btn-disabled');
                v5.disabled = true
            }
            , 2000)

    });
});

// 6) btn_dashed_default_ico :
btn_dashed_default_ico.forEach((v6) => {
    v6.addEventListener('mouseenter', () => {
        v6.classList.add('btn-dashed-ico-hover');
    });
    v6.addEventListener('mouseleave', () => {
        v6.classList.remove('btn-dashed-ico-hover');
    });
    v6.addEventListener('click', () => {
        v6.classList.remove('btn-dashed-ico-hover');
        v6.classList.add('btn-dashed-ico-click');
        setTimeout(
            function () {
                v6.classList.remove('btn-dashed-ico-click');
                v6.classList.add('btn-load-default');
            }
            , 200)
        setTimeout(
            function () {
                v6.classList.remove('btn-load-default');
                v6.classList.add('btn-disabled-ico');
                v6.disabled = true
            }
            , 2000)
    });
});


// 7) btn_nobg_primary :
btn_nobg_primary.forEach((v7) => {
    v7.addEventListener('mouseenter', () => {
        v7.classList.add('btn-nobg-primary-hover');
    });
    v7.addEventListener('mouseleave', () => {
        v7.classList.remove('btn-nobg-primary-hover');
    });
    v7.addEventListener('click', () => {
        v7.classList.remove('btn-nobg-primary-hover');
        v7.classList.add('btn-click-default');
        setTimeout(
            function () {
                v7.classList.remove('btn-click-default');
                v7.classList.add('btn-load-no-bg-primary');
            }
            , 200);
        setTimeout(
            function () {
                v7.classList.remove('btn-load-no-bg-primary');
                v7.classList.add('btn-nobg-disabled');
                v7.disabled = true
            }
            , 2000)

    });
});

// 8) btn_nobg_primary_ico :
btn_nobg_primary_ico.forEach((v8) => {
    v8.addEventListener('mouseenter', () => {
        v8.classList.add('btn-nobg-primary-hover');
    });
    v8.addEventListener('mouseleave', () => {
        v8.classList.remove('btn-nobg-primary-hover');
    });
    v8.addEventListener('click', () => {
        v8.classList.remove('btn-nobg-primary-hover');
        v8.classList.add('btn-click-default');
        setTimeout(
            function () {
                v8.classList.remove('btn-click-default');
                v8.classList.add('btn-load-no-bg-primary');
            }
            , 200);
        setTimeout(
            function () {
                v8.classList.remove('btn-load-no-bg-primary');
                v8.classList.add('btn-nobg-disabled-ico');
                v8.disabled = true
            }
            , 2000)

    });
});

// 9) btn_nobg_default :
btn_nobg_default.forEach((v9) => {
    v9.addEventListener('mouseenter', () => {
        v9.classList.add('btn-nobg-default-hover');
    });
    v9.addEventListener('mouseleave', () => {
        v9.classList.remove('btn-nobg-default-hover');
    });
    v9.addEventListener('click', () => {
        v9.classList.remove('btn-nobg-default-hover');
        v9.classList.add('btn-load-nobg-default');
        setTimeout(
            function () {
                v9.classList.remove('btn-load-no-bg-default');
                v9.classList.add('btn-nobg-disabled');
                v9.disabled = true
            }
            , 2000)

    });
});

// 10) btn_nobg_default_ico :
btn_nobg_default_ico.forEach((v10) => {
    v10.addEventListener('mouseenter', () => {
        v10.classList.add('btn-nobg-default-hover');
    });
    v10.addEventListener('mouseleave', () => {
        v10.classList.remove('btn-nobg-default-hover');
    });
    v10.addEventListener('click', () => {
        v10.classList.remove('btn-nobg-default-hover');
        v10.classList.add('btn-load-nobg-default');
        setTimeout(
            function () {
                v10.classList.remove('btn-load-no-bg-default');
                v10.classList.add('btn-nobg-disabled-ico');
                v10.disabled = true
            }
            , 2000)

    });
});