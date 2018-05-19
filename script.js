$(document).ready(function (){
                activeSetup();
                $('.myicon').click(function(e){
                    $('#navbar ul').toggleClass('sm-screen');
                })
                
                function activeSetup(){
                    var urlPath = window.location.pathname;
                    console.log(urlPath);
                    $('nav a').each(function (){
                        
                        var href = $(this).attr('href');
                    //    console.log(href);
                    //    console.log(urlPath.substring(0, href.length));
                        
                        if(urlPath === href){
                            console.log('match');
                            $(this).closest('li').addClass('active');
                        }
                    })
                }
            })