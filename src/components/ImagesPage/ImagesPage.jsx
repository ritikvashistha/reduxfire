import React, { useEffect, useState }from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
export default function ImagesPage() {
  const [value, setValue] = useState("");
  const [results,setResults] = useState([]);
  const [backimg,setBackimg] = useState([]);

  useEffect(() => {
    fetch(  "https://source.unsplash.com/random")
      // .then((res) => res.json())
      .then((res2) => setBackimg(res2.url));
  }, []);
const fetchimages = () =>{
  fetch(  `https://api.unsplash.com/search/photos/?client_id=FsHq1nTU1zMvQwi9cb5BmxfANog0Me-o3xhSljMkWTI&query=${value}&orientation=squarish`)
      .then((res) => res.json())
      .then((res2) =>
      //  console.log(res2);
      setResults(res2.results))
}
console.log(backimg)
   //console.log(datas);
  return (
    <DivWrapper>
       <Back img={backimg}>
      <h1  img={backimg}  >this is imagepage</h1>
      <div className="mydiv" >
       <span>Search</span>
      <input className="search"  type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button variant="contained" color="primary" onClick={()=> fetchimages()} > result </Button>
      </div>
      </Back>
    <div className='gallery' > 
    {
    results.map((item) => {
      return <img alt="images" className='item' key={item.id} src ={item.urls.regular} />
    }) 
    }


    </div>

    </DivWrapper>
  );
}

const DivWrapper = styled.div`
margin-top:48px;
text-transform:capitalize;
.head{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:20px;
  color: white;
  background-image: url(${props => props.img}) ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position:relative;
  
}
.mydiv{
  display:flex;
  justify-content: space-around;
  margin:10px 7%;
  box-shadow:1px 1px 5px grey;
  padding:10px;

  
 
  
  }
  .search{
    width:60%
    
  }
  .gallery{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
      }
  .item{
    width:33%;
  margin:5px 0px;
  }
`;
const Back = styled.div`
text-align: center;
  
  align-items: center;
  justify-content: center;
  font-size:20px;
  color: white;
  background-image: url(${props => props.img}) ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 60vh;
  position:relative;
  
`;