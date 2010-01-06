(function(){
  var bd = document.body,
      x = bd.innerHTML,
      headings = x.match(/<h\d[^>]*>[\S\s]*?<\/h\d>$/mg),
      r1 = />/,
      r2 = /<(\/)?h(\d)/g,
      toc = document.createElement('div'),
      out = '<ul>',
      i = 0,
      j = headings.length,
      cur = '',
      weight = 0,
      nextweight = 0,
      oldweight = 2,
      container = bd;
  for(i=0;i<j;i++){
    if(headings[i].indexOf('id=')==-1){
      cur = headings[i].replace(r1,' id="h'+i+'">');
      x = x.replace(headings[i],cur);
    } else {
      cur = headings[i];
    }
    weight = cur.substr(2,1);
    if(i<j-1){
      nextweight = headings[i+1].substr(2,1);
    }
    var a = cur.replace(r2,'<$1a');
    a = a.replace('id="','href="#');
    if(weight>oldweight){ out+='<ul>'; }
    out+='<li>'+a;
    if(nextweight<weight){ out+='</li></ul></li>'; }
    if(nextweight==weight){ out+='</li>'; }
    oldweight = weight;
  }
  bd.innerHTML = x;
  toc.innerHTML = out +'</li></ul>';
  container = document.getElementById('toc') || bd;
  container.appendChild(toc);
})();