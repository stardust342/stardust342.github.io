function menu_goto( menuform )
{
  var baseurl = '' ;
  selecteditem = menuform.url.selectedIndex ;
  newurl = menuform.url.options[ selecteditem ].value ;
  if (newurl.length != 0) {
    location.href = baseurl + newurl ;
  }
}
document.writeln( '<form action="chgoto" method="get">' );
document.writeln( '<select name="url" onchange="menu_goto(this.form)">' );
document.writeln( '<option value="">Select</option>' );
document.writeln( '<option value="index.html">Home</option>' );
document.writeln( '<option value="dottk.html">Free Url</option>' );
document.writeln( '<option value="games.html">Games</option>' );
document.writeln( '<option value="links.html">Links</option>' );
document.writeln( '<option value="pics.html">Pics</option>' );
document.writeln( '<option value="tutorials.html">Tutorials</option>' );
document.writeln( '<option value="downs.html">Downloads</option>' );
document.writeln( '<option value="js.html">Javascripting</option>' );
document.writeln( '<option value="stardust/index.html">Stardust</option>' );
document.writeln( '</select>' );
document.writeln( '</form>' );