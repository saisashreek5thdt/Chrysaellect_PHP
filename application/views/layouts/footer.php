<!-- Footer Modern-->
      <section class="section section-sm bg-default">
         <hr />
         <div class="container">
            <div class="row align-items-end row-30">
               <div class="col-lg-4">
                  <div class="block-brand-modern">
                     <div class="block-brand-modern-item">
                        <a href="index.html">
                        <img class="oc1" src="<?php base_url(); ?>assets/images/fake.png" data-src="<?php base_url(); ?>assets/images/logo/logo.png" alt="Chrysaellect" style="width:67%;height:auto" />
                        </a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-8">
                  <ul class="list-address">
                     <li>
                        <dl>
                           <dt><span class="heading-5">E-mail</span></dt>
                           <dd>
                              <a href="mailto:faridah@chrysaellect.com">faridah@chrysaellect.com</a>
                              <br />
                              <!--<a href="mailto:amrita@chrysaellect.com">amrita@chrysaellect.com</a>-->
                           </dd>
                        </dl>
                     </li>
                     <li>
                        <dl>
                           <dt><span class="heading-5">Phone</span></dt>
                           <dd>
                              <!-- <a href="#">Amrita: 9819405956 </a>-->
                              <a href="#">Faridah: 9820013694</a>
                           </dd>
                        </dl>
                     </li>
                     <li>
                        <dl>
                           <dt><span class="heading-5">Connect With us</span></dt>
                           <dd>
                              <a class="icon-square-classic fa-whatsapp" style="width:25%;height:auto" href="https://api.whatsapp.com/send?phone=+919820013694&text=Hi"></a>
                              <a class="icon-square-classic fa-facebook" style="width:25%;height:auto" href="https://www.facebook.com/chrysaellecteducation/" target="_blank"></a>
                              <a class="icon-square-classic fa-linkedin" style="width:25%;height:auto" href="https://www.linkedin.com/in/faridah-bawani-62340451/" target="_blank"></a>
                              <a class="icon-square-classic fa-youtube" style="width:25%;height:auto" href="https://www.youtube.com/channel/UCqBaQjPPFGzjQ4MluDu5Yvw" target="_blank"></a>
                           </dd>
                        </dl>
                     </li>
                     <li>
                        <dl>
                           <dt><span class="heading-5">Address</span></dt>
                           <dd><a href="#">305 Dharti Apts, J.P. road, Andheri(W) <br/>Mumbai 400061</a></dd>
                        </dl>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
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
	  <script src="<?php base_url(); ?>assets/js/baguetteBox.min.js"></script>
      <script type="text/javascript">
         baguetteBox.run('.tz-gallery', {
             captions: true, // display image captions.
             buttons: 'auto', // arrows navigation
             fullScreen: false,
             noScrollbars: false,
             bodyClass: 'baguetteBox-open',
             titleTag: false,
             async: false,
             preload: 2,
             animation: 'slideIn', // fadeIn or slideIn
             verlayBackgroundColor: 'rgba(0,0,0,.8)'
         
         });
         
      </script>
	  <script>
         function init() {
             var imgDefer = document.getElementsByClassName('oc1');
             for (var i = 0; i < imgDefer.length; i++) {
         
                 if (imgDefer[i].getAttribute('data-echo')) {
                     imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-echo'));
                 }
             }
         }
         window.onload = init;
      </script>
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
				 else if (imgDefer[i].getAttribute('data-echo')) {
                     imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-echo'));
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