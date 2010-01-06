YUI({combine: true, timeout: 10000}).use("node", function(Y) {
  var nodes = Y.all('h1,h2,h3,h4,h5,h6');
  var out = '<ul>';
  nodes.each(function(o,k){
    var id = o.get('id');
    if(id === ''){
      id = 'head' + k;
      o.set('id',id);
    };
    if(nodes.item(k-1)){
      if(o.get('nodeName').substr(1,1) >
         nodes.item(k-1).get('nodeName').substr(1,1)){
        out+='<ul>'; 
      }
    }
    out+='<li><a href="#'+o.get('id')+'">'+o.get('innerHTML')+'</a>';
    if(nodes.item(k+1)){
      if(o.get('nodeName').substr(1,1) >
         nodes.item(k+1).get('nodeName').substr(1,1)){
        out+='</li></ul></li>'; 
      }
      if(o.get('nodeName').substr(1,1) ==
         nodes.item(k+1).get('nodeName').substr(1,1)){
        out+='</li>'; 
      }
    }
  });
  out+='</li></ul>';
  Y.one('#toc').set('innerHTML',out);
});