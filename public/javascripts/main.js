'use strict';

$('.item-vote').click(function () {
  const id = $(this).val();
  $.ajax({
    url: '/vote',
    type: 'PUT',
    data: '{"id": ' + id + '}',
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  }).done(data => {
    $(`#vote-count-${data.id}`).text(data.votes);
  }).fail(e => {
    alert(`${e.status} ${e.statusText}`);
  });
});

$('#edit').click(function () {
  location.href = '/edit';
});

$('#reset').click(function () {
  $.ajax({
    url: '/reset',
    type: 'PUT',
    dataType: "json",
  }).done(data => {
    $('.item-count').text(0);
  }).fail(e => {
    alert(`${e.status} ${e.statusText}`);
  });
});

$('#cancel-edit-items').click(function () {
  location.href = '/';
});

$('#submit-edit-items').click(function () {
  const item1 = $.trim($('#edit-item-1').val());
  const item2 = $.trim($('#edit-item-2').val());
  const obj = JSON.stringify({ 1: item1, 2: item2 });
  $.ajax({
    url: '/edit_items',
    type: 'PUT',
    data: obj,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
  }).done(data => {
    alert('Success');
    location.href = '/';
  }).fail(e => {
    alert(`${e.status} ${e.statusText}`);
  });
})
