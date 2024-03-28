"use client"
import styles from './page.module.css';
import { useEffect , useState } from 'react';

export default function Index() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/repos`)
    .then(resp => resp.json())
    .then(data => setRepos(data))
  }, []);
  return (
    <div className={styles.page}>
      <div id="welcome">
        <ul>
          {repos.map((repo: { name: string, description: string }) => (
            <li key={repo.name}>
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
