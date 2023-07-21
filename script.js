function showGallery(galleryId) {
  // Dölj alla gallerisektioner
  var galleries = document.getElementsByClassName('gallery-section');
  for (var i = 0; i < galleries.length; i++) {
    galleries[i].style.display = 'none';
  }

  // Visa det valda galleriet
  var selectedGallery = document.getElementById(galleryId);
  selectedGallery.style.display = 'flex';
  selectedGallery.style.flexWrap = 'wrap';
  selectedGallery.style.gap = '10px';
}