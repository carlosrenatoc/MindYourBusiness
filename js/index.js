$(document).delegate('textarea', 'keydown', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode == 9) {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;
    var text = $(this).val();
    var selText = text.substring(start, end);
    $(this).val(
      text.substring(0, start) +
      "\t" + selText.replace(/\n/g, "\n\t") +
      text.substring(end)
    );
    this.selectionStart = this.selectionEnd = start + 1;
  }
});

var node1;

$(document).ready(function(){
  var canvas = document.querySelector('canvas');
  fitToContainer(canvas);

  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");

  Node.setCtx(ctx);
  var position = {x : 100, y : 100};
  node1 = new Node(position, "Hello World");
  node1.updateText('Hello again');
});

$('textarea').bind('input propertychange', function() {
  node1.updateText($(this).val())
  
});


function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width ='98%';
  canvas.style.height='100%';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

