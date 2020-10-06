<footer class="footer-modern context-dark">
         <div class="container">
            <p class="rights">
               <span>
               <a href="https://5thdt.com/" target="_blank"> 5TH Dimension Technologies </a>
               </span> 
               <span>&copy;&nbsp;</span>
               <span class="copyright-year"></span>
               <span>.&nbsp;</span>
               <a href="#">Privacy Policy</a>
               <span>.</span>
            </p>
         </div>
      </footer>
	  </div>
      <div class="snackbars" id="form-output-global"></div>
      <script src="<?php base_url(); ?>assets/js/3ts2ksMwXvKRuG480KNifJ2_JNM.js"></script>    
      <script src="<?php base_url(); ?>assets/js/core.min.js"></script>
      <script src="<?php base_url(); ?>assets/js/script.js"></script>
      <script>
         if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
             $('.owl-carousel').owlCarousel({
                 margin: 10,
                 autoWidth: false,
                 nav: true,
                 items: 1,
                 loop: true,
                 autoplay: true,
                 autoplayTimeout: 2000,
                 autoplayHoverPause: true,
                 navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
             })
         }
         else {
             $('.owl-carousel').owlCarousel({
                 margin: 10,
                 autoWidth: false,
                 nav: true,
                 items: 1,
                 loop: true,
                 autoplay: true,
                 autoplayTimeout: 2000,
                 autoplayHoverPause: true,
                 navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
             })
         }
      </script>
      <!-- jQuery -->
      <!-- FlexSlider -->
      <script type="text/javascript" src="<?php base_url(); ?>assets/js/jquery.flexslider-min.js"></script>
      <script type="text/javascript">
         var $ = jQuery.noConflict();
         $(window).load(function () {
             $('.flexslider').flexslider({
                 animation: "fade"
         
             });
         
             $(function () {
                 $('.show_menu').click(function () {
                     $('.menu').fadeIn();
                     $('.show_menu').fadeOut();
                     $('.hide_menu').fadeIn();
                 });
                 $('.hide_menu').click(function () {
                     $('.menu').fadeOut();
                     $('.show_menu').fadeIn();
                     $('.hide_menu').fadeOut();
                 });
             });
         });
      </script>
      <script>
         function init() {
             var imgDefer = document.getElementsByClassName('oc1');
             for (var i = 0; i < imgDefer.length; i++) {
         
                 if (imgDefer[i].getAttribute('data-src')) {
                     imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
                 }
             }
         }
         window.onload = init;
      </script>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134940381-1"></script>
      <script>
         window.dataLayer = window.dataLayer || [];
         function gtag() { dataLayer.push(arguments); }
         gtag('js', new Date());
         
         gtag('config', 'UA-134940381-1');
      </script>
   </body>
</html>