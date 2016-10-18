//Slider
$(function() {
    $('.slider').slider({
        auto: true,
        cursor: true,
        speedText: 600,
        speed: 1000,
    });
});
// Template
$(function() {
    var html = $('#author').html();
    var about = [
        {
            avatar: '<img src="img/post.jpg" width="100%" height="100%" alt="" title="">'
        },
        {
            button: "Edit"
        },
        {
            name: 'Maxim',
            surname: 'Alexeev'
        },
        {
            from: '<a href="https://en.wikipedia.org/wiki/Kiev" target="_blank" title="My city">Kiev City</a>'
        },
        {
            title: 'Current place:',
            labeled: 'Kiev City, Ukraine'
        },
        {
            title: 'Relationship status:',
            labeled: 'Married'
        },
        {
            title: 'Company:',
            labeled: 'A-trans Group Ltd.'
        },
        {
            title: 'Website:',
            labeled: '<a href="http://a-trans.ua" title="website">a-trans.ua</a>'
        }
    ];
    var contact = [
        {
            heading: 'Contact information'
        },
	{
	    heading: 'Personal information'
	},
        {
            title: 'Phone:',
            labeled: '911'
        },
        {
            title: 'E-mail',
            labeled: 'cintavra@gmail.com'
        },
        {
            title: 'Facebook:',
            labeled: '<a href="https://www.facebook.com/max.alexeev" target="_blank" title="Facebook">Facebook</a>'
        },
        {
            title: 'Twitter:',
            labeled: '<a href="https://twitter.com/max_alexeev" target="_blank" title="Twitter">Twitter</a>'
        },
        {
            show: 'More info:',
	    edit: 'Edit'
        },
    ];
    var answers = [
        {
            title: 'I like:'
        },
        {
            answer: '<p><span>1.</span>Travel around EU by VW Touran with friends or alone</p>'
        },
        {
            answer: '<p><span>2.</span>Take the guests in my house</p>'
        },
        {
            answer: '<p><span>3.</span>Design & coding</p>'
        }
    ];
    var post = [
         {
             tab: 'All tweets'
         },
         {
             tab: 'My tweets'
         },
         {
             delete: 'Delete tweet',
             pin: 'Pin tweet'
         }
     ];
    var counts = [
        {
            count: '139',
	    title: 'tweets'
        },
        {
            count: '38',
	    title: 'following'
        },
        {
            count: '13',
	    title: 'followers'
        },
        {
            count: '331',
	    title: 'likes'
        },
        {
            count: '30',
	    title: 'media'
        }
    ];
    var wall = [
        {
            user: '<img src="https://pbs.twimg.com/profile_images/702260086497013760/DhFXzmqm.jpg" data-post-id="1" class="post__img" height="50" width="50">',
            text: '#Yarn: A new package manager for #JavaScript: github.com/yarnpkg/yarn',
            date: '18:45 - 13 окт. 2016 г.',
	    thumbed: '<img src="https://o.twimg.com/2/proxy.jpg?t=HBg7aHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8yMjI0NzAxND92PTMmcz00MDAUoAYUoAYcFPABFPABAAAWABIA&s=sjeaWNyjhLLr3cZcSlTE7beVlkkEMjq9Q5mxf4SVAvc">',
	    like: 'Like',
	    lCount: '0',
	    share: 'Retweet',
	    sCount: '0',
	    comment: 'Reply'
        },
        {
            user: '<img src="https://pbs.twimg.com/profile_images/702260086497013760/DhFXzmqm.jpg" data-post-id="1" class="post__img" height="50" width="50">',
            text: '#Funivia San Marino https://youtu.be/kOJAx35D2SQ #montetitano #sanmarino #italy #iltalia',
            date: '15:21 - 7 окт. 2016 г.',
	    thumbed: '',
	    like: 'Like',
	    lCount: '0',
	    share: 'Retweet',
	    sCount: '0',
	    comment: 'Reply'
        },
        {
            user: '<img src="https://pbs.twimg.com/profile_images/702260086497013760/DhFXzmqm.jpg" data-post-id="1" class="post__img" height="50" width="50">',
            date: '8:47 - 24 сент. 2016 г.',
            text: 'As for me, #iOS 10 unlock screen: double tap will be much convenient, than press "Home". #apple #iphone',
	    thumbed: '',
	    like: 'Like',
	    lCount: '1',
	    share: 'Retweet',
	    sCount: '0',
	    comment: 'Reply'
        },
    ];
    var content = tmpl(html, {
        header: about,
        main: answers,
        info: contact,
        feedback: post,
	counts: counts,
	wall: wall
    });
    $('.wrapper').append(content);
})
//Animation
$(function() {
    $('.page__edit__button').hide();
    $('.info__edit__button').hide();

    $('.contact__info').hover(function() {
        $('.contact__heading').css({'width': '630px'});
        $('.page__edit__button').show(200);
    }, function() {
        $('.page__edit__button').hide();
        $('.contact__heading').css({'width': '670px'});
    });

    $('.profile__info').hover(function() {
        $('.profile__heading').css({'width': '630px'});
        $('.info__edit__button').show(200);
    }, function() {
        $('.info__edit__button').hide();
        $('.profile__heading').css({'width': '670px'});
    });
//Show info
    var profile = $('.profile__more__info');
    var show = profile.css('display', 'block');
    var hide = profile.css('display', 'none');
    $('#show').on('click', function(event) {
        event.preventDefault()
        if(profile.is(':visible')) {
            profile.slideUp(500) && $('#show').text('More info:');
        } else {
            profile.slideDown(500) && $('#show').text('Hide info')
        }
    });
//Action menu
    $('.actions__menu__icons').mouseover(
        function(){
            $('.actions__menu').slideToggle('fast');
        }
    );
    $('.actions__menu').mouseleave(
        function(){
            $('.actions__menu').slideToggle('fast');
        }
    );
});
