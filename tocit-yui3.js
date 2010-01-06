YUI({combine: true, timeout: 10000}).use("node", function(Y) {
  var nodes = Y.all('h1,h2,h3,h4,h5,h6');
  var out = '<ul>';
  var weight = 0,nextweight = 0,oldweight;
  nodes.each(function(o,k){
    var id = o.get('id');
    if(id === ''){
      id = 'head' + k;
      o.set('id',id);
    };
    weight = o.get('nodeName').substr(1,1);
    if(weight > oldweight){
      out+='<ul>'; 
    }
    out+='<li><a href="#'+o.get('id')+'">'+o.get('innerHTML')+'</a>';
    if(nodes.item(k+1)){
      nextweight = nodes.item(k+1).get('nodeName').substr(1,1);
      if(weight > nextweight){
        out+='</li></ul></li>'; 
      }
      if(weight == nextweight){
        out+='</li>'; 
      }
    }
    oldweight = weight;
  });
  out+='</li></ul>';
  Y.one('#toc').set('innerHTML',out);
});