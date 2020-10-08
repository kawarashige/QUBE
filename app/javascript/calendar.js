// const date = new Date()
// const year = date.getFullYear()
// const month = date.getMonth + 1

// const firstDate = new Date(year, month, 1)
// const lastDate = new Date(year, month, 0)
// const lastDatenum = lastDate.getDate()
// const firstDay = firstDate.getDay()

// let datenum = 1
// let calenderHtml = ''

// calenderHtml += '<h1>' + year + '.' + month + '</h1>'
// calenderHtml += '<tabel>'

// for (let i = 0; i < weeks.length; i++) {
//   calenderHtml = '<td>' + weeks[i] + '</td>'
// }

// for (let w = 0; w < 6; w++) {
//   calenderHtml += '<tr>'
//   for (let d = 0; d < 7; d++) {
//     if (w == 0 && d < firstday)
//       calenderHtml += '<td></td>'
//     else if ( datenum > lastDatenum ) {
//       calenderHtml += ''
//     }
//     else { 
//       '<tr>' + datenum + '</tr>'
//       datenum ++
//     }
// } calenderHtml += '</tr>'
// } calenderHtml += '</table>'

// document.querySelector('#calender').innerHtml = calenderHtml

// var $window = $(window);
// var $year = $('#js-year');
// var $month = $('#js-month');
// var $tbody = $('#js-calendar-body');

// var today = new Date();
// var currentYear = today.getFullYear(),
//     currentMonth = today.getMonth();

// $window.on('load',function(){
//   calendarHeading(currentYear, currentMonth);
//   calendarBody(currentYear, currentMonth, today);
// });

// function calendarBody(year, month, today){
//     var todayYMFlag = today.getFullYear() === year && today.getMonth() === month ? true : false;
//     var startDate = new Date(year, month, 1);
//     var endDate  = new Date(year, month + 1 , 0);
//     var startDay = startDate.getDay();
//     var endDay = endDate.getDate();
//     var textSkip = true;
//     var textDate = 1;
//     var tableBody ='';

//     for(var row = 0; row < 6; row++) {
//         var tr = '<tr>';

//         for(var col = 0; col < 7; col++) {
//           if (row === 0 && startDay === col){
//             textSkip = false;
//           }
//           if (textDate > endDay){
//             textSkip = true;
//           }
//           var addClass = todayYMFlag && textDate === today.getDate() ? 'is-today' : '';
//           var textTd = textSkip ? '&nbsp;' : textDate++;
//           var td = '<td class="'+addClass+'">'+textTd+'</td>';
//           tr += td;
//         }
//         tr += '</tr>';
//         tableBody += tr;
//     }
//     $tbody.html(tableBody);
// }

// function calendarHeading(year, month){
//     $year.text(year);
//     $month.text(month + 1 );
// }