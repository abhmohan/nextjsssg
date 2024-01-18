export default function User({ user }) {
    return <div>{user.name}</div>
  }

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();
    return {
        props: { user }
  }
}


export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
    }));

    return { paths, fallback: false }
}