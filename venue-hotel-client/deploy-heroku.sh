docker tag catamo/venue-hotel-client registry.heroku.com/venue-hotel-client/web

docker push registry.heroku.com/venue-hotel-client/web

heroku container:release web --app venue-hotel-client
