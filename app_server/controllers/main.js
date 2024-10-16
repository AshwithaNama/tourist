module.exports.index=function(req,res){
    res.render('index', { title: 'WPM' });
   };
   module.exports.signin=function(req,res){
    res.render('signin', { title: 'WPM' });
   };
   module.exports.review=function(req,res){
    res.render('review', { title: 'WPM' });
   };