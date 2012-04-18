
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

function showSet(id) {
    var set = getSet(id);

    set_id = id;
    photo_index = 0;

    showCurrentPhoto();
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
