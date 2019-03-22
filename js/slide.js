var slides = [
  {title: "slide 1", text: "some description of slide 1", color: "red", zoom: 10, center: [40.000, -75.1090], filterLine: filter0, filterStation: filter0s, filterApartment: filter0a, popup: false},
  {title: "slide 2", text: "some description of slide 2, it's different", color: "green", zoom: 11, center: [39.879068458458725, -75.23995021405831], filterLine: filter1, filterStation: filter1s, filterApartment: filter1a, popup: false},
  {title: "slide 3", text: "some description of slide 3, it's different (also)", color: "blue", zoom: 9, center: [40.000, -75.1090], filterLine: filter2, filterStation: filter2s, filterApartment: filter2a, popup: true},
  {title: "slide 4", text: "some description of slide 3, it's different (also)", color: "blue", zoom: 9, center: [40.000, -75.1090], filterLine: filter3, filterStation: filter3s, filterApartment: filter3a, popup: false},
  {title: "slide 5", text: "some description of slide 3, it's different (also)", color: "blue", zoom: 10, center: [40.000, -75.1090], filterLine: filter4, filterStation: filter4s, filterApartment: filter4a, popup: false}
]

var currentSlide = 0;

var addTitle = (title) => {
  $('#title1').text(title)
}

var addText = (text) => {
  $('#text1').text(text)
}

var setView = (center, zoom) => {
  map.setView(center, zoom);
}

var cleanup = () => {
  $('#title').remove()
  $('#text').remove()
}

var filterMapLine = (filterThis) => {
  if(layerLine) {
    map.removeLayer(layerLine)
  }
  layerLine = L.geoJSON(railLine, {
      filter: filterThis
  });
  layerLine.addTo(map);
}

var filterMapStation = (filterThis) => {
  if(layerStation) {
    map.removeLayer(layerStation)
  }
  layerStation = L.geoJSON(railStation, {
      filter: filterThis,
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, stationMarkerOptions);
    }
  });
  layerStation.addTo(map);
}

var filterMapApartment = (filterThis) => {
  if(layerApartment) {
    layerApartment.clearLayers();
  }
  filterThis();
}

var buildSlide = (slideObject) => {
  cleanup()
  addTitle(slideObject.title)
  addText(slideObject.text)
  setView(slideObject.center, slideObject.zoom)
  filterMapLine(slideObject.filterLine)
  filterMapStation(slideObject.filterStation)
  filterMapApartment(slideObject.filterApartment)
}

var buttonChange = () => {
  if(currentSlide == 0) {
    $("#previous").hide()
  }
  else {
    $("#previous").show()
  }
  if(currentSlide == 4) {
    $("#next").hide()
  }
  else {
    $("#next").show()
  }
}

buildSlide(slides[currentSlide]);
buttonChange();
$("#next").click(() => {
  currentSlide = currentSlide + 1;
  buttonChange();
  buildSlide(slides[currentSlide]);
})
$("#previous").click(() => {
  currentSlide = currentSlide - 1;
  buttonChange();
  buildSlide(slides[currentSlide]);
})
