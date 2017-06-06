$(document).ready(function() {
  $("#formOne").submit(function() {
   var sentenceInput = $("input#sentence").val();
   var sentenceArray =[];

    //var str = $("input#sentence").val();
    var len = sentenceInput.length;
    for(i=0;i<len;i++) {
      var letter = sentenceInput.charAt(i);
      sentenceArray.push(letter);
      alert(sentenceArray[i]);
    }
  });
});
