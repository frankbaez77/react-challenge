import { useState, useEffect } from "react";

export const Product = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");  //Implementacion del API consumida
      const data = await response.json();
      // console.log (data);
      setPosts(data);
    } catch (error) {
      console.error("Error al obtener los posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
   
    fetchPosts();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Cargando...</p>;

  return (
    <div className="w-full p-4">
      <h1 className="text-center font-bold mb-4">Lista de Publicaciones</h1>
      <ul className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-3 rounded-md shadow-md">
            <h2 className="font-semibold">{post.title}</h2>
            <a href={`/detail/${post.id}`} className="text-blue-500">Ver detalles</a>
            {/* <Link to={`/details/${post.id}`} className="text-blue-500">
              Ver detalles
            </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};