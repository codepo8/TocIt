(function(){
  var headings = [];
  var herxp = /h\d/i;
  var count = 0;
  var elms = document.getElementsByTagName('*');
  for(var i=0,j=elms.length;i<j;i++){
    var cur = elms[i];
    var id = cur.id;
    if(herxp.test(cur.nodeName)){
      if(cur.id===''){
        id = 'head'+count;
        cur.id = id;
        count++;
      }
      headings.push(cur);
    }
  }
  var out = '<ul>';
  for(i=0,j=headings.length;i<j;i++){
    var weight = headings[i].nodeName.substr(1,1);
    if(weight > oldweight){
      out += '<ul>'; 
    }
    out += '<li><a href="#'+headings[i].id+'">'+
           headings[i].innerHTML+'</a>';
    if(headings[i+1]){
      var nextweight = headings[i+1].nodeName.substr(1,1);
      if(weight > nextweight){
        out+='</li></ul></li>'; 
      }
      if(weight == nextweight){
        out+='</li>'; 
      }
    }
    var oldweight = weight;
  }
  out += '</li></ul>';
  document.getElementById('toc').innerHTML = out;
})();