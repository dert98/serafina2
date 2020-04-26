(function () {

    // PRELOAD
    window.onload = function () {
        $('body').addClass('loaded');
        // var contenedor = document.getElementById('loader-wrapper');
        // contenedor.style.visibility = 'hidden';
        // contenedor.style.opacity = '0';
    }

    // TOGGLE DEL NAVBAR
    $(".nav-icon").on("click", function() {
        $("#nav-icon1").toggleClass('open');
        $("nav ul").toggleClass("showing");
        $("nav .nav-icon").toggleClass("nav-white");
    });

    // EFECTO DEL NAVBAR
    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $("nav").addClass("down");
        } else {
            $("nav").removeClass("down");
        }
    });

    // ANIMATE ON SCROLL
    AOS.init();

    // SLIDER HERO
	var carouselHero = function () {
		$('#hero.owl-carousel').owlCarousel({
			animateOut: 'fadeOut',
			items: 1,
			loop: true,
			autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 10000,
			smartSpeed: 300,
		});
	};
	carouselHero();
    
    // MOSTRAR INSTAGRAM
    function verInstagram(){
        let username = 'serafinadelicias';
        $.ajax({            
            url: "https://www.instagram.com/"+username+"/?__a=1"          
        }).done(function(data) {          
            // $(".profile a").attr("href", 'https://www.instagram.com/'+username+'/');
            // $(".profile-image img").attr("src", data.graphql.user.profile_pic_url_hd);
            // $(".profile-image img").attr("alt", data.graphql.user.username);
            // $('.profile-user-name').append(data.graphql.user.username);
            $('#publications').append(data.graphql.user.edge_owner_to_timeline_media.count);
            $('#followers').append(data.graphql.user.edge_followed_by.count);
            $('#follow').append(data.graphql.user.edge_follow.count);
            // $('.profile-real-name').append(data.graphql.user.full_name);
            for (let i = 0; i < 6; i++) {
                let gallerigram_item_type = () => {
                    let type_name = data.graphql.user.edge_owner_to_timeline_media.edges[i].node.__typename;
                    var type_item = '';
                    if (type_name != 'GraphImage') {
                        type_item = '<div class="gallerigram-item-type"><i class="fa fa-';
                        if (type_name == 'GraphVideo')
                            type_item += 'video-camera'
                        else 
                            if (type_name == 'GraphSidecar') type_item += 'clone'
                        type_item += '" aria-hidden="true"></i></div>';
                    }
                    return (type_item);
                };
                let item_gallerigram =                     
                    '<div class="gallerigram-item" tabindex="'+i+'">'+
                        '<img class="gallerigram-image" src="'+data.graphql.user.edge_owner_to_timeline_media.edges[i].node.thumbnail_src+'" alt="'+data.graphql.user.edge_owner_to_timeline_media.edges[i].node.accessibility_caption+'">'+
                        gallerigram_item_type() +
                        '<a href="https://www.instagram.com/p/'+data.graphql.user.edge_owner_to_timeline_media.edges[i].node.shortcode+'/"><div class="gallerigram-item-info">'+
                            '<ul>'+
                                '<li class="gallerigram-item-likes">'+
                                    '<span class="visually-hidden"><i class="fa fa-heart" aria-hidden="true"></i> '+data.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_liked_by.count+'</span>'+
                                '</li>'+
                                '<li class="gallerigram-item-comments">'+
                                    '<span class="visually-hidden"><i class="fa fa-comment" aria-hidden="true"></i> '+data.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_comment.count+'</span>'+
                                '</li>'+
                            '</ul>'+
                        '</div></a>'+
                    '</div>';
                $('.gallerigram').append(item_gallerigram);
            }
        });          
    };
    verInstagram();


    // FILTRAR CATEGORIAS DEL MENU
    $('.categoria-item').click(function(){
        var catProduct = $(this).attr('categoria');
        
        // Ocultando productos
        $('.menu-item').css('transform', 'scale(0)');
        function hideProduct(){
            // $(this).removeClass('item-active');
            $('.menu-item').hide();
        } setTimeout(hideProduct,400);
        
        $('.categoria-item').removeClass('item-active');
        $(this).addClass('item-active');
        // // Mostrando productos
        function showProduct(){
            
            $('.menu-item[categoria="'+catProduct+'"]').show();
            $('.menu-item[categoria="'+catProduct+'"]').css('transform', 'scale(1)');
        } setTimeout(showProduct,400);
    });
    $('.categoria-item[categoria="all"]').click(function(){
        function showAll(){
            $('.menu-item').show();
            $('.menu-item').css('transform', 'scale(1)');
        } setTimeout(showAll,400);
    });



    // SLIDER MENU
	var carouselMenu = function () {
		$('#menu .owl-carousel').owlCarousel({
            stagePadding: 0,
            loop: true,
            margin: 10,
            nav: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
		});
	};
    carouselMenu();
    

    // GOOGLE MAPS
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }
    // initMap();
})();
