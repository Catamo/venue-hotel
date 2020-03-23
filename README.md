# Venue Hotel Finder

Web application using VueJS + NuxtJs. For the CSS I decided to use TailwindCSS, which by itself it's not a fully-fledged framework but provides a set of utility classes. 

In the future I plan to add more support to mobile and tablet users, and also create a test suite for the project. 

There is an admin module where the user can create empty hotels for the moment. But in the future I plan to enhance that functionality

### Functionalities

The project first presents a list of recommended hotels that are close to the venue of an event, and the user can filter this list and click on "See Details" of each hotel to see more information about the hotel and it's rooms. 

Once on the hotel page, there is more information about the hotel and a list of available Rooms where the user can select one and click "Book Now" to create a booking.

After a room is picked and the "Book Now" button pressed, the user is redirected to the Booking Confirmation page. The Booking by itself was created once the "Book Now" button was pressed, so the URL can be bookmarked as it contains a unique code that identifies the booking. In the confirmation, the user can see information about the selected hotel, room, a unique booking number and can "Confirm" the booking or go to the home page.

Lastly, an admin page is accessible for whoever knows the route, as the security features are not implemented yet. On this page, the user can delete hotels and create new ones, albeit incomplete because they will be lacking images and rooms.  

### How to run the project

In the root folder, you can find a file named "docker-compose.yml", which gives the user the capability of running the "docker-compose up" command that runs both the Server and the Frontend, in ports 4000 and 3000 respectively. So the user can access the application by accessing [http://localhost:3000/](http://localhost:3000/).

Please be aware that the user's pc needs to have Docker installed.

Also, to access the admin module, the user can go to [http://localhost:3000/admin/hotels](http://localhost:3000/admin/hotels) 

