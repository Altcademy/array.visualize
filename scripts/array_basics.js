(function ex_1(){
  var data = ['Johnny', 'David', 'Sarah'];
  var svg = d3.select("#_one")
    .append('svg')
    .attr('height',100)
    .attr('width',900);
  var a = illustrateArray(data,svg,{fontsize:23,speed:250});
  var v;
  $(document).on('click', '#_one_buttons button', function() {
    if (v) {
      v.goto($(this).data('index'))
    } else {
      v = a.highlight($(this).data('index'));
    }
  })
})();

(function ex_2(){
  var data1 = ['Johnny', 'David'];
  var data2 = ['Tom', 'Paul'];
  var svg1 = d3.select("#_two_1")
    .append('svg')
    .attr('height',60)
    .attr('width',145);
  var svg2 = d3.select("#_two_2")
    .append('svg')
    .attr('height',60)
    .attr('width',102);
  
  var a = illustrateArray(data1,svg1,{fontsize:23,speed:250});
  var b = illustrateArray(data2,svg2,{fontsize:23,speed:250});
  var v;
  var x;
  $(document).on('click', '#_two_buttons_1 button', function() {
    if (v) {
      v.goto($(this).data('index'))
    } else {
      v = a.highlight($(this).data('index'));
    }
    if (x) {
      x.destroy();
      x = undefined;
    }
  })
  $(document).on('click', '#_two_buttons_2 button', function() {
    if (x) {
      x.goto($(this).data('index'))
    } else {
      x = b.highlight($(this).data('index'));
    }
    if (v) {
      v.destroy();
      v = undefined;
    }
  })
})();