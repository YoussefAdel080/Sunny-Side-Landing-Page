if (window.matchMedia('(max-width: 765px)').matches) {
    for(let i = 0; i < 4; i++)
        {
            oldSrc = $('.main-visiual-container img')[i].src;
            $('.main-visiual-container img')[i].src = oldSrc.replace('desktop','mobile');
        }
};

if (window.matchMedia('(max-width: 500px)').matches)
{
    $('.hero-section')[0].style.backGroundImage = '/assets/mobile/image-header.jpg';
    $('.main-nav')[0].style.width = `${Math.floor($('.navigation')[0].scrollWidth)}px`;

    $('.hamburger-container').on('click',function()
    {
        if($('.main-nav')[0].style.display == 'none')
        {
            $('.main-nav')[0].style.display = 'block'
        }
        else{ $('.main-nav')[0].style.display = 'none'};
    });
}

if (window.matchMedia('(max-width: 365px)').matches) {
    for(let i = 0; i < 4; i++)
        {
            oldSrc = $('.about-section img')[i].src;
            $('.about-section img')[i].src = oldSrc.replace('desktop','mobile');
        }
};