docker tag catamo/venue-hotel-api registry.heroku.com/venue-hotel-api/web

docker push registry.heroku.com/venue-hotel-api/web

heroku container:release web --app venue-hotel-api