'use strict';

$(function(){
// the shopping list must:
//enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
  $('form').submit(function (event) {
    event.preventDefault();
    let newItem = $(event.currentTarget).find('input').val();
    $('ul').append(`<li> <span class="shopping-item"> ${newItem} </span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>`);
  }); 

  //check and uncheck items on the list by clicking the "Check" button
  $('.shopping-list').on('click', '.shopping-item-toggle', function () {
    $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item__checked');
  //$('ul').append('<li> one </li>');
  });
 
  //permanently remove items from the list
  $('button.shopping-item-delete').click(function (event) {
    $(event.currentTarget).closest('li').remove();
  });
});