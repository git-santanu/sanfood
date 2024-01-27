In this app we are using parcel bundler instead of webpack; 
we dont want to 'create react app' which using webpack; 
want to make this app more faster using parcel.
#Parcel gives:
dev build
HMR - Hot module Replacement
File watching algorithm (wriiten by C++)
caching - faster builds
image optimazation
minification
bundling

A JavaScript bundler is a tool that puts your code and all its dependencies together in one.

The primary purpose of bundlers is to organise modules and dependencies in front-end projects, optimise website performance, and reduce file sizes.

npm - the default package manager for the JavaScript runtime environment.

package.json -> configuration of npm which keeps tracking what version app uses
^17.2.3, ~17.2.3 -> (^) -> caret [its automatically upgrade the version as minor id the main package version is released] and (~) tilde [its automatically upgrade the version as major id the main package version is released].

package.lock.json -> keeps track what actual version being installed.
[integrity in package.lock.json is -> is a hash which check the configuration in systems (local/live)]

node modules -> kind of a db of each package. All the datas are dependent to the package you're using.