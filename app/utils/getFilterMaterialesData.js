import JsonCubavisuales from '../json/cubavisuales.json';
export default async filters => {
  var filterTitulo = [];
  var filterCategoria = [];
  var filterAnno = [];
  var filterActor = [];
  var filterDirector = [];
  var filterPais = [];
  var filterGenero = [];

  let tMateriales = JsonCubavisuales.find(el => {
    if (el['name'] === '_m_materiales') {
      return el;
    }
  });
  //Filtrado por titulo
  //console.log(tMateriales.data)
  //debugger;
  if (filters.titulo != '') {
    tMateriales.data.map(e => {
      if (e.titulo.toLowerCase().indexOf(filters.titulo.toLowerCase()) > -1) {
        filterTitulo.push(e);
      }
    });
  } else {
    filterTitulo = tMateriales.data;
  }
  if (filters.id_tipo_material != '') {
    filterTitulo.map(el => {
      if (el.id_tipo_material === filters.id_tipo_material) {
        filterCategoria.push(el);
      }
    });
  } else {
    filterCategoria = filterTitulo;
  }
  if (filters.anno != '') {
    filterCategoria.filter(el => {
      if (el.anno === filters.anno) {
        filterAnno.push(el);
        // console.log(tablasImportant[2].data[i]);
      }
    });
  } else {
    filterAnno = filterCategoria;
  }
  if (filters.actor != '') {
    filterAnno.filter(el => {
      var reparto = el.reparto + '';
      if (reparto.toLowerCase().indexOf(filters.actor) > -1) {
        filterActor.push(el);
        // console.log(tablasImportant[2].data[i]);
      }
    });
  } else {
    filterActor = filterAnno;
  }
  if (filters.director != '') {
    filterActor.filter(el => {
      var director = el.director + '';
      if (director.toLowerCase().indexOf(filters.director) > -1) {
        filterDirector.push(el);
        // console.log(tablasImportant[2].data[i]);
      }
    });
  } else {
    filterDirector = filterActor;
  }
  if (filters.pais != '') {
    filterDirector.filter(el => {
      var director = el.pais + '';
      if (director.toLowerCase().indexOf(filters.pais) > -1) {
        filterPais.push(el);
        // console.log(tablasImportant[2].data[i]);
      }
    });
  } else {
    filterPais = filterDirector;
  }
  if (filters.genero != '') {
    filterPais.filter(el => {
      // debugger;
      var genero = el.generos + '';
      // console.log(genero)
      if (genero.indexOf(filters.genero) > -1) {
        filterGenero.push(el);
        // console.log(tablasImportant[2].data[i]);
      }
    });
  } else {
    filterGenero = filterPais;
  }

  return sortJSON(filterGenero, 'titulo', 'asc');
};
function ordenarAsc(p_array_json, p_key) {
  return p_array_json.sort(function(a, b) {
    return a[p_key] > b[p_key];
  });
}
function sortJSON(data, key, orden) {
  return data.sort(function(a, b) {
    var x = a[key],
      y = b[key];

    if (orden === 'asc') {
      return x < y ? -1 : x > y ? 1 : 0;
    }

    if (orden === 'desc') {
      return x > y ? -1 : x < y ? 1 : 0;
    }
  });
}
