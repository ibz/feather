function showSet(set_id) {
    var set = null;
    for (var i = 0; i < sets.length; i++) {
        if (sets[i]['id'] == set_id) {
            set = sets[i];
        }
    }
    var reverse = set['reverse'];
    var container = document.getElementById('itemcontainer');
    for(var i = photos.length - 1; i >= 0; i--) {
        if (photos[i]['set'] == set_id) {
            var img = document.createElement('img');
            img.setAttribute('class', 'item');
            img.setAttribute('src', "js/lib/contentflow/img/loader.gif");
            img.setAttribute('data-original', "photos/" + set_id + "/" + photos[i]['id'] + ".jpg");
            if (reverse) {
                container.appendChild(img);
            } else {
                container.insertBefore(img, container.firstChild);
            }
        }
    }
}

function showNavigation() {
    var container = document.getElementById('navigation');
    var html = "";
    for (var i = 0; i < sets.length; i++) {
        var href = sets[i].id == 'default' ? "/" : "/?" + sets[i].id;
        html += "<a href=\"" + href + "\">(" + sets[i].name + ")</a> ";
    }
    html += "<a href=\"about.html\">(about)</a>";
    container.innerHTML = html;
}

function lazyLoadImages(item, count) {
    for (var i = item, j = 0; i && j <= count; i = i.next, j++) {
        if (!i.image.loaded) {
            function get_onload() {
                var self = i;
                return function() {
                    self.setImageFormat(self.image);
                    if (self.index == 0) {
                        ContentFlowGlobal.Flows[0].resize();
                    }
                    self.image.style.visibility = "visible";
                }
            }
            i.image.onload = get_onload();
            i.image.style.visibility = "hidden";
            i.image.src = i.image.dataset.original;
            i.image.loaded = true;
        }
    }
}
