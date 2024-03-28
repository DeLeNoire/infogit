import styles from './sharedlib.module.css';

/* eslint-disable-next-line */
export interface SharedlibProps {}

export function Sharedlib(props: SharedlibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Sharedlib!</h1>
    </div>
  );
}

export default Sharedlib;
