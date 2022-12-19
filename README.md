<div align="center">
<img src="project-media/img/project-wide-logo.png" alt="Trailer Paradise Logo" width="450">
<br>
<p>Your place to watch movie and series trailers.</p>

</div>

<h2>Table of Contents</h2>

- [About](#about)
- [Project Organization](#project-organization)
- [Front-end Documentation](#front-end-documentation)
- [Back-end Documentaion](#back-end-documentaion)
  - [Get all trailers objects](#get-all-trailers-objects)
    - [Example usage:](#example-usage)
  - [Get a specific trailer by its id](#get-a-specific-trailer-by-its-id)
    - [Example usage:](#example-usage-1)
  - [Search trailer objects by their titles](#search-trailer-objects-by-their-titles)
    - [Example usage:](#example-usage-2)
  - [Get a random trailer object](#get-a-random-trailer-object)
    - [Example usage:](#example-usage-3)
- [Hosting](#hosting)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [License](#license)

## About
This website is made using the MERN Stack, with React.ts and TailwindCSS for the front-end; And, Express.ts, along with Sass (used in the homepage route of the back-end server) and MongoDB for the back-end.


## Project Organization

The font-end part of the website, and anything related to it, is located inside the ``'client'`` folder. 

While the back-end part is found in the root folder. With the file ``'server.ts'`` being the main file which starts the server.

## Front-end Documentation

Coming soon.

## Back-end Documentaion

### Get all trailers objects

To query for all the trailer objects, go to: `/api/trailers`. By design, the server will return the trailer objects in a random order.

#### Example usage:

[https://trailer-paradise-api.onrender.com/api/trailers](https://trailer-paradise-api.onrender.com/api/trailers)

### Get a specific trailer by its id

If you want to query for a specific trailer object by its id, you can do it by going to: `/api/trailers/id/:trailerId`.

Simply change `:trailerId` with the id of the trailer object you are looking for.

#### Example usage:

[https://trailer-paradise-api.onrender.com/api/trailers/id/63422fd45747f23e88a1a1b0](https://trailer-paradise-api.onrender.com/api/trailers/id/63422fd45747f23e88a1a1b0)

### Search trailer objects by their titles

To query for trailer objects based on their titles, go to: `/api/trailers/:trailerTitle`.

Simply change `:trailerTitle` with the name of the trailer's titles you are trying to look for.

#### Example usage:

[https://trailer-paradise-api.onrender.com/api/trailers/minions](https://trailer-paradise-api.onrender.com/api/trailers/minions)

### Get a random trailer object

If you want to get a random trailer object, simply go to: `/api/trailers/id/random`.

#### Example usage:

[https://trailer-paradise-api.onrender.com/api/trailers/id/random](https://trailer-paradise-api.onrender.com/api/trailers/id/random)

---

## Hosting

Both the frontend and backend are hosted on [Render](https://render.com/).

### Frontend
The frontend part can be found at: [https://trailer-paradise.onrender.com/](https://trailer-paradise.onrender.com/).

### Backend
The backend part can be found at: [https://trailer-paradise-api.onrender.com](https://trailer-paradise-api.onrender.com).

## License

**Trailer Paradise**, both the _front-end_ and _back-end_ parts, was made with the intent of simply being a learning project, and it's licensed under the open source license [GPL-3.0-or-later](LICENSE). However, all of the trailers used are _**not**_ owned by _**me**_, but by their _**respective parties**_. 

To read more about the license, click [here](LICENSE).
