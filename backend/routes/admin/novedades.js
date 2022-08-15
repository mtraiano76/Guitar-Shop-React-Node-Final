const { Router } = require('express');
var express = require('express');
var router = express.Router();
var novedadesModel = require ("../../models/novedadesModel")
const util = require ('util');
const e = require('express');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedad =>{
    if (novedad.img_id){
      const imagen = cloudinary.image(novedad.img_id, {
        width:100,
        height:100,
        crop:'pad' //fill es el otro parametro para tamaño de imagen
      });
      return {
        ...novedad,
        imagen
      }
    }else{
      return {
        ...novedad,
        imagen:''
      }
    }
  });

  //if(req.query.q=== undefined){
    //novedades = await novedadesModel.getNovedades();
  //}else{
    //novedades = await novedadesModel.buscarNovedades(req.query.q);
  //}

  res.render('admin/novedades', {
    layout:'admin/layout',
    persona: req.session.nombre,
    novedades,
    q:req.query.q,
    is_search: req.query.q !== undefined
  });
});
//MUESTRA FORM ALTA DE NOVEDADES
router.get("/agregar",(req,res,next) =>{
  res.render("admin/agregar",{// agregar hbs
    layout: "admin/layout"
  })
})
//AGREGA LA NOVEDAD
router.post('/agregar', async(req, res, next) =>{
  //console.log(req.body) //veo en consola si me trae titulo, subtitulo y cuerpo agregado en web
  try{

    var img_id="";
    //console.log(req.files.imagen)
    if (req.files && Object.keys(req.files).length > 0){
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
      await novedadesModel.insertNovedades({
        ...req.body,
        img_id
      })
      res.redirect("/admin/novedades")
      }else{ // volvemos a agregar
        res.render("admin/agregar",{
          layout: "admin/layout",
          error: true,
          message: "Todos los campos son requeridos" // vamos a agregar.hbs
        })

      }


  }catch(error){
    console.log(error)
    res.render("admin/agregar",{
      layout: "admin/layout",
      error: true,
      message: "No se carga la novedad" // mensaje para cuando no se guarda la novedad vamos a agregar.hbs
    })

  }

})

//ELIMINAR NOVEDAD

router.get("/eliminar/:id" , async (req,res,next)=>{
  //console.log(req.params.id);
  var id = req.params.id;
  let novedad = await novedadesModel.getNovedadesByID(id);
  if (novedad.img_id){
    await (destroy(novedad.img_id));
  }

  await novedadesModel.deleteNovedadesByID(id);
  res.redirect("/admin/novedades")
})

//VISTA MODIFICAR FORM + DATOS DE CAMPOS PARA MODIFICAR

router.get("/modificar/:id", async(req,res,next)=>{
  var id = req.params.id;
  var novedad = await novedadesModel.getNovedadesByID(id);



  res.render("admin/modificar",{
    layout:"admin/layout",
    novedad
  })
})

//ACTUALIZACION DE LOS DATOS

router.post("/modificar", async(req,res,next)=>{
  try{

    let img_id = req.body.img_original;

    let borrar_img_vieja = false;

    if (req.body.img_delete === "1"){
      img_id = null;
      borrar_img_vieja = true;
    }else{
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original){
      await (destroy(req.body.img_original));

    }


    var obj = {
      titulo:req.body.titulo,
      subtitulo:req.body.subtitulo,
      cuerpo:req.body.cuerpo,
      img_id

    }

    await novedadesModel.modificarNovedadByID(obj, req.body.id)
    res.redirect("/admin/novedades");



  }catch(error){
    console.log(error)
    res.render("admin/modificar",{
      layout:"admin/layout",
      error:true,
      message:"No se modifico la novedad"
    })

  }

})




module.exports = router;