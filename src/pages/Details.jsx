import { useContext, useEffect, useState } from "react";
import { useParams} from "react-router";
import { ThemeContext } from "../context";

const Details = () => {
  const {color, backgroundColor} = useContext(ThemeContext);
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPost = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error("Error al obtener el post:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    
    fetchPost(id);
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Cargando...</p>;
    
  if (!post) return <p className="text-center text-red-500">No se encontró la publicación.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold" style={{color, backgroundColor}}>{post.title}</h1>
      <p className="mt-2">{post.body}</p>
      <a href="/product">Volver a la lista </a>
    </div>
  );
};

export {Details};
