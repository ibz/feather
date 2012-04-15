## what is it?

feather is a minimalist photoblog / photo gallery. no server side code, no database.

## how to set it up?

just clone feather to a directory that is shared via HTTP. any web server should do. even S3. feather is now up and running - but has no photos to display.

## how to post a new photo?

feather has a "default" gallery, which works like a photoblog - all photos are in reverse order. in addition to that, you can have any number of sets. to post a new photo:

- edit photos.js - add something like this `{'id': 1, 'set': "default"}`, where `id` is a number 1, 2, 3, ... and `set` is the name of the set you want to post in (or `default`)
- add the actual photo to the `photos` directory - in a subdirectory named after the set. the filename should match the id. for example `photos/default/1.jpg`
- copy the photos.js and the photo to your web server
- to make everything easier, you can just push your modified repo to github and pull on your web server

## how to create a new gallery?

- edit photos.js. galleries have an id, which is a string, and will be used in the URL, and a name.
- create a subdirectory under `photos\`. it needs to match the id.
- add photos

## thanks

thanks to Sebastian Kutsch for creating [ContentFlow](http://www.jacksasylum.eu/ContentFlow/), which is more than 95% of feather. :)
