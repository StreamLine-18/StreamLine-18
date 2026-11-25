import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React and Anime.js.
      </p>
    </footer>
  );
}
