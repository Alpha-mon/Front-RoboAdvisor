import { connectDB } from "@/src/util/database"

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
    console.log(result)

    return (
      <div className="list-bg">
        {
            result.map((a,i)=>{
                return(
                    <div className="list-item">
                    <h4>{result[i].title}</h4>
                    <p>{result[i].subtitle}</p>
                  </div>
                )
            })
        }
        {/* <div className="list-item">
          <h4>title data : 공격투자형</h4>
          <p>subtitle data: 사자</p>
        </div>
        <div className="list-item">
          <h4>적극투자형</h4>
          <p>뱀</p>
        </div>
        <div className="list-item">
          <h4>위험중립형</h4>
          <p>원숭이</p>
        </div>
        <div className="list-item">
          <h4>안정추구형</h4>
          <p>양</p>
        </div> */}
      </div>
    )
  } 