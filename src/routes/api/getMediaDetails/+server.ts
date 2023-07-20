import { OMDB_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function POST({ request }: { request: any }) {
	const { poem } = await request.json();
	console.log("🚀 ~ file: +server.ts:6 ~ POST ~ poem:", poem)
	// const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${title}`;

	// const res = await fetch(url);
	// const details = await res.json();
	
	const poemTitle = poem.title;
	console.log("🚀 ~ file: +server.ts:12 ~ POST ~ poemTitle:", poemTitle)
	const poemPoster = "https://m.media-amazon.com/images/M/MV5BNjlkYjc4NGMtZjc3MS00NjQ3LTk4MmUtMTkwZGZjODE1ZDVlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
	const poemContent = poem.content;
	console.log("🚀 ~ file: +server.ts:15 ~ POST ~ poemContent:", poemContent)

	
	return new Response(JSON.stringify(
        { Title: poemTitle,
		  Poster: poemPoster,
		  Plot: poemContent}), 
        { status: 200 }); 
}
