import { OMDB_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function POST({ request }: { request: any }) {
	const poem = await request.json();
	const poemTitle = poem.title;
	const poemPoster = "https://images.unsplash.com/photo-1675351085230-ab39b2289ff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=632&q=80"//"https://m.media-amazon.com/images/M/MV5BNjlkYjc4NGMtZjc3MS00NjQ3LTk4MmUtMTkwZGZjODE1ZDVlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
	const poemContent = poem.content;
	
	return new Response(JSON.stringify(
        { Title: poemTitle,
		  Poster: poemPoster,
		  Plot: poemContent}), 
        { status: 200 }); 
}
