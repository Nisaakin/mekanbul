const anaSayfa=function(req,res,) {
    res.render('anasayfa',{"title":"Ana sayfa"});
}

const mekanBilgisi = function (req, res, next){
    res.render('mekanbilgisi', { title: 'Mekan Bilgisi'});

}
const yorumEkle=function(req, res, next){
    res.render('yorumekle',{title:'Yorum Ekle'})
}
module.exports = {
anaSayfa,
mekanBilgisi,
yorumEkle
};