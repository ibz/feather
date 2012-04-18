## what is it?

feather is a minimalist photoblog / photo gallery. no server side code, no database.

## how to set it up?

just clone feather to a directory that is shared via HTTP. any web server should do. even S3. feather is now up and running - but has no photos to display.

## how to post a new photo?

- edit photos.js - add the image to one of your sets
- add the actual photo to the `photos` directory - in a subdirectory named after the set. the filename should match the id you gave in photos.js. for example `photos/default/1.jpg`
- copy the modified files to your web server (to make everything easier, you can just push your modified repo to github and pull on your web server)

## how to create a new set?

- edit photos.js
- create a subdirectory under `photos\`. its name needs to match the set id you gave in photos.js
- add photos to the new set
