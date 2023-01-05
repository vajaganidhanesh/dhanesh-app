import useFetch from "../hooks/useFetch";

function CustomHook() {
  const { data,loading } = useFetch(`https://jsonplaceholder.typicode.com/posts`, {});
  console.log(data);

  if(loading){
    return <p>Loading please wait...</p>
  }
  return (
    <div>
      {data.map((posts,index)=>{
        return <p key={posts.id}>{posts.title}</p>
    })}
    </div>
  );
}

export default CustomHook;
