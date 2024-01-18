export default function Users({ users }) {
    return <div>{JSON.stringify(users)}</div>
  }

export async function getStaticProps() {
    console.log('index @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return {
        props: { users }
  }
}