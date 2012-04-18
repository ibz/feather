
function getSet(id) {
    for (var i = 0; i < sets.length; i++) {
        if (sets[i]['id'] == id) {
            return sets[i];
        }
    }
}

function showCurrentPhoto() {
    var set = getSet(set_id);
    document.getElementById('photo').setAttribute('src', "photos/" + set_id + "/" + set['photos'][photo_index]['id'] + ".jpg");
}

function preloadNext() {
    var set = getSet(set_id);
    var html = "";
    for (var i = 1; i <= 3; i++) {
        if (photo_index + i < set['photos'].length - 1) {
            html += "<img src=\"photos/" + set_id + "/" + set['photos'][photo_index + i]['id'] + ".jpg\" />";
        }
    }
    document.getElementById('preloader').innerHTML = html;
}

function showSet(id) {
    var set = getSet(id);

    set_id = id;
    photo_index = 0;

    showCurrentPhoto();
    preloadNext();
}

function prev() {
    if (photo_index > 0) {
        photo_index--;
        showCurrentPhoto();
    }
}

function next() {
    var set = getSet(set_id);

    if (photo_index < set['photos'].length - 1) {
        photo_index++;
        showCurrentPhoto();
        preloadNext();
    }
}

function showNavigation() {
    var container = document.getElementById('navigation');
    var html = "";
    for (var i = 0; i < sets.length; i++) {
        html += "<a href=\"javascript:showSet('" + sets[i].id + "')\">(" + sets[i].name + ")</a> ";
    }
    html += "<a href=\"about.html\">(about)</a>";
    container.innerHTML = html;
}
