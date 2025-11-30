export const bio = `/**
* about-me:
* My name is Obinna Chidi, I am a software engineer
* with 5 years of experience in web development.
*
* I am passionate about creating high-quality
* software and solving complex problems.
*
* I am a quick learner and always eager to learn
* new technologies.
*
* I have experience in building web applications
* using React, Node.js, and TypeScript.
*
* I am a team player and have experience working
* in a team environment.
*
* I am a self-motivated person and always strive
* to improve my skills.
*
* I am looking for new opportunities to work on
* interesting projects and grow as a software
*
* Feel free to contact me if you have any questions
* or would like to work together.
*/`;

export const interests = `/**
* interests:
* I enjoy playing sports, reading books, and
* watching movies.
*
* I also enjoy traveling and exploring new places
* but that's a future plan because there's no
* financial capacity to do that now.
*
* I am a big fan of technology and always keep
* up to date with the latest trends.
*
* I am passionate about learning new things
* and expanding my knowledge.
*
* I am also interested in entrepreneurship and
* have plans to start my own business in the future.
*
* Feel free to reach out if you share any of these
* interests or would like to connect.
*/`;

export const education = `/**
* education:
* I have a Bachelor's degree in Computer Science
* from Coal City University, Enugu, Nigeria.
*
* I have a strong foundation in computer science
* and software engineering principles.
*
* I have also completed several online courses
* to further enhance my skills and knowledge.
*
* I am always looking for new opportunities to
* learn and grow as a software engineer.
*
* Feel free to contact me if you have any questions
*/`;

export const experience = `/**
* experience:
* I have 5 years of experience working as a
* software engineer.
*
* I have worked on a variety of projects ranging
* from small websites to large-scale web applications.
*
* I have experience working with React, Node.js,
* and TypeScript.
*
* I have also worked with databases such as MongoDB
* and MySQL.
*
* I have experience working in an Agile environment
* and collaborating with cross-functional teams.
*
* I am a quick learner and always eager to learn new
* technologies.
*
* I am looking for new opportunities to work on
* interesting projects and grow as a software engineer.
*
* Feel free to contact me if you have any questions
*/`;

export const hardSkills = `/**
* hard-skills:
* Programming Languages: JavaScript, TypeScript
* Frontend: React, Redux, HTML, CSS
* Backend: Node.js, Express, MongoDB
* Databases: MySQL, PostgreSQL
* Tools: Git, Webpack, Babel
* Testing: Jest, Enzyme
* BAAS: Firebase, AppWrite, Supabase
*
* I am always looking to expand my skill set and
* learn new technologies.
*
* Feel free to contact me if you have any questions
*/`;

export const softSkills = `/**
* soft-skills:
* Communication: I have excellent communication
* skills and can effectively communicate with
* team members and stakeholders.
*
* Problem Solving: I am a creative problem solver
* and can quickly identify and resolve issues.
*
* Teamwork: I am a team player and work well in
* a collaborative environment.
*
* Time Management: I am organized and can manage
* my time effectively to meet deadlines.
*
* Adaptability: I am adaptable and can quickly
* adjust to new situations and challenges.
*
* I am always looking to improve my soft skills
* and learn new ways to work effectively.
*
* Feel free to contact me if you have any questions
*/`;

export const sports = `/**
* sports:
* I'm a big fan of basketball and football.
*
* I like to play basketball with my friends
* on weekends.
* I also enjoy watching basketball and football
* games on TV.
*
* I find sports to be a great way to stay active
* and have fun.
*
* I'm always looking for new sports to try and
* new ways to stay active.
*
* Feel free to share your favorite sports with me
* and we can discuss them together.
*/`;

export const movies = `/**
* movies:
* I enjoy watching movies in my free time.
* I like to watch action, comedy, and sci-fi movies.
*
* I find movies to be a great way to relax and
* unwind after a long day.
*
* I also enjoy discussing movies with friends
* and sharing recommendations.
* I'm always looking for new movies to watch
* and new genres to explore.
*
* A few of my favorite movies and series are:
* - See
* - Dune
* - The Transporter
* - Black Panther
* - The Maze Runner
*
* Feel free to share your favorite movies with me
*/`;

export const music = (
  topTracks: ISpotifyTopTracksResponse,
  topArtists: ISpotifyTopArtistsResponse
) => {
  return `/**
* music:
* I enjoy listening to music at all times.
* I like to listen to a variety of genres
* including hip-hop, R&B, and pop.
*
* I have a diverse taste in music and enjoy
* discovering new artists and songs.
* My taste in music changes depending on my
* mood and the time of day.
*
* When I'm working, I like to listen to
* instrumental music(Lo-fi) to help me focus.
*
* When I'm relaxing, I like to listen to
* upbeat music to lift my spirits.
*
* Top Artists for the month:
${topArtists?.items.map((artist) => `* - ${artist.name}`).join("\n")}
*
* Top Tracks for the month:
${topTracks?.items
  .map((track) => `* - ${track.artists[0].name} - ${track.name}`)
  .join("\n")}
*
* Feel free to share your favorite music with me.
*/`;
};
