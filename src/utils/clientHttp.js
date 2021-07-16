const API = "https://api.themoviedb.org/3";

export function get(path) {
   return fetch(API + path, {
        headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzg5NGYxZGZmOGFhMzgyNjkxOTgyZTE0Nzk4Y2I0MCIsInN1YiI6IjYwZTcyNTNiYjc2Y2JiMDAyZDQ2ZWY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LMa0AiBrFmWw7fxWY8xr7DK34VrULyHYFRUlz3eptOw",
            "Content-Type": "application/json;charset=utf-8"
        },
    })
    .then((result) => result.json())
}