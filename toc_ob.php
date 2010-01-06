<?php
function tocit($content){
  preg_match_all("/<h([1-6])[^>]*>.*<\/h.>/Us",$content,$headlines);
  $out = '<ul>';
  foreach($headlines[0] as $k=>$h){
   if(strstr($h,'id')===false){
     $x = preg_replace('/>/',' id="head'.$k.'">',$h,1);
     $content = str_replace($h,$x,$content);
     $h = $x;
   };
   $link = preg_replace('/<(\/)?h\d/','<$1a',$h);
   $link = str_replace('id="','href="#',$link);
   if($k>0 && $headlines[1][$k-1]<$headlines[1][$k]){
     $out.='<ul>';
   }
   $out .= '<li>'.$link.'';
   if($headlines[1][$k+1] && $headlines[1][$k+1]<$headlines[1][$k]){
     $out.='</li></ul></li>';
   }
   if($headlines[1][$k+1] && $headlines[1][$k+1] == $headlines[1][$k]){
     $out.='</li>';
   }
  }
  $out.='</li></ul>';
  return str_replace('<div id="toc"></div>',$out,$content);
}
ob_start("tocit");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
 "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">  
  <title>Output buffer TOC conversion</title>
  <link rel="stylesheet" href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" type="text/css">
  <link rel="stylesheet" href="http://yui.yahooapis.com/2.7.0/build/base/base.css" type="text/css">
</head>
<body>
<div id="doc" class="yui-t7">
  <div id="bd" role="main">
    <div id="toc"></div>
    <h1 id="cute">Cute things on the Interwebs</h1>
    <h2 id="rabbits">
      
      Rabbits</h2>
    <h2>Puppies</h2>
    <h3 id="labs">Labradors</h3>
    <h3 id="alsatians">Alsatians</h3>
    <h3 id="corgies">Corgies</h3>
    <h3 id="retrievers">Retrievers</h3>
    <h2 id="kittens">Kittens</h2>
    <h2 id="gerbils">Gerbils</h2>
    <h2 id="ducklings">Ducklings</h2>
    <p><a href="index.html">Back to all the demos</a>.</p>
  </div>
  <div id="ft" role="contentinfo"><p>Written by <a href="http://wait-till-i.com">Christian Heilmann</a></p></div>
</div>
</body>
</html>
<?php ob_end_flush();?>