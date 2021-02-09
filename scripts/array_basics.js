(function goto(){
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