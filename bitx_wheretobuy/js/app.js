// $(document).ready(function() {  
// 	$(function() {
// 		$('#myCarousel').carousel();
// 	});
//   $("#myCarousel").swiperight(function() {  
//  	  $(this).carousel('prev');   
//   });  
	
// 	$("#myCarousel").swipeleft(function() {  
// 	  $(this).carousel('next');  
//   }); 	
// });


// $(document).ready(function() {
 // 
  // $("#owl-demo").owlCarousel({
 
      // navigation : true, // Show next and prev buttons
      // slideSpeed : 300,
      // paginationSpeed : 400,
      // singleItem:true,
      // "singleItem:true" is a shortcut for:
//       items : 3, 
//       itemsDesktop : 3,
//       itemsDesktopSmall : 3,
//       itemsTablet: 1,
//       itemsMobile : 1


//   });
 
// });

$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 3, 
      itemsDesktop : [1200,3], 
      itemsDesktopSmall : [992,1], 
      itemsTablet: [786,1], 
      itemsMobile : false 
  });
});