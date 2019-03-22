var filter0 = (feature) => {
  return true;
}

var filter1 = (feature) => {
  return feature.properties.Line == 'Airport'
}

var filter2 = (feature) => {
  return feature.properties.Line == 'Cynwyd'
}

var filter3 = (feature) => {
  return feature.properties.Line == 'Airport'
}

var filter4 = (feature) => {
  return feature.properties.Line == 'Airport'
}

var filter0s = (feature) => {
  return true;
}

var filter1s = (feature) => {
  return feature.properties.Line_Name == 'Airport Line'
}

var filter2s = (feature) => {
  return feature.properties.City == 'Philadelphia'
}

var filter3s = (feature) => {
  return feature.properties.Line_Name == 'Airport Line'
}

var filter4s = (feature) => {
  return feature.properties.Line_Name == 'Airport Line'
}

var filter0a = () => {
  _.each(apartments, function(obj){
    L.circleMarker(L.latLng(parseFloat(obj["Location"].split(',')[0]),parseFloat(obj["Location"].split(',')[1]))).addTo(layerApartment);
  })
}

var filter1a = () => {
  _.each(apartments, function(obj){
    if(obj["Total Rent (Est.)"] < 1300){
    L.circleMarker(L.latLng(parseFloat(obj["Location"].split(',')[0]),parseFloat(obj["Location"].split(',')[1]))).addTo(layerApartment);
    }
  })
}

var filter2a = () => {
  _.each(apartments, function(obj){
    L.circleMarker(L.latLng(parseFloat(obj["Location"].split(',')[0]),parseFloat(obj["Location"].split(',')[1]))).addTo(layerApartment);
  })
}

var filter3a = () => {
  _.each(apartments, function(obj){
    L.circleMarker(L.latLng(parseFloat(obj["Location"].split(',')[0]),parseFloat(obj["Location"].split(',')[1]))).addTo(layerApartment);
  })
}

var filter4a = () => {
  _.each(apartments, function(obj){
    L.circleMarker(L.latLng(parseFloat(obj["Location"].split(',')[0]),parseFloat(obj["Location"].split(',')[1]))).addTo(layerApartment);
  })
}
